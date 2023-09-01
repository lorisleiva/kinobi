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
  array,
  bool,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  string,
  struct,
  u16,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import { Creator, CreatorArgs, getCreatorSerializer } from '../types';

// Accounts.
export type UpdateMetadataAccountInstructionAccounts = {
  /** Metadata account */
  metadata: PublicKey | Pda;
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
  data: OptionOrNullable<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  }>;
  updateAuthority: OptionOrNullable<PublicKey>;
  primarySaleHappened: OptionOrNullable<boolean>;
};

export function getUpdateMetadataAccountInstructionDataSerializer(): Serializer<
  UpdateMetadataAccountInstructionDataArgs,
  UpdateMetadataAccountInstructionData
> {
  return mapSerializer<
    UpdateMetadataAccountInstructionDataArgs,
    any,
    UpdateMetadataAccountInstructionData
  >(
    struct<UpdateMetadataAccountInstructionData>(
      [
        ['discriminator', u8()],
        [
          'data',
          option(
            struct<any>([
              ['name', string()],
              ['symbol', string()],
              ['uri', string()],
              ['sellerFeeBasisPoints', u16()],
              ['creators', option(array(getCreatorSerializer()))],
            ])
          ),
        ],
        ['updateAuthority', option(publicKeySerializer())],
        ['primarySaleHappened', option(bool())],
      ],
      { description: 'UpdateMetadataAccountInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 1 })
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
  context: Pick<Context, 'programs'>,
  accounts: UpdateMetadataAccountInstructionAccounts,
  args: UpdateMetadataAccountInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    metadata: { index: 0, isWritable: true, value: accounts.metadata ?? null },
    updateAuthority: {
      index: 1,
      isWritable: false,
      value: accounts.updateAuthority ?? null,
    },
  };

  // Arguments.
  const resolvedArgs: UpdateMetadataAccountInstructionArgs = { ...args };

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
  const data = getUpdateMetadataAccountInstructionDataSerializer().serialize(
    resolvedArgs as UpdateMetadataAccountInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
