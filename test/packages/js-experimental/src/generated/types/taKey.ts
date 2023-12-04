/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getScalarEnumDecoder,
  getScalarEnumEncoder,
} from '@solana/codecs-data-structures';

export enum TaKey {
  Uninitialized,
  Frequency,
}

export type TaKeyArgs = TaKey;

export function getTaKeyEncoder() {
  return getScalarEnumEncoder(TaKey) satisfies Encoder<TaKeyArgs>;
}

export function getTaKeyDecoder() {
  return getScalarEnumDecoder(TaKey) satisfies Decoder<TaKey>;
}

export function getTaKeyCodec(): Codec<TaKeyArgs, TaKey> {
  return combineCodec(getTaKeyEncoder(), getTaKeyDecoder());
}
