import * as nodes from '../../nodes';
import { BaseNodeVisitor } from '../BaseNodeVisitor';

export class TransformU8ArraysToBytesVisitor extends BaseNodeVisitor {
  constructor(readonly sizes: number[] | '*' = [32, 64]) {
    super();
  }

  visitTypeArray(typeArray: nodes.TypeArrayNode): nodes.Node {
    const type = typeArray.itemType.accept(this);
    nodes.assertTypeNode(type);

    if (
      nodes.isTypeLeafNode(type) &&
      type.isNumber() &&
      type.leaf.number === 'u8' &&
      this.hasRequiredSize(typeArray.size)
    ) {
      return nodes.TypeLeafNode.fromIdl('bytes');
    }

    return new nodes.TypeArrayNode(type, typeArray.size);
  }

  protected hasRequiredSize(size: number): boolean {
    return this.sizes === '*' || this.sizes.includes(size);
  }
}
