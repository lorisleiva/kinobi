/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  ProgramDerivedAddress,
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
import { getStringEncoder } from '@solana/codecs-strings';
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
  getProgramAddress,
  getProgramDerivedAddress,
} from '../shared';
import { TmKey, getTmKeyDecoder, getTmKeyEncoder } from '../types';

export type MasterEditionV2<TAddress extends string = string> = Account<
  MasterEditionV2AccountData,
  TAddress
>;

export type MasterEditionV2AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
};

export type MasterEditionV2AccountDataArgs = {
  supply: number | bigint;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getMasterEditionV2AccountDataEncoder(): Encoder<MasterEditionV2AccountDataArgs> {
  return mapEncoder(
    getStructEncoder<MasterEditionV2AccountData>(
      [
        ['key', getTmKeyEncoder()],
        ['supply', getU64Encoder()],
        ['maxSupply', getOptionEncoder(getU64Encoder())],
      ],
      { description: 'MasterEditionV2AccountData' }
    ),
    (value) =>
      ({ ...value, key: TmKey.MasterEditionV2 } as MasterEditionV2AccountData)
  ) as Encoder<MasterEditionV2AccountDataArgs>;
}

export function getMasterEditionV2AccountDataDecoder(): Decoder<MasterEditionV2AccountData> {
  return getStructDecoder<MasterEditionV2AccountData>(
    [
      ['key', getTmKeyDecoder()],
      ['supply', getU64Decoder()],
      ['maxSupply', getOptionDecoder(getU64Decoder())],
    ],
    { description: 'MasterEditionV2AccountData' }
  ) as Decoder<MasterEditionV2AccountData>;
}

export function getMasterEditionV2AccountDataCodec(): Codec<
  MasterEditionV2AccountDataArgs,
  MasterEditionV2AccountData
> {
  return combineCodec(
    getMasterEditionV2AccountDataEncoder(),
    getMasterEditionV2AccountDataDecoder()
  );
}

export function decodeMasterEditionV2<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): MasterEditionV2<TAddress> {
  return decodeAccount(encodedAccount, getMasterEditionV2AccountDataDecoder());
}

export async function fetchMasterEditionV2<TAddress extends string = string>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Base58EncodedAddress<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<MasterEditionV2<TAddress>> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  assertAccountExists(maybeAccount);
  return decodeMasterEditionV2(maybeAccount);
}

export async function safeFetchMasterEditionV2<
  TAddress extends string = string
>(
  context: Pick<Context, 'fetchEncodedAccount'>,
  address: Base58EncodedAddress<TAddress>,
  options?: FetchEncodedAccountOptions
): Promise<MasterEditionV2<TAddress> | null> {
  const maybeAccount = await context.fetchEncodedAccount(address, options);
  return maybeAccount.exists ? decodeMasterEditionV2(maybeAccount) : null;
}

export async function fetchAllMasterEditionV2(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Base58EncodedAddress>,
  options?: FetchEncodedAccountsOptions
): Promise<MasterEditionV2[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeMasterEditionV2(maybeAccount);
  });
}

export async function safeFetchAllMasterEditionV2(
  context: Pick<Context, 'fetchEncodedAccounts'>,
  addresses: Array<Base58EncodedAddress>,
  options?: FetchEncodedAccountsOptions
): Promise<MasterEditionV2[]> {
  const maybeAccounts = await context.fetchEncodedAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeMasterEditionV2(maybeAccount as EncodedAccount)
    );
}

export function getMasterEditionV2Size(): number {
  return 282;
}

export async function findMasterEditionV2Pda(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>,
  seeds: {
    /** The address of the mint account */
    mint: Base58EncodedAddress;
  }
): ProgramDerivedAddress {
  const programAddress = await getProgramAddress(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return getProgramDerivedAddress(context, programAddress, [
    getStringEncoder({ size: 'variable' }).encode('metadata'),
    getAddressEncoder().encode(programAddress),
    getAddressEncoder().encode(seeds.mint),
    getStringEncoder({ size: 'variable' }).encode('edition'),
  ]);
}

export async function fetchMasterEditionV2FromSeeds(
  context: Pick<
    Context,
    'fetchEncodedAccount' | 'getProgramAddress' | 'getProgramDerivedAddress'
  >,
  seeds: Parameters<typeof findMasterEditionV2Pda>[1],
  options?: FetchEncodedAccountOptions
): Promise<MasterEditionV2> {
  return fetchMasterEditionV2(
    context,
    await findMasterEditionV2Pda(context, seeds)[0],
    options
  );
}

export async function safeFetchMasterEditionV2FromSeeds(
  context: Pick<
    Context,
    'fetchEncodedAccount' | 'getProgramAddress' | 'getProgramDerivedAddress'
  >,
  seeds: Parameters<typeof findMasterEditionV2Pda>[1],
  options?: FetchEncodedAccountOptions
): Promise<MasterEditionV2 | null> {
  return safeFetchMasterEditionV2(
    context,
    await findMasterEditionV2Pda(context, seeds)[0],
    options
  );
}
