/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import { findMetadataPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';
import {
  CollectionDetails,
  CollectionDetailsArgs,
  DataV2,
  DataV2Args,
  getCollectionDetailsDecoder,
  getCollectionDetailsEncoder,
  getDataV2Decoder,
  getDataV2Encoder,
} from '../types';

// Output.
export type CreateMetadataAccountV3Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type CreateMetadataAccountV3InstructionData = {
  discriminator: number;
  data: DataV2;
  isMutable: boolean;
  collectionDetails: Option<CollectionDetails>;
};

export type CreateMetadataAccountV3InstructionDataArgs = {
  data: DataV2Args;
  isMutable: boolean;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
};

export function getCreateMetadataAccountV3InstructionDataEncoder(): Encoder<CreateMetadataAccountV3InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CreateMetadataAccountV3InstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['data', getDataV2Encoder()],
        ['isMutable', getBooleanEncoder()],
        ['collectionDetails', getOptionEncoder(getCollectionDetailsEncoder())],
      ],
      { description: 'CreateMetadataAccountV3InstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 33,
      } as CreateMetadataAccountV3InstructionData)
  ) as Encoder<CreateMetadataAccountV3InstructionDataArgs>;
}

export function getCreateMetadataAccountV3InstructionDataDecoder(): Decoder<CreateMetadataAccountV3InstructionData> {
  return getStructDecoder<CreateMetadataAccountV3InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['data', getDataV2Decoder()],
      ['isMutable', getBooleanDecoder()],
      ['collectionDetails', getOptionDecoder(getCollectionDetailsDecoder())],
    ],
    { description: 'CreateMetadataAccountV3InstructionData' }
  ) as Decoder<CreateMetadataAccountV3InstructionData>;
}

export function getCreateMetadataAccountV3InstructionDataCodec(): Codec<
  CreateMetadataAccountV3InstructionDataArgs,
  CreateMetadataAccountV3InstructionData
> {
  return combineCodec(
    getCreateMetadataAccountV3InstructionDataEncoder(),
    getCreateMetadataAccountV3InstructionDataDecoder()
  );
}

export function createMetadataAccountV3Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    systemProgram: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: CreateMetadataAccountV3InstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.updateAuthority, AccountRole.READONLY),
      accountMetaWithDefault(accounts.systemProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.rent, AccountRole.READONLY),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getCreateMetadataAccountV3InstructionDataEncoder().encode(args),
    programAddress,
  } as CreateMetadataAccountV3Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >;
}
