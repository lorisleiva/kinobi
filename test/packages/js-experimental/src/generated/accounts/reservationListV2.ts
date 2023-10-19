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
  Account,
  Context,
  EncodedAccount,
  FetchEncodedAccountOptions,
  FetchEncodedAccountsOptions,
  assertAccountExists,
  decodeAccount,
} from '../shared';
import {
  Reservation,
  ReservationArgs,
  TmKey,
  getReservationDecoder,
  getReservationEncoder,
  getTmKeyDecoder,
  getTmKeyEncoder,
} from '../types';

export type ReservationListV2<TAddress extends string = string> = Account<
  ReservationListV2AccountData,
  TAddress
>;

export type ReservationListV2AccountData = {
  key: TmKey;
  masterEdition: Base58EncodedAddress;
  supplySnapshot: Option<bigint>;
  reservations: Array<Reservation>;
  totalReservationSpots: bigint;
  currentReservationSpots: bigint;
};

export type ReservationListV2AccountDataArgs = {
  masterEdition: Base58EncodedAddress;
  supplySnapshot: OptionOrNullable<number | bigint>;
  reservations: Array<ReservationArgs>;
  totalReservationSpots: number | bigint;
  currentReservationSpots: number | bigint;
};

export function getReservationListV2AccountDataEncoder(): Encoder<ReservationListV2AccountDataArgs> {
  return mapEncoder(
    getStructEncoder<ReservationListV2AccountData>(
      [
        ['key', getTmKeyEncoder()],
        ['masterEdition', getAddressEncoder()],
        ['supplySnapshot', getOptionEncoder(getU64Encoder())],
        ['reservations', getArrayEncoder(getReservationEncoder())],
        ['totalReservationSpots', getU64Encoder()],
        ['currentReservationSpots', getU64Encoder()],
      ],
      { description: 'ReservationListV2AccountData' }
    ),
    (value) =>
      ({
        ...value,
        key: TmKey.ReservationListV2,
      } as ReservationListV2AccountData)
  ) as Encoder<ReservationListV2AccountDataArgs>;
}

export function getReservationListV2AccountDataDecoder(): Decoder<ReservationListV2AccountData> {
  return getStructDecoder<ReservationListV2AccountData>(
    [
      ['key', getTmKeyDecoder()],
      ['masterEdition', getAddressDecoder()],
      ['supplySnapshot', getOptionDecoder(getU64Decoder())],
      ['reservations', getArrayDecoder(getReservationDecoder())],
      ['totalReservationSpots', getU64Decoder()],
      ['currentReservationSpots', getU64Decoder()],
    ],
    { description: 'ReservationListV2AccountData' }
  ) as Decoder<ReservationListV2AccountData>;
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
): ReservationListV2<TAddress> {
  return decodeAccount(
    encodedAccount,
    getReservationListV2AccountDataDecoder()
  );
}

export async function fetchReservationListV2<TAddress extends string = string>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Base58EncodedAddress<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<ReservationListV2<TAddress>> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  assertAccountExists(maybeAccount);
  return decodeReservationListV2(maybeAccount);
}

export async function safeFetchReservationListV2<
  TAddress extends string = string
>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Base58EncodedAddress<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<ReservationListV2<TAddress> | null> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  return maybeAccount.exists ? decodeReservationListV2(maybeAccount) : null;
}

export async function fetchAllReservationListV2(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Base58EncodedAddress>,
  options?: FetchEncodedAccountsOptions
): Promise<ReservationListV2[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeReservationListV2(maybeAccount);
  });
}

export async function safeFetchAllReservationListV2(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Base58EncodedAddress>,
  options?: FetchEncodedAccountsOptions
): Promise<ReservationListV2[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeReservationListV2(maybeAccount as EncodedAccount)
    );
}
