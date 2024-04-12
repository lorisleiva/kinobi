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
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
  transformEncoder,
} from '@solana/codecs';

export type Collection = { verified: boolean; key: Address };

export type CollectionArgs = { verified?: boolean; key: Address };

export function getCollectionEncoder(): Encoder<CollectionArgs> {
  return transformEncoder(
    getStructEncoder([
      ['verified', getBooleanEncoder()],
      ['key', getAddressEncoder()],
    ]),
    (value) => ({ ...value, verified: value.verified ?? false })
  );
}

export function getCollectionDecoder(): Decoder<Collection> {
  return getStructDecoder([
    ['verified', getBooleanDecoder()],
    ['key', getAddressDecoder()],
  ]);
}

export function getCollectionCodec(): Codec<CollectionArgs, Collection> {
  return combineCodec(getCollectionEncoder(), getCollectionDecoder());
}
