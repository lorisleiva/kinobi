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
import {
  UseAssetArgs,
  UseAssetArgsArgs,
  getUseAssetArgsSerializer,
} from '../types';

// Accounts.
export type UseAssetInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Token Account Of NFT */
  tokenAccount: PublicKey;
  /** Mint of the Metadata */
  mint: PublicKey;
  /** Use authority or current owner of the asset */
  useAuthority: Signer;
  /** Owner */
  owner: PublicKey;
  /** SPL Token program */
  splTokenProgram?: PublicKey;
  /** Associated Token program */
  ataProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Use Authority Record PDA (if present the program assumes a delegated use authority) */
  useAuthorityRecord?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
};

// Data.
export type UseAssetInstructionData = {
  discriminator: number;
  useAssetArgs: UseAssetArgs;
};

export type UseAssetInstructionDataArgs = { useAssetArgs: UseAssetArgsArgs };

export function getUseAssetInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UseAssetInstructionDataArgs, UseAssetInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    UseAssetInstructionDataArgs,
    UseAssetInstructionData,
    UseAssetInstructionData
  >(
    s.struct<UseAssetInstructionData>(
      [
        ['discriminator', s.u8()],
        ['useAssetArgs', getUseAssetArgsSerializer(context)],
      ],
      { description: 'UseAssetInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 45 } as UseAssetInstructionData)
  ) as Serializer<UseAssetInstructionDataArgs, UseAssetInstructionData>;
}

// Args.
export type UseAssetInstructionArgs = UseAssetInstructionDataArgs;

// Instruction.
export function useAsset(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: UseAssetInstructionAccounts & UseAssetInstructionArgs
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
  const resolvedArgs = {};
  resolvedAccounts.splTokenProgram = resolvedAccounts.splTokenProgram ?? {
    ...context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ),
    isWritable: false,
  };
  resolvedAccounts.ataProgram = resolvedAccounts.ataProgram ?? {
    ...context.programs.getPublicKey(
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    ),
    isWritable: false,
  };
  resolvedAccounts.systemProgram = resolvedAccounts.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  resolvedAccounts.useAuthorityRecord =
    resolvedAccounts.useAuthorityRecord ?? programId;
  resolvedAccounts.authorizationRules =
    resolvedAccounts.authorizationRules ?? programId;
  resolvedAccounts.authorizationRulesProgram =
    resolvedAccounts.authorizationRulesProgram ?? programId;

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Token Account.
  keys.push({
    pubkey: resolvedAccounts.tokenAccount,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, true),
  });

  // Use Authority.
  signers.push(resolvedAccounts.useAuthority);
  keys.push({
    pubkey: resolvedAccounts.useAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.useAuthority, true),
  });

  // Owner.
  keys.push({
    pubkey: resolvedAccounts.owner,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.owner, false),
  });

  // Spl Token Program.
  keys.push({
    pubkey: resolvedAccounts.splTokenProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.splTokenProgram, false),
  });

  // Ata Program.
  keys.push({
    pubkey: resolvedAccounts.ataProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.ataProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: resolvedAccounts.systemProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Use Authority Record.
  keys.push({
    pubkey: resolvedAccounts.useAuthorityRecord,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.useAuthorityRecord, true),
  });

  // Authorization Rules.
  keys.push({
    pubkey: resolvedAccounts.authorizationRules,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authorizationRules, false),
  });

  // Authorization Rules Program.
  keys.push({
    pubkey: resolvedAccounts.authorizationRulesProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authorizationRulesProgram, false),
  });

  // Data.
  const data =
    getUseAssetInstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
