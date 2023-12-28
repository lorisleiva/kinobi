import * as nodes from '../../nodes';
import { MainCaseString, NodeStack } from '../../shared';
import { BaseThrowVisitor } from '../BaseThrowVisitor';
import { getDefinedTypeHistogramVisitor } from '../getDefinedTypeHistogramVisitor';
import { unwrapDefinedTypesVisitor } from '../unwrapDefinedTypesVisitor';
import { visit } from '../visitor';
import { TransformNodesVisitor } from './TransformNodesVisitor';

export class UnwrapTupleEnumWithSingleStructVisitor extends BaseThrowVisitor<nodes.RootNode> {
  constructor(readonly enumsOrVariantsToUnwrap: string[] | '*' = '*') {
    super();
    this.enumsOrVariantsToUnwrap = enumsOrVariantsToUnwrap;
  }

  shouldUnwrap(
    node: nodes.EnumTupleVariantTypeNode,
    stack: NodeStack
  ): boolean {
    const stackWithNode = stack.clone();
    stackWithNode.push(node);
    if (this.enumsOrVariantsToUnwrap === '*') return true;
    return this.enumsOrVariantsToUnwrap.some((selector) =>
      stackWithNode.matchesWithNames(selector.split('.'))
    );
  }

  visitRoot(root: nodes.RootNode): nodes.RootNode {
    const typesToPotentiallyUnwrap: string[] = [];
    const definedTypes: Map<string, nodes.DefinedTypeNode> = new Map();
    nodes.getAllDefinedTypes(root).forEach((definedType) => {
      definedTypes.set(definedType.name, definedType);
    });

    let newRoot = visit(
      root,
      new TransformNodesVisitor([
        {
          selector: '[enumTupleVariantTypeNode]',
          transformer: (node, stack) => {
            nodes.assertEnumTupleVariantTypeNode(node);
            if (!this.shouldUnwrap(node, stack)) return node;
            if (node.tuple.children.length !== 1) return node;
            let child = node.tuple.children[0];
            if (nodes.isLinkTypeNode(child)) {
              if (child.importFrom !== 'generated') return node;
              const definedType = definedTypes.get(child.name);
              if (!definedType) return node;
              if (!nodes.isStructTypeNode(definedType.data)) return node;
              typesToPotentiallyUnwrap.push(child.name);
              child = definedType.data;
            }
            if (!nodes.isStructTypeNode(child)) return node;
            return nodes.enumStructVariantTypeNode(node.name, child);
          },
        },
      ])
    );
    nodes.assertRootNode(newRoot);

    const histogram = visit(newRoot, getDefinedTypeHistogramVisitor());
    const typesToUnwrap = typesToPotentiallyUnwrap.filter(
      (type) =>
        !histogram[type as MainCaseString] ||
        histogram[type as MainCaseString].total === 0
    );

    newRoot = visit(newRoot, unwrapDefinedTypesVisitor(typesToUnwrap));
    nodes.assertRootNode(newRoot);

    return newRoot;
  }
}
