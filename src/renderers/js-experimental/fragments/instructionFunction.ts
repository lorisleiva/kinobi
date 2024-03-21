import { InstructionNode, ProgramNode } from '../../../nodes';
import { camelCase, pascalCase } from '../../../shared';
import { ResolvedInstructionInput } from '../../../visitors';
import { TypeManifest } from '../TypeManifest';
import { hasAsyncFunction } from '../asyncHelpers';
import type { GlobalFragmentScope } from '../getRenderMapVisitor';
import { NameApi } from '../nameTransformers';
import {
  Fragment,
  fragment,
  fragmentFromTemplate,
  mergeFragments,
} from './common';
import { getInstructionByteDeltaFragment } from './instructionByteDelta';
import { getInstructionInputResolvedFragment } from './instructionInputResolved';
import { getInstructionInputTypeFragment } from './instructionInputType';
import { getInstructionRemainingAccountsFragment } from './instructionRemainingAccounts';

export function getInstructionFunctionFragment(
  scope: Pick<
    GlobalFragmentScope,
    'nameApi' | 'asyncResolvers' | 'valueNodeVisitor' | 'customInstructionData'
  > & {
    instructionNode: InstructionNode;
    programNode: ProgramNode;
    renamedArgs: Map<string, string>;
    dataArgsManifest: TypeManifest;
    extraArgsManifest: TypeManifest;
    resolvedInputs: ResolvedInstructionInput[];
    useAsync: boolean;
  }
): Fragment {
  const {
    useAsync,
    instructionNode,
    programNode,
    resolvedInputs,
    renamedArgs,
    dataArgsManifest,
    asyncResolvers,
    nameApi,
    customInstructionData,
  } = scope;
  if (
    useAsync &&
    !hasAsyncFunction(instructionNode, resolvedInputs, asyncResolvers)
  ) {
    return fragment('');
  }

  const customData = customInstructionData.get(instructionNode.name);
  const hasAccounts = instructionNode.accounts.length > 0;
  const hasLegacyOptionalAccounts =
    instructionNode.optionalAccountStrategy === 'omitted' &&
    instructionNode.accounts.some((account) => account.isOptional);
  const hasData = !!customData || instructionNode.arguments.length > 0;
  const hasDataArgs =
    !!customData ||
    instructionNode.arguments.filter(
      (field) => !field.defaultValue || field.defaultValueStrategy !== 'omitted'
    ).length > 0;
  const hasExtraArgs =
    (instructionNode.extraArguments ?? []).filter(
      (field) => !field.defaultValue || field.defaultValueStrategy !== 'omitted'
    ).length > 0;
  const hasAnyArgs = hasDataArgs || hasExtraArgs;
  const instructionDataName = nameApi.instructionDataType(instructionNode.name);
  const programAddressConstant = nameApi.programAddressConstant(
    programNode.name
  );
  const encoderFunction = customData
    ? dataArgsManifest.encoder.render
    : `${nameApi.encoderFunction(instructionDataName)}()`;
  const argsTypeFragment = fragment(
    customData
      ? dataArgsManifest.looseType.render
      : nameApi.dataArgsType(instructionDataName)
  );
  if (customData) {
    argsTypeFragment.mergeImportsWith(
      dataArgsManifest.looseType,
      dataArgsManifest.encoder
    );
  }

  const functionName = useAsync
    ? nameApi.instructionAsyncFunction(instructionNode.name)
    : nameApi.instructionSyncFunction(instructionNode.name);

  const typeParamsFragment = getTypeParams(instructionNode);
  const instructionTypeFragment = getInstructionType(scope);

  // Input.
  const inputTypeFragment = getInstructionInputTypeFragment(scope);
  const inputTypeCallFragment = getInputTypeCall(scope);
  const renamedArgsText = [...renamedArgs.entries()]
    .map(([k, v]) => `${k}: input.${v}`)
    .join(', ');

  const resolvedInputsFragment = getInstructionInputResolvedFragment(scope);
  const remainingAccountsFragment =
    getInstructionRemainingAccountsFragment(scope);
  const byteDeltaFragment = getInstructionByteDeltaFragment(scope);
  const resolvedFragment = mergeFragments(
    [resolvedInputsFragment, remainingAccountsFragment, byteDeltaFragment],
    (renders) => renders.join('\n\n')
  );
  const hasRemainingAccounts = remainingAccountsFragment.render !== '';
  const hasByteDeltas = byteDeltaFragment.render !== '';
  const hasResolver = resolvedFragment.hasFeatures(
    'instruction:resolverScopeVariable'
  );
  const getReturnType = (instructionType: string) => {
    let returnType = instructionType;
    if (hasByteDeltas) {
      returnType = `${returnType} & IInstructionWithByteDelta`;
    }
    return useAsync ? `Promise<${returnType}>` : returnType;
  };

  const functionFragment = fragmentFromTemplate('instructionFunction.njk', {
    instruction: instructionNode,
    programAddressConstant,
    hasAccounts,
    hasLegacyOptionalAccounts,
    hasData,
    hasDataArgs,
    hasExtraArgs,
    hasAnyArgs,
    encoderFunction,
    argsTypeFragment,
    functionName,
    typeParamsFragment,
    instructionTypeFragment,
    inputTypeFragment,
    inputTypeCallFragment,
    renamedArgs: renamedArgsText,
    resolvedFragment,
    hasRemainingAccounts,
    hasByteDeltas,
    hasResolver,
    useAsync,
    getReturnType,
  })
    .mergeImportsWith(
      typeParamsFragment,
      instructionTypeFragment,
      inputTypeFragment,
      inputTypeCallFragment,
      resolvedFragment,
      argsTypeFragment
    )
    .addImports('generatedPrograms', [programAddressConstant])
    .addImports('solanaAddresses', ['Address']);

  if (hasAccounts) {
    functionFragment
      .addImports('solanaInstructions', ['IAccountMeta'])
      .addImports('shared', ['getAccountMetaFactory', 'ResolvedAccount']);
  }

  if (hasByteDeltas) {
    functionFragment.addImports('shared', ['IInstructionWithByteDelta']);
  }

  return functionFragment;
}

