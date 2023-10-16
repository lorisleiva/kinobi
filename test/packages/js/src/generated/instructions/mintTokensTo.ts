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
  Signer,
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
export type MintTokensToInstructionAccounts = {
  mint: PublicKey | Pda;
  token: PublicKey | Pda;
  mintAuthority: Signer;
};

// Data.
export type MintTokensToInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type MintTokensToInstructionDataArgs = { amount: number | bigint };

export function getMintTokensToInstructionDataSerializer(): Serializer<
  MintTokensToInstructionDataArgs,
  MintTokensToInstructionData
> {
  return mapSerializer<
    MintTokensToInstructionDataArgs,
    any,
    MintTokensToInstructionData
  >(
    struct<MintTokensToInstructionData>(
      [
        ['discriminator', u8()],
        ['amount', u64()],
      ],
      { description: 'MintTokensToInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 7 })
  ) as Serializer<MintTokensToInstructionDataArgs, MintTokensToInstructionData>;
}

// Args.
export type MintTokensToInstructionArgs = MintTokensToInstructionDataArgs;

// Instruction.
export function mintTokensTo(
  context: Pick<Context, 'programs'>,
  input: MintTokensToInstructionAccounts & MintTokensToInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Accounts.
  const resolvedAccounts = {
    mint: { index: 0, isWritable: true, value: input.mint ?? null },
    token: { index: 1, isWritable: true, value: input.token ?? null },
    mintAuthority: {
      index: 2,
      isWritable: false,
      value: input.mintAuthority ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: MintTokensToInstructionArgs = { ...input };

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
  const data = getMintTokensToInstructionDataSerializer().serialize(
    resolvedArgs as MintTokensToInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}