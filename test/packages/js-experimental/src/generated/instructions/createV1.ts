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
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
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
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  AssetData,
  AssetDataArgs,
  getAssetDataDecoder,
  getAssetDataEncoder,
} from '../types';

// Output.
export type CreateV1Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
> = IInstruction<TProgram> &
  IInstructionWithData<CreateV1InstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableAccount<TAccountMasterEdition>,
      WritableSignerAccount<TAccountMint> | WritableAccount<TAccountMint>,
      ReadonlySignerAccount<TAccountMintAuthority>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountUpdateAuthority>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountSysvarInstructions>,
      ReadonlyAccount<TAccountSplTokenProgram>
    ]
  >;

export type CreateV1InstructionData = {
  discriminator: number;
  createV1Discriminator: number;
  assetData: AssetData;
  decimals: Option<number>;
  maxSupply: Option<bigint>;
};

export type CreateV1InstructionDataArgs = {
  assetData: AssetDataArgs;
  decimals: OptionOrNullable<number>;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getCreateV1InstructionDataEncoder(): Encoder<CreateV1InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CreateV1InstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['createV1Discriminator', getU8Encoder()],
        ['assetData', getAssetDataEncoder()],
        ['decimals', getOptionEncoder(getU8Encoder())],
        ['maxSupply', getOptionEncoder(getU64Encoder())],
      ],
      { description: 'CreateV1InstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 41,
        createV1Discriminator: 0,
      } as CreateV1InstructionData)
  ) as Encoder<CreateV1InstructionDataArgs>;
}

export function getCreateV1InstructionDataDecoder(): Decoder<CreateV1InstructionData> {
  return getStructDecoder<CreateV1InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['createV1Discriminator', getU8Decoder()],
      ['assetData', getAssetDataDecoder()],
      ['decimals', getOptionDecoder(getU8Decoder())],
      ['maxSupply', getOptionDecoder(getU64Decoder())],
    ],
    { description: 'CreateV1InstructionData' }
  ) as Decoder<CreateV1InstructionData>;
}

export function getCreateV1InstructionDataCodec(): Codec<
  CreateV1InstructionDataArgs,
  CreateV1InstructionData
> {
  return combineCodec(
    getCreateV1InstructionDataEncoder(),
    getCreateV1InstructionDataDecoder()
  );
}

export function createV1Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    masterEdition: Base58EncodedAddress<TAccountMasterEdition>;
    mint: Base58EncodedAddress<TAccountMint>;
    mintAuthority: Base58EncodedAddress<TAccountMintAuthority>;
    payer: Base58EncodedAddress<TAccountPayer>;
    updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
    systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
    sysvarInstructions: Base58EncodedAddress<TAccountSysvarInstructions>;
    splTokenProgram: Base58EncodedAddress<TAccountSplTokenProgram>;
  },
  args: CreateV1InstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): CreateV1Instruction<
  TProgram,
  TAccountMetadata,
  TAccountMasterEdition,
  TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountSplTokenProgram
> {
  // ...
}
