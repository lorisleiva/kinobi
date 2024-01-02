import { NodeKind } from '../nodes';
import { NodeStack } from '../shared';
import { interceptVisitor } from './interceptVisitor';
import { Visitor } from './visitor';

export function recordNodeStackVisitor<TReturn, TNodeKind extends NodeKind>(
  visitor: Visitor<TReturn, TNodeKind>,
  stack: NodeStack
): Visitor<TReturn, TNodeKind> {
  return interceptVisitor(visitor, (node, next) => {
    stack.push(node);
    const newNode = next(node);
    stack.pop();
    return newNode;
  });
}
