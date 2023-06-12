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
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import { TmKey, TmKeyArgs, getTmKeySerializer } from '../types';

export type MasterEditionV2 = Account<MasterEditionV2AccountData>;

export type MasterEditionV2AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
};

export type MasterEditionV2AccountDataArgs = {
  supply: number | bigint;
  maxSupply: Option<number | bigint>;
};

export function getMasterEditionV2AccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MasterEditionV2AccountDataArgs, MasterEditionV2AccountData> {
  const s = context.serializer;
  return mapSerializer<
    MasterEditionV2AccountDataArgs,
    any,
    MasterEditionV2AccountData
  >(
    s.struct<MasterEditionV2AccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['supply', s.u64()],
        ['maxSupply', s.option(s.u64())],
      ],
      { description: 'MasterEditionV2AccountData' }
    ),
    (value) => ({ ...value, key: TmKey.MasterEditionV2 })
  ) as Serializer<MasterEditionV2AccountDataArgs, MasterEditionV2AccountData>;
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

export async function fetchMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV2> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'MasterEditionV2');
  return deserializeMasterEditionV2(context, maybeAccount);
}

export async function safeFetchMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV2 | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists
    ? deserializeMasterEditionV2(context, maybeAccount)
    : null;
}

export async function fetchAllMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV2[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'MasterEditionV2');
    return deserializeMasterEditionV2(context, maybeAccount);
  });
}

export async function safeFetchAllMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV2[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
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
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: TmKeyArgs;
      supply: number | bigint;
      maxSupply: Option<number | bigint>;
    }>({
      key: [0, getTmKeySerializer(context)],
      supply: [1, s.u64()],
      maxSupply: [9, s.option(s.u64())],
    })
    .deserializeUsing<MasterEditionV2>((account) =>
      deserializeMasterEditionV2(context, account)
    )
    .whereField('key', TmKey.MasterEditionV2);
}

export function getMasterEditionV2Size(): number {
  return 282;
}

export function findMasterEditionV2Pda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const s = context.serializer;
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return context.eddsa.findPda(programId, [
    s.string({ size: 'variable' }).serialize('metadata'),
    programId.bytes,
    s.publicKey().serialize(seeds.mint),
    s.string({ size: 'variable' }).serialize('edition'),
  ]);
}

export async function fetchMasterEditionV2FromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc' | 'serializer'>,
  seeds: Parameters<typeof findMasterEditionV2Pda>[1],
  options?: RpcGetAccountOptions
): Promise<MasterEditionV2> {
  return fetchMasterEditionV2(
    context,
    findMasterEditionV2Pda(context, seeds),
    options
  );
}

export async function safeFetchMasterEditionV2FromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc' | 'serializer'>,
  seeds: Parameters<typeof findMasterEditionV2Pda>[1],
  options?: RpcGetAccountOptions
): Promise<MasterEditionV2 | null> {
  return safeFetchMasterEditionV2(
    context,
    findMasterEditionV2Pda(context, seeds),
    options
  );
}
