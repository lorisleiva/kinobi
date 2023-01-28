import { mainCase } from '../../utils';
import { logWarn } from '../../logs';
import * as nodes from '../../nodes';
import { NodeTransform, TransformNodesVisitor } from './TransformNodesVisitor';
import { unwrapStruct } from './UnwrapStructVisitor';

export class CreateSubInstructionsFromEnumArgsVisitor extends TransformNodesVisitor {
  protected allDefinedTypes = new Map<string, nodes.DefinedTypeNode>();

  constructor(readonly map: Record<string, string>) {
    const transforms = Object.entries(map).map(
      ([selector, argName]): NodeTransform => {
        const selectorStack = selector.split('.');
        const name = selectorStack.pop();
        return {
          selector: { type: 'instruction', stack: selectorStack, name },
          transformer: (node) => {
            nodes.assertInstructionNode(node);
            const argFieldIndex = node.args.fields.findIndex(
              (field) => field.name === argName
            );
            const argField =
              argFieldIndex >= 0 ? node.args.fields[argFieldIndex] : null;
            if (!argField) {
              logWarn(`Could not find instruction argument [${argName}].`);
              return node;
            }

            let argType: nodes.TypeEnumNode;
            if (nodes.isTypeEnumNode(argField.type)) {
              argType = argField.type;
            } else if (
              nodes.isTypeDefinedLinkNode(argField.type) &&
              this.allDefinedTypes.has(argField.type.name)
            ) {
              const linkedType =
                this.allDefinedTypes.get(argField.type.name)?.type ?? null;
              nodes.assertTypeEnumNode(linkedType);
              argType = linkedType;
            } else {
              logWarn(
                `Could not find an enum type for ` +
                  `instruction argument [${argName}].`
              );
              return node;
            }

            const subInstructions = argType.variants.map(
              (variant): nodes.InstructionNode => {
                const subName = mainCase(`${node.name} ${variant.name}`);
                const subFields = node.args.fields.slice(0, argFieldIndex);
                if (nodes.isTypeEnumStructVariantNode(variant)) {
                  subFields.push(
                    new nodes.TypeStructFieldNode(
                      argField.metadata,
                      variant.struct
                    )
                  );
                } else if (nodes.isTypeEnumTupleVariantNode(variant)) {
                  subFields.push(
                    new nodes.TypeStructFieldNode(
                      argField.metadata,
                      variant.tuple
                    )
                  );
                }
                subFields.push(...node.args.fields.slice(argFieldIndex + 1));

                return new nodes.InstructionNode(
                  { ...node.metadata, name: subName },
                  node.accounts,
                  unwrapStruct(
                    new nodes.TypeStructNode(
                      `${subName}InstructionArgs`,
                      subFields
                    )
                  ),
                  []
                );
              }
            );

            return new nodes.InstructionNode(
              node.metadata,
              node.accounts,
              node.args,
              [...node.subInstructions, ...subInstructions]
            );
          },
        };
      }
    );

    super(transforms);
  }

  visitRoot(root: nodes.RootNode): nodes.Node | null {
    root.allDefinedTypes.forEach((type) => {
      this.allDefinedTypes.set(type.name, type);
    });
    return super.visitRoot(root);
  }
}
