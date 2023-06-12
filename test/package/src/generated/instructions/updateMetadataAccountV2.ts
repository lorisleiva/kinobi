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
  Option,
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
import { DataV2, DataV2Args, getDataV2Serializer } from '../types';

// Accounts.
export type UpdateMetadataAccountV2InstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Update authority key */
  updateAuthority: Signer;
};

// Data.
export type UpdateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: Option<DataV2>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
};

export type UpdateMetadataAccountV2InstructionDataArgs = {
  data: Option<DataV2Args>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
};

export function getUpdateMetadataAccountV2InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UpdateMetadataAccountV2InstructionDataArgs,
  UpdateMetadataAccountV2InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UpdateMetadataAccountV2InstructionDataArgs,
    any,
    UpdateMetadataAccountV2InstructionData
  >(
    s.struct<UpdateMetadataAccountV2InstructionData>(
      [
        ['discriminator', s.u8()],
        ['data', s.option(getDataV2Serializer(context))],
        ['updateAuthority', s.option(s.publicKey())],
        ['primarySaleHappened', s.option(s.bool())],
        ['isMutable', s.option(s.bool())],
      ],
      { description: 'UpdateMetadataAccountV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 15 })
  ) as Serializer<
    UpdateMetadataAccountV2InstructionDataArgs,
    UpdateMetadataAccountV2InstructionData
  >;
}

// Args.
export type UpdateMetadataAccountV2InstructionArgs =
  UpdateMetadataAccountV2InstructionDataArgs;

// Instruction.
export function updateMetadataAccountV2(
  context: Pick<Context, 'serializer' | 'programs'>,
  accounts: UpdateMetadataAccountV2InstructionAccounts,
  args: UpdateMetadataAccountV2InstructionArgs
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
  const resolvingArgs = {};
  const resolvedAccounts = { ...accounts, ...resolvingAccounts };
  const resolvedArgs = { ...args, ...resolvingArgs };

  // Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.metadata, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.metadata, true),
  });

  // Update Authority.
  signers.push(resolvedAccounts.updateAuthority);
  keys.push({
    pubkey: resolvedAccounts.updateAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.updateAuthority, false),
  });

  // Data.
  const data =
    getUpdateMetadataAccountV2InstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
