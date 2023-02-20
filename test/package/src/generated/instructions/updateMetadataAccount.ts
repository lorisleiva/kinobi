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
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@metaplex-foundation/umi-core';
import { Creator, CreatorArgs, getCreatorSerializer } from '../types';

// Accounts.
export type UpdateMetadataAccountInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey;
  /** Update authority key */
  updateAuthority: Signer;
};

// Arguments.
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

export type UpdateMetadataAccountInstructionArgs = {
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
  UpdateMetadataAccountInstructionArgs,
  UpdateMetadataAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UpdateMetadataAccountInstructionArgs,
    UpdateMetadataAccountInstructionData,
    UpdateMetadataAccountInstructionData
  >(
    s.struct<UpdateMetadataAccountInstructionData>(
      [
        ['discriminator', s.u8()],
        [
          'data',
          s.option(
            s.struct<any>(
              [
                ['name', s.string()],
                ['symbol', s.string()],
                ['uri', s.string()],
                ['sellerFeeBasisPoints', s.u16()],
                ['creators', s.option(s.array(getCreatorSerializer(context)))],
              ],
              'Data'
            )
          ),
        ],
        ['updateAuthority', s.option(s.publicKey())],
        ['primarySaleHappened', s.option(s.bool())],
      ],
      'UpdateMetadataAccountInstructionArgs'
    ),
    (value) =>
      ({ ...value, discriminator: 1 } as UpdateMetadataAccountInstructionData)
  ) as Serializer<
    UpdateMetadataAccountInstructionArgs,
    UpdateMetadataAccountInstructionData
  >;
}

// Instruction.
export function updateMetadataAccount(
  context: Pick<Context, 'serializer' | 'programs'>,
  accounts: UpdateMetadataAccountInstructionAccounts,
  args: UpdateMetadataAccountInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;

  // Resolved accounts.
  const metadataAccount = accounts.metadata;
  const updateAuthorityAccount = accounts.updateAuthority;

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Update Authority.
  signers.push(updateAuthorityAccount);
  keys.push({
    pubkey: updateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // Data.
  const data =
    getUpdateMetadataAccountInstructionDataSerializer(context).serialize(args);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
