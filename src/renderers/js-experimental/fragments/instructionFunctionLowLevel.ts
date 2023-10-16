import * as nodes from '../../../nodes';
import { pascalCase } from '../../../shared';
import { Fragment, fragmentFromTemplate, mergeFragments } from './common';
import { getInstructionAccountTypeParamFragment } from './instructionAccountTypeParam';

export function getInstructionFunctionLowLevelFragment(
  instructionNode: nodes.InstructionNodeInput,
  programNode: nodes.ProgramNode
): Fragment {
  const hasAccounts = instructionNode.accounts.length > 0;
  const hasData =
    !!instructionNode.dataArgs.link ||
    instructionNode.dataArgs.struct.fields.length > 0;
  const hasArgs =
    !!instructionNode.dataArgs.link ||
    instructionNode.dataArgs.struct.fields.filter(
      (field) => field.defaultsTo?.strategy !== 'omitted'
    ).length > 0;
  const dataType = instructionNode.dataArgs.link
    ? pascalCase(instructionNode.dataArgs.link.name)
    : pascalCase(instructionNode.dataArgs.name);
  const argsType = `${dataType}Args`;
  const encoderFunction = `get${dataType}Encoder`;
  const accountTypeParamsFragment = mergeFragments(
    instructionNode.accounts.map((account) =>
      getInstructionAccountTypeParamFragment(account, programNode)
    ),
    (renders) => renders.join(', ')
  );

  return fragmentFromTemplate('instructionFunctionLowLevel.njk', {
    instruction: instructionNode,
    program: programNode,
    hasAccounts,
    hasData,
    hasArgs,
    argsType,
    encoderFunction,
    accountTypeParams: accountTypeParamsFragment.render,
  })
    .mergeImportsWith(accountTypeParamsFragment)
    .addImports('shared', ['accountMetaWithDefault'])
    .addImports('solanaAddresses', ['Base58EncodedAddress'])
    .addImports('solanaInstructions', [
      ...(hasAccounts ? ['AccountRole'] : []),
    ]);
}
