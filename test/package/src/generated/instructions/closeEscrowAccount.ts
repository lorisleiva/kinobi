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
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type CloseEscrowAccountInstructionAccounts = {
  /** Escrow account */
  escrow: PublicKey | Pda;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Mint account */
  mint: PublicKey | Pda;
  /** Token account */
  tokenAccount: PublicKey | Pda;
  /** Edition account */
  edition: PublicKey | Pda;
  /** Wallet paying for the transaction and new account */
  payer?: Signer;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
};

// Data.
export type CloseEscrowAccountInstructionData = { discriminator: number };

export type CloseEscrowAccountInstructionDataArgs = {};

export function getCloseEscrowAccountInstructionDataSerializer(
  _context: object = {}
): Serializer<
  CloseEscrowAccountInstructionDataArgs,
  CloseEscrowAccountInstructionData
> {
  return mapSerializer<
    CloseEscrowAccountInstructionDataArgs,
    any,
    CloseEscrowAccountInstructionData
  >(
    struct<CloseEscrowAccountInstructionData>([['discriminator', u8()]], {
      description: 'CloseEscrowAccountInstructionData',
    }),
    (value) => ({ ...value, discriminator: 39 })
  ) as Serializer<
    CloseEscrowAccountInstructionDataArgs,
    CloseEscrowAccountInstructionData
  >;
}

// Instruction.
export function closeEscrowAccount(
  context: Pick<Context, 'programs' | 'payer'>,
  input: CloseEscrowAccountInstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    escrow: [input.escrow, true] as const,
    metadata: [input.metadata, true] as const,
    mint: [input.mint, false] as const,
    tokenAccount: [input.tokenAccount, false] as const,
    edition: [input.edition, false] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'sysvarInstructions',
    input.sysvarInstructions
      ? ([input.sysvarInstructions, false] as const)
      : ([
          publicKey('Sysvar1nstructions1111111111111111111111111'),
          false,
        ] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.escrow, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.edition, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);

  // Data.
  const data = getCloseEscrowAccountInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
