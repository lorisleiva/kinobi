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
  assertAccountExists,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
} from '@solana/accounts';
import { Address } from '@solana/addresses';
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
import {
  getI64Decoder,
  getI64Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs-numbers';
import { findFrequencyAccountPda } from '../pdas';
import { TaKey } from '../types';

export type FrequencyAccount<TAddress extends string = string> = Account<
  FrequencyAccountAccountData,
  TAddress
>;

export type FrequencyAccountAccountData = {
  /** Test with only one line. */
  key: bigint;
  /**
   * Test with multiple lines
   * and this is the second line.
   */
  lastUpdate: bigint;
  period: bigint;
};

export type FrequencyAccountAccountDataArgs = {
  /**
   * Test with multiple lines
   * and this is the second line.
   */
  lastUpdate: number | bigint;
  period: number | bigint;
};

export function getFrequencyAccountAccountDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      /** Test with only one line. */
      key: number | bigint;
      /**
       * Test with multiple lines
       * and this is the second line.
       */
      lastUpdate: number | bigint;
      period: number | bigint;
    }>([
      ['key', getU64Encoder()],
      ['lastUpdate', getI64Encoder()],
      ['period', getI64Encoder()],
    ]),
    (value) => ({ ...value, key: TaKey.Frequency })
  ) satisfies Encoder<FrequencyAccountAccountDataArgs>;
}

export function getFrequencyAccountAccountDataDecoder() {
  return getStructDecoder<FrequencyAccountAccountData>([
    ['key', getU64Decoder()],
    ['lastUpdate', getI64Decoder()],
    ['period', getI64Decoder()],
  ]) satisfies Decoder<FrequencyAccountAccountData>;
}

export function getFrequencyAccountAccountDataCodec(): Codec<
  FrequencyAccountAccountDataArgs,
  FrequencyAccountAccountData
> {
  return combineCodec(
    getFrequencyAccountAccountDataEncoder(),
    getFrequencyAccountAccountDataDecoder()
  );
}

export function decodeFrequencyAccount<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): FrequencyAccount<TAddress> {
  return decodeAccount(encodedAccount, getFrequencyAccountAccountDataDecoder());
}

export async function fetchFrequencyAccount<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<FrequencyAccount<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  assertAccountExists(maybeAccount);
  return decodeFrequencyAccount(maybeAccount);
}

export async function fetchMaybeFrequencyAccount<
  TAddress extends string = string
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<FrequencyAccount<TAddress> | null> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return maybeAccount.exists ? decodeFrequencyAccount(maybeAccount) : null;
}

export async function fetchAllFrequencyAccount(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<FrequencyAccount[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeFrequencyAccount(maybeAccount);
  });
}

export async function fetchAllMaybeFrequencyAccount(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<FrequencyAccount[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeFrequencyAccount(maybeAccount as EncodedAccount)
    );
}

export function getFrequencyAccountSize(): number {
  return 24;
}

export async function fetchFrequencyAccountFromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<FrequencyAccount> {
  const { programAddress, ...fetchConfig } = config;
  const [address] = await findFrequencyAccountPda({ programAddress });
  return fetchFrequencyAccount(rpc, address, fetchConfig);
}

export async function fetchMaybeFrequencyAccountFromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<FrequencyAccount | null> {
  const { programAddress, ...fetchConfig } = config;
  const [address] = await findFrequencyAccountPda({ programAddress });
  return fetchMaybeFrequencyAccount(rpc, address, fetchConfig);
}
