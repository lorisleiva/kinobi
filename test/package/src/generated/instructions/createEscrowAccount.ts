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
export type CreateEscrowAccountInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey | Pda;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** Token account of the token */
  tokenAccount: PublicKey | Pda;
  /** Edition account */
  edition: PublicKey | Pda;
  /** Wallet paying for the transaction and new account */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** Authority/creator of the escrow account */
  authority?: Signer;
};

// Data.
export type CreateEscrowAccountInstructionData = { discriminator: number };

export type CreateEscrowAccountInstructionDataArgs = {};

export function getCreateEscrowAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  CreateEscrowAccountInstructionDataArgs,
  CreateEscrowAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    CreateEscrowAccountInstructionDataArgs,
    any,
    CreateEscrowAccountInstructionData
  >(
    s.struct<CreateEscrowAccountInstructionData>([['discriminator', s.u8()]], {
      description: 'CreateEscrowAccountInstructionData',
    }),
    (value) => ({ ...value, discriminator: 38 })
  ) as Serializer<
    CreateEscrowAccountInstructionDataArgs,
    CreateEscrowAccountInstructionData
  >;
}

// Instruction.
export function createEscrowAccount(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: CreateEscrowAccountInstructionAccounts
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
    'sysvarInstructions',
    input.sysvarInstructions ??
      publicKey('Sysvar1nstructions1111111111111111111111111')
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Escrow.
  keys.push({
    pubkey: publicKey(resolvedAccounts.escrow),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.escrow, true),
  });

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.mint),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, false),
  });

  // Token Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.tokenAccount),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenAccount, false),
  });

  // Edition.
  keys.push({
    pubkey: publicKey(resolvedAccounts.edition),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.edition, false),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // System Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.systemProgram),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: publicKey(resolvedAccounts.sysvarInstructions),
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
  const data = getCreateEscrowAccountInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
