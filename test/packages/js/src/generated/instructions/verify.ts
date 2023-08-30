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
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import { VerifyArgs, VerifyArgsArgs, getVerifyArgsSerializer } from '../types';

// Accounts.
export type VerifyInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Collection Update authority */
  collectionAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey | Pda;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey | Pda;
};

// Data.
export type VerifyInstructionData = {
  discriminator: number;
  verifyArgs: VerifyArgs;
};

export type VerifyInstructionDataArgs = { verifyArgs: VerifyArgsArgs };

export function getVerifyInstructionDataSerializer(): Serializer<
  VerifyInstructionDataArgs,
  VerifyInstructionData
> {
  return mapSerializer<VerifyInstructionDataArgs, any, VerifyInstructionData>(
    struct<VerifyInstructionData>(
      [
        ['discriminator', u8()],
        ['verifyArgs', getVerifyArgsSerializer()],
      ],
      { description: 'VerifyInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 47 })
  ) as Serializer<VerifyInstructionDataArgs, VerifyInstructionData>;
}

// Args.
export type VerifyInstructionArgs = VerifyInstructionDataArgs;

// Instruction.
export function verify(
  context: Pick<Context, 'payer' | 'programs'>,
  input: VerifyInstructionAccounts & VerifyInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: input.metadata ?? null },
    collectionAuthority: {
      index: 1,
      isWritable: true,
      value: input.collectionAuthority ?? null,
    },
    payer: { index: 2, isWritable: true, value: input.payer ?? null },
    authorizationRules: {
      index: 3,
      isWritable: false,
      value: input.authorizationRules ?? null,
    },
    authorizationRulesProgram: {
      index: 4,
      isWritable: false,
      value: input.authorizationRulesProgram ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: VerifyInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getVerifyInstructionDataSerializer().serialize(
    resolvedArgs as VerifyInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
