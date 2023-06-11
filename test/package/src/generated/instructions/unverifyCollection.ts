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
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { isWritable } from '../shared';

// Accounts.
export type UnverifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Collection Authority */
  collectionAuthority: Signer;
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
export type UnverifyCollectionInstructionData = { discriminator: number };

export type UnverifyCollectionInstructionDataArgs = {};

export function getUnverifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UnverifyCollectionInstructionDataArgs,
  UnverifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UnverifyCollectionInstructionDataArgs,
    any,
    UnverifyCollectionInstructionData
  >(
    s.struct<UnverifyCollectionInstructionData>([['discriminator', s.u8()]], {
      description: 'UnverifyCollectionInstructionData',
    }),
    (value) => ({ ...value, discriminator: 22 })
  ) as Serializer<
    UnverifyCollectionInstructionDataArgs,
    UnverifyCollectionInstructionData
  >;
}

// Instruction.
export function unverifyCollection(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: UnverifyCollectionInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Collection Authority.
  signers.push(resolvedAccounts.collectionAuthority);
  keys.push({
    pubkey: resolvedAccounts.collectionAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.collectionAuthority, true),
  });

  // Collection Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionMint),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMint, false),
  });

  // Collection.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collection),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collection, false),
  });

  // Collection Master Edition Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionMasterEditionAccount),
    isSigner: false,
    isWritable: isWritable(
      resolvedAccounts.collectionMasterEditionAccount,
      false
    ),
  });

  // Collection Authority Record (optional).
  if (resolvedAccounts.collectionAuthorityRecord) {
    keys.push({
      pubkey: publicKey(resolvedAccounts.collectionAuthorityRecord),
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.collectionAuthorityRecord, false),
    });
  }

  // Data.
  const data = getUnverifyCollectionInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
