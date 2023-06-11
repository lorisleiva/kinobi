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
import { addObjectProperty, isWritable } from '../shared';

// Accounts.
export type BurnEditionNftInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** NFT owner */
  owner: Signer;
  /** Mint of the print edition NFT */
  printEditionMint: PublicKey | Pda;
  /** Mint of the original/master NFT */
  masterEditionMint: PublicKey | Pda;
  /** Token account the print edition NFT is in */
  printEditionTokenAccount: PublicKey | Pda;
  /** Token account the Master Edition NFT is in */
  masterEditionTokenAccount: PublicKey | Pda;
  /** MasterEdition2 of the original NFT */
  masterEditionAccount: PublicKey | Pda;
  /** Print Edition account of the NFT */
  printEditionAccount: PublicKey | Pda;
  /** Edition Marker PDA of the NFT */
  editionMarkerAccount: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
};

// Data.
export type BurnEditionNftInstructionData = { discriminator: number };

export type BurnEditionNftInstructionDataArgs = {};

export function getBurnEditionNftInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  BurnEditionNftInstructionDataArgs,
  BurnEditionNftInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    BurnEditionNftInstructionDataArgs,
    any,
    BurnEditionNftInstructionData
  >(
    s.struct<BurnEditionNftInstructionData>([['discriminator', s.u8()]], {
      description: 'BurnEditionNftInstructionData',
    }),
    (value) => ({ ...value, discriminator: 37 })
  ) as Serializer<
    BurnEditionNftInstructionDataArgs,
    BurnEditionNftInstructionData
  >;
}

// Instruction.
export function burnEditionNft(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: BurnEditionNftInstructionAccounts
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
  addObjectProperty(
    resolvingAccounts,
    'splTokenProgram',
    input.splTokenProgram ?? {
      ...context.programs.getPublicKey(
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
      isWritable: false,
    }
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata),
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

  // Print Edition Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.printEditionMint),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.printEditionMint, true),
  });

  // Master Edition Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.masterEditionMint),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEditionMint, false),
  });

  // Print Edition Token Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.printEditionTokenAccount),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.printEditionTokenAccount, true),
  });

  // Master Edition Token Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.masterEditionTokenAccount),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEditionTokenAccount, false),
  });

  // Master Edition Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.masterEditionAccount),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEditionAccount, true),
  });

  // Print Edition Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.printEditionAccount),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.printEditionAccount, true),
  });

  // Edition Marker Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.editionMarkerAccount),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.editionMarkerAccount, true),
  });

  // Spl Token Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.splTokenProgram),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.splTokenProgram, false),
  });

  // Data.
  const data = getBurnEditionNftInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
