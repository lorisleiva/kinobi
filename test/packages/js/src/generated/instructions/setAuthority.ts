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
  array,
  mapSerializer,
  publicKey as publicKeySerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type SetAuthorityInstructionAccounts = {
  candyMachine: PublicKey | Pda;
  authority?: Signer;
};

// Data.
export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: PublicKey;
};

export type SetAuthorityInstructionDataArgs = { newAuthority: PublicKey };

export function getSetAuthorityInstructionDataSerializer(): Serializer<
  SetAuthorityInstructionDataArgs,
  SetAuthorityInstructionData
> {
  return mapSerializer<
    SetAuthorityInstructionDataArgs,
    any,
    SetAuthorityInstructionData
  >(
    struct<SetAuthorityInstructionData>(
      [
        ['discriminator', array(u8(), { size: 8 })],
        ['newAuthority', publicKeySerializer()],
      ],
      { description: 'SetAuthorityInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
    })
  ) as Serializer<SetAuthorityInstructionDataArgs, SetAuthorityInstructionData>;
}

// Args.
export type SetAuthorityInstructionArgs = SetAuthorityInstructionDataArgs;

// Instruction.
export function setAuthority(
  context: Pick<Context, 'identity' | 'programs'>,
  input: SetAuthorityInstructionAccounts & SetAuthorityInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Accounts.
  const resolvedAccounts = {
    candyMachine: {
      index: 0,
      isWritable: true as boolean,
      value: input.candyMachine ?? null,
    },
    authority: {
      index: 1,
      isWritable: false as boolean,
      value: input.authority ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: SetAuthorityInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.authority.value) {
    resolvedAccounts.authority.value = context.identity;
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
  const data = getSetAuthorityInstructionDataSerializer().serialize(
    resolvedArgs as SetAuthorityInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
