/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';

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

export function getMintFromCandyMachineInstructionDataSerializer(
  _context: object = {}
): Serializer<
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
  context: Pick<Context, 'programs' | 'identity' | 'payer'>,
  input: MintFromCandyMachineInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    candyMachine: [input.candyMachine, true] as const,
    authorityPda: [input.authorityPda, true] as const,
    mintAuthority: [input.mintAuthority, false] as const,
    nftMint: [input.nftMint, true] as const,
    nftMetadata: [input.nftMetadata, true] as const,
    nftMasterEdition: [input.nftMasterEdition, true] as const,
    collectionAuthorityRecord: [
      input.collectionAuthorityRecord,
      false,
    ] as const,
    collectionMint: [input.collectionMint, false] as const,
    collectionMetadata: [input.collectionMetadata, true] as const,
    collectionMasterEdition: [input.collectionMasterEdition, false] as const,
    collectionUpdateAuthority: [
      input.collectionUpdateAuthority,
      false,
    ] as const,
    recentSlothashes: [input.recentSlothashes, false] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'nftMintAuthority',
    input.nftMintAuthority
      ? ([input.nftMintAuthority, false] as const)
      : ([context.identity, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenMetadataProgram',
    input.tokenMetadataProgram
      ? ([input.tokenMetadataProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'mplTokenMetadata',
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenProgram',
    input.tokenProgram
      ? ([input.tokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.candyMachine, false);
  addAccountMeta(keys, signers, resolvedAccounts.authorityPda, false);
  addAccountMeta(keys, signers, resolvedAccounts.mintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.nftMasterEdition, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionAuthorityRecord,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionMasterEdition,
    false
  );
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionUpdateAuthority,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.tokenMetadataProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.recentSlothashes, false);

  // Data.
  const data = getMintFromCandyMachineInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
