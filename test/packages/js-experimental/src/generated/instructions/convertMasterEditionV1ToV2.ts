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
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

// Output.
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

// Output.
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

export function getConvertMasterEditionV1ToV2InstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 12 })
  ) satisfies Encoder<ConvertMasterEditionV1ToV2InstructionDataArgs>;
}

export function getConvertMasterEditionV1ToV2InstructionDataDecoder() {
  return getStructDecoder<ConvertMasterEditionV1ToV2InstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<ConvertMasterEditionV1ToV2InstructionData>;
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

// Input.
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

// Input.
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

// Input.
export type ConvertMasterEditionV1ToV2AsyncInput<
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

// Input.
export type ConvertMasterEditionV1ToV2AsyncInputWithSigners<
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

export async function getConvertMasterEditionV1ToV2InstructionAsync<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: ConvertMasterEditionV1ToV2AsyncInputWithSigners<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<
  ConvertMasterEditionV1ToV2InstructionWithSigners<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2InstructionAsync<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: ConvertMasterEditionV1ToV2AsyncInput<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<
  ConvertMasterEditionV1ToV2Instruction<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2InstructionAsync<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ConvertMasterEditionV1ToV2AsyncInputWithSigners<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<
  ConvertMasterEditionV1ToV2InstructionWithSigners<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2InstructionAsync<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ConvertMasterEditionV1ToV2AsyncInput<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<
  ConvertMasterEditionV1ToV2Instruction<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2InstructionAsync<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | ConvertMasterEditionV1ToV2AsyncInput<
        TAccountMasterEdition,
        TAccountOneTimeAuth,
        TAccountPrintingMint
      >,
  rawInput?: ConvertMasterEditionV1ToV2AsyncInput<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<IInstruction> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as ConvertMasterEditionV1ToV2AsyncInput<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

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

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getConvertMasterEditionV1ToV2InstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export async function getConvertMasterEditionV1ToV2Instruction<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: ConvertMasterEditionV1ToV2InputWithSigners<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<
  ConvertMasterEditionV1ToV2InstructionWithSigners<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2Instruction<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: ConvertMasterEditionV1ToV2Input<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<
  ConvertMasterEditionV1ToV2Instruction<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2Instruction<
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
): Promise<
  ConvertMasterEditionV1ToV2InstructionWithSigners<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2Instruction<
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
): Promise<
  ConvertMasterEditionV1ToV2Instruction<
    TProgram,
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
>;
export async function getConvertMasterEditionV1ToV2Instruction<
  TAccountMasterEdition extends string,
  TAccountOneTimeAuth extends string,
  TAccountPrintingMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | ConvertMasterEditionV1ToV2Input<
        TAccountMasterEdition,
        TAccountOneTimeAuth,
        TAccountPrintingMint
      >,
  rawInput?: ConvertMasterEditionV1ToV2Input<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >
): Promise<IInstruction> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as ConvertMasterEditionV1ToV2Input<
    TAccountMasterEdition,
    TAccountOneTimeAuth,
    TAccountPrintingMint
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

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

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getConvertMasterEditionV1ToV2InstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}
