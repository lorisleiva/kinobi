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
import {
  DelegateRoleArgs,
  TmKey,
  TmKeyArgs,
  getDelegateRoleSerializer,
  getTmKeySerializer,
} from '../types';

export type MasterEditionV1 = Account<MasterEditionV1AccountData>;

export type MasterEditionV1AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
  printingMint: PublicKey;
  oneTimePrintingAuthorizationMint: PublicKey;
};

export type MasterEditionV1AccountDataArgs = {
  supply: number | bigint;
  maxSupply: Option<number | bigint>;
  printingMint: PublicKey;
  oneTimePrintingAuthorizationMint: PublicKey;
};

export function getMasterEditionV1AccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MasterEditionV1AccountDataArgs, MasterEditionV1AccountData> {
  const s = context.serializer;
  return mapSerializer<
    MasterEditionV1AccountDataArgs,
    any,
    MasterEditionV1AccountData
  >(
    s.struct<MasterEditionV1AccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['supply', s.u64()],
        ['maxSupply', s.option(s.u64())],
        ['printingMint', s.publicKey()],
        ['oneTimePrintingAuthorizationMint', s.publicKey()],
      ],
      { description: 'MasterEditionV1AccountData' }
    ),
    (value) => ({ ...value, key: TmKey.MasterEditionV1 })
  ) as Serializer<MasterEditionV1AccountDataArgs, MasterEditionV1AccountData>;
}

export function deserializeMasterEditionV1(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): MasterEditionV1 {
  return deserializeAccount(
    rawAccount,
    getMasterEditionV1AccountDataSerializer(context)
  );
}

export async function fetchMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'MasterEditionV1');
  return deserializeMasterEditionV1(context, maybeAccount);
}

export async function safeFetchMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1 | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists
    ? deserializeMasterEditionV1(context, maybeAccount)
    : null;
}

export async function fetchAllMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'MasterEditionV1');
    return deserializeMasterEditionV1(context, maybeAccount);
  });
}

export async function safeFetchAllMasterEditionV1(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<MasterEditionV1[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeMasterEditionV1(context, maybeAccount as RpcAccount)
    );
}

export function getMasterEditionV1GpaBuilder(
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
      printingMint: PublicKey;
      oneTimePrintingAuthorizationMint: PublicKey;
    }>({
      key: [0, getTmKeySerializer(context)],
      supply: [1, s.u64()],
      maxSupply: [9, s.option(s.u64())],
      printingMint: [null, s.publicKey()],
      oneTimePrintingAuthorizationMint: [null, s.publicKey()],
    })
    .deserializeUsing<MasterEditionV1>((account) =>
      deserializeMasterEditionV1(context, account)
    )
    .whereField('key', TmKey.MasterEditionV1);
}

export function findMasterEditionV1Pda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>,
  seeds: {
    /** The role of the delegate */
    delegateRole: DelegateRoleArgs;
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
    getDelegateRoleSerializer(context).serialize(seeds.delegateRole),
  ]);
}

export async function fetchMasterEditionV1FromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc' | 'serializer'>,
  seeds: Parameters<typeof findMasterEditionV1Pda>[1],
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1> {
  return fetchMasterEditionV1(
    context,
    findMasterEditionV1Pda(context, seeds),
    options
  );
}

export async function safeFetchMasterEditionV1FromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc' | 'serializer'>,
  seeds: Parameters<typeof findMasterEditionV1Pda>[1],
  options?: RpcGetAccountOptions
): Promise<MasterEditionV1 | null> {
  return safeFetchMasterEditionV1(
    context,
    findMasterEditionV1Pda(context, seeds),
    options
  );
}
