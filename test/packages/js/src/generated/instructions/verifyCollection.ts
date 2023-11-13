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
export type VerifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey | Pda;
  /** Metadata Account of the Collection */
  collection: PublicKey | Pda;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey | Pda;
};

// Data.
export type VerifyCollectionInstructionData = { discriminator: number };

export type VerifyCollectionInstructionDataArgs = {};

export function getVerifyCollectionInstructionDataSerializer(): Serializer<
  VerifyCollectionInstructionDataArgs,
  VerifyCollectionInstructionData
> {
  return mapSerializer<
    VerifyCollectionInstructionDataArgs,
    any,
    VerifyCollectionInstructionData
  >(
    struct<VerifyCollectionInstructionData>([['discriminator', u8()]], {
      description: 'VerifyCollectionInstructionData',
    }),
    (value) => ({ ...value, discriminator: 18 })
  ) as Serializer<
    VerifyCollectionInstructionDataArgs,
    VerifyCollectionInstructionData
  >;
}

// Instruction.
export function verifyCollection(
  context: Pick<Context, 'payer' | 'programs'>,
  input: VerifyCollectionInstructionAccounts
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
    collectionAuthority: {
      index: 1,
      isWritable: true as boolean,
      value: input.collectionAuthority ?? null,
    },
    payer: {
      index: 2,
      isWritable: true as boolean,
      value: input.payer ?? null,
    },
    collectionMint: {
      index: 3,
      isWritable: false as boolean,
      value: input.collectionMint ?? null,
    },
    collection: {
      index: 4,
      isWritable: false as boolean,
      value: input.collection ?? null,
    },
    collectionMasterEditionAccount: {
      index: 5,
      isWritable: false as boolean,
      value: input.collectionMasterEditionAccount ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
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
  const data = getVerifyCollectionInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
