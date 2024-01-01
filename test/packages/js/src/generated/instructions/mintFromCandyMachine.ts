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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type MintFromCandyMachineInstructionAccounts = {
  candyMachine: PublicKey | Pda;
  authorityPda: PublicKey | Pda;
  mintAuthority: Signer;
  payer?: Signer;
  nftMint: PublicKey | Pda;
  nftMintAuthority?: Signer;
  nftMetadata: PublicKey | Pda;
  nftMasterEdition: PublicKey | Pda;
  collectionAuthorityRecord: PublicKey | Pda;
  collectionMint: PublicKey | Pda;
  collectionMetadata: PublicKey | Pda;
  collectionMasterEdition: PublicKey | Pda;
  collectionUpdateAuthority: PublicKey | Pda;
  tokenMetadataProgram?: PublicKey | Pda;
  tokenProgram?: PublicKey | Pda;
  systemProgram?: PublicKey | Pda;
  recentSlothashes: PublicKey | Pda;
};

// Data.
export type MintFromCandyMachineInstructionData = {
  discriminator: Array<number>;
};

export type MintFromCandyMachineInstructionDataArgs = {};

export function getMintFromCandyMachineInstructionDataSerializer(): Serializer<
  MintFromCandyMachineInstructionDataArgs,
  MintFromCandyMachineInstructionData
> {
  return mapSerializer<
    MintFromCandyMachineInstructionDataArgs,
    any,
    MintFromCandyMachineInstructionData
  >(
    struct<MintFromCandyMachineInstructionData>(
      [['discriminator', array(u8(), { size: 8 })]],
      { description: 'MintFromCandyMachineInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [51, 57, 225, 47, 182, 146, 137, 166],
    })
  ) as Serializer<
    MintFromCandyMachineInstructionDataArgs,
    MintFromCandyMachineInstructionData
  >;
}

// Instruction.
export function mintFromCandyMachine(
  context: Pick<Context, 'identity' | 'payer' | 'programs'>,
  input: MintFromCandyMachineInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Accounts.
  const resolvedAccounts = {
    candyMachine: {
      index: 0,
      isWritable: true as boolean,
      value: input.candyMachine ?? null,
    },
    authorityPda: {
      index: 1,
      isWritable: true as boolean,
      value: input.authorityPda ?? null,
    },
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
    nftMint: {
      index: 4,
      isWritable: true as boolean,
      value: input.nftMint ?? null,
    },
    nftMintAuthority: {
      index: 5,
      isWritable: false as boolean,
      value: input.nftMintAuthority ?? null,
    },
    nftMetadata: {
      index: 6,
      isWritable: true as boolean,
      value: input.nftMetadata ?? null,
    },
    nftMasterEdition: {
      index: 7,
      isWritable: true as boolean,
      value: input.nftMasterEdition ?? null,
    },
    collectionAuthorityRecord: {
      index: 8,
      isWritable: false as boolean,
      value: input.collectionAuthorityRecord ?? null,
    },
    collectionMint: {
      index: 9,
      isWritable: false as boolean,
      value: input.collectionMint ?? null,
    },
    collectionMetadata: {
      index: 10,
      isWritable: true as boolean,
      value: input.collectionMetadata ?? null,
    },
    collectionMasterEdition: {
      index: 11,
      isWritable: false as boolean,
      value: input.collectionMasterEdition ?? null,
    },
    collectionUpdateAuthority: {
      index: 12,
      isWritable: false as boolean,
      value: input.collectionUpdateAuthority ?? null,
    },
    tokenMetadataProgram: {
      index: 13,
      isWritable: false as boolean,
      value: input.tokenMetadataProgram ?? null,
    },
    tokenProgram: {
      index: 14,
      isWritable: false as boolean,
      value: input.tokenProgram ?? null,
    },
    systemProgram: {
      index: 15,
      isWritable: false as boolean,
      value: input.systemProgram ?? null,
    },
    recentSlothashes: {
      index: 16,
      isWritable: false as boolean,
      value: input.recentSlothashes ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.nftMintAuthority.value) {
    resolvedAccounts.nftMintAuthority.value = context.identity;
  }
  if (!resolvedAccounts.tokenMetadataProgram.value) {
    resolvedAccounts.tokenMetadataProgram.value = publicKey(
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    );
  }
  if (!resolvedAccounts.tokenProgram.value) {
    resolvedAccounts.tokenProgram.value = publicKey(
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = publicKey(
      '11111111111111111111111111111111'
    );
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
  const data = getMintFromCandyMachineInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
