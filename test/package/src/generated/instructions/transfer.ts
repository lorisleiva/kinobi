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
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { resolveMasterEditionFromTokenStandard } from '../../hooked';
import { PickPartial, addObjectProperty, isWritable } from '../shared';
import {
  TokenStandard,
  TokenStandardArgs,
  TransferArgs,
  TransferArgsArgs,
  getTransferArgsSerializer,
} from '../types';

// Accounts.
export type TransferInstructionAccounts = {
  /** Transfer authority (token or delegate owner) */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey;
  /** Token account */
  token: PublicKey;
  /** Token account owner */
  tokenOwner: PublicKey;
  /** Destination token account */
  destination: PublicKey;
  /** Destination token account owner */
  destinationOwner: PublicKey;
  /** Mint of token asset */
  mint: PublicKey;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Master Edition of token asset */
  masterEdition?: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
  /** SPL Associated Token Account program */
  splAtaProgram?: PublicKey;
  /** System Program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
};

// Data.
export type TransferInstructionData = {
  discriminator: number;
  transferArgs: TransferArgs;
};

export type TransferInstructionDataArgs = { transferArgs: TransferArgsArgs };

export function getTransferInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TransferInstructionDataArgs, TransferInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    TransferInstructionDataArgs,
    TransferInstructionData,
    TransferInstructionData
  >(
    s.struct<TransferInstructionData>(
      [
        ['discriminator', s.u8()],
        ['transferArgs', getTransferArgsSerializer(context)],
      ],
      { description: 'TransferInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 46 } as TransferInstructionData)
  ) as Serializer<TransferInstructionDataArgs, TransferInstructionData>;
}

// Extra Args.
export type TransferInstructionExtraArgs = { tokenStandard: TokenStandardArgs };

// Args.
export type TransferInstructionArgs = PickPartial<
  TransferInstructionDataArgs & TransferInstructionExtraArgs,
  'tokenStandard'
>;

// Instruction.
export function transfer(
  context: Pick<
    Context,
    'serializer' | 'programs' | 'eddsa' | 'identity' | 'payer'
  >,
  input: TransferInstructionAccounts & TransferInstructionArgs
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
  resolvedAccounts.authority = resolvedAccounts.authority ?? context.identity;
  resolvedAccounts.delegateRecord =
    resolvedAccounts.delegateRecord ?? programId;
  resolvedArgs.tokenStandard =
    resolvedArgs.tokenStandard ?? TokenStandard.NonFungible;
  resolvedAccounts.masterEdition =
    resolvedAccounts.masterEdition ??
    resolveMasterEditionFromTokenStandard(
      context,
      resolvedAccounts,
      resolvedArgs,
      programId
    );
  resolvedAccounts.splTokenProgram = resolvedAccounts.splTokenProgram ?? {
    ...context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ),
    isWritable: false,
  };
  resolvedAccounts.splAtaProgram = resolvedAccounts.splAtaProgram ?? {
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
  resolvedAccounts.sysvarInstructions =
    resolvedAccounts.sysvarInstructions ??
    publicKey('Sysvar1nstructions1111111111111111111111111');
  resolvedAccounts.authorizationRulesProgram =
    resolvedAccounts.authorizationRulesProgram ?? programId;
  resolvedAccounts.authorizationRules =
    resolvedAccounts.authorizationRules ?? programId;

  // Authority.
  signers.push(resolvedAccounts.authority);
  keys.push({
    pubkey: resolvedAccounts.authority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.authority, true),
  });

  // Delegate Record.
  keys.push({
    pubkey: resolvedAccounts.delegateRecord,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.delegateRecord, true),
  });

  // Token.
  keys.push({
    pubkey: resolvedAccounts.token,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.token, true),
  });

  // Token Owner.
  keys.push({
    pubkey: resolvedAccounts.tokenOwner,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenOwner, false),
  });

  // Destination.
  keys.push({
    pubkey: resolvedAccounts.destination,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.destination, true),
  });

  // Destination Owner.
  keys.push({
    pubkey: resolvedAccounts.destinationOwner,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.destinationOwner, false),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, false),
  });

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Master Edition.
  keys.push({
    pubkey: resolvedAccounts.masterEdition,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, false),
  });

  // Spl Token Program.
  keys.push({
    pubkey: resolvedAccounts.splTokenProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.splTokenProgram, false),
  });

  // Spl Ata Program.
  keys.push({
    pubkey: resolvedAccounts.splAtaProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.splAtaProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: resolvedAccounts.systemProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: resolvedAccounts.sysvarInstructions,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.sysvarInstructions, false),
  });

  // Authorization Rules Program.
  keys.push({
    pubkey: resolvedAccounts.authorizationRulesProgram,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authorizationRulesProgram, false),
  });

  // Authorization Rules.
  keys.push({
    pubkey: resolvedAccounts.authorizationRules,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authorizationRules, false),
  });

  // Data.
  const data =
    getTransferInstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
