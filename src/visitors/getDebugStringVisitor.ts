import { Node } from '../nodes';
import { Visitor } from './Visitor';
import { MergeVisitorInterceptor, mergeVisitor } from './mergeVisitor';

export function getDebugStringVisitor(
  options: { indent?: boolean; indentSeparator?: string } = {}
): Visitor<string> {
  const indent = options.indent ?? false;
  const indentSeparator = options.indentSeparator ?? '|   ';
  let stackLevel = -1;
  const intercept: MergeVisitorInterceptor<string> = (fn) => (node) => {
    stackLevel += 1;
    const newNode = fn(node);
    stackLevel -= 1;
    return newNode;
  };

  const visitor = mergeVisitor<string>(
    (node) => {
      const details = getNodeDetails(node);
      if (indent) {
        return `${indentSeparator.repeat(stackLevel)}${node.kind}${
          details ? ` [${details}]` : ''
        }`;
      }
      return `${node.kind}${details ? `[${details}]` : ''}`;
    },
    (node, values) => {
      const details = getNodeDetails(node);
      if (indent) {
        return [
          `${indentSeparator.repeat(stackLevel)}${node.kind}${
            details ? ` [${details}]` : ''
          }`,
          ...values,
        ].join('\n');
      }
      return `${node.kind}${details ? `[${details}]` : ''}(${values.join(
        ', '
      )})`;
    },
    { intercept }
  );

  return visitor;
}

function getNodeDetails(node: Node): string {
  switch (node.kind) {
    case 'numberTypeNode':
      return `${node.format}${node.endian === 'be' ? '.be' : ''}`;
    case 'stringTypeNode':
      return `${node.encoding}.${node.size.kind}`;
    default:
      return 'name' in node ? node.name : '';
  }
}
