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
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@metaplex-foundation/umi-core';
import { TmKey, getTmKeySerializer } from '../types';

export type MasterEditionV2 = Account<MasterEditionV2AccountData>;

export type MasterEditionV2AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
};

export type MasterEditionV2AccountArgs = {
  supply: number | bigint;
  maxSupply: Option<number | bigint>;
};

export async function fetchMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV2> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'MasterEditionV2');
  return deserializeMasterEditionV2(context, maybeAccount);
}

export async function safeFetchMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV2 | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeMasterEditionV2(context, maybeAccount)
    : null;
}

export async function fetchAllMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV2[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'MasterEditionV2');
    return deserializeMasterEditionV2(context, maybeAccount);
  });
}

export async function safeFetchAllMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV2[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeMasterEditionV2(context, maybeAccount as RpcAccount)
    );
}

export function getMasterEditionV2GpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.get('mplTokenMetadata').publicKey;
  return gpaBuilder(context, programId)
    .registerFields<{
      key: TmKey;
      supply: number | bigint;
      maxSupply: Option<number | bigint>;
    }>([
      ['key', getTmKeySerializer(context)],
      ['supply', s.u64],
      ['maxSupply', s.option(s.u64)],
    ])
    .deserializeUsing<MasterEditionV2>((account) =>
      deserializeMasterEditionV2(context, account)
    )
    .whereField('key', TmKey.MasterEditionV2);
}

export function deserializeMasterEditionV2(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): MasterEditionV2 {
  return deserializeAccount(
    rawAccount,
    getMasterEditionV2AccountDataSerializer(context)
  );
}

export function getMasterEditionV2AccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MasterEditionV2AccountArgs, MasterEditionV2AccountData> {
  const s = context.serializer;
  return mapSerializer<
    MasterEditionV2AccountArgs,
    MasterEditionV2AccountData,
    MasterEditionV2AccountData
  >(
    s.struct<MasterEditionV2AccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['supply', s.u64],
        ['maxSupply', s.option(s.u64)],
      ],
      'MasterEditionV2'
    ),
    (value) =>
      ({ ...value, key: TmKey.MasterEditionV2 } as MasterEditionV2AccountData)
  ) as Serializer<MasterEditionV2AccountArgs, MasterEditionV2AccountData>;
}

export function getMasterEditionV2Size(
  context: Pick<Context, 'serializer'>
): number | null {
  return getMasterEditionV2AccountDataSerializer(context).fixedSize;
}

export function findMasterEditionV2Pda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const s = context.serializer;
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;
  return context.eddsa.findPda(programId, [
    s.variableString().serialize('metadata'),
    programId.bytes,
    s.publicKey.serialize(seeds.mint),
    s.variableString().serialize('edition'),
  ]);
}
