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

export type CmCreator = {
  /** Pubkey address */
  address: Address;
  /** Whether the creator is verified or not */
  verified: boolean;
  percentageShare: number;
};

export type CmCreatorArgs = CmCreator;

export function getCmCreatorEncoder(): Encoder<CmCreatorArgs> {
  return getStructEncoder<CmCreatorArgs>([
    ['address', getAddressEncoder()],
    ['verified', getBooleanEncoder()],
    ['percentageShare', getU8Encoder()],
  ]) as Encoder<CmCreatorArgs>;
}

export function getCmCreatorDecoder(): Decoder<CmCreator> {
  return getStructDecoder<CmCreator>([
    ['address', getAddressDecoder()],
    ['verified', getBooleanDecoder()],
    ['percentageShare', getU8Decoder()],
  ]) as Decoder<CmCreator>;
}

export function getCmCreatorCodec(): Codec<CmCreatorArgs, CmCreator> {
  return combineCodec(getCmCreatorEncoder(), getCmCreatorDecoder());
}
