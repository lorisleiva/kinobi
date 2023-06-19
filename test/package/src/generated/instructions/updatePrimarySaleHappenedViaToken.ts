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
import { addAccountMeta } from '../shared';

// Accounts.
export type UpdatePrimarySaleHappenedViaTokenInstructionAccounts = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Owner on the token account */
  owner: Signer;
  /** Account containing tokens from the metadata's mint */
  token: PublicKey | Pda;
};

// Data.
export type UpdatePrimarySaleHappenedViaTokenInstructionData = {
  discriminator: number;
};

export type UpdatePrimarySaleHappenedViaTokenInstructionDataArgs = {};

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataSerializer(
  _context: object = {}
): Serializer<
  UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
  UpdatePrimarySaleHappenedViaTokenInstructionData
> {
  return mapSerializer<
    UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
    any,
    UpdatePrimarySaleHappenedViaTokenInstructionData
  >(
    struct<UpdatePrimarySaleHappenedViaTokenInstructionData>(
      [['discriminator', u8()]],
      { description: 'UpdatePrimarySaleHappenedViaTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 4 })
  ) as Serializer<
    UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
    UpdatePrimarySaleHappenedViaTokenInstructionData
  >;
}

// Instruction.
export function updatePrimarySaleHappenedViaToken(
  context: Pick<Context, 'programs'>,
  input: UpdatePrimarySaleHappenedViaTokenInstructionAccounts
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
    metadata: [input.metadata, true] as const,
    owner: [input.owner, false] as const,
    token: [input.token, false] as const,
  };

  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.owner, false);
  addAccountMeta(keys, signers, resolvedAccounts.token, false);

  // Data.
  const data = getUpdatePrimarySaleHappenedViaTokenInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
