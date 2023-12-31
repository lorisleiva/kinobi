import type { IdlTypeStructField } from '../../idl';
import { InvalidKinobiTreeError, MainCaseString, mainCase } from '../../shared';
import { ValueNode } from '../valueNodes';
import { TypeNode, createTypeNodeFromIdl } from './TypeNode';

export type StructFieldTypeNode = {
  readonly kind: 'structFieldTypeNode';
  readonly name: MainCaseString;
  readonly child: TypeNode;
  readonly docs: string[];
  readonly defaultsTo: {
    strategy: 'optional' | 'omitted';
    value: ValueNode;
  } | null;
};

export type StructFieldTypeNodeInput = {
  readonly name: string;
  readonly child: TypeNode;
  readonly docs?: string[];
  readonly defaultsTo?: StructFieldTypeNode['defaultsTo'];
};

export function structFieldTypeNode(
  input: StructFieldTypeNodeInput
): StructFieldTypeNode {
  if (!input.name) {
    throw new InvalidKinobiTreeError('StructFieldTypeNode must have a name.');
  }
  return {
    kind: 'structFieldTypeNode',
    name: mainCase(input.name),
    child: input.child,
    docs: input.docs ?? [],
    defaultsTo: input.defaultsTo ?? null,
  };
}

export function structFieldTypeNodeFromIdl(
  idl: IdlTypeStructField
): StructFieldTypeNode {
  return structFieldTypeNode({
    name: idl.name ?? '',
    child: createTypeNodeFromIdl(idl.type),
    docs: idl.docs ?? [],
    defaultsTo: null,
  });
}
