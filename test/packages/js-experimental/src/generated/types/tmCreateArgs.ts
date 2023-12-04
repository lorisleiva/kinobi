/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  AssetData,
  AssetDataArgs,
  getAssetDataDecoder,
  getAssetDataEncoder,
} from '.';

export type TmCreateArgs =
  | {
      __kind: 'V1';
      assetData: AssetData;
      decimals: Option<number>;
      maxSupply: Option<bigint>;
    }
  | { __kind: 'V2'; assetData: AssetData; maxSupply: Option<bigint> };

export type TmCreateArgsArgs =
  | {
      __kind: 'V1';
      assetData: AssetDataArgs;
      decimals: OptionOrNullable<number>;
      maxSupply: OptionOrNullable<number | bigint>;
    }
  | {
      __kind: 'V2';
      assetData: AssetDataArgs;
      maxSupply: OptionOrNullable<number | bigint>;
    };

export function getTmCreateArgsEncoder(): Encoder<TmCreateArgsArgs> {
  return getDataEnumEncoder<TmCreateArgs>([
    [
      'V1',
      getStructEncoder<GetDataEnumKindContent<TmCreateArgsArgs, 'V1'>>([
        ['assetData', getAssetDataEncoder()],
        ['decimals', getOptionEncoder(getU8Encoder())],
        ['maxSupply', getOptionEncoder(getU64Encoder())],
      ]),
    ],
    [
      'V2',
      getStructEncoder<GetDataEnumKindContent<TmCreateArgsArgs, 'V2'>>([
        ['assetData', getAssetDataEncoder()],
        ['maxSupply', getOptionEncoder(getU64Encoder())],
      ]),
    ],
  ]) as Encoder<TmCreateArgsArgs>;
}

export function getTmCreateArgsDecoder(): Decoder<TmCreateArgs> {
  return getDataEnumDecoder<TmCreateArgs>([
    [
      'V1',
      getStructDecoder<GetDataEnumKindContent<TmCreateArgs, 'V1'>>([
        ['assetData', getAssetDataDecoder()],
        ['decimals', getOptionDecoder(getU8Decoder())],
        ['maxSupply', getOptionDecoder(getU64Decoder())],
      ]),
    ],
    [
      'V2',
      getStructDecoder<GetDataEnumKindContent<TmCreateArgs, 'V2'>>([
        ['assetData', getAssetDataDecoder()],
        ['maxSupply', getOptionDecoder(getU64Decoder())],
      ]),
    ],
  ]) as Decoder<TmCreateArgs>;
}

export function getTmCreateArgsCodec(): Codec<TmCreateArgsArgs, TmCreateArgs> {
  return combineCodec(getTmCreateArgsEncoder(), getTmCreateArgsDecoder());
}

// Data Enum Helpers.
export function tmCreateArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<TmCreateArgsArgs, 'V1'>
): GetDataEnumKind<TmCreateArgsArgs, 'V1'>;
export function tmCreateArgs(
  kind: 'V2',
  data: GetDataEnumKindContent<TmCreateArgsArgs, 'V2'>
): GetDataEnumKind<TmCreateArgsArgs, 'V2'>;
export function tmCreateArgs<K extends TmCreateArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<TmCreateArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isTmCreateArgs<K extends TmCreateArgs['__kind']>(
  kind: K,
  value: TmCreateArgs
): value is TmCreateArgs & { __kind: K } {
  return value.__kind === kind;
}
