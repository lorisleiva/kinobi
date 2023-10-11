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
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type CloseTokenInstructionAccounts = {
  account: PublicKey | Pda;
  destination: PublicKey | Pda;
  owner: Signer;
};

// Data.
export type CloseTokenInstructionData = { discriminator: number };

export type CloseTokenInstructionDataArgs = {};

export function getCloseTokenInstructionDataSerializer(): Serializer<
  CloseTokenInstructionDataArgs,
  CloseTokenInstructionData
> {
  return mapSerializer<
    CloseTokenInstructionDataArgs,
    any,
    CloseTokenInstructionData
  >(
    struct<CloseTokenInstructionData>([['discriminator', u8()]], {
      description: 'CloseTokenInstructionData',
    }),
    (value) => ({ ...value, discriminator: 9 })
  ) as Serializer<CloseTokenInstructionDataArgs, CloseTokenInstructionData>;
}

// Instruction.
export function closeToken(
  context: Pick<Context, 'programs'>,
  input: CloseTokenInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Accounts.
  const resolvedAccounts = {
    account: { index: 0, isWritable: true, value: input.account ?? null },
    destination: {
      index: 1,
      isWritable: true,
      value: input.destination ?? null,
    },
    owner: { index: 2, isWritable: false, value: input.owner ?? null },
  } satisfies ResolvedAccountsWithIndices;

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
  const data = getCloseTokenInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
