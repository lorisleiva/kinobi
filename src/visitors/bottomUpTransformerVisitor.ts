import { Node, RegisteredNodes } from '../nodes';
import { NodeSelector, NodeStack, getNodeSelectorFunction } from '../shared';
import { identityVisitor } from './identityVisitor';
import { interceptVisitor } from './interceptVisitor';
import { Visitor } from './visitor';

export type BottomUpNodeTransformer<TNode extends Node = Node> = (
  node: TNode,
  stack: NodeStack
) => Node | null;

export type BottomUpNodeTransformerWithSelector<TNode extends Node = Node> = {
  select: NodeSelector;
  transform: BottomUpNodeTransformer<TNode>;
};

export function bottomUpTransformerVisitor<
  TNodeKeys extends keyof RegisteredNodes = keyof RegisteredNodes
>(
  transformers: (
    | BottomUpNodeTransformer
    | BottomUpNodeTransformerWithSelector
  )[],
  nodeKeys?: TNodeKeys[]
): Visitor<Node | null, TNodeKeys> {
  const transformerFunctions = transformers.map(
    (transformer): BottomUpNodeTransformer =>
      typeof transformer === 'function'
        ? transformer
        : (node, stack) =>
            getNodeSelectorFunction(transformer.select)(node, stack)
              ? transformer.transform(node, stack)
              : node
  );

  const stack = new NodeStack();
  return interceptVisitor(identityVisitor(nodeKeys), (node, next) => {
    stack.push(node);
    const newNode = next(node);
    stack.pop();
    return transformerFunctions.reduce(
      (acc, transformer) =>
        acc === null ? null : transformer(acc, stack.clone()),
      newNode
    );
  });
}