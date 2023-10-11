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
  GpaBuilder,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
} from 'some-magical-place';
import { Pda, gpaBuilder } from 'umi';
import { publicKey as publicKeySerializer } from 'umiSerializers';
import {
  DelegateRoleArgs,
  TmKey,
  TmKeyArgs,
  getDelegateRoleEncoder,
  getTmKeyDecoder,
  getTmKeyEncoder,
} from '../types';

export type MasterEditionV1 = Account<MasterEditionV1AccountData>;

export type MasterEditionV1AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
  printingMint: Base58EncodedAddress;
  oneTimePrintingAuthorizationMint: Base58EncodedAddress;
};

export type MasterEditionV1AccountDataArgs = {
  supply: number | bigint;
  maxSupply: OptionOrNullable<number | bigint>;
  printingMint: Base58EncodedAddress;
  oneTimePrintingAuthorizationMint: Base58EncodedAddress;
};

export function getMasterEditionV1AccountDataEncoder(): Encoder<MasterEditionV1AccountDataArgs> {
  return mapEncoder(
    getStructEncoder<MasterEditionV1AccountData>(
      [
        ['key', getTmKeyEncoder()],
        ['supply', getU64Encoder()],
        ['maxSupply', getOptionEncoder(getU64Encoder())],
        ['printingMint', getAddressEncoder()],
        ['oneTimePrintingAuthorizationMint', getAddressEncoder()],
      ],
      { description: 'MasterEditionV1AccountData' }
    ),
    (value) =>
      ({ ...value, key: TmKey.MasterEditionV1 } as MasterEditionV1AccountData)
  ) as Encoder<MasterEditionV1AccountDataArgs>;
}

export function getMasterEditionV1AccountDataDecoder(): Decoder<MasterEditionV1AccountData> {
  return getStructDecoder<MasterEditionV1AccountData>(
    [
      ['key', getTmKeyDecoder()],
      ['supply', getU64Decoder()],
      ['maxSupply', getOptionDecoder(getU64Decoder())],
      ['printingMint', getAddressDecoder()],
      ['oneTimePrintingAuthorizationMint', getAddressDecoder()],
    ],
    { description: 'MasterEditionV1AccountData' }
  ) as Decoder<MasterEditionV1AccountData>;
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

export function deserializeMasterEditionV1(
  rawAccount: RpcAccount
): MasterEditionV1 {
  return deserializeAccount(rawAccount, getMasterEditionV1AccountDataEncoder());
}

export async function fetchMasterEditionV1(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  assertAccountExists(maybeAccount, 'MasterEditionV1');
  return deserializeMasterEditionV1(maybeAccount);
}

export async function safeFetchMasterEditionV1(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1 | null> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  return maybeAccount.exists ? deserializeMasterEditionV1(maybeAccount) : null;
}

export async function fetchAllMasterEditionV1(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'MasterEditionV1');
    return deserializeMasterEditionV1(maybeAccount);
  });
}

export async function safeFetchAllMasterEditionV1(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeMasterEditionV1(maybeAccount as RpcAccount)
    );
}

export function getMasterEditionV1GpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: TmKeyArgs;
      supply: number | bigint;
      maxSupply: OptionOrNullable<number | bigint>;
      printingMint: Base58EncodedAddress;
      oneTimePrintingAuthorizationMint: Base58EncodedAddress;
    }>({
      key: [0, getTmKeyEncoder()],
      supply: [1, getU64Encoder()],
      maxSupply: [9, getOptionEncoder(getU64Encoder())],
      printingMint: [null, getAddressEncoder()],
      oneTimePrintingAuthorizationMint: [null, getAddressEncoder()],
    })
    .deserializeUsing<MasterEditionV1>((account) =>
      deserializeMasterEditionV1(account)
    )
    .whereField('key', TmKey.MasterEditionV1);
}
