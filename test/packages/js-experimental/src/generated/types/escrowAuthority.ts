/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  getDataEnumDecoder,
  getDataEnumEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
  getUnitDecoder,
  getUnitEncoder,
} from '@solana/codecs-data-structures';

export type EscrowAuthority =
  | { __kind: 'TokenOwner' }
  | { __kind: 'Creator'; fields: [Base58EncodedAddress] };

export type EscrowAuthorityArgs = EscrowAuthority;

export function getEscrowAuthorityEncoder(): Encoder<EscrowAuthorityArgs> {
  return getDataEnumEncoder<EscrowAuthority>(
    [
      ['TokenOwner', getUnitEncoder()],
      [
        'Creator',
        getStructEncoder<GetDataEnumKindContent<EscrowAuthority, 'Creator'>>([
          ['fields', getTupleEncoder([getAddressEncoder()])],
        ]),
      ],
    ],
    { description: 'EscrowAuthority' }
  ) as Encoder<EscrowAuthorityArgs>;
}

export function getEscrowAuthorityDecoder(): Decoder<EscrowAuthority> {
  return getDataEnumDecoder<EscrowAuthority>(
    [
      ['TokenOwner', getUnitDecoder()],
      [
        'Creator',
        getStructDecoder<GetDataEnumKindContent<EscrowAuthority, 'Creator'>>([
          ['fields', getTupleDecoder([getAddressDecoder()])],
        ]),
      ],
    ],
    { description: 'EscrowAuthority' }
  ) as Decoder<EscrowAuthority>;
}

export function getEscrowAuthorityCodec(): Codec<
  EscrowAuthorityArgs,
  EscrowAuthority
> {
  return combineCodec(getEscrowAuthorityEncoder(), getEscrowAuthorityDecoder());
}

// Data Enum Helpers.
export function escrowAuthority(
  kind: 'TokenOwner'
): GetDataEnumKind<EscrowAuthorityArgs, 'TokenOwner'>;
export function escrowAuthority(
  kind: 'Creator',
  data: GetDataEnumKindContent<EscrowAuthorityArgs, 'Creator'>['fields']
): GetDataEnumKind<EscrowAuthorityArgs, 'Creator'>;
export function escrowAuthority<K extends EscrowAuthorityArgs['__kind']>(
  kind: K,
  data?: any
): Extract<EscrowAuthorityArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isEscrowAuthority<K extends EscrowAuthority['__kind']>(
  kind: K,
  value: EscrowAuthority
): value is EscrowAuthority & { __kind: K } {
  return value.__kind === kind;
}
