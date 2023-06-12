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
export type TransferOutOfEscrowInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey | Pda;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Wallet paying for the transaction and new account */
  payer?: Signer;
  /** Mint account for the new attribute */
  attributeMint: PublicKey | Pda;
  /** Token account source for the new attribute */
  attributeSrc: PublicKey | Pda;
  /** Token account, owned by TM, destination for the new attribute */
  attributeDst: PublicKey | Pda;
  /** Mint account that the escrow is attached */
  escrowMint: PublicKey | Pda;
  /** Token account that holds the token the escrow is attached to */
  escrowAccount: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Associated Token program */
  ataProgram?: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** Authority/creator of the escrow account */
  authority?: Signer;
};

// Data.
export type TransferOutOfEscrowInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type TransferOutOfEscrowInstructionDataArgs = {
  amount: number | bigint;
};

export function getTransferOutOfEscrowInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  TransferOutOfEscrowInstructionDataArgs,
  TransferOutOfEscrowInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    TransferOutOfEscrowInstructionDataArgs,
    any,
    TransferOutOfEscrowInstructionData
  >(
    s.struct<TransferOutOfEscrowInstructionData>(
      [
        ['discriminator', s.u8()],
        ['amount', s.u64()],
      ],
      { description: 'TransferOutOfEscrowInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 40 })
  ) as Serializer<
    TransferOutOfEscrowInstructionDataArgs,
    TransferOutOfEscrowInstructionData
  >;
}

// Args.
export type TransferOutOfEscrowInstructionArgs =
  TransferOutOfEscrowInstructionDataArgs;

// Instruction.
export function transferOutOfEscrow(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: TransferOutOfEscrowInstructionAccounts &
    TransferOutOfEscrowInstructionArgs
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
  const resolvingArgs = {};
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(
    resolvingAccounts,
    'systemProgram',
    input.systemProgram ?? {
      ...context.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'ataProgram',
    input.ataProgram ?? {
      ...context.programs.getPublicKey(
        'splAssociatedToken',
        'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'tokenProgram',
    input.tokenProgram ?? {
      ...context.programs.getPublicKey(
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'sysvarInstructions',
    input.sysvarInstructions ??
      publicKey('Sysvar1nstructions1111111111111111111111111')
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // Escrow.
  keys.push({
    pubkey: publicKey(resolvedAccounts.escrow, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.escrow, false),
  });

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // Attribute Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.attributeMint, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.attributeMint, false),
  });

  // Attribute Src.
  keys.push({
    pubkey: publicKey(resolvedAccounts.attributeSrc, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.attributeSrc, true),
  });

  // Attribute Dst.
  keys.push({
    pubkey: publicKey(resolvedAccounts.attributeDst, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.attributeDst, true),
  });

  // Escrow Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.escrowMint, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.escrowMint, false),
  });

  // Escrow Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.escrowAccount, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.escrowAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.systemProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Ata Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.ataProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.ataProgram, false),
  });

  // Token Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.tokenProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenProgram, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: publicKey(resolvedAccounts.sysvarInstructions, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.sysvarInstructions, false),
  });

  // Authority (optional).
  if (resolvedAccounts.authority) {
    signers.push(resolvedAccounts.authority);
    keys.push({
      pubkey: resolvedAccounts.authority.publicKey,
      isSigner: true,
      isWritable: isWritable(resolvedAccounts.authority, false),
    });
  }

  // Data.
  const data =
    getTransferOutOfEscrowInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
