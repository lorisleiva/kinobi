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
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU16Decoder,
  getU16Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
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
  ACCOUNT_HEADER_SIZE,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import { findMetadataPda, getMetadataSize } from '../accounts';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  expectPda,
  getAccountMetasAndSigners,
} from '../shared';
import {
  Creator,
  CreatorArgs,
  getCreatorDecoder,
  getCreatorEncoder,
} from '../types';

// Output.
export type CreateMetadataAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
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

export type CreateMetadataAccountInstructionData = {
  discriminator: number;
  data: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  };
  isMutable: boolean;
  metadataBump: number;
};

export type CreateMetadataAccountInstructionDataArgs = {
  data: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  };
  isMutable: boolean;
  metadataBump: number;
};

export function getCreateMetadataAccountInstructionDataEncoder(): Encoder<CreateMetadataAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CreateMetadataAccountInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        [
          'data',
          getStructEncoder<any>([
            ['name', getStringEncoder()],
            ['symbol', getStringEncoder()],
            ['uri', getStringEncoder()],
            ['sellerFeeBasisPoints', getU16Encoder()],
            [
              'creators',
              getOptionEncoder(getArrayEncoder(getCreatorEncoder())),
            ],
          ]),
        ],
        ['isMutable', getBooleanEncoder()],
        ['metadataBump', getU8Encoder()],
      ],
      { description: 'CreateMetadataAccountInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 0 } as CreateMetadataAccountInstructionData)
  ) as Encoder<CreateMetadataAccountInstructionDataArgs>;
}

export function getCreateMetadataAccountInstructionDataDecoder(): Decoder<CreateMetadataAccountInstructionData> {
  return getStructDecoder<CreateMetadataAccountInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      [
        'data',
        getStructDecoder<any>([
          ['name', getStringDecoder()],
          ['symbol', getStringDecoder()],
          ['uri', getStringDecoder()],
          ['sellerFeeBasisPoints', getU16Decoder()],
          ['creators', getOptionDecoder(getArrayDecoder(getCreatorDecoder()))],
        ]),
      ],
      ['isMutable', getBooleanDecoder()],
      ['metadataBump', getU8Decoder()],
    ],
    { description: 'CreateMetadataAccountInstructionData' }
  ) as Decoder<CreateMetadataAccountInstructionData>;
}

export function getCreateMetadataAccountInstructionDataCodec(): Codec<
  CreateMetadataAccountInstructionDataArgs,
  CreateMetadataAccountInstructionData
> {
  return combineCodec(
    getCreateMetadataAccountInstructionDataEncoder(),
    getCreateMetadataAccountInstructionDataDecoder()
  );
}

export function createMetadataAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
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
  args: CreateMetadataAccountInstructionDataArgs,
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
    ],
    data: getCreateMetadataAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateMetadataAccountInstruction<
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
