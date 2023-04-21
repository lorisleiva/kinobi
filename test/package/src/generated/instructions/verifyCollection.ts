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
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';

// Accounts.
export type VerifyCollectionInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Mint of the Collection */
  collectionMint: PublicKey;
  /** Metadata Account of the Collection */
  collection: PublicKey;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: PublicKey;
};

// Data.
export type VerifyCollectionInstructionData = { discriminator: number };

export type VerifyCollectionInstructionDataArgs = {};

export function getVerifyCollectionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  VerifyCollectionInstructionDataArgs,
  VerifyCollectionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    VerifyCollectionInstructionDataArgs,
    VerifyCollectionInstructionData,
    VerifyCollectionInstructionData
  >(
    s.struct<VerifyCollectionInstructionData>([['discriminator', s.u8()]], {
      description: 'VerifyCollectionInstructionData',
    }),
    (value) =>
      ({ ...value, discriminator: 18 } as VerifyCollectionInstructionData)
  ) as Serializer<
    VerifyCollectionInstructionDataArgs,
    VerifyCollectionInstructionData
  >;
}

// Instruction.
export function verifyCollection(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: VerifyCollectionInstructionAccounts
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
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
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

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // Collection Mint.
  keys.push({
    pubkey: resolvedAccounts.collectionMint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMint, false),
  });

  // Collection.
  keys.push({
    pubkey: resolvedAccounts.collection,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collection, false),
  });

  // Collection Master Edition Account.
  keys.push({
    pubkey: resolvedAccounts.collectionMasterEditionAccount,
    isSigner: false,
    isWritable: isWritable(
      resolvedAccounts.collectionMasterEditionAccount,
      false
    ),
  });

  // Data.
  const data = getVerifyCollectionInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
