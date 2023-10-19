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
import {
  getI64Decoder,
  getI64Encoder,
  getU64Decoder,
  getU64Encoder,
} from '@solana/codecs-numbers';
import { getStringEncoder } from '@solana/codecs-strings';
import {
  Account,
  Context,
  EncodedAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  decodeAccount,
} from '../shared';
import { TaKey } from '../types';

export type FrequencyAccount<TAddress extends string = string> = Account<
  FrequencyAccountAccountData,
  TAddress
>;

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

export function getFrequencyAccountAccountDataEncoder(): Encoder<FrequencyAccountAccountDataArgs> {
  return mapEncoder(
    getStructEncoder<FrequencyAccountAccountData>(
      [
        ['key', getU64Encoder()],
        ['lastUpdate', getI64Encoder()],
        ['period', getI64Encoder()],
      ],
      { description: 'FrequencyAccountAccountData' }
    ),
    (value) =>
      ({ ...value, key: TaKey.Frequency } as FrequencyAccountAccountData)
  ) as Encoder<FrequencyAccountAccountDataArgs>;
}

export function getFrequencyAccountAccountDataDecoder(): Decoder<FrequencyAccountAccountData> {
  return getStructDecoder<FrequencyAccountAccountData>(
    [
      ['key', getU64Decoder()],
      ['lastUpdate', getI64Decoder()],
      ['period', getI64Decoder()],
    ],
    { description: 'FrequencyAccountAccountData' }
  ) as Decoder<FrequencyAccountAccountData>;
}

export function getFrequencyAccountAccountDataCodec(): Codec<
  FrequencyAccountAccountDataArgs,
  FrequencyAccountAccountData
> {
  return combineCodec(
    getFrequencyAccountAccountDataEncoder(),
    getFrequencyAccountAccountDataDecoder()
  );
}

export function decodeFrequencyAccount<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): FrequencyAccount<TAddress> {
  return decodeAccount(encodedAccount, getFrequencyAccountAccountDataDecoder());
}

export async function fetchFrequencyAccount<TAddress extends string = string>(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress<TAddress>,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount<TAddress>> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  assertAccountExists(maybeAccount);
  return decodeFrequencyAccount(maybeAccount);
}

export async function safeFetchFrequencyAccount<
  TAddress extends string = string
>(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress<TAddress>,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount<TAddress> | null> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  return maybeAccount.exists ? decodeFrequencyAccount(maybeAccount) : null;
}

export async function fetchAllFrequencyAccount(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<FrequencyAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount);
    return decodeFrequencyAccount(maybeAccount);
  });
}

export async function safeFetchAllFrequencyAccount(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<FrequencyAccount[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      decodeFrequencyAccount(maybeAccount as EncodedAccount)
    );
}

export function getFrequencyAccountSize(): number {
  return 24;
}

export function findFrequencyAccountPda(
  context: Pick<Context, 'eddsa' | 'programs'>
): ProgramDerivedAddress {
  const programId = context.programs.getPublicKey(
    'mplTokenAuthRules',
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
  );
  return context.eddsa.findPda(programId, [
    getStringEncoder({ size: 'variable' }).encode('frequency_pda'),
    getAddressEncoder().encode(programId),
  ]);
}

export async function fetchFrequencyAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount> {
  return fetchFrequencyAccount(
    context,
    findFrequencyAccountPda(context)[0],
    options
  );
}

export async function safeFetchFrequencyAccountFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  options?: RpcGetAccountOptions
): Promise<FrequencyAccount | null> {
  return safeFetchFrequencyAccount(
    context,
    findFrequencyAccountPda(context)[0],
    options
  );
}
