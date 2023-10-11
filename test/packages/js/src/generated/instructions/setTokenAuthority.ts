/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  TokenAuthorityType,
  TokenAuthorityTypeArgs,
  getTokenAuthorityTypeSerializer,
} from '../types';

// Accounts.
export type SetTokenAuthorityInstructionAccounts = {
  owned: PublicKey | Pda;
  owner: PublicKey | Pda | Signer;
};

// Data.
export type SetTokenAuthorityInstructionData = {
  discriminator: number;
  authorityType: TokenAuthorityType;
  newAuthority: Option<PublicKey>;
};

export type SetTokenAuthorityInstructionDataArgs = {
  authorityType: TokenAuthorityTypeArgs;
  newAuthority: OptionOrNullable<PublicKey>;
};

export function getSetTokenAuthorityInstructionDataSerializer(): Serializer<
  SetTokenAuthorityInstructionDataArgs,
  SetTokenAuthorityInstructionData
> {
  return mapSerializer<
    SetTokenAuthorityInstructionDataArgs,
    any,
    SetTokenAuthorityInstructionData
  >(
    struct<SetTokenAuthorityInstructionData>(
      [
        ['discriminator', u8()],
        ['authorityType', getTokenAuthorityTypeSerializer()],
        ['newAuthority', option(publicKeySerializer())],
      ],
      { description: 'SetTokenAuthorityInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 6 })
  ) as Serializer<
    SetTokenAuthorityInstructionDataArgs,
    SetTokenAuthorityInstructionData
  >;
}

// Args.
export type SetTokenAuthorityInstructionArgs =
  SetTokenAuthorityInstructionDataArgs;

// Instruction.
export function setTokenAuthority(
  context: Pick<Context, 'programs'>,
  input: SetTokenAuthorityInstructionAccounts & SetTokenAuthorityInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Accounts.
  const resolvedAccounts = {
    owned: { index: 0, isWritable: true, value: input.owned ?? null },
    owner: { index: 1, isWritable: false, value: input.owner ?? null },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: SetTokenAuthorityInstructionArgs = { ...input };

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
  const data = getSetTokenAuthorityInstructionDataSerializer().serialize(
    resolvedArgs as SetTokenAuthorityInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
