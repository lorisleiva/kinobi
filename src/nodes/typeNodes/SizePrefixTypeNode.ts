import { ResolveNestedTypeNode } from './NestedTypeNode';
import { NumberTypeNode } from './NumberTypeNode';
import { TypeNode } from './TypeNode';

export interface SizePrefixTypeNode<
  TType extends TypeNode = TypeNode,
  TPrefix extends
    ResolveNestedTypeNode<NumberTypeNode> = ResolveNestedTypeNode<NumberTypeNode>,
> {
  readonly kind: 'sizePrefixTypeNode';

  // Children.
  readonly type: TType;
  readonly prefix: TPrefix;
}

export function sizePrefixTypeNode<
  TType extends TypeNode = TypeNode,
  TPrefix extends
    ResolveNestedTypeNode<NumberTypeNode> = ResolveNestedTypeNode<NumberTypeNode>,
>(type: TType, prefix: TPrefix): SizePrefixTypeNode<TType, TPrefix> {
  return { kind: 'sizePrefixTypeNode', type, prefix };
}
