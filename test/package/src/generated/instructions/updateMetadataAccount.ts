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
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { isWritable } from '../shared';
import { Creator, CreatorArgs, getCreatorSerializer } from '../types';

// Accounts.
export type UpdateMetadataAccountInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Update authority key */
  updateAuthority: Signer;
};

// Data.
export type UpdateMetadataAccountInstructionData = {
  discriminator: number;
  data: Option<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  }>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
};

export type UpdateMetadataAccountInstructionDataArgs = {
  data: Option<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<CreatorArgs>>;
  }>;
  updateAuthority: Option<PublicKey>;
  primarySaleHappened: Option<boolean>;
};

export function getUpdateMetadataAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UpdateMetadataAccountInstructionDataArgs,
  UpdateMetadataAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UpdateMetadataAccountInstructionDataArgs,
    UpdateMetadataAccountInstructionData,
    UpdateMetadataAccountInstructionData
  >(
    s.struct<UpdateMetadataAccountInstructionData>(
      [
        ['discriminator', s.u8()],
        [
          'data',
          s.option(
            s.struct<any>([
              ['name', s.string()],
              ['symbol', s.string()],
              ['uri', s.string()],
              ['sellerFeeBasisPoints', s.u16()],
              ['creators', s.option(s.array(getCreatorSerializer(context)))],
            ])
          ),
        ],
        ['updateAuthority', s.option(s.publicKey())],
        ['primarySaleHappened', s.option(s.bool())],
      ],
      { description: 'UpdateMetadataAccountInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 1 } as UpdateMetadataAccountInstructionData)
  ) as Serializer<
    UpdateMetadataAccountInstructionDataArgs,
    UpdateMetadataAccountInstructionData
  >;
}

// Args.
export type UpdateMetadataAccountInstructionArgs =
  UpdateMetadataAccountInstructionDataArgs;

// Instruction.
export function updateMetadataAccount(
  context: Pick<Context, 'serializer' | 'programs'>,
  accounts: UpdateMetadataAccountInstructionAccounts,
  args: UpdateMetadataAccountInstructionArgs
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
    pubkey: resolvedAccounts.metadata,
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
    getUpdateMetadataAccountInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
