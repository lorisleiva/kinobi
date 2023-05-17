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
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@metaplex-foundation/umi';

export type ProgramData = Account<ProgramDataAccountData>;

export type ProgramDataAccountData = {
  discriminator: number;
  slot: bigint;
  upgradeAuthorityAddress: Option<PublicKey>;
  data: Uint8Array;
};

export type ProgramDataAccountDataArgs = {
  slot: number | bigint;
  upgradeAuthorityAddress: Option<PublicKey>;
  data: Uint8Array;
};

export function getProgramDataAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ProgramDataAccountDataArgs, ProgramDataAccountData> {
  const s = context.serializer;
  return mapSerializer<ProgramDataAccountDataArgs, any, ProgramDataAccountData>(
    s.struct<ProgramDataAccountData>(
      [
        ['discriminator', s.u32()],
        ['slot', s.u64()],
        ['upgradeAuthorityAddress', s.option(s.publicKey())],
        ['data', s.bytes()],
      ],
      { description: 'ProgramDataAccountData' }
    ),
    (value) => ({ ...value, discriminator: 3 })
  ) as Serializer<ProgramDataAccountDataArgs, ProgramDataAccountData>;
}

export function deserializeProgramData(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): ProgramData {
  return deserializeAccount(
    rawAccount,
    getProgramDataAccountDataSerializer(context)
  );
}

export async function fetchProgramData(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<ProgramData> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'ProgramData');
  return deserializeProgramData(context, maybeAccount);
}

export async function safeFetchProgramData(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<ProgramData | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeProgramData(context, maybeAccount)
    : null;
}

export async function fetchAllProgramData(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<ProgramData[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'ProgramData');
    return deserializeProgramData(context, maybeAccount);
  });
}

export async function safeFetchAllProgramData(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<ProgramData[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeProgramData(context, maybeAccount as RpcAccount)
    );
}

export function getProgramDataGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.getPublicKey(
    'bpfUpgradeableLoader',
    'BPFLoaderUpgradeab1e11111111111111111111111'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      discriminator: number;
      slot: number | bigint;
      upgradeAuthorityAddress: Option<PublicKey>;
      data: Uint8Array;
    }>({
      discriminator: [0, s.u32()],
      slot: [4, s.u64()],
      upgradeAuthorityAddress: [12, s.option(s.publicKey())],
      data: [null, s.bytes()],
    })
    .deserializeUsing<ProgramData>((account) =>
      deserializeProgramData(context, account)
    )
    .whereField('discriminator', 3);
}
