/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  PublicKey,
  Serializer,
} from '@lorisleiva/js-core';

export type EscrowAuthority =
  | { __kind: 'TokenOwner' }
  | { __kind: 'Creator'; fields: [PublicKey] };

export function getEscrowAuthoritySerializer(
  context: Pick<Context, 'serializer'>
): Serializer<EscrowAuthority> {
  const s = context.serializer;
  return s.dataEnum<EscrowAuthority>(
    [
      ['TokenOwner', s.unit],
      [
        'Creator',
        s.struct<GetDataEnumKindContent<EscrowAuthority, 'Creator'>>(
          [['fields', s.tuple([s.publicKey])]],
          'Creator'
        ),
      ],
    ],
    undefined,
    'EscrowAuthority'
  );
}

// Data Enum Helpers.
export function escrowAuthority(
  kind: 'TokenOwner'
): GetDataEnumKind<EscrowAuthority, 'TokenOwner'>;
export function escrowAuthority(
  kind: 'Creator',
  data: GetDataEnumKindContent<EscrowAuthority, 'Creator'>['fields']
): GetDataEnumKind<EscrowAuthority, 'Creator'>;
export function escrowAuthority<K extends EscrowAuthority['__kind']>(
  kind: K,
  data?: any
): EscrowAuthority & { __kind: K } {
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
