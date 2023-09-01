/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  option,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import { AssetData, AssetDataArgs, getAssetDataSerializer } from '../types';

// Accounts.
export type CreateV2InstructionAccounts = {
  /** Metadata account key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
  masterEdition?: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda | Signer;
  /** Mint authority */
  mintAuthority: Signer;
  /** Payer */
  payer?: Signer;
  /** update authority info */
  updateAuthority: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token program */
  splTokenProgram?: PublicKey | Pda;
};

// Data.
export type CreateV2InstructionData = {
  discriminator: number;
  createV2Discriminator: number;
  assetData: AssetData;
  maxSupply: Option<bigint>;
};

export type CreateV2InstructionDataArgs = {
  assetData: AssetDataArgs;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getCreateV2InstructionDataSerializer(): Serializer<
  CreateV2InstructionDataArgs,
  CreateV2InstructionData
> {
  return mapSerializer<
    CreateV2InstructionDataArgs,
    any,
    CreateV2InstructionData
  >(
    struct<CreateV2InstructionData>(
      [
        ['discriminator', u8()],
        ['createV2Discriminator', u8()],
        ['assetData', getAssetDataSerializer()],
        ['maxSupply', option(u64())],
      ],
      { description: 'CreateV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 41, createV2Discriminator: 1 })
  ) as Serializer<CreateV2InstructionDataArgs, CreateV2InstructionData>;
}

// Args.
export type CreateV2InstructionArgs = CreateV2InstructionDataArgs;

// Instruction.
export function createV2(
  context: Pick<Context, 'payer' | 'programs'>,
  input: CreateV2InstructionAccounts & CreateV2InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    masterEdition: {
      index: 1,
      isWritable: true,
      value: input.masterEdition ?? null,
    },
    mint: { index: 2, isWritable: true, value: input.mint ?? null },
    mintAuthority: {
      index: 3,
      isWritable: false,
      value: input.mintAuthority ?? null,
    },
    payer: { index: 4, isWritable: true, value: input.payer ?? null },
    updateAuthority: {
      index: 5,
      isWritable: false,
      value: input.updateAuthority ?? null,
    },
    systemProgram: {
      index: 6,
      isWritable: false,
      value: input.systemProgram ?? null,
    },
    sysvarInstructions: {
      index: 7,
      isWritable: false,
      value: input.sysvarInstructions ?? null,
    },
    splTokenProgram: {
      index: 8,
      isWritable: false,
      value: input.splTokenProgram ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: CreateV2InstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    );
    resolvedAccounts.systemProgram.isWritable = false;
  }
  if (!resolvedAccounts.sysvarInstructions.value) {
    resolvedAccounts.sysvarInstructions.value = publicKey(
      'Sysvar1nstructions1111111111111111111111111'
    );
  }
  if (!resolvedAccounts.splTokenProgram.value) {
    resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    resolvedAccounts.splTokenProgram.isWritable = false;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getCreateV2InstructionDataSerializer().serialize(
    resolvedArgs as CreateV2InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
