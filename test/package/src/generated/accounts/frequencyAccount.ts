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
import { TaKey } from '../types';

export type FrequencyAccount = Account<FrequencyAccountAccountData>;

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

export function getFrequencyAccountAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<FrequencyAccountAccountDataArgs, FrequencyAccountAccountData> {
  const s = context.serializer;
  return mapSerializer<
    FrequencyAccountAccountDataArgs,
    any,
    FrequencyAccountAccountData
  >(
    s.struct<FrequencyAccountAccountData>(
      [
        ['key', s.u64()],
        ['lastUpdate', s.i64()],
        ['period', s.i64()],
      ],
      { description: 'FrequencyAccountAccountData' }
    ),
    (value) => ({ ...value, key: TaKey.Frequency })
  ) as Serializer<FrequencyAccountAccountDataArgs, FrequencyAccountAccountData>;
}

export function deserializeFrequencyAccount(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): FrequencyAccount {
  return deserializeAccount(
    rawAccount,
    getFrequencyAccountAccountDataSerializer(context)
  );
}

export async function fetchFrequencyAccount(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey),
    options
  );
  assertAccountExists(maybeAccount, 'FrequencyAccount');
  return deserializeFrequencyAccount(context, maybeAccount);
}

export async function safeFetchFrequencyAccount(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey),
    options
  );
  return maybeAccount.exists
    ? deserializeFrequencyAccount(context, maybeAccount)
    : null;
}

export async function fetchAllFrequencyAccount(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<FrequencyAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map(toPublicKey),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'FrequencyAccount');
    return deserializeFrequencyAccount(context, maybeAccount);
  });
}

export async function safeFetchAllFrequencyAccount(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<FrequencyAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map(toPublicKey),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeFrequencyAccount(context, maybeAccount as RpcAccount)
    );
}

export function getFrequencyAccountGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.getPublicKey(
    'mplTokenAuthRules',
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      key: number | bigint;
      lastUpdate: number | bigint;
      period: number | bigint;
    }>({ key: [0, s.u64()], lastUpdate: [8, s.i64()], period: [16, s.i64()] })
    .deserializeUsing<FrequencyAccount>((account) =>
      deserializeFrequencyAccount(context, account)
    )
    .whereField('key', TaKey.Frequency);
}

export function getFrequencyAccountSize(): number {
  return 24;
}

export function findFrequencyAccountPda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>
): Pda {
  const s = context.serializer;
  const programId = context.programs.getPublicKey(
    'mplTokenAuthRules',
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
  );
  return context.eddsa.findPda(programId, [
    s.string({ size: 'variable' }).serialize('frequency_pda'),
    programId.bytes,
  ]);
}

export async function fetchFrequencyAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc' | 'serializer'>,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount> {
  return fetchFrequencyAccount(
    context,
    findFrequencyAccountPda(context),
    options
  );
}

export async function safeFetchFrequencyAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc' | 'serializer'>,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount | null> {
  return safeFetchFrequencyAccount(
    context,
    findFrequencyAccountPda(context),
    options
  );
}
