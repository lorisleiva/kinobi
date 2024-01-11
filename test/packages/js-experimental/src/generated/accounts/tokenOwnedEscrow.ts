/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  EncodedAccount,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  assertAccountExists,
  assertAccountsExist,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
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
  EscrowAuthority,
  EscrowAuthorityArgs,
  TmKey,
  TmKeyArgs,
  getEscrowAuthorityDecoder,
  getEscrowAuthorityEncoder,
  getTmKeyDecoder,
  getTmKeyEncoder,
} from '../types';

export type TokenOwnedEscrow<TAddress extends string = string> = Account<
  TokenOwnedEscrowAccountData,
  TAddress
>;

export type MaybeTokenOwnedEscrow<TAddress extends string = string> =
  MaybeAccount<TokenOwnedEscrowAccountData, TAddress>;

export type TokenOwnedEscrowAccountData = {
  key: TmKey;
  baseToken: Address;
  authority: EscrowAuthority;
  bump: number;
};

export type TokenOwnedEscrowAccountDataArgs = {
  baseToken: Address;
  authority: EscrowAuthorityArgs;
  bump: number;
};

export function getTokenOwnedEscrowAccountDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      key: TmKeyArgs;
      baseToken: Address;
      authority: EscrowAuthorityArgs;
      bump: number;
    }>([
      ['key', getTmKeyEncoder()],
      ['baseToken', getAddressEncoder()],
      ['authority', getEscrowAuthorityEncoder()],
      ['bump', getU8Encoder()],
    ]),
    (value) => ({ ...value, key: TmKey.TokenOwnedEscrow })
  ) satisfies Encoder<TokenOwnedEscrowAccountDataArgs>;
}

export function getTokenOwnedEscrowAccountDataDecoder() {
  return getStructDecoder<TokenOwnedEscrowAccountData>([
    ['key', getTmKeyDecoder()],
    ['baseToken', getAddressDecoder()],
    ['authority', getEscrowAuthorityDecoder()],
    ['bump', getU8Decoder()],
  ]) satisfies Decoder<TokenOwnedEscrowAccountData>;
}

export function getTokenOwnedEscrowAccountDataCodec(): Codec<
  TokenOwnedEscrowAccountDataArgs,
  TokenOwnedEscrowAccountData
> {
  return combineCodec(
    getTokenOwnedEscrowAccountDataEncoder(),
    getTokenOwnedEscrowAccountDataDecoder()
  );
}

export function decodeTokenOwnedEscrow<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): TokenOwnedEscrow<TAddress>;
export function decodeTokenOwnedEscrow<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeTokenOwnedEscrow<TAddress>;
export function decodeTokenOwnedEscrow<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): TokenOwnedEscrow<TAddress> | MaybeTokenOwnedEscrow<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getTokenOwnedEscrowAccountDataDecoder()
  );
}

export async function fetchTokenOwnedEscrow<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<TokenOwnedEscrow<TAddress>> {
  const maybeAccount = await fetchMaybeTokenOwnedEscrow(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeTokenOwnedEscrow<
  TAddress extends string = string
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeTokenOwnedEscrow<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeTokenOwnedEscrow(maybeAccount);
}

export async function fetchAllTokenOwnedEscrow(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<TokenOwnedEscrow[]> {
  const maybeAccounts = await fetchAllMaybeTokenOwnedEscrow(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeTokenOwnedEscrow(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeTokenOwnedEscrow[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeTokenOwnedEscrow(maybeAccount)
  );
}
