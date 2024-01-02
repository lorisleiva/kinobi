import {
  InstructionNode,
  ProgramNode,
  StructFieldTypeNode,
  isNode,
} from '../../../nodes';
import { pascalCase } from '../../../shared';
import {
  ResolvedInstructionAccount,
  ResolvedInstructionArgument,
  ResolvedInstructionInput,
} from '../../../visitors';
import { ImportMap } from '../ImportMap';
import { TypeManifest } from '../TypeManifest';
import { isAsyncDefaultValue } from '../asyncHelpers';
import type { GlobalFragmentScope } from '../getRenderMapVisitor';
import { Fragment, fragment, fragmentFromTemplate } from './common';

export function getInstructionInputTypeFragment(
  scope: Pick<GlobalFragmentScope, 'nameApi' | 'asyncResolvers'> & {
    instructionNode: InstructionNode;
    resolvedInputs: ResolvedInstructionInput[];
    renamedArgs: Map<string, string>;
    dataArgsManifest: TypeManifest;
    extraArgsManifest: TypeManifest;
    programNode: ProgramNode;
    withSigners: boolean;
    useAsync: boolean;
  }
): Fragment {
  const {
    instructionNode,
    resolvedInputs,
    renamedArgs,
    dataArgsManifest,
    extraArgsManifest,
    programNode,
    withSigners,
    asyncResolvers,
    useAsync,
    nameApi,
  } = scope;

  // Accounts.
  const accountImports = new ImportMap();
  const accounts = instructionNode.accounts.map((account) => {
    const typeParam = `TAccount${pascalCase(account.name)}`;
    const resolvedAccount = resolvedInputs.find(
      (input) =>
        input.kind === 'instructionAccountNode' && input.name === account.name
    ) as ResolvedInstructionAccount;
    const hasDefaultValue =
      !!resolvedAccount.defaultValue &&
      !isNode(resolvedAccount.defaultValue, [
        'identityValueNode',
        'payerValueNode',
      ]) &&
      (useAsync ||
        !isAsyncDefaultValue(resolvedAccount.defaultValue, asyncResolvers));
    const type = getAccountType(resolvedAccount, withSigners);
    accountImports.mergeWith(type);
    return {
      ...resolvedAccount,
      typeParam,
      optionalSign: hasDefaultValue || resolvedAccount.isOptional ? '?' : '',
      type: type.render,
    };
  });

  // Arg link imports.
  const argLinkImports = new ImportMap();
  if (instructionNode.dataArgs.link) {
    argLinkImports.mergeWith(dataArgsManifest.looseType);
  }
  if (instructionNode.extraArgs.link) {
    argLinkImports.mergeWith(extraArgsManifest.looseType);
  }

  // Arguments.
  const resolveArg = (arg: StructFieldTypeNode) => {
    const resolvedArg = resolvedInputs.find(
      (input) => input.kind === 'argument' && input.name === arg.name
    ) as ResolvedInstructionArgument | undefined;
    if (arg.defaultValue && arg.defaultValueStrategy === 'omitted') return [];
    const renamedName = renamedArgs.get(arg.name) ?? arg.name;
    const optionalSign = arg.defaultValue || resolvedArg ? '?' : '';
    return [
      {
        ...arg,
        ...resolvedArg,
        renamedName,
        optionalSign,
      },
    ];
  };
  const dataArgsType = instructionNode.dataArgs.link
    ? nameApi.dataArgsType(instructionNode.dataArgs.link.name)
    : nameApi.dataArgsType(instructionNode.dataArgs.name);
  const dataArgs = instructionNode.dataArgs.link
    ? []
    : instructionNode.dataArgs.struct.fields.flatMap(resolveArg);
  const extraArgsType = instructionNode.extraArgs.link
    ? nameApi.dataArgsType(instructionNode.extraArgs.link.name)
    : nameApi.dataArgsType(instructionNode.extraArgs.name);
  const extraArgs = instructionNode.extraArgs.link
    ? []
    : instructionNode.extraArgs.struct.fields.flatMap(resolveArg);

  const syncInputType = withSigners
    ? nameApi.instructionSyncInputWithSignersType(instructionNode.name)
    : nameApi.instructionSyncInputType(instructionNode.name);
  const asyncInputType = withSigners
    ? nameApi.instructionAsyncInputWithSignersType(instructionNode.name)
    : nameApi.instructionAsyncInputType(instructionNode.name);
  const instructionInputType = useAsync ? asyncInputType : syncInputType;

  return fragmentFromTemplate('instructionInputType.njk', {
    instruction: instructionNode,
    program: programNode,
    instructionInputType,
    accounts,
    dataArgs,
    dataArgsType,
    extraArgs,
    extraArgsType,
  })
    .mergeImportsWith(accountImports, argLinkImports)
    .addImports('solanaAddresses', ['Address']);
}

function getAccountType(
  account: ResolvedInstructionAccount,
  withSigners: boolean
): Fragment {
  const typeParam = `TAccount${pascalCase(account.name)}`;

  if (withSigners) {
    if (account.isPda && account.isSigner === false) {
      return fragment(`ProgramDerivedAddress<${typeParam}>`).addImports(
        'solanaAddresses',
        ['ProgramDerivedAddress']
      );
    }

    if (account.isPda && account.isSigner === 'either') {
      return fragment(
        `ProgramDerivedAddress<${typeParam}> | TransactionSigner<${typeParam}>`
      )
        .addImports('solanaAddresses', ['ProgramDerivedAddress'])
        .addImports('solanaSigners', ['TransactionSigner']);
    }

    if (account.isSigner === 'either') {
      return fragment(`Address<${typeParam}> | TransactionSigner<${typeParam}>`)
        .addImports('solanaAddresses', ['Address'])
        .addImports('solanaSigners', ['TransactionSigner']);
    }

    if (account.isSigner) {
      return fragment(`TransactionSigner<${typeParam}>`).addImports(
        'solanaSigners',
        ['TransactionSigner']
      );
    }
  }

  if (!withSigners && account.isPda) {
    return fragment(`ProgramDerivedAddress<${typeParam}>`).addImports(
      'solanaAddresses',
      ['ProgramDerivedAddress']
    );
  }

  return fragment(`Address<${typeParam}>`).addImports('solanaAddresses', [
    'Address',
  ]);
}
