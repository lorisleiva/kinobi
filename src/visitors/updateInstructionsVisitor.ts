import {
  InstructionAccountNode,
  InstructionAccountNodeInput,
  InstructionArgumentNode,
  InstructionInputValueNode,
  InstructionNode,
  InstructionNodeInput,
  TYPE_NODES,
  TypeNode,
  addDefaultSeedValuesFromPdaWhenMissing,
  assertIsNode,
  instructionAccountNode,
  instructionArgumentNode,
  instructionNode,
  isNode,
} from '../nodes';
import { LinkableDictionary, MainCaseString, mainCase, pipe } from '../shared';
import {
  BottomUpNodeTransformerWithSelector,
  bottomUpTransformerVisitor,
} from './bottomUpTransformerVisitor';
import { recordLinkablesVisitor } from './recordLinkablesVisitor';

export type InstructionUpdates =
  | { delete: true }
  | (InstructionMetadataUpdates & {
      accounts?: InstructionAccountUpdates;
      args?: InstructionArgUpdates;
    });

export type InstructionMetadataUpdates = Partial<
  Omit<
    InstructionNodeInput,
    'accounts' | 'dataArgs' | 'extraArgs' | 'subInstructions' | 'argDefaults'
  >
>;

export type InstructionAccountUpdates = Record<
  string,
  Partial<Omit<InstructionAccountNodeInput, 'defaultValue'>> & {
    defaultValue?: InstructionInputValueNode | null;
  }
>;

export type InstructionArgUpdates = Record<
  string,
  {
    name?: string;
    docs?: string[];
    type?: TypeNode;
    defaultValue?: InstructionInputValueNode | null;
  }
>;

export function updateInstructionsVisitor(
  map: Record<string, InstructionUpdates>
) {
  const linkables = new LinkableDictionary();

  const transformers = Object.entries(map).map(
    ([selector, updates]): BottomUpNodeTransformerWithSelector => {
      const selectorStack = selector.split('.');
      const name = selectorStack.pop();
      return {
        select: `${selectorStack.join('.')}.[instructionNode]${name}`,
        transform: (node) => {
          assertIsNode(node, 'instructionNode');
          if ('delete' in updates) {
            return null;
          }

          const {
            accounts: accountUpdates,
            args: argsUpdates,
            ...metadataUpdates
          } = updates;
          const newName = mainCase(updates.name ?? node.name);
          const { newArguments, newExtraArguments, newArgDefaults } =
            handleInstructionArgs(node, newName, argsUpdates ?? {});
          const newAccounts = node.accounts.map((account) =>
            handleInstructionAccount(account, accountUpdates ?? {}, linkables)
          );
          return instructionNode({
            ...node,
            ...metadataUpdates,
            argDefaults: newArgDefaults,
            accounts: newAccounts,
            arguments: newArguments,
            extraArguments:
              newExtraArguments.length > 0 ? newExtraArguments : undefined,
          });
        },
      };
    }
  );

  return pipe(bottomUpTransformerVisitor(transformers), (v) =>
    recordLinkablesVisitor(v, linkables)
  );
}

function handleInstructionAccount(
  account: InstructionAccountNode,
  accountUpdates: InstructionAccountUpdates,
  linkables: LinkableDictionary
): InstructionAccountNode {
  const accountUpdate = accountUpdates?.[account.name];
  if (!accountUpdate) return account;
  const { defaultValue, ...acountWithoutDefault } = {
    ...account,
    ...accountUpdate,
  };

  if (defaultValue === null) {
    return instructionAccountNode(acountWithoutDefault);
  }

  if (isNode(defaultValue, 'pdaValueNode')) {
    const foundPda = linkables.get(defaultValue.pda);
    return {
      ...acountWithoutDefault,
      name: mainCase(acountWithoutDefault.name),
      defaultValue: {
        ...defaultValue,
        seeds: foundPda
          ? addDefaultSeedValuesFromPdaWhenMissing(foundPda, defaultValue.seeds)
          : defaultValue.seeds,
      },
    };
  }

  return instructionAccountNode({ ...acountWithoutDefault, defaultValue });
}

function handleInstructionArgs(
  instruction: InstructionNode,
  newInstructionName: string,
  argUpdates: InstructionArgUpdates
): {
  newArguments: InstructionArgumentNode[];
  newExtraArguments: InstructionArgumentNode[];
  newArgDefaults: Record<string, InstructionInputValueNode>;
} {
  const usedArgs = new Set<string>();

  const newArguments = instruction.arguments.map((node) => {
    const argUpdate = argUpdates[node.name];
    if (!argUpdate) return node;
    usedArgs.add(node.name);
    return instructionArgumentNode({
      ...node,
      type: argUpdate.type ?? node.type,
      name: argUpdate.name ?? node.name,
      docs: argUpdate.docs ?? node.docs,
    });
  });

  const updatedExtraArguments = (instruction.extraArguments ?? []).map(
    (node) => {
      if (usedArgs.has(node.name)) return node;
      const argUpdate = argUpdates[node.name];
      if (!argUpdate) return node;
      usedArgs.add(node.name);
      return instructionArgumentNode({
        ...node,
        type: argUpdate.type ?? node.type,
        name: argUpdate.name ?? node.name,
        docs: argUpdate.docs ?? node.docs,
      });
    }
  );

  const newExtraArguments = [
    ...updatedExtraArguments,
    ...Object.entries(argUpdates)
      .filter(([argName]) => !usedArgs.has(argName))
      .map(([argName, argUpdate]) => {
        const { type } = argUpdate;
        assertIsNode(type, TYPE_NODES);
        return instructionArgumentNode({
          name: argUpdate.name ?? argName,
          type,
          docs: argUpdate.docs ?? [],
        });
      }),
  ];

  const newArgDefaults = instruction.argDefaults;
  Object.entries(argUpdates).forEach(([argName, argUpdate]) => {
    if (argUpdate?.defaultValue === undefined) return;
    if (argUpdate.defaultValue === null) {
      delete newArgDefaults[argName as MainCaseString];
    } else {
      newArgDefaults[argName as MainCaseString] = argUpdate.defaultValue;
    }
  });

  return { newArguments, newExtraArguments, newArgDefaults };
}
