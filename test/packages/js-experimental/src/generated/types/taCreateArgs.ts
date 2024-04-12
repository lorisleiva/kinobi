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
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getUtf8Decoder,
  getUtf8Encoder,
} from '@solana/codecs';

export type TaCreateArgs = {
  ruleSetName: string;
  serializedRuleSet: Uint8Array;
};

export type TaCreateArgsArgs = TaCreateArgs;

export function getTaCreateArgsEncoder(): Encoder<TaCreateArgsArgs> {
  return getStructEncoder([
    ['ruleSetName', addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
    [
      'serializedRuleSet',
      addEncoderSizePrefix(getBytesEncoder(), getU32Encoder()),
    ],
  ]);
}

export function getTaCreateArgsDecoder(): Decoder<TaCreateArgs> {
  return getStructDecoder([
    ['ruleSetName', addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    [
      'serializedRuleSet',
      addDecoderSizePrefix(getBytesDecoder(), getU32Decoder()),
    ],
  ]);
}

export function getTaCreateArgsCodec(): Codec<TaCreateArgsArgs, TaCreateArgs> {
  return combineCodec(getTaCreateArgsEncoder(), getTaCreateArgsDecoder());
}
