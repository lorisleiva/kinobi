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
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { isWritable } from '../shared';

// Accounts.
export type RemoveCreatorVerificationInstructionAccounts = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** Creator */
  creator: Signer;
};

// Data.
export type RemoveCreatorVerificationInstructionData = {
  discriminator: number;
};

export type RemoveCreatorVerificationInstructionDataArgs = {};

export function getRemoveCreatorVerificationInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RemoveCreatorVerificationInstructionDataArgs,
  RemoveCreatorVerificationInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RemoveCreatorVerificationInstructionDataArgs,
    any,
    RemoveCreatorVerificationInstructionData
  >(
    s.struct<RemoveCreatorVerificationInstructionData>(
      [['discriminator', s.u8()]],
      { description: 'RemoveCreatorVerificationInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 28 })
  ) as Serializer<
    RemoveCreatorVerificationInstructionDataArgs,
    RemoveCreatorVerificationInstructionData
  >;
}

// Instruction.
export function removeCreatorVerification(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: RemoveCreatorVerificationInstructionAccounts
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
  const resolvingAccounts = {};
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Creator.
  signers.push(resolvedAccounts.creator);
  keys.push({
    pubkey: resolvedAccounts.creator.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.creator, false),
  });

  // Data.
  const data = getRemoveCreatorVerificationInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
