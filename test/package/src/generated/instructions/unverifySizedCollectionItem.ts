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
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type UnverifySizedCollectionItemInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Collection Authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey | Pda;
  /** Metadata Account of the Collection */
  collection: PublicKey | Pda;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey | Pda;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: PublicKey | Pda;
};

// Data.
export type UnverifySizedCollectionItemInstructionData = {
  discriminator: number;
};

export type UnverifySizedCollectionItemInstructionDataArgs = {};

/** @deprecated Use `getUnverifySizedCollectionItemInstructionDataSerializer()` without any argument instead. */
export function getUnverifySizedCollectionItemInstructionDataSerializer(
  _context: object
): Serializer<
  UnverifySizedCollectionItemInstructionDataArgs,
  UnverifySizedCollectionItemInstructionData
>;
export function getUnverifySizedCollectionItemInstructionDataSerializer(): Serializer<
  UnverifySizedCollectionItemInstructionDataArgs,
  UnverifySizedCollectionItemInstructionData
>;
export function getUnverifySizedCollectionItemInstructionDataSerializer(
  _context: object = {}
): Serializer<
  UnverifySizedCollectionItemInstructionDataArgs,
  UnverifySizedCollectionItemInstructionData
> {
  return mapSerializer<
    UnverifySizedCollectionItemInstructionDataArgs,
    any,
    UnverifySizedCollectionItemInstructionData
  >(
    struct<UnverifySizedCollectionItemInstructionData>(
      [['discriminator', u8()]],
      { description: 'UnverifySizedCollectionItemInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 31 })
  ) as Serializer<
    UnverifySizedCollectionItemInstructionDataArgs,
    UnverifySizedCollectionItemInstructionData
  >;
}

// Instruction.
export function unverifySizedCollectionItem(
  context: Pick<Context, 'programs' | 'payer'>,
  input: UnverifySizedCollectionItemInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    metadata: [input.metadata, true] as const,
    collectionAuthority: [input.collectionAuthority, false] as const,
    collectionMint: [input.collectionMint, false] as const,
    collection: [input.collection, true] as const,
    collectionMasterEditionAccount: [
      input.collectionMasterEditionAccount,
      false,
    ] as const,
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
    'collectionAuthorityRecord',
    input.collectionAuthorityRecord
      ? ([input.collectionAuthorityRecord, false] as const)
      : ([programId, false] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.collection, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionMasterEditionAccount,
    false
  );
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.collectionAuthorityRecord,
    false
  );

  // Data.
  const data =
    getUnverifySizedCollectionItemInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
