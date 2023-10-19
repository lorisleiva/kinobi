/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  ConfigLine,
  ConfigLineArgs,
  getConfigLineDecoder,
  getConfigLineEncoder,
} from '.';

/** Dummy lines. */
export type DummyLines = {
  /** The dummy lines. */
  lines: Array<ConfigLine>;
};

export type DummyLinesArgs = {
  /** The dummy lines. */
  lines: Array<ConfigLineArgs>;
};

export function getDummyLinesEncoder(): Encoder<DummyLinesArgs> {
  return getStructEncoder<DummyLinesArgs>(
    [['lines', getArrayEncoder(getConfigLineEncoder(), { size: 'remainder' })]],
    { description: 'DummyLines' }
  ) as Encoder<DummyLinesArgs>;
}

export function getDummyLinesDecoder(): Decoder<DummyLines> {
  return getStructDecoder<DummyLines>(
    [['lines', getArrayDecoder(getConfigLineDecoder(), { size: 'remainder' })]],
    { description: 'DummyLines' }
  ) as Decoder<DummyLines>;
}

export function getDummyLinesCodec(): Codec<DummyLinesArgs, DummyLines> {
  return combineCodec(getDummyLinesEncoder(), getDummyLinesDecoder());
}
