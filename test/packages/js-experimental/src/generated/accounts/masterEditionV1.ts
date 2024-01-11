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
import { getU64Decoder, getU64Encoder } from '@solana/codecs-numbers';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import { MasterEditionV1Seeds, findMasterEditionV1Pda } from '../pdas';
import { TmKey, TmKeyArgs, getTmKeyDecoder, getTmKeyEncoder } from '../types';

export type MasterEditionV1<TAddress extends string = string> = Account<
  MasterEditionV1AccountData,
  TAddress
>;

export type MaybeMasterEditionV1<TAddress extends string = string> =
  MaybeAccount<MasterEditionV1AccountData, TAddress>;

export type MasterEditionV1AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
  printingMint: Address;
  oneTimePrintingAuthorizationMint: Address;
};

export type MasterEditionV1AccountDataArgs = {
  supply: number | bigint;
  maxSupply: OptionOrNullable<number | bigint>;
  printingMint: Address;
  oneTimePrintingAuthorizationMint: Address;
};

export function getMasterEditionV1AccountDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      key: TmKeyArgs;
      supply: number | bigint;
      maxSupply: OptionOrNullable<number | bigint>;
      printingMint: Address;
      oneTimePrintingAuthorizationMint: Address;
    }>([
      ['key', getTmKeyEncoder()],
      ['supply', getU64Encoder()],
      ['maxSupply', getOptionEncoder(getU64Encoder())],
      ['printingMint', getAddressEncoder()],
      ['oneTimePrintingAuthorizationMint', getAddressEncoder()],
    ]),
    (value) => ({ ...value, key: TmKey.MasterEditionV1 })
  ) satisfies Encoder<MasterEditionV1AccountDataArgs>;
}

export function getMasterEditionV1AccountDataDecoder() {
  return getStructDecoder<MasterEditionV1AccountData>([
    ['key', getTmKeyDecoder()],
    ['supply', getU64Decoder()],
    ['maxSupply', getOptionDecoder(getU64Decoder())],
    ['printingMint', getAddressDecoder()],
    ['oneTimePrintingAuthorizationMint', getAddressDecoder()],
  ]) satisfies Decoder<MasterEditionV1AccountData>;
}

export function getMasterEditionV1AccountDataCodec(): Codec<
  MasterEditionV1AccountDataArgs,
  MasterEditionV1AccountData
> {
  return combineCodec(
    getMasterEditionV1AccountDataEncoder(),
    getMasterEditionV1AccountDataDecoder()
  );
}

export function decodeMasterEditionV1<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): MasterEditionV1<TAddress>;
export function decodeMasterEditionV1<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeMasterEditionV1<TAddress>;
export function decodeMasterEditionV1<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): MasterEditionV1<TAddress> | MaybeMasterEditionV1<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getMasterEditionV1AccountDataDecoder()
  );
}

export async function fetchMasterEditionV1<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MasterEditionV1<TAddress>> {
  const maybeAccount = await fetchMaybeMasterEditionV1(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeMasterEditionV1<
  TAddress extends string = string
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeMasterEditionV1<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeMasterEditionV1(maybeAccount);
}

export async function fetchAllMasterEditionV1(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await fetchAllMaybeMasterEditionV1(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeMasterEditionV1(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeMasterEditionV1[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeMasterEditionV1(maybeAccount)
  );
}

export async function fetchMasterEditionV1FromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: MasterEditionV1Seeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<MasterEditionV1> {
  const maybeAccount = await fetchMaybeMasterEditionV1FromSeeds(
    rpc,
    seeds,
    config
  );
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeMasterEditionV1FromSeeds(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  seeds: MasterEditionV1Seeds,
  config: FetchAccountConfig & { programAddress?: Address } = {}
): Promise<MaybeMasterEditionV1> {
  const { programAddress, ...fetchConfig } = config;
  const [address] = await findMasterEditionV1Pda(seeds, { programAddress });
  return fetchMaybeMasterEditionV1(rpc, address, fetchConfig);
}
