/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  bool,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import { DataV2, DataV2Args, getDataV2Serializer } from '../types';

// Accounts.
export type CreateMetadataAccountV2InstructionAccounts = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** Mint authority */
  mintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** update authority info */
  updateAuthority: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type CreateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: DataV2;
  isMutable: boolean;
};

export type CreateMetadataAccountV2InstructionDataArgs = {
  data: DataV2Args;
  isMutable: boolean;
};

export function getCreateMetadataAccountV2InstructionDataSerializer(): Serializer<
  CreateMetadataAccountV2InstructionDataArgs,
  CreateMetadataAccountV2InstructionData
> {
  return mapSerializer<
    CreateMetadataAccountV2InstructionDataArgs,
    any,
    CreateMetadataAccountV2InstructionData
  >(
    struct<CreateMetadataAccountV2InstructionData>(
      [
        ['discriminator', u8()],
        ['data', getDataV2Serializer()],
        ['isMutable', bool()],
      ],
      { description: 'CreateMetadataAccountV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 16 })
  ) as Serializer<
    CreateMetadataAccountV2InstructionDataArgs,
    CreateMetadataAccountV2InstructionData
  >;
}

// Args.
export type CreateMetadataAccountV2InstructionArgs =
  CreateMetadataAccountV2InstructionDataArgs;

// Instruction.
export function createMetadataAccountV2(
  context: Pick<Context, 'payer' | 'programs'>,
  input: CreateMetadataAccountV2InstructionAccounts &
    CreateMetadataAccountV2InstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts = {
    metadata: {
      index: 0,
      isWritable: true as boolean,
      value: input.metadata ?? null,
    },
    mint: { index: 1, isWritable: false as boolean, value: input.mint ?? null },
    mintAuthority: {
      index: 2,
      isWritable: false as boolean,
      value: input.mintAuthority ?? null,
    },
    payer: {
      index: 3,
      isWritable: true as boolean,
      value: input.payer ?? null,
    },
    updateAuthority: {
      index: 4,
      isWritable: false as boolean,
      value: input.updateAuthority ?? null,
    },
    systemProgram: {
      index: 5,
      isWritable: false as boolean,
      value: input.systemProgram ?? null,
    },
    rent: { index: 6, isWritable: false as boolean, value: input.rent ?? null },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: CreateMetadataAccountV2InstructionArgs = { ...input };

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
  const data = getCreateMetadataAccountV2InstructionDataSerializer().serialize(
    resolvedArgs as CreateMetadataAccountV2InstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
