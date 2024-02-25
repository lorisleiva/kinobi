/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
} from '@solana/codecs-data-structures';
import {
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs-numbers';

/** This is a union of all the possible payload types. */
export type PayloadType =
  | { __kind: 'Pubkey'; fields: [Address] }
  | { __kind: 'Seeds'; seeds: Array<Uint8Array> }
  | { __kind: 'MerkleProof'; leaf: Uint8Array; proof: Array<Uint8Array> }
  | { __kind: 'Number'; fields: [bigint] };

export type PayloadTypeArgs =
  | { __kind: 'Pubkey'; fields: [Address] }
  | { __kind: 'Seeds'; seeds: Array<Uint8Array> }
  | { __kind: 'MerkleProof'; leaf: Uint8Array; proof: Array<Uint8Array> }
  | { __kind: 'Number'; fields: [number | bigint] };

export function getPayloadTypeEncoder() {
  return getDataEnumEncoder([
    [
      'Pubkey',
      getStructEncoder([['fields', getTupleEncoder([getAddressEncoder()])]]),
    ],
    [
      'Seeds',
      getStructEncoder([
        ['seeds', getArrayEncoder(getBytesEncoder({ size: getU32Encoder() }))],
      ]),
    ],
    [
      'MerkleProof',
      getStructEncoder([
        ['leaf', getBytesEncoder({ size: 32 })],
        ['proof', getArrayEncoder(getBytesEncoder({ size: 32 }))],
      ]),
    ],
    [
      'Number',
      getStructEncoder([['fields', getTupleEncoder([getU64Encoder()])]]),
    ],
  ]) satisfies Encoder<PayloadTypeArgs>;
}

export function getPayloadTypeDecoder() {
  return getDataEnumDecoder([
    [
      'Pubkey',
      getStructDecoder([['fields', getTupleDecoder([getAddressDecoder()])]]),
    ],
    [
      'Seeds',
      getStructDecoder([
        ['seeds', getArrayDecoder(getBytesDecoder({ size: getU32Decoder() }))],
      ]),
    ],
    [
      'MerkleProof',
      getStructDecoder([
        ['leaf', getBytesDecoder({ size: 32 })],
        ['proof', getArrayDecoder(getBytesDecoder({ size: 32 }))],
      ]),
    ],
    [
      'Number',
      getStructDecoder([['fields', getTupleDecoder([getU64Decoder()])]]),
    ],
  ]) satisfies Decoder<PayloadType>;
}

export function getPayloadTypeCodec(): Codec<PayloadTypeArgs, PayloadType> {
  return combineCodec(getPayloadTypeEncoder(), getPayloadTypeDecoder());
}

// Data Enum Helpers.
export function payloadType(
  kind: 'Pubkey',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'Pubkey'>['fields']
): GetDataEnumKind<PayloadTypeArgs, 'Pubkey'>;
export function payloadType(
  kind: 'Seeds',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'Seeds'>
): GetDataEnumKind<PayloadTypeArgs, 'Seeds'>;
export function payloadType(
  kind: 'MerkleProof',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'MerkleProof'>
): GetDataEnumKind<PayloadTypeArgs, 'MerkleProof'>;
export function payloadType(
  kind: 'Number',
  data: GetDataEnumKindContent<PayloadTypeArgs, 'Number'>['fields']
): GetDataEnumKind<PayloadTypeArgs, 'Number'>;
export function payloadType<K extends PayloadTypeArgs['__kind']>(
  kind: K,
  data?: any
): Extract<PayloadTypeArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isPayloadType<K extends PayloadType['__kind']>(
  kind: K,
  value: PayloadType
): value is PayloadType & { __kind: K } {
  return value.__kind === kind;
}
