/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getI64Decoder,
  getI64Encoder,
  getStringDecoder,
  getStringEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type CreateFrequencyRuleInstruction<
  TProgram extends string = typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFrequencyPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountFrequencyPda extends string
        ? WritableAccount<TAccountFrequencyPda>
        : TAccountFrequencyPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
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
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['ruleSetName', getStringEncoder()],
      ['freqRuleName', getStringEncoder()],
      ['lastUpdate', getI64Encoder()],
      ['period', getI64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 2 })
  );
}

export function getCreateFrequencyRuleInstructionDataDecoder(): Decoder<CreateFrequencyRuleInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['ruleSetName', getStringDecoder()],
    ['freqRuleName', getStringDecoder()],
    ['lastUpdate', getI64Decoder()],
    ['period', getI64Decoder()],
  ]);
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

export type CreateFrequencyRuleInput<
  TAccountPayer extends string = string,
  TAccountFrequencyPda extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  /** Payer and creator of the Frequency Rule */
  payer: TransactionSigner<TAccountPayer>;
  /** The PDA account where the Frequency Rule is stored */
  frequencyPda: Address<TAccountFrequencyPda>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  ruleSetName: CreateFrequencyRuleInstructionDataArgs['ruleSetName'];
  freqRuleName: CreateFrequencyRuleInstructionDataArgs['freqRuleName'];
  lastUpdate: CreateFrequencyRuleInstructionDataArgs['lastUpdate'];
  period: CreateFrequencyRuleInstructionDataArgs['period'];
};

export function getCreateFrequencyRuleInstruction<
  TAccountPayer extends string,
  TAccountFrequencyPda extends string,
  TAccountSystemProgram extends string,
>(
  input: CreateFrequencyRuleInput<
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >
): CreateFrequencyRuleInstruction<
  typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
  TAccountPayer,
  TAccountFrequencyPda,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    frequencyPda: { value: input.frequencyPda ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.frequencyPda),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getCreateFrequencyRuleInstructionDataEncoder().encode(
      args as CreateFrequencyRuleInstructionDataArgs
    ),
  } as CreateFrequencyRuleInstruction<
    typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
    TAccountPayer,
    TAccountFrequencyPda,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedCreateFrequencyRuleInstruction<
  TProgram extends string = typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Payer and creator of the Frequency Rule */
    payer: TAccountMetas[0];
    /** The PDA account where the Frequency Rule is stored */
    frequencyPda: TAccountMetas[1];
    /** System program */
    systemProgram: TAccountMetas[2];
  };
  data: CreateFrequencyRuleInstructionData;
};

export function parseCreateFrequencyRuleInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateFrequencyRuleInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      payer: getNextAccount(),
      frequencyPda: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreateFrequencyRuleInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
