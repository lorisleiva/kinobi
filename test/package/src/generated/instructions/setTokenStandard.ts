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
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { isWritable } from '../shared';

// Accounts.
export type SetTokenStandardInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Metadata update authority */
  updateAuthority: Signer;
  /** Mint account */
  mint: PublicKey;
  /** Edition account */
  edition?: PublicKey;
};

// Data.
export type SetTokenStandardInstructionData = { discriminator: number };

export type SetTokenStandardInstructionDataArgs = {};

export function getSetTokenStandardInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetTokenStandardInstructionDataArgs,
  SetTokenStandardInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetTokenStandardInstructionDataArgs,
    SetTokenStandardInstructionData,
    SetTokenStandardInstructionData
  >(
    s.struct<SetTokenStandardInstructionData>([['discriminator', s.u8()]], {
      description: 'SetTokenStandardInstructionData',
    }),
    (value) =>
      ({ ...value, discriminator: 35 } as SetTokenStandardInstructionData)
  ) as Serializer<
    SetTokenStandardInstructionDataArgs,
    SetTokenStandardInstructionData
  >;
}

// Instruction.
export function setTokenStandard(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: SetTokenStandardInstructionAccounts
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
  const resolvedAccounts = {};

  // Metadata.
  keys.push({
    pubkey: resolvedAccounts.metadata,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Update Authority.
  signers.push(resolvedAccounts.updateAuthority);
  keys.push({
    pubkey: resolvedAccounts.updateAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.updateAuthority, true),
  });

  // Mint.
  keys.push({
    pubkey: resolvedAccounts.mint,
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, false),
  });

  // Edition (optional).
  if (resolvedAccounts.edition) {
    keys.push({
      pubkey: resolvedAccounts.edition,
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.edition, false),
    });
  }

  // Data.
  const data = getSetTokenStandardInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
