import * as nodes from '../../nodes';
import { mainCase } from '../../utils';
import { ImportFrom } from '../ImportFrom';
import { InstructionNodeAccountDefaultsInput } from './SetInstructionAccountDefaultValuesVisitor';
import {
  NodeTransform,
  NodeTransformer,
  TransformNodesVisitor,
} from './TransformNodesVisitor';
import { renameStructNode } from './_renameHelpers';

export type InstructionUpdates =
  | NodeTransformer<nodes.InstructionNode>
  | { delete: true }
  | (InstructionMetadataUpdates & {
      args?: Record<string, string>;
      extraArgs?: nodes.TypeStructNode | nodes.TypeDefinedLinkNode | null;
    });

export type InstructionMetadataUpdates = Partial<
  Omit<nodes.InstructionNodeMetadata, 'bytesCreatedOnChain'> & {
    bytesCreatedOnChain: InstructionNodeBytesCreatedOnChainInput | null;
    accounts: InstructionAccountUpdates;
  }
>;

export type InstructionAccountUpdates = Record<
  string,
  Partial<
    Omit<nodes.InstructionNodeAccount, 'defaultsTo'> & {
      defaultsTo: InstructionNodeAccountDefaultsInput;
    }
  >
>;

type InstructionNodeBytesCreatedOnChainInput =
  | { kind: 'number'; value: number; includeHeader?: boolean }
  | { kind: 'arg'; name: string; includeHeader?: boolean }
  | {
      kind: 'account';
      name: string;
      importFrom?: ImportFrom;
      includeHeader?: boolean;
    }
  | { kind: 'resolver'; name: string; importFrom?: ImportFrom };

export class UpdateInstructionsVisitor extends TransformNodesVisitor {
  protected allAccounts = new Map<string, nodes.AccountNode>();

  constructor(readonly map: Record<string, InstructionUpdates>) {
    const transforms = Object.entries(map).map(
      ([selector, updates]): NodeTransform => {
        const selectorStack = selector.split('.');
        const name = selectorStack.pop();
        return {
          selector: { type: 'InstructionNode', stack: selectorStack, name },
          transformer: (node, stack, program) => {
            nodes.assertInstructionNode(node);
            if (typeof updates === 'function') {
              return updates(node, stack, program);
            }
            if ('delete' in updates) {
              return null;
            }

            const {
              accounts: accountUpdates,
              extraArgs: extraArgsUpdates,
              ...metadataUpdates
            } = updates;
            const newName = mainCase(updates.name ?? node.name);
            const args = updates.args ?? {};
            const newMetadata = {
              ...node.metadata,
              ...this.handleMetadata(metadataUpdates),
            };
            const newAccounts = node.accounts.map((account) =>
              this.handleInstructionAccount(account, accountUpdates ?? {})
            );
            const newArgs = nodes.isTypeStructNode(node.args)
              ? renameStructNode(node.args, args, `${newName}InstructionData`)
              : node.args;
            const newExtraArgs =
              extraArgsUpdates === undefined
                ? node.extraArgs
                : extraArgsUpdates;

            return new nodes.InstructionNode(
              newMetadata,
              newAccounts,
              newArgs,
              newExtraArgs,
              node.subInstructions
            );
          },
        };
      }
    );

    super(transforms);
  }

  visitRoot(root: nodes.RootNode): nodes.Node | null {
    root.allAccounts.forEach((account) => {
      this.allAccounts.set(account.name, account);
    });
    return super.visitRoot(root);
  }

  handleMetadata(
    metadataUpdates: InstructionMetadataUpdates
  ): Partial<nodes.InstructionNodeMetadata> {
    const metadata = metadataUpdates as Partial<nodes.InstructionNodeMetadata>;
    if (metadataUpdates.bytesCreatedOnChain) {
      metadata.bytesCreatedOnChain = {
        includeHeader:
          metadataUpdates.bytesCreatedOnChain.kind === 'resolver'
            ? undefined
            : true,
        importFrom:
          metadataUpdates.bytesCreatedOnChain.kind === 'account'
            ? 'generated'
            : undefined,
        ...metadataUpdates.bytesCreatedOnChain,
      } as nodes.InstructionNodeBytesCreatedOnChain;
    }
    return metadata;
  }

  handleInstructionAccount(
    account: nodes.InstructionNodeAccount,
    accountUpdates: InstructionAccountUpdates
  ): nodes.InstructionNodeAccount {
    const accountUpdate = accountUpdates?.[account.name];

    if (accountUpdate?.defaultsTo?.kind === 'pda') {
      const pdaAccount = mainCase(
        accountUpdate?.defaultsTo?.pdaAccount ?? account.name
      );
      return {
        ...account,
        ...accountUpdate,
        defaultsTo: {
          pdaAccount,
          importFrom: 'generated',
          seeds:
            this.allAccounts.get(pdaAccount)?.instructionAccountDefaultSeeds ??
            {},
          ...accountUpdate?.defaultsTo,
        },
      };
    }

    return accountUpdate
      ? ({ ...account, ...accountUpdate } as nodes.InstructionNodeAccount)
      : account;
  }
}
