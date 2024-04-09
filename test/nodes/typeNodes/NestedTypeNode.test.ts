import test from 'ava';
import {
  fixedSizeTypeNode,
  isNestedTypeNode,
  numberTypeNode,
  publicKeyTypeNode,
  resolveNestedTypeNode,
  sizePrefixTypeNode,
  stringTypeNode,
  transformNestedTypeNode,
} from '../../../src';

test('it resolved nested type nodes', (t) => {
  const node = sizePrefixTypeNode(
    fixedSizeTypeNode(stringTypeNode(), 32),
    numberTypeNode('u8')
  );
  t.deepEqual(resolveNestedTypeNode(node), stringTypeNode());
});

test('it returns the same instance when resolving nested types nodes', (t) => {
  const node = numberTypeNode('u8');
  t.is(resolveNestedTypeNode(node), node);
});

test('it transforms nested type nodes', (t) => {
  const node = sizePrefixTypeNode(
    fixedSizeTypeNode(stringTypeNode(), 32),
    numberTypeNode('u8')
  );
  const transformedNode = transformNestedTypeNode(node, () =>
    publicKeyTypeNode()
  );
  t.deepEqual(
    transformedNode,
    sizePrefixTypeNode(
      fixedSizeTypeNode(publicKeyTypeNode(), 32),
      numberTypeNode('u8')
    )
  );
});

test('it checks if a node is a nested type', (t) => {
  const flatNode = numberTypeNode('u64');
  t.true(isNestedTypeNode(flatNode, 'numberTypeNode'));
  t.false(isNestedTypeNode(flatNode, 'stringTypeNode'));

  const nestedNode = sizePrefixTypeNode(
    fixedSizeTypeNode(numberTypeNode('u64'), 32),
    numberTypeNode('u8')
  );
  t.true(isNestedTypeNode(nestedNode, 'numberTypeNode'));
  t.false(isNestedTypeNode(nestedNode, 'stringTypeNode'));
});
