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
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Account,
  Context,
  EncodedAccount,
  FetchEncodedAccountOptions,
  FetchEncodedAccountsOptions,
  assertAccountExists,
  decodeAccount,
} from '../shared';
import { TmKey, TmKeyArgs, getTmKeyDecoder, getTmKeyEncoder } from '../types';

export type CollectionAuthorityRecord<TAddress extends string = string> =
  Account<CollectionAuthorityRecordAccountData, TAddress>;

export type CollectionAuthorityRecordAccountData = {
  key: TmKey;
  bump: number;
  updateAuthority: Option<Address>;
};

export type CollectionAuthorityRecordAccountDataArgs = {
  bump: number;
  updateAuthority: OptionOrNullable<Address>;
};

export function getCollectionAuthorityRecordAccountDataEncoder(): Encoder<CollectionAuthorityRecordAccountDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      key: TmKeyArgs;
      bump: number;
      updateAuthority: OptionOrNullable<Address>;
    }>([
      ['key', getTmKeyEncoder()],
      ['bump', getU8Encoder()],
      ['updateAuthority', getOptionEncoder(getAddressEncoder())],
    ]),
    (value) => ({ ...value, key: TmKey.CollectionAuthorityRecord })
  ) as Encoder<CollectionAuthorityRecordAccountDataArgs>;
}

export function getCollectionAuthorityRecordAccountDataDecoder(): Decoder<CollectionAuthorityRecordAccountData> {
  return getStructDecoder<CollectionAuthorityRecordAccountData>([
    ['key', getTmKeyDecoder()],
    ['bump', getU8Decoder()],
    ['updateAuthority', getOptionDecoder(getAddressDecoder())],
  ]) as Decoder<CollectionAuthorityRecordAccountData>;
}

export function getCollectionAuthorityRecordAccountDataCodec(): Codec<
  CollectionAuthorityRecordAccountDataArgs,
  CollectionAuthorityRecordAccountData
> {
  return combineCodec(
    getCollectionAuthorityRecordAccountDataEncoder(),
    getCollectionAuthorityRecordAccountDataDecoder()
  );
}

export function decodeCollectionAuthorityRecord<
  TAddress extends string = string
>(
  encodedAccount: EncodedAccount<TAddress>
): CollectionAuthorityRecord<TAddress> {
  return decodeAccount(
    encodedAccount,
    getCollectionAuthorityRecordAccountDataDecoder()
  );
}

export async function fetchCollectionAuthorityRecord<
  TAddress extends string = string
>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Address<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<CollectionAuthorityRecord<TAddress>> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  assertAccountExists(maybeAccount);
  return decodeCollectionAuthorityRecord(maybeAccount);
}

export async function safeFetchCollectionAuthorityRecord<
  TAddress extends string = string
>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Address<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<CollectionAuthorityRecord<TAddress> | null> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  return maybeAccount.exists
    ? decodeCollectionAuthorityRecord(maybeAccount)
    : null;
}

export async function fetchAllCollectionAuthorityRecord(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Address>,
  options?: FetchEncodedAccountsOptions
): Promise<CollectionAuthorityRecord[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeCollectionAuthorityRecord(maybeAccount);
  });
}

export async function safeFetchAllCollectionAuthorityRecord(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Address>,
  options?: FetchEncodedAccountsOptions
): Promise<CollectionAuthorityRecord[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeCollectionAuthorityRecord(maybeAccount as EncodedAccount)
    );
}
