import test from 'ava';
import {
  definedTypeNode,
  enumEmptyVariantTypeNode,
  enumStructVariantTypeNode,
  enumTupleVariantTypeNode,
  enumTypeNode,
  numberTypeNode,
  stringTypeNode,
  structFieldTypeNode,
  structTypeNode,
  tupleTypeNode,
  visit,
} from '../../../../src';
import { getRenderMapVisitor } from '../../../../src/renderers/js-experimental/getRenderMapVisitor';
import { renderMapContains } from '../_setup';

// Given the following event discriminated union.
const eventTypeNode = definedTypeNode({
  name: 'event',
  type: enumTypeNode([
    enumEmptyVariantTypeNode('quit'),
    enumTupleVariantTypeNode('write', tupleTypeNode([stringTypeNode()])),
    enumStructVariantTypeNode(
      'move',
      structTypeNode([
        structFieldTypeNode({ name: 'x', type: numberTypeNode('u32') }),
        structFieldTypeNode({ name: 'y', type: numberTypeNode('u32') }),
      ])
    ),
  ]),
});

test('it exports discriminated union types', (t) => {
  // When we render a discriminated union.
  const renderMap = visit(eventTypeNode, getRenderMapVisitor());

  // Then we expect the following types to be exported.
  renderMapContains(t, renderMap, 'types/event.ts', [
    'export type Event =',
    "| { __kind: 'Quit' }",
    "| { __kind: 'Write'; fields: readonly [string] }",
    "| { __kind: 'Move'; x: number; y: number }",
  ]);
});

test('it exports discriminated union codecs', (t) => {
  // When we render a discriminated union.
  const renderMap = visit(eventTypeNode, getRenderMapVisitor());

  // Then we expect the following codec functions to be exported.
  renderMapContains(t, renderMap, 'types/event.ts', [
    'export function getEventEncoder(): Encoder< EventArgs >',
    'export function getEventDecoder(): Decoder< Event >',
    'export function getEventCodec(): Codec< EventArgs, Event >',
  ]);
});

test('it exports discriminated union helpers', (t) => {
  // When we render a discriminated union.
  const renderMap = visit(eventTypeNode, getRenderMapVisitor());

  // Then we expect the following helpers to be exported.
  renderMapContains(t, renderMap, 'types/event.ts', [
    "export function event( kind: 'Quit' ): GetDiscriminatedUnionVariant< EventArgs, '__kind', 'Quit' >;",
    "export function event( kind: 'Write', data: GetDiscriminatedUnionVariantContent< EventArgs, '__kind', 'Write' >[ 'fields' ] ): GetDiscriminatedUnionVariant< EventArgs, '__kind', 'Write' >;",
    "export function event( kind: 'Move', data: GetDiscriminatedUnionVariantContent< EventArgs, '__kind', 'Move' > ): GetDiscriminatedUnionVariant< EventArgs, '__kind', 'Move' >;",
    "export function isEvent< K extends Event['__kind'] >( kind: K, value: Event ): value is Event & { __kind: K }",
  ]);
});

test('it exports discriminated union with custom discriminator properties', (t) => {
  // When we render a discriminated union with a custom discriminator property.
  const renderMap = visit(
    eventTypeNode,
    getRenderMapVisitor({
      nameTransformers: { discriminatedUnionDiscriminator: () => `type` },
    })
  );

  // Then we expect the discriminator property to be used instead of __kind.
  renderMapContains(t, renderMap, 'types/event.ts', [
    "{ discriminator: 'type' }",
    "| { type: 'Quit' }",
    "| { type: 'Write'; fields: readonly [string] }",
    "| { type: 'Move'; x: number; y: number }",
    "export function event( kind: 'Quit' ): GetDiscriminatedUnionVariant< EventArgs, 'type', 'Quit' >;",
    "export function event( kind: 'Write', data: GetDiscriminatedUnionVariantContent< EventArgs, 'type', 'Write' >[ 'fields' ] ): GetDiscriminatedUnionVariant< EventArgs, 'type', 'Write' >;",
    "export function event( kind: 'Move', data: GetDiscriminatedUnionVariantContent< EventArgs, 'type', 'Move' > ): GetDiscriminatedUnionVariant< EventArgs, 'type', 'Move' >;",
    "export function isEvent< K extends Event['type'] >( kind: K, value: Event ): value is Event & { type: K }",
  ]);
});
