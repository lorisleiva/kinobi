/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address, ProgramDerivedAddress } from '@solana/addresses';
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
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
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
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  expectProgramDerivedAddress,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import {
  TaCreateArgs,
  TaCreateArgsArgs,
  getTaCreateArgsDecoder,
  getTaCreateArgsEncoder,
} from '../types';

// Output.
export type CreateRuleSetInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSetPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountRuleSetPda extends string
        ? WritableAccount<TAccountRuleSetPda>
        : TAccountRuleSetPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type CreateRuleSetInstructionWithSigners<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSetPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountRuleSetPda extends string
        ? WritableAccount<TAccountRuleSetPda>
        : TAccountRuleSetPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts
    ]
  >;

export type CreateRuleSetInstructionData = {
  discriminator: number;
  createArgs: TaCreateArgs;
  ruleSetBump: number;
};

export type CreateRuleSetInstructionDataArgs = {
  createArgs: TaCreateArgsArgs;
  ruleSetBump: number;
};

export function getCreateRuleSetInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      createArgs: TaCreateArgsArgs;
      ruleSetBump: number;
    }>([
      ['discriminator', getU8Encoder()],
      ['createArgs', getTaCreateArgsEncoder()],
      ['ruleSetBump', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  ) satisfies Encoder<CreateRuleSetInstructionDataArgs>;
}

export function getCreateRuleSetInstructionDataDecoder() {
  return getStructDecoder<CreateRuleSetInstructionData>([
    ['discriminator', getU8Decoder()],
    ['createArgs', getTaCreateArgsDecoder()],
    ['ruleSetBump', getU8Decoder()],
  ]) satisfies Decoder<CreateRuleSetInstructionData>;
}

export function getCreateRuleSetInstructionDataCodec(): Codec<
  CreateRuleSetInstructionDataArgs,
  CreateRuleSetInstructionData
> {
  return combineCodec(
    getCreateRuleSetInstructionDataEncoder(),
    getCreateRuleSetInstructionDataDecoder()
  );
}

// Input.
export type CreateRuleSetInput<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string
> = {
  /** Payer and creator of the RuleSet */
  payer?: Address<TAccountPayer>;
  /** The PDA account where the RuleSet is stored */
  ruleSetPda: ProgramDerivedAddress<TAccountRuleSetPda>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  createArgs: CreateRuleSetInstructionDataArgs['createArgs'];
  ruleSetBump?: CreateRuleSetInstructionDataArgs['ruleSetBump'];
};

// Input.
export type CreateRuleSetInputWithSigners<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string
> = {
  /** Payer and creator of the RuleSet */
  payer?: TransactionSigner<TAccountPayer>;
  /** The PDA account where the RuleSet is stored */
  ruleSetPda: ProgramDerivedAddress<TAccountRuleSetPda>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  createArgs: CreateRuleSetInstructionDataArgs['createArgs'];
  ruleSetBump?: CreateRuleSetInstructionDataArgs['ruleSetBump'];
};

export function getCreateRuleSetInstruction<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateRuleSetInputWithSigners<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >
): CreateRuleSetInstructionWithSigners<
  TProgram,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountRuleSetPda,
  TAccountSystemProgram
>;
export function getCreateRuleSetInstruction<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateRuleSetInput<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >
): CreateRuleSetInstruction<
  TProgram,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountRuleSetPda,
  TAccountSystemProgram
>;
export function getCreateRuleSetInstruction<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  input: CreateRuleSetInputWithSigners<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >
): CreateRuleSetInstructionWithSigners<
  TProgram,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountRuleSetPda,
  TAccountSystemProgram
>;
export function getCreateRuleSetInstruction<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  input: CreateRuleSetInput<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >
): CreateRuleSetInstruction<
  TProgram,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountRuleSetPda,
  TAccountSystemProgram
>;
export function getCreateRuleSetInstruction<
  TAccountPayer extends string,
  TAccountRuleSetPda extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | CreateRuleSetInput<
        TAccountPayer,
        TAccountRuleSetPda,
        TAccountSystemProgram
      >,
  rawInput?: CreateRuleSetInput<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateRuleSetInput<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >;

  // Program address.
  const defaultProgramAddress =
    'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'mplTokenAuthRules',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateRuleSetInstructionRaw<
      TProgram,
      TAccountPayer,
      TAccountRuleSetPda,
      TAccountSystemProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    payer: { value: input.payer ?? null, isWritable: true },
    ruleSetPda: { value: input.ruleSetPda ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }
  if (!args.ruleSetBump) {
    args.ruleSetBump = expectProgramDerivedAddress(
      accounts.ruleSetPda.value
    )[1];
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getCreateRuleSetInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateRuleSetInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getCreateRuleSetInstructionRaw<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSetPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    ruleSetPda: TAccountRuleSetPda extends string
      ? Address<TAccountRuleSetPda>
      : TAccountRuleSetPda;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateRuleSetInstructionDataArgs,
  programAddress: Address<TProgram> = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.ruleSetPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateRuleSetInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateRuleSetInstruction<
    TProgram,
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram,
    TRemainingAccounts
  >;
}
