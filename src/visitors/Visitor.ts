import { KinobiError, pascalCase } from '../shared';
import * as nodes from '../nodes';

export type Visitor<
  TReturn = void,
  TNodeKeys extends keyof nodes.RegisteredNodes = keyof nodes.RegisteredNodes
> = {
  [K in TNodeKeys as GetVisitorFunctionName<K>]: (
    node: nodes.RegisteredNodes[K]
  ) => TReturn;
};

export type GetVisitorFunctionName<T extends nodes.Node['kind']> =
  T extends `${infer TWithoutNode}Node`
    ? `visit${Capitalize<TWithoutNode>}`
    : never;

export function visit<T>(node: nodes.Node, visitor: Visitor<T>): T {
  return visitor[getVisitFunctionName(node.kind)](node as any);
}

export function getVisitFunctionName<T extends nodes.Node['kind']>(node: T) {
  if (!nodes.REGISTERED_NODES_KEYS.includes(node)) {
    throw new KinobiError(`Unrecognized node [${node}]`);
  }

  return `visit${pascalCase(node.slice(0, -4))}` as GetVisitorFunctionName<T>;
}

export function staticVisitor<
  TReturn,
  TNodeKeys extends keyof nodes.RegisteredNodes = keyof nodes.RegisteredNodes
>(
  fn: (node: nodes.Node) => TReturn,
  nodeKeys: TNodeKeys[] = nodes.REGISTERED_NODES_KEYS as TNodeKeys[]
): Visitor<TReturn, TNodeKeys> {
  const visitor = {} as Visitor<TReturn>;
  nodeKeys.forEach((key) => {
    visitor[getVisitFunctionName(key)] = fn;
  });
  return visitor;
}
