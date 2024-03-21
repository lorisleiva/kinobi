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
import {
  ResolvedAccount,
  expectProgramDerivedAddress,
  getAccountMetasWithSigners,
} from '../shared';
import {
  TaCreateArgs,
  TaCreateArgsArgs,
  getTaCreateArgsDecoder,
  getTaCreateArgsEncoder,
} from '../types';

export type CreateRuleSetInstruction<
  TProgram extends string = typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSetPda extends string | IAccountMeta<string> = string,
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
      TAccountRuleSetPda extends string
        ? WritableAccount<TAccountRuleSetPda>
        : TAccountRuleSetPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
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

export function getCreateRuleSetInstructionDataEncoder(): Encoder<CreateRuleSetInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['createArgs', getTaCreateArgsEncoder()],
      ['ruleSetBump', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  );
}

export function getCreateRuleSetInstructionDataDecoder(): Decoder<CreateRuleSetInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['createArgs', getTaCreateArgsDecoder()],
    ['ruleSetBump', getU8Decoder()],
  ]);
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

export type CreateRuleSetInput<
  TAccountPayer extends string = string,
  TAccountRuleSetPda extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  /** Payer and creator of the RuleSet */
  payer: TransactionSigner<TAccountPayer>;
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
>(
  input: CreateRuleSetInput<
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >
): CreateRuleSetInstruction<
  typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
  TAccountPayer,
  TAccountRuleSetPda,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    ruleSetPda: { value: input.ruleSetPda ?? null, isWritable: true },
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

  const instruction = {
    accounts: [
      accountMetas.payer,
      accountMetas.ruleSetPda,
      accountMetas.systemProgram,
    ],
    programAddress,
    data: getCreateRuleSetInstructionDataEncoder().encode(
      args as CreateRuleSetInstructionDataArgs
    ),
  } as CreateRuleSetInstruction<
    typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedCreateRuleSetInstruction<
  TProgram extends string = typeof MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Payer and creator of the RuleSet */
    payer: TAccountMetas[0];
    /** The PDA account where the RuleSet is stored */
    ruleSetPda: TAccountMetas[1];
    /** System program */
    systemProgram: TAccountMetas[2];
  };
  data: CreateRuleSetInstructionData;
};

export function parseCreateRuleSetInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateRuleSetInstruction<TProgram, TAccountMetas> {
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
      ruleSetPda: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getCreateRuleSetInstructionDataDecoder().decode(instruction.data),
  };
}
