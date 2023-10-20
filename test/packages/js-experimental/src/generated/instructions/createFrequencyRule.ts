/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
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
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type CreateFrequencyRuleInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFrequencyPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountFrequencyPda extends string
        ? WritableAccount<TAccountFrequencyPda>
        : TAccountFrequencyPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram
    ]
  >;

export type CreateFrequencyRuleInstructionData = {
  discriminator: number;
  ruleSetName: string;
  freqRuleName: string;
  lastUpdate: bigint;
  period: bigint;
};

export type CreateFrequencyRuleInstructionDataArgs = {
  ruleSetName: string;
  freqRuleName: string;
  lastUpdate: number | bigint;
  period: number | bigint;
};

export function getCreateFrequencyRuleInstructionDataEncoder(): Encoder<CreateFrequencyRuleInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      ruleSetName: string;
      freqRuleName: string;
      lastUpdate: number | bigint;
      period: number | bigint;
    }>(
      [
        ['discriminator', getU8Encoder()],
        ['ruleSetName', getStringEncoder()],
        ['freqRuleName', getStringEncoder()],
        ['lastUpdate', getI64Encoder()],
        ['period', getI64Encoder()],
      ],
      { description: 'CreateFrequencyRuleInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 2 })
  ) as Encoder<CreateFrequencyRuleInstructionDataArgs>;
}

export function getCreateFrequencyRuleInstructionDataDecoder(): Decoder<CreateFrequencyRuleInstructionData> {
  return getStructDecoder<CreateFrequencyRuleInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['ruleSetName', getStringDecoder()],
      ['freqRuleName', getStringDecoder()],
      ['lastUpdate', getI64Decoder()],
      ['period', getI64Decoder()],
    ],
    { description: 'CreateFrequencyRuleInstructionData' }
  ) as Decoder<CreateFrequencyRuleInstructionData>;
}

export function getCreateFrequencyRuleInstructionDataCodec(): Codec<
  CreateFrequencyRuleInstructionDataArgs,
  CreateFrequencyRuleInstructionData
> {
  return combineCodec(
    getCreateFrequencyRuleInstructionDataEncoder(),
    getCreateFrequencyRuleInstructionDataDecoder()
  );
}

export function createFrequencyRuleInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFrequencyPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111'
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    frequencyPda: TAccountFrequencyPda extends string
      ? Base58EncodedAddress<TAccountFrequencyPda>
      : TAccountFrequencyPda;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateFrequencyRuleInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.frequencyPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getCreateFrequencyRuleInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateFrequencyRuleInstruction<
    TProgram,
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >;
}

// Input.
export type CreateFrequencyRuleInput<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string
> = {
  /** Payer and creator of the Frequency Rule */
  payer?: Signer<TAccountPayer>;
  /** The PDA account where the Frequency Rule is stored */
  frequencyPda: Base58EncodedAddress<TAccountFrequencyPda>;
  /** System program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  ruleSetName: CreateFrequencyRuleInstructionDataArgs['ruleSetName'];
  freqRuleName: CreateFrequencyRuleInstructionDataArgs['freqRuleName'];
  lastUpdate: CreateFrequencyRuleInstructionDataArgs['lastUpdate'];
  period: CreateFrequencyRuleInstructionDataArgs['period'];
};

export async function createFrequencyRule<
  TReturn,
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CreateFrequencyRuleInstruction<
        TProgram,
        TAccountPayer,
        TAccountFrequencyPda,
        TAccountSystemProgram
      >,
      TReturn
    >,
  input: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): Promise<TReturn>;
export async function createFrequencyRule<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): Promise<
  WrappedInstruction<
    CreateFrequencyRuleInstruction<
      TProgram,
      TAccountPayer,
      TAccountFrequencyPda,
      TAccountSystemProgram
    >
  >
>;
export async function createFrequencyRule<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  input: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): Promise<
  WrappedInstruction<
    CreateFrequencyRuleInstruction<
      TProgram,
      TAccountPayer,
      TAccountFrequencyPda,
      TAccountSystemProgram
    >
  >
>;
export async function createFrequencyRule<
  TReturn,
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | CreateFrequencyRuleInput<
        TAccountPayer,
        TAccountFrequencyPda,
        TAccountSystemProgram
      >,
  rawInput?: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >;

  // Program address.
  const defaultProgramAddress =
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Base58EncodedAddress<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenAuthRules',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof createFrequencyRuleInstruction<
      TProgram,
      TAccountPayer,
      TAccountFrequencyPda,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    payer: { value: input.payer ?? null, isWritable: true },
    frequencyPda: { value: input.frequencyPda ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  // TODO

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: createFrequencyRuleInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateFrequencyRuleInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain,
  };
}
