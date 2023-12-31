import {
  DefinedTypeNodeInput,
  assertIsNode,
  definedTypeLinkNode,
  definedTypeNode,
  isNode,
} from '../nodes';
import { mainCase, renameEnumNode, renameStructNode } from '../shared';
import {
  BottomUpNodeTransformerWithSelector,
  bottomUpTransformerVisitor,
} from './bottomUpTransformerVisitor';

export type DefinedTypeUpdates =
  | { delete: true }
  | (Partial<Omit<DefinedTypeNodeInput, 'data'>> & {
      data?: Record<string, string>;
    });

export function updateDefinedTypesVisitor(
  map: Record<string, DefinedTypeUpdates>
) {
  return bottomUpTransformerVisitor(
    Object.entries(map).flatMap(
      ([selector, updates]): BottomUpNodeTransformerWithSelector[] => {
        const selectorStack = selector.split('.');
        const name = selectorStack.pop();
        const newName =
          typeof updates === 'object' && 'name' in updates && updates.name
            ? mainCase(updates.name)
            : undefined;

        const transforms: BottomUpNodeTransformerWithSelector[] = [
          {
            select: `${selectorStack.join('.')}.[definedTypeNode]${name}`,
            transform: (node) => {
              assertIsNode(node, 'definedTypeNode');
              if ('delete' in updates) {
                return null;
              }
              const { data: dataUpdates, ...otherUpdates } = updates;
              let newData = node.data;
              if (isNode(node.data, 'structTypeNode')) {
                newData = renameStructNode(node.data, dataUpdates ?? {});
              } else if (isNode(node.data, 'enumTypeNode')) {
                newData = renameEnumNode(node.data, dataUpdates ?? {});
              }
              return definedTypeNode({
                ...node,
                ...otherUpdates,
                name: newName ?? node.name,
                data: newData,
              });
            },
          },
        ];

        if (newName) {
          transforms.push({
            select: `[definedTypeLinkNode]${name}`,
            transform: (node) => {
              assertIsNode(node, 'definedTypeLinkNode');
              if (node.importFrom) return node;
              return definedTypeLinkNode(newName);
            },
          });
        }

        return transforms;
      }
    )
  );
}
