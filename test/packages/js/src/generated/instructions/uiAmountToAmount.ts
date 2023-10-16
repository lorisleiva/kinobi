/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type UiAmountToAmountInstructionAccounts = {
  mint: PublicKey | Pda;
};

// Data.
export type UiAmountToAmountInstructionData = {
  discriminator: number;
  uiAmount: bigint;
};

export type UiAmountToAmountInstructionDataArgs = { uiAmount: number | bigint };

export function getUiAmountToAmountInstructionDataSerializer(): Serializer<
  UiAmountToAmountInstructionDataArgs,
  UiAmountToAmountInstructionData
> {
  return mapSerializer<
    UiAmountToAmountInstructionDataArgs,
    any,
    UiAmountToAmountInstructionData
  >(
    struct<UiAmountToAmountInstructionData>(
      [
        ['discriminator', u8()],
        ['uiAmount', u64()],
      ],
      { description: 'UiAmountToAmountInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 24 })
  ) as Serializer<
    UiAmountToAmountInstructionDataArgs,
    UiAmountToAmountInstructionData
  >;
}

// Args.
export type UiAmountToAmountInstructionArgs =
  UiAmountToAmountInstructionDataArgs;

// Instruction.
export function uiAmountToAmount(
  context: Pick<Context, 'programs'>,
  input: UiAmountToAmountInstructionAccounts & UiAmountToAmountInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Accounts.
  const resolvedAccounts = {
    mint: { index: 0, isWritable: false, value: input.mint ?? null },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: UiAmountToAmountInstructionArgs = { ...input };

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
  const data = getUiAmountToAmountInstructionDataSerializer().serialize(
    resolvedArgs as UiAmountToAmountInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}