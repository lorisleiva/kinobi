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
export type BurnNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** NFT owner */
  owner: Signer;
  /** Mint of the NFT */
  mint: PublicKey;
  /** Token account to close */
  tokenAccount: PublicKey;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
  /** Metadata of the Collection */
  collectionMetadata?: PublicKey;
};

// Data.
export type BurnNftInstructionData = { discriminator: number };

export type BurnNftInstructionDataArgs = {};

export function getBurnNftInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<BurnNftInstructionDataArgs, BurnNftInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    BurnNftInstructionDataArgs,
    BurnNftInstructionData,
    BurnNftInstructionData
  >(
    s.struct<BurnNftInstructionData>([['discriminator', s.u8()]], {
      description: 'BurnNftInstructionData',
    }),
    (value) => ({ ...value, discriminator: 29 } as BurnNftInstructionData)
  ) as Serializer<BurnNftInstructionDataArgs, BurnNftInstructionData>;
}

// Instruction.
export function burnNft(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: BurnNftInstructionAccounts
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
  const resolvedAccounts = {};
  resolvedAccounts.splTokenProgram = resolvedAccounts.splTokenProgram ?? {
    ...context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ),
    isWritable: false,
  };

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Owner.
  signers.push(resolvedAccounts.owner);
  keys.push({
    pubkey: resolvedAccounts.owner.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.owner, true),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, true),
  });

  // Token Account.
  keys.push({
    pubkey: resolvedAccounts.tokenAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenAccount, true),
  });

  // Master Edition Account.
  keys.push({
    pubkey: resolvedAccounts.masterEditionAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEditionAccount, true),
  });

  // Spl Token Program.
  keys.push({
    pubkey: resolvedAccounts.splTokenProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.splTokenProgram, false),
  });

  // Collection Metadata (optional).
  if (resolvedAccounts.collectionMetadata) {
    keys.push({
      pubkey: resolvedAccounts.collectionMetadata,
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.collectionMetadata, true),
    });
  }

  // Data.
  const data = getBurnNftInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
