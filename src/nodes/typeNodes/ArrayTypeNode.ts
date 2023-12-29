import type { IdlTypeArray, IdlTypeVec } from '../../idl';
import type { Node } from '../Node';
import {
  SizeNode,
  fixedSizeNode,
  prefixedSizeNode,
  remainderSizeNode,
} from '../sizeNodes';
import { numberTypeNode } from './NumberTypeNode';
import { TypeNode, createTypeNodeFromIdl } from './TypeNode';

export type ArrayTypeNode = {
  readonly kind: 'arrayTypeNode';
  readonly child: TypeNode;
  readonly size: SizeNode;
};

export function arrayTypeNode(
  child: TypeNode,
  options: {
    readonly size?: ArrayTypeNode['size'];
  } = {}
): ArrayTypeNode {
  return {
    kind: 'arrayTypeNode',
    child,
    size: options.size ?? prefixedSizeNode(numberTypeNode('u32')),
  };
}

export function arrayTypeNodeFromIdl(
  idl: IdlTypeArray | IdlTypeVec
): ArrayTypeNode {
  if ('array' in idl) {
    const child = createTypeNodeFromIdl(idl.array[0]);
    return arrayTypeNode(child, { size: fixedSizeNode(idl.array[1]) });
  }

  const child = createTypeNodeFromIdl(idl.vec);
  if (!idl.size) return arrayTypeNode(child);
  if (idl.size === 'remainder') {
    return arrayTypeNode(child, { size: remainderSizeNode() });
  }
  return arrayTypeNode(child, {
    size: prefixedSizeNode(numberTypeNode(idl.size)),
  });
}

export function isArrayTypeNode(node: Node | null): node is ArrayTypeNode {
  return !!node && node.kind === 'arrayTypeNode';
}

export function assertArrayTypeNode(
  node: Node | null
): asserts node is ArrayTypeNode {
  if (!isArrayTypeNode(node)) {
    throw new Error(`Expected arrayTypeNode, got ${node?.kind ?? 'null'}.`);
  }
}
