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
import {
  MigrateArgs,
  MigrateArgsArgs,
  getMigrateArgsSerializer,
} from '../types';

// Accounts.
export type MigrateInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Master edition account */
  masterEdition: PublicKey | Pda;
  /** Token account */
  tokenAccount: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** Update authority */
  updateAuthority: Signer;
  /** Collection metadata account */
  collectionMetadata: PublicKey | Pda;
  /** Token Program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instruction sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
};

// Data.
export type MigrateInstructionData = {
  discriminator: number;
  migrateArgs: MigrateArgs;
};

export type MigrateInstructionDataArgs = { migrateArgs: MigrateArgsArgs };

export function getMigrateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MigrateInstructionDataArgs, MigrateInstructionData> {
  const s = context.serializer;
  return mapSerializer<MigrateInstructionDataArgs, any, MigrateInstructionData>(
    s.struct<MigrateInstructionData>(
      [
        ['discriminator', s.u8()],
        ['migrateArgs', getMigrateArgsSerializer(context)],
      ],
      { description: 'MigrateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 50 })
  ) as Serializer<MigrateInstructionDataArgs, MigrateInstructionData>;
}

// Args.
export type MigrateInstructionArgs = MigrateInstructionDataArgs;

// Instruction.
export function migrate(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: MigrateInstructionAccounts & MigrateInstructionArgs
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
  addObjectProperty(
    resolvingAccounts,
    'authorizationRules',
    input.authorizationRules ?? programId
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Master Edition.
  keys.push({
    pubkey: publicKey(resolvedAccounts.masterEdition, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, false),
  });

  // Token Account.
  keys.push({
    pubkey: publicKey(resolvedAccounts.tokenAccount, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.mint, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, false),
  });

  // Update Authority.
  signers.push(resolvedAccounts.updateAuthority);
  keys.push({
    pubkey: resolvedAccounts.updateAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.updateAuthority, false),
  });

  // Collection Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionMetadata, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMetadata, false),
  });

  // Token Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.tokenProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.systemProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: publicKey(resolvedAccounts.sysvarInstructions, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.sysvarInstructions, false),
  });

  // Authorization Rules.
  keys.push({
    pubkey: publicKey(resolvedAccounts.authorizationRules, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authorizationRules, false),
  });

  // Data.
  const data =
    getMigrateInstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
