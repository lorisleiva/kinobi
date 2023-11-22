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
import { IInstructionWithSigners } from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

// Output.
export type PuffMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      ...TRemainingAccounts
    ]
  >;

export type PuffMetadataInstructionData = { discriminator: number };

export type PuffMetadataInstructionDataArgs = {};

export function getPuffMetadataInstructionDataEncoder(): Encoder<PuffMetadataInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>(
      [['discriminator', getU8Encoder()]],
      { description: 'PuffMetadataInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 14 })
  ) as Encoder<PuffMetadataInstructionDataArgs>;
}

export function getPuffMetadataInstructionDataDecoder(): Decoder<PuffMetadataInstructionData> {
  return getStructDecoder<PuffMetadataInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'PuffMetadataInstructionData' }
  ) as Decoder<PuffMetadataInstructionData>;
}

export function getPuffMetadataInstructionDataCodec(): Codec<
  PuffMetadataInstructionDataArgs,
  PuffMetadataInstructionData
> {
  return combineCodec(
    getPuffMetadataInstructionDataEncoder(),
    getPuffMetadataInstructionDataDecoder()
  );
}

export function puffMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      ...(remainingAccounts ?? []),
    ],
    data: getPuffMetadataInstructionDataEncoder().encode({}),
    programAddress,
  } as PuffMetadataInstruction<TProgram, TAccountMetadata, TRemainingAccounts>;
}

// Input.
export type PuffMetadataInput<TAccountMetadata extends string> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
};

export async function puffMetadata<
  TReturn,
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      PuffMetadataInstruction<TProgram, TAccountMetadata>,
      TReturn
    >,
  input: PuffMetadataInput<TAccountMetadata>
): Promise<TReturn>;
export async function puffMetadata<
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: PuffMetadataInput<TAccountMetadata>
): Promise<
  PuffMetadataInstruction<TProgram, TAccountMetadata> & IInstructionWithSigners
>;
export async function puffMetadata<
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: PuffMetadataInput<TAccountMetadata>
): Promise<
  PuffMetadataInstruction<TProgram, TAccountMetadata> & IInstructionWithSigners
>;
export async function puffMetadata<
  TReturn,
  TAccountMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | PuffMetadataInput<TAccountMetadata>,
  rawInput?: PuffMetadataInput<TAccountMetadata>
): Promise<TReturn | (IInstruction & IInstructionWithSigners)> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as PuffMetadataInput<TAccountMetadata>;

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
    typeof puffMetadataInstruction<TProgram, TAccountMetadata>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
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

  // Instruction.
  const instruction = {
    ...puffMetadataInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
