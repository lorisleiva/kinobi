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
  WritableAccount,
} from '@solana/instructions';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type ConvertMasterEditionV1ToV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountOneTimeAuth extends string | IAccountMeta<string> = string,
  TAccountPrintingMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountOneTimeAuth extends string
        ? WritableAccount<TAccountOneTimeAuth>
        : TAccountOneTimeAuth,
      TAccountPrintingMint extends string
        ? WritableAccount<TAccountPrintingMint>
        : TAccountPrintingMint,
      ...TRemainingAccounts
    ]
  >;

export type ConvertMasterEditionV1ToV2InstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountOneTimeAuth extends string | IAccountMeta<string> = string,
  TAccountPrintingMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountOneTimeAuth extends string
        ? WritableAccount<TAccountOneTimeAuth>
        : TAccountOneTimeAuth,
      TAccountPrintingMint extends string
        ? WritableAccount<TAccountPrintingMint>
        : TAccountPrintingMint,
      ...TRemainingAccounts
    ]
  >;

export type ConvertMasterEditionV1ToV2InstructionData = {
  discriminator: number;
};

export type ConvertMasterEditionV1ToV2InstructionDataArgs = {};

export function getConvertMasterEditionV1ToV2InstructionDataEncoder(): Encoder<ConvertMasterEditionV1ToV2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 12 })
  );
}

export function getConvertMasterEditionV1ToV2InstructionDataDecoder(): Decoder<ConvertMasterEditionV1ToV2InstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getConvertMasterEditionV1ToV2InstructionDataCodec(): Codec<
  ConvertMasterEditionV1ToV2InstructionDataArgs,
  ConvertMasterEditionV1ToV2InstructionData
> {
  return combineCodec(
    getConvertMasterEditionV1ToV2InstructionDataEncoder(),
    getConvertMasterEditionV1ToV2InstructionDataDecoder()
  );
}

export type ConvertMasterEditionV1ToV2Input<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string
> = {
  /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** One time authorization mint */
  oneTimeAuth: Address<TAccountOneTimeAuth>;
  /** Printing mint */
  printingMint: Address<TAccountPrintingMint>;
};

export type ConvertMasterEditionV1ToV2InputWithSigners<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string
> = {
  /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** One time authorization mint */
  oneTimeAuth: Address<TAccountOneTimeAuth>;
  /** Printing mint */
  printingMint: Address<TAccountPrintingMint>;
};

export function getConvertMasterEditionV1ToV2Instruction<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ConvertMasterEditionV1ToV2InputWithSigners<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): ConvertMasterEditionV1ToV2InstructionWithSigners<
  TProgram,
  TAccountMasterEdition,
  TAccountOneTimeAuth,
  TAccountPrintingMint
>;
export function getConvertMasterEditionV1ToV2Instruction<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ConvertMasterEditionV1ToV2Input<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): ConvertMasterEditionV1ToV2Instruction<
  TProgram,
  TAccountMasterEdition,
  TAccountOneTimeAuth,
  TAccountPrintingMint
>;
export function getConvertMasterEditionV1ToV2Instruction<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ConvertMasterEditionV1ToV2Input<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getConvertMasterEditionV1ToV2InstructionRaw<
      TProgram,
      TAccountMasterEdition,
      TAccountOneTimeAuth,
      TAccountPrintingMint
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    oneTimeAuth: { value: input.oneTimeAuth ?? null, isWritable: true },
    printingMint: { value: input.printingMint ?? null, isWritable: true },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getConvertMasterEditionV1ToV2InstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getConvertMasterEditionV1ToV2InstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountOneTimeAuth extends string | IAccountMeta<string> = string,
  TAccountPrintingMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    masterEdition: TAccountMasterEdition extends string
      ? Address<TAccountMasterEdition>
      : TAccountMasterEdition;
    oneTimeAuth: TAccountOneTimeAuth extends string
      ? Address<TAccountOneTimeAuth>
      : TAccountOneTimeAuth;
    printingMint: TAccountPrintingMint extends string
      ? Address<TAccountPrintingMint>
      : TAccountPrintingMint;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.masterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.oneTimeAuth, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.printingMint, AccountRole.WRITABLE),
      ...(remainingAccounts ?? []),
    ],
    data: getConvertMasterEditionV1ToV2InstructionDataEncoder().encode({}),
    programAddress,
  } as ConvertMasterEditionV1ToV2Instruction<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint,
    TRemainingAccounts
  >;
}

export type ParsedConvertMasterEditionV1ToV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
    masterEdition: TAccountMetas[0];
    /** One time authorization mint */
    oneTimeAuth: TAccountMetas[1];
    /** Printing mint */
    printingMint: TAccountMetas[2];
  };
  data: ConvertMasterEditionV1ToV2InstructionData;
};

export function parseConvertMasterEditionV1ToV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedConvertMasterEditionV1ToV2Instruction<TProgram, TAccountMetas> {
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
      masterEdition: getNextAccount(),
      oneTimeAuth: getNextAccount(),
      printingMint: getNextAccount(),
    },
    data: getConvertMasterEditionV1ToV2InstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
