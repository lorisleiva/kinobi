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
  getBooleanDecoder,
  getBooleanEncoder,
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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IInstructionWithSigners, TransactionSigner } from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  IInstructionWithBytesCreatedOnChain,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import {
  DataV2,
  DataV2Args,
  getDataV2Decoder,
  getDataV2Encoder,
} from '../types';

// Output.
export type CreateMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type CreateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: DataV2;
  isMutable: boolean;
};

export type CreateMetadataAccountV2InstructionDataArgs = {
  data: DataV2Args;
  isMutable: boolean;
};

export function getCreateMetadataAccountV2InstructionDataEncoder(): Encoder<CreateMetadataAccountV2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      data: DataV2Args;
      isMutable: boolean;
    }>(
      [
        ['discriminator', getU8Encoder()],
        ['data', getDataV2Encoder()],
        ['isMutable', getBooleanEncoder()],
      ],
      { description: 'CreateMetadataAccountV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 16 })
  ) as Encoder<CreateMetadataAccountV2InstructionDataArgs>;
}

export function getCreateMetadataAccountV2InstructionDataDecoder(): Decoder<CreateMetadataAccountV2InstructionData> {
  return getStructDecoder<CreateMetadataAccountV2InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['data', getDataV2Decoder()],
      ['isMutable', getBooleanDecoder()],
    ],
    { description: 'CreateMetadataAccountV2InstructionData' }
  ) as Decoder<CreateMetadataAccountV2InstructionData>;
}

export function getCreateMetadataAccountV2InstructionDataCodec(): Codec<
  CreateMetadataAccountV2InstructionDataArgs,
  CreateMetadataAccountV2InstructionData
> {
  return combineCodec(
    getCreateMetadataAccountV2InstructionDataEncoder(),
    getCreateMetadataAccountV2InstructionDataDecoder()
  );
}

export function createMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    mintAuthority: TAccountMintAuthority extends string
      ? Address<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
  },
  args: CreateMetadataAccountV2InstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.updateAuthority, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateMetadataAccountV2InstructionDataEncoder().encode(args),
    programAddress,
  } as CreateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}

// Input.
export type CreateMetadataAccountV2Input<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Mint authority */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** payer */
  payer?: TransactionSigner<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  data: CreateMetadataAccountV2InstructionDataArgs['data'];
  isMutable: CreateMetadataAccountV2InstructionDataArgs['isMutable'];
};

export async function createMetadataAccountV2<
  TReturn,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CreateMetadataAccountV2Instruction<
        TProgram,
        TAccountMetadata,
        TAccountMint,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountSystemProgram,
        TAccountRent
      >,
      TReturn
    >,
  input: CreateMetadataAccountV2Input<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<TReturn>;
export async function createMetadataAccountV2<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateMetadataAccountV2Input<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  CreateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function createMetadataAccountV2<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountV2Input<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  CreateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function createMetadataAccountV2<
  TReturn,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | CreateMetadataAccountV2Input<
        TAccountMetadata,
        TAccountMint,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountSystemProgram,
        TAccountRent
      >,
  rawInput?: CreateMetadataAccountV2Input<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  | TReturn
  | (IInstruction &
      IInstructionWithSigners &
      IInstructionWithBytesCreatedOnChain)
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateMetadataAccountV2Input<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
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
    typeof createMetadataAccountV2Instruction<
      TProgram,
      TAccountMetadata,
      TAccountMint,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
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
    ...createMetadataAccountV2Instruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateMetadataAccountV2InstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
