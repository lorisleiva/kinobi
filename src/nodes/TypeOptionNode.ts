import type { IdlTypeOption } from '../idl';
import type { Visitable, Visitor } from '../visitors';
import { createTypeNodeFromIdl, TypeNode } from './TypeNode';
import type { Node } from './Node';

export type TypeOptionNodeMetadata = {
  idlType: 'option' | 'coption';
  prefix: TypeLeafNode; // TODO: Unsigned Number?
  fixed: boolean;
};

export class TypeOptionNode implements Visitable {
  readonly nodeClass = 'TypeOptionNode' as const;

  readonly metadata: TypeOptionNodeMetadata;

  readonly type: TypeNode;

  constructor(metadata: TypeOptionNodeMetadata, type: TypeNode) {
    this.metadata = metadata;
    this.type = type;
  }

  static fromIdl(idl: IdlTypeOption): TypeOptionNode {
    const optionType = 'option' in idl ? 'option' : 'coption';
    const idlType = 'option' in idl ? idl.option : idl.coption;
    return new TypeOptionNode(optionType, createTypeNodeFromIdl(idlType));
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitTypeOption(this);
  }
}

export function isTypeOptionNode(node: Node | null): node is TypeOptionNode {
  return !!node && node.nodeClass === 'TypeOptionNode';
}

export function assertTypeOptionNode(
  node: Node | null
): asserts node is TypeOptionNode {
  if (!isTypeOptionNode(node)) {
    throw new Error(
      `Expected TypeOptionNode, got ${node?.nodeClass ?? 'null'}.`
    );
  }
}
