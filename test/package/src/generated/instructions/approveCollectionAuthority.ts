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
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@metaplex-foundation/umi';

// Accounts.
export type ApproveCollectionAuthorityInstructionAccounts = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: PublicKey;
  /** A Collection Authority */
  newCollectionAuthority: PublicKey;
  /** Update Authority of Collection NFT */
  updateAuthority: Signer;
  /** Payer */
  payer?: Signer;
  /** Collection Metadata account */
  metadata: PublicKey;
  /** Mint of Collection Metadata */
  mint: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Arguments.
export type ApproveCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type ApproveCollectionAuthorityInstructionDataArgs = {};

export function getApproveCollectionAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ApproveCollectionAuthorityInstructionDataArgs,
  ApproveCollectionAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ApproveCollectionAuthorityInstructionDataArgs,
    ApproveCollectionAuthorityInstructionData,
    ApproveCollectionAuthorityInstructionData
  >(
    s.struct<ApproveCollectionAuthorityInstructionData>(
      [['discriminator', s.u8()]],
      { description: 'ApproveCollectionAuthorityInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 23,
      } as ApproveCollectionAuthorityInstructionData)
  ) as Serializer<
    ApproveCollectionAuthorityInstructionDataArgs,
    ApproveCollectionAuthorityInstructionData
  >;
}

// Instruction.
export function approveCollectionAuthority(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: ApproveCollectionAuthorityInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const collectionAuthorityRecordAccount = input.collectionAuthorityRecord;
  const newCollectionAuthorityAccount = input.newCollectionAuthority;
  const updateAuthorityAccount = input.updateAuthority;
  const payerAccount = input.payer ?? context.payer;
  const metadataAccount = input.metadata;
  const mintAccount = input.mint;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const rentAccount = input.rent;

  // Collection Authority Record.
  keys.push({
    pubkey: collectionAuthorityRecordAccount,
    isSigner: false,
    isWritable: isWritable(collectionAuthorityRecordAccount, true),
  });

  // New Collection Authority.
  keys.push({
    pubkey: newCollectionAuthorityAccount,
    isSigner: false,
    isWritable: isWritable(newCollectionAuthorityAccount, false),
  });

  // Update Authority.
  signers.push(updateAuthorityAccount);
  keys.push({
    pubkey: updateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(updateAuthorityAccount, true),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent (optional).
  if (rentAccount) {
    keys.push({
      pubkey: rentAccount,
      isSigner: false,
      isWritable: isWritable(rentAccount, false),
    });
  }

  // Data.
  const data = getApproveCollectionAuthorityInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
