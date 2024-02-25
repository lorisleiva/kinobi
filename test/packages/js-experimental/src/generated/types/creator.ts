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
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';

export type Creator = { address: Address; verified: boolean; share: number };

export type CreatorArgs = Creator;

export function getCreatorEncoder() {
  return getStructEncoder([
    ['address', getAddressEncoder()],
    ['verified', getBooleanEncoder()],
    ['share', getU8Encoder()],
  ]) satisfies Encoder<CreatorArgs>;
}

export function getCreatorDecoder() {
  return getStructDecoder([
    ['address', getAddressDecoder()],
    ['verified', getBooleanDecoder()],
    ['share', getU8Decoder()],
  ]) satisfies Decoder<Creator>;
}

export function getCreatorCodec(): Codec<CreatorArgs, Creator> {
  return combineCodec(getCreatorEncoder(), getCreatorDecoder());
}
