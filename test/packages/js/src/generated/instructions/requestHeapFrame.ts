/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u32,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Data.
export type RequestHeapFrameInstructionData = {
  discriminator: number;
  /**
   * Requested transaction-wide program heap size in bytes.
   * Must be multiple of 1024. Applies to each program, including CPIs.
   */
  bytes: number;
};

export type RequestHeapFrameInstructionDataArgs = {
  /**
   * Requested transaction-wide program heap size in bytes.
   * Must be multiple of 1024. Applies to each program, including CPIs.
   */
  bytes: number;
};

export function getRequestHeapFrameInstructionDataSerializer(): Serializer<
  RequestHeapFrameInstructionDataArgs,
  RequestHeapFrameInstructionData
> {
  return mapSerializer<
    RequestHeapFrameInstructionDataArgs,
    any,
    RequestHeapFrameInstructionData
  >(
    struct<RequestHeapFrameInstructionData>(
      [
        ['discriminator', u8()],
        ['bytes', u32()],
      ],
      { description: 'RequestHeapFrameInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 1 })
  ) as Serializer<
    RequestHeapFrameInstructionDataArgs,
    RequestHeapFrameInstructionData
  >;
}

// Args.
export type RequestHeapFrameInstructionArgs =
  RequestHeapFrameInstructionDataArgs;

// Instruction.
export function requestHeapFrame(
  context: Pick<Context, 'programs'>,
  input: RequestHeapFrameInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splComputeBudget',
    'ComputeBudget111111111111111111111111111111'
  );

  // Accounts.
  const resolvedAccounts = {} satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: RequestHeapFrameInstructionArgs = { ...input };

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
  const data = getRequestHeapFrameInstructionDataSerializer().serialize(
    resolvedArgs as RequestHeapFrameInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}