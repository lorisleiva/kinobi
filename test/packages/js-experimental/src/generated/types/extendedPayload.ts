/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getMapDecoder,
  getMapEncoder,
  getStringDecoder,
  getStringEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs';
import {
  PayloadKey,
  PayloadKeyArgs,
  PayloadType,
  PayloadTypeArgs,
  getPayloadKeyDecoder,
  getPayloadKeyEncoder,
  getPayloadTypeDecoder,
  getPayloadTypeEncoder,
} from '.';

export type ExtendedPayload = {
  map: Map<PayloadKey, PayloadType>;
  args: readonly [number, string];
};

export type ExtendedPayloadArgs = {
  map: Map<PayloadKeyArgs, PayloadTypeArgs>;
  args: readonly [number, string];
};

export function getExtendedPayloadEncoder(): Encoder<ExtendedPayloadArgs> {
  return getStructEncoder([
    ['map', getMapEncoder(getPayloadKeyEncoder(), getPayloadTypeEncoder())],
    ['args', getTupleEncoder([getU8Encoder(), getStringEncoder()])],
  ]);
}

export function getExtendedPayloadDecoder(): Decoder<ExtendedPayload> {
  return getStructDecoder([
    ['map', getMapDecoder(getPayloadKeyDecoder(), getPayloadTypeDecoder())],
    ['args', getTupleDecoder([getU8Decoder(), getStringDecoder()])],
  ]);
}

export function getExtendedPayloadCodec(): Codec<
  ExtendedPayloadArgs,
  ExtendedPayload
> {
  return combineCodec(getExtendedPayloadEncoder(), getExtendedPayloadDecoder());
}