function getTypeParams(instructionNode: InstructionNode): Fragment {
  const typeParams = instructionNode.accounts.map(
    (account) => `TAccount${pascalCase(account.name)} extends string`
  );
  return fragment(typeParams.filter((x) => !!x).join(', '));
}

function getInstructionType(scope: {
  instructionNode: InstructionNode;
  programNode: ProgramNode;
  nameApi: NameApi;
}): Fragment {
  const { instructionNode, programNode, nameApi } = scope;
  const instructionTypeName = nameApi.instructionType(instructionNode.name);
  const programAddressConstant = nameApi.programAddressConstant(
    programNode.name
  );
  const programAddressFragment = fragment(
    `typeof ${programAddressConstant}`
  ).addImports('generatedPrograms', [programAddressConstant]);
  const accountTypeParamsFragments = instructionNode.accounts.map((account) => {
    const typeParam = `TAccount${pascalCase(account.name)}`;
    const camelName = camelCase(account.name);

    if (account.isSigner === 'either') {
      const signerRole = account.isWritable
        ? 'WritableSignerAccount'
        : 'ReadonlySignerAccount';
      return fragment(
        `typeof input["${camelName}"] extends TransactionSigner<${typeParam}> ` +
          `? ${signerRole}<${typeParam}> & IAccountSignerMeta<${typeParam}> ` +
          `: ${typeParam}`
      )
        .addImports('solanaInstructions', [signerRole])
        .addImports('solanaSigners', ['IAccountSignerMeta']);
    }

    return fragment(typeParam);
  });

  return mergeFragments(
    [programAddressFragment, ...accountTypeParamsFragments],
    (renders) => renders.join(', ')
  ).mapRender((r) => `${instructionTypeName}<${r}>`);
}

function getInputTypeCall(scope: {
  instructionNode: InstructionNode;
  useAsync: boolean;
  nameApi: NameApi;
}): Fragment {
  const { instructionNode, useAsync, nameApi } = scope;
  const inputTypeName = useAsync
    ? nameApi.instructionAsyncInputType(instructionNode.name)
    : nameApi.instructionSyncInputType(instructionNode.name);
  if (instructionNode.accounts.length === 0) return fragment(inputTypeName);
  const accountTypeParams = instructionNode.accounts
    .map((account) => `TAccount${pascalCase(account.name)}`)
    .join(', ');

  return fragment(`${inputTypeName}<${accountTypeParams}>`);
}
