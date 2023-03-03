/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@metaplex-foundation/umi';
import { TmKey, TmKeyArgs, getTmKeySerializer } from '../types';

export type CollectionAuthorityRecord =
  Account<CollectionAuthorityRecordAccountData>;

export type CollectionAuthorityRecordAccountData = {
  key: TmKey;
  bump: number;
  updateAuthority: Option<PublicKey>;
};

export type CollectionAuthorityRecordAccountDataArgs = {
  bump: number;
  updateAuthority: Option<PublicKey>;
};

export function getCollectionAuthorityRecordAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CollectionAuthorityRecordAccountDataArgs,
  CollectionAuthorityRecordAccountData
> {
  const s = context.serializer;
  return mapSerializer<
    CollectionAuthorityRecordAccountDataArgs,
    CollectionAuthorityRecordAccountData,
    CollectionAuthorityRecordAccountData
  >(
    s.struct<CollectionAuthorityRecordAccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['bump', s.u8()],
        ['updateAuthority', s.option(s.publicKey())],
      ],
      { description: 'CollectionAuthorityRecord' }
    ),
    (value) =>
      ({
        ...value,
        key: TmKey.CollectionAuthorityRecord,
      } as CollectionAuthorityRecordAccountData)
  ) as Serializer<
    CollectionAuthorityRecordAccountDataArgs,
    CollectionAuthorityRecordAccountData
  >;
}

export function deserializeCollectionAuthorityRecord(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): CollectionAuthorityRecord {
  return deserializeAccount(
    rawAccount,
    getCollectionAuthorityRecordAccountDataSerializer(context)
  );
}

export async function fetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<CollectionAuthorityRecord> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'CollectionAuthorityRecord');
  return deserializeCollectionAuthorityRecord(context, maybeAccount);
}

export async function safeFetchCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<CollectionAuthorityRecord | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeCollectionAuthorityRecord(context, maybeAccount)
    : null;
}

export async function fetchAllCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<CollectionAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'CollectionAuthorityRecord');
    return deserializeCollectionAuthorityRecord(context, maybeAccount);
  });
}

export async function safeFetchAllCollectionAuthorityRecord(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<CollectionAuthorityRecord[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeCollectionAuthorityRecord(context, maybeAccount as RpcAccount)
    );
}

export function getCollectionAuthorityRecordGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.get('mplTokenMetadata').publicKey;
  return gpaBuilder(context, programId)
    .registerFields<{
      key: TmKeyArgs;
      bump: number;
      updateAuthority: Option<PublicKey>;
    }>({
      key: [0, getTmKeySerializer(context)],
      bump: [1, s.u8()],
      updateAuthority: [2, s.option(s.publicKey())],
    })
    .deserializeUsing<CollectionAuthorityRecord>((account) =>
      deserializeCollectionAuthorityRecord(context, account)
    )
    .whereField('key', TmKey.CollectionAuthorityRecord);
}
