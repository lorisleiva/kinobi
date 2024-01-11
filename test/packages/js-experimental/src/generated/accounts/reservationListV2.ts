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
  getArrayDecoder,
  getArrayEncoder,
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
import {
  Reservation,
  ReservationArgs,
  TmKey,
  TmKeyArgs,
  getReservationDecoder,
  getReservationEncoder,
  getTmKeyDecoder,
  getTmKeyEncoder,
} from '../types';

export type ReservationListV2<TAddress extends string = string> = Account<
  ReservationListV2AccountData,
  TAddress
>;

export type MaybeReservationListV2<TAddress extends string = string> =
  MaybeAccount<ReservationListV2AccountData, TAddress>;

export type ReservationListV2AccountData = {
  key: TmKey;
  masterEdition: Address;
  supplySnapshot: Option<bigint>;
  reservations: Array<Reservation>;
  totalReservationSpots: bigint;
  currentReservationSpots: bigint;
};

export type ReservationListV2AccountDataArgs = {
  masterEdition: Address;
  supplySnapshot: OptionOrNullable<number | bigint>;
  reservations: Array<ReservationArgs>;
  totalReservationSpots: number | bigint;
  currentReservationSpots: number | bigint;
};

export function getReservationListV2AccountDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      key: TmKeyArgs;
      masterEdition: Address;
      supplySnapshot: OptionOrNullable<number | bigint>;
      reservations: Array<ReservationArgs>;
      totalReservationSpots: number | bigint;
      currentReservationSpots: number | bigint;
    }>([
      ['key', getTmKeyEncoder()],
      ['masterEdition', getAddressEncoder()],
      ['supplySnapshot', getOptionEncoder(getU64Encoder())],
      ['reservations', getArrayEncoder(getReservationEncoder())],
      ['totalReservationSpots', getU64Encoder()],
      ['currentReservationSpots', getU64Encoder()],
    ]),
    (value) => ({ ...value, key: TmKey.ReservationListV2 })
  ) satisfies Encoder<ReservationListV2AccountDataArgs>;
}

export function getReservationListV2AccountDataDecoder() {
  return getStructDecoder<ReservationListV2AccountData>([
    ['key', getTmKeyDecoder()],
    ['masterEdition', getAddressDecoder()],
    ['supplySnapshot', getOptionDecoder(getU64Decoder())],
    ['reservations', getArrayDecoder(getReservationDecoder())],
    ['totalReservationSpots', getU64Decoder()],
    ['currentReservationSpots', getU64Decoder()],
  ]) satisfies Decoder<ReservationListV2AccountData>;
}

export function getReservationListV2AccountDataCodec(): Codec<
  ReservationListV2AccountDataArgs,
  ReservationListV2AccountData
> {
  return combineCodec(
    getReservationListV2AccountDataEncoder(),
    getReservationListV2AccountDataDecoder()
  );
}

export function decodeReservationListV2<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): ReservationListV2<TAddress>;
export function decodeReservationListV2<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeReservationListV2<TAddress>;
export function decodeReservationListV2<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): ReservationListV2<TAddress> | MaybeReservationListV2<TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getReservationListV2AccountDataDecoder()
  );
}

export async function fetchReservationListV2<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<ReservationListV2<TAddress>> {
  const maybeAccount = await fetchMaybeReservationListV2(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeReservationListV2<
  TAddress extends string = string
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeReservationListV2<TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeReservationListV2(maybeAccount);
}

export async function fetchAllReservationListV2(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<ReservationListV2[]> {
  const maybeAccounts = await fetchAllMaybeReservationListV2(
    rpc,
    addresses,
    config
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeReservationListV2(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeReservationListV2[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeReservationListV2(maybeAccount)
  );
}
