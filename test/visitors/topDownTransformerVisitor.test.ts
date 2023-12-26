import test from 'ava';
import {
  assertTupleTypeNode,
  isNumberTypeNode,
  numberTypeNode,
  publicKeyTypeNode,
  topDownTransformerVisitor,
  tupleTypeNode,
  visit,
} from '../../src';

test('it can transform nodes to the same kind of node', (t) => {
  // Given the following tree.
  const node = tupleTypeNode([
    numberTypeNode('u32'),
    tupleTypeNode([numberTypeNode('u32'), publicKeyTypeNode()]),
  ]);

  // And a transformer visitor that transforms all number nodes into u64 number nodes.
  const visitor = topDownTransformerVisitor([
    (node) =>
      isNumberTypeNode(node) ? (numberTypeNode('u64') as typeof node) : node,
  ]);

  // When we visit the tree using that visitor.
  const result = visit(node, visitor);

  // Then we expect the number nodes to have been transformed into u64 number nodes.
  t.deepEqual(
    result,
    tupleTypeNode([
      numberTypeNode('u64'),
      tupleTypeNode([numberTypeNode('u64'), publicKeyTypeNode()]),
    ])
  );
});

test('it can transform nodes using node selectors', (t) => {
  // Given the following tree.
  const node = tupleTypeNode([
    numberTypeNode('u32'),
    tupleTypeNode([numberTypeNode('u32'), publicKeyTypeNode()]),
  ]);

  // And a transformer visitor that uses a node selector to select all number nodes.
  const visitor = topDownTransformerVisitor([
    {
      select: '[numberTypeNode]',
      transform: (node) => numberTypeNode('u64') as typeof node,
    },
  ]);

  // When we visit the tree using that visitor.
  const result = visit(node, visitor);

  // Then we expect the number nodes to have been transformed into u64 number nodes.
  t.deepEqual(
    result,
    tupleTypeNode([
      numberTypeNode('u64'),
      tupleTypeNode([numberTypeNode('u64'), publicKeyTypeNode()]),
    ])
  );
});

test('it can create partial transformer visitors', (t) => {
  // Given the following tree.
  const node = tupleTypeNode([
    numberTypeNode('u32'),
    tupleTypeNode([numberTypeNode('u32'), publicKeyTypeNode()]),
  ]);

  // And a tuple-only transformer visitor that prefixes all tuples with another number node.
  const visitor = topDownTransformerVisitor(
    [
      {
        select: '[tupleTypeNode]',
        transform: (node) => {
          assertTupleTypeNode(node);
          return tupleTypeNode([
            numberTypeNode('u64'),
            ...node.children,
          ]) as unknown as typeof node;
        },
      },
    ],
    { nodeKeys: ['tupleTypeNode'] }
  );

  // When we visit the tree using that visitor.
  const result = visit(node, visitor);

  // Then we expect the following tree.
  t.deepEqual(
    result,
    tupleTypeNode([
      numberTypeNode('u64'),
      numberTypeNode('u32'),
      tupleTypeNode([
        numberTypeNode('u64'),
        numberTypeNode('u32'),
        publicKeyTypeNode(),
      ]),
    ])
  );

  // And the other nodes cannot be visited.
  // @ts-expect-error
  t.throws(() => visit(numberTypeNode(), visitor));
  // @ts-expect-error
  t.throws(() => visit(publicKeyTypeNode(), visitor));
});

test('it can be used to delete nodes', (t) => {
  // Given the following tree.
  const node = tupleTypeNode([
    numberTypeNode('u32'),
    tupleTypeNode([numberTypeNode('u32'), publicKeyTypeNode()]),
  ]);

  // And a transformer visitor that deletes all number nodes.
  const visitor = topDownTransformerVisitor([
    { select: '[numberTypeNode]', transform: () => null },
  ]);

  // When we visit the tree using that visitor.
  const result = visit(node, visitor);

  // Then we expect the number nodes to have been deleted.
  t.deepEqual(result, tupleTypeNode([tupleTypeNode([publicKeyTypeNode()])]));
});
