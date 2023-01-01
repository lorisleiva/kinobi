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
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type TransferOutOfEscrowInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Wallet paying for the transaction and new account */
  payer: Signer;
  /** Mint account for the new attribute */
  attributeMint: PublicKey;
  /** Token account source for the new attribute */
  attributeSrc: PublicKey;
  /** Token account, owned by TM, destination for the new attribute */
  attributeDst: PublicKey;
  /** Mint account that the escrow is attached */
  escrowMint: PublicKey;
  /** Token account that holds the token the escrow is attached to */
  escrowAccount: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Associated Token program */
  ataProgram?: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** Authority/creator of the escrow account */
  authority?: Signer;
};

// Arguments.
export type TransferOutOfEscrowInstructionData = {
  discriminator: number;
  amount: bigint;
};
export type TransferOutOfEscrowInstructionArgs = { amount: number | bigint };

export function getTransferOutOfEscrowInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  TransferOutOfEscrowInstructionArgs,
  TransferOutOfEscrowInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    TransferOutOfEscrowInstructionArgs,
    TransferOutOfEscrowInstructionData,
    TransferOutOfEscrowInstructionData
  >(
    s.struct<TransferOutOfEscrowInstructionData>(
      [
        ['discriminator', s.u8],
        ['amount', s.u64],
      ],
      'TransferOutOfEscrowInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 40, ...value } as TransferOutOfEscrowInstructionData)
  ) as Serializer<
    TransferOutOfEscrowInstructionArgs,
    TransferOutOfEscrowInstructionData
  >;
}

// Instruction.
export function transferOutOfEscrow(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: TransferOutOfEscrowInstructionAccounts &
    TransferOutOfEscrowInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Escrow.
  keys.push({ pubkey: input.escrow, isSigner: false, isWritable: false });

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Attribute Mint.
  keys.push({
    pubkey: input.attributeMint,
    isSigner: false,
    isWritable: false,
  });

  // Attribute Src.
  keys.push({ pubkey: input.attributeSrc, isSigner: false, isWritable: false });

  // Attribute Dst.
  keys.push({ pubkey: input.attributeDst, isSigner: false, isWritable: false });

  // Escrow Mint.
  keys.push({ pubkey: input.escrowMint, isSigner: false, isWritable: false });

  // Escrow Account.
  keys.push({
    pubkey: input.escrowAccount,
    isSigner: false,
    isWritable: false,
  });

  // System Program.
  keys.push({
    pubkey:
      input.systemProgram ??
      getProgramAddressWithFallback(
        context,
        'splSystem',
        '11111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Ata Program.
  keys.push({
    pubkey:
      input.ataProgram ??
      getProgramAddressWithFallback(
        context,
        'splAssociatedToken',
        'TokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Token Program.
  keys.push({
    pubkey:
      input.tokenProgram ??
      getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Sysvar Instructions.
  keys.push({
    pubkey:
      input.sysvarInstructions ??
      context.eddsa.createPublicKey(
        'Sysvar1nstructions1111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Authority (optional).
  if (input.authority) {
    signers.push(input.authority);
    keys.push({
      pubkey: input.authority.publicKey,
      isSigner: true,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getTransferOutOfEscrowInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}