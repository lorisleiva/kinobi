/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, map, struct } from '@metaplex-foundation/umi/serializers';
import {
  PayloadKey,
  PayloadKeyArgs,
  PayloadType,
  PayloadTypeArgs,
  getPayloadKeySerializer,
  getPayloadTypeSerializer,
} from '.';

export type Payload = { map: Map<PayloadKey, PayloadType> };

export type PayloadArgs = { map: Map<PayloadKeyArgs, PayloadTypeArgs> };

/** @deprecated Use `getPayloadSerializer()` without any argument instead. */
export function getPayloadSerializer(
  _context: object
): Serializer<PayloadArgs, Payload>;
export function getPayloadSerializer(): Serializer<PayloadArgs, Payload>;
export function getPayloadSerializer(
  _context: object = {}
): Serializer<PayloadArgs, Payload> {
  return struct<Payload>(
    [['map', map(getPayloadKeySerializer(), getPayloadTypeSerializer())]],
    { description: 'Payload' }
  ) as Serializer<PayloadArgs, Payload>;
}