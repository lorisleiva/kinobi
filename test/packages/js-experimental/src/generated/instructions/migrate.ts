/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress, address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  MigrateArgs,
  MigrateArgsArgs,
  getMigrateArgsDecoder,
  getMigrateArgsEncoder,
} from '../types';

// Output.
export type MigrateInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountMint extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRules extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<MigrateInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      ReadonlyAccount<TAccountMasterEdition>,
      WritableAccount<TAccountTokenAccount>,
      ReadonlyAccount<TAccountMint>,
      ReadonlySignerAccount<TAccountUpdateAuthority>,
      ReadonlyAccount<TAccountCollectionMetadata>,
      ReadonlyAccount<TAccountTokenProgram>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountSysvarInstructions>,
      ReadonlyAccount<TAccountAuthorizationRules>
    ]
  >;

export type MigrateInstructionData = {
  discriminator: number;
  migrateArgs: MigrateArgs;
};

export type MigrateInstructionDataArgs = { migrateArgs: MigrateArgsArgs };

export function getMigrateInstructionDataEncoder(): Encoder<MigrateInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MigrateInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['migrateArgs', getMigrateArgsEncoder()],
      ],
      { description: 'MigrateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 50 } as MigrateInstructionData)
  ) as Encoder<MigrateInstructionDataArgs>;
}

export function getMigrateInstructionDataDecoder(): Decoder<MigrateInstructionData> {
  return getStructDecoder<MigrateInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['migrateArgs', getMigrateArgsDecoder()],
    ],
    { description: 'MigrateInstructionData' }
  ) as Decoder<MigrateInstructionData>;
}

export function getMigrateInstructionDataCodec(): Codec<
  MigrateInstructionDataArgs,
  MigrateInstructionData
> {
  return combineCodec(
    getMigrateInstructionDataEncoder(),
    getMigrateInstructionDataDecoder()
  );
}

export function migrateInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountMint extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRules extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    masterEdition: Base58EncodedAddress<TAccountMasterEdition>;
    tokenAccount: Base58EncodedAddress<TAccountTokenAccount>;
    mint: Base58EncodedAddress<TAccountMint>;
    updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
    collectionMetadata: Base58EncodedAddress<TAccountCollectionMetadata>;
    tokenProgram: Base58EncodedAddress<TAccountTokenProgram>;
    systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
    sysvarInstructions: Base58EncodedAddress<TAccountSysvarInstructions>;
    authorizationRules: Base58EncodedAddress<TAccountAuthorizationRules>;
  },
  args: MigrateInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): MigrateInstruction<
  TProgram,
  TAccountMetadata,
  TAccountMasterEdition,
  TAccountTokenAccount,
  TAccountMint,
  TAccountUpdateAuthority,
  TAccountCollectionMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountAuthorizationRules
> {
  // ...
}
