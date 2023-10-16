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
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsDecoder,
  getCreateMasterEditionArgsEncoder,
} from '../types';

// Output.
export type DeprecatedCreateMasterEditionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPrintingMint extends string = string,
  TAccountOneTimePrintingAuthorizationMint extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountPrintingMintAuthority extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountPayer extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111',
  TAccountOneTimePrintingAuthorizationMintAuthority extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<DeprecatedCreateMasterEditionInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountEdition>,
      WritableAccount<TAccountMint>,
      WritableAccount<TAccountPrintingMint>,
      WritableAccount<TAccountOneTimePrintingAuthorizationMint>,
      ReadonlySignerAccount<TAccountUpdateAuthority>,
      ReadonlySignerAccount<TAccountPrintingMintAuthority>,
      ReadonlySignerAccount<TAccountMintAuthority>,
      ReadonlyAccount<TAccountMetadata>,
      ReadonlySignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountTokenProgram>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountRent>,
      ReadonlySignerAccount<TAccountOneTimePrintingAuthorizationMintAuthority>
    ]
  >;

export type DeprecatedCreateMasterEditionInstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};

export type DeprecatedCreateMasterEditionInstructionDataArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

export function getDeprecatedCreateMasterEditionInstructionDataEncoder(): Encoder<DeprecatedCreateMasterEditionInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<DeprecatedCreateMasterEditionInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['createMasterEditionArgs', getCreateMasterEditionArgsEncoder()],
      ],
      { description: 'DeprecatedCreateMasterEditionInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 2,
      } as DeprecatedCreateMasterEditionInstructionData)
  ) as Encoder<DeprecatedCreateMasterEditionInstructionDataArgs>;
}

export function getDeprecatedCreateMasterEditionInstructionDataDecoder(): Decoder<DeprecatedCreateMasterEditionInstructionData> {
  return getStructDecoder<DeprecatedCreateMasterEditionInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['createMasterEditionArgs', getCreateMasterEditionArgsDecoder()],
    ],
    { description: 'DeprecatedCreateMasterEditionInstructionData' }
  ) as Decoder<DeprecatedCreateMasterEditionInstructionData>;
}

export function getDeprecatedCreateMasterEditionInstructionDataCodec(): Codec<
  DeprecatedCreateMasterEditionInstructionDataArgs,
  DeprecatedCreateMasterEditionInstructionData
> {
  return combineCodec(
    getDeprecatedCreateMasterEditionInstructionDataEncoder(),
    getDeprecatedCreateMasterEditionInstructionDataDecoder()
  );
}

export function deprecatedCreateMasterEditionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPrintingMint extends string = string,
  TAccountOneTimePrintingAuthorizationMint extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountPrintingMintAuthority extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountPayer extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111',
  TAccountOneTimePrintingAuthorizationMintAuthority extends string = string
>(
  accounts: {
    edition: Base58EncodedAddress<TAccountEdition>;
    mint: Base58EncodedAddress<TAccountMint>;
    printingMint: Base58EncodedAddress<TAccountPrintingMint>;
    oneTimePrintingAuthorizationMint: Base58EncodedAddress<TAccountOneTimePrintingAuthorizationMint>;
    updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
    printingMintAuthority: Base58EncodedAddress<TAccountPrintingMintAuthority>;
    mintAuthority: Base58EncodedAddress<TAccountMintAuthority>;
    metadata: Base58EncodedAddress<TAccountMetadata>;
    payer: Base58EncodedAddress<TAccountPayer>;
    tokenProgram: Base58EncodedAddress<TAccountTokenProgram>;
    systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
    rent: Base58EncodedAddress<TAccountRent>;
    oneTimePrintingAuthorizationMintAuthority: Base58EncodedAddress<TAccountOneTimePrintingAuthorizationMintAuthority>;
  },
  args: DeprecatedCreateMasterEditionInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): DeprecatedCreateMasterEditionInstruction<
  TProgram,
  TAccountEdition,
  TAccountMint,
  TAccountPrintingMint,
  TAccountOneTimePrintingAuthorizationMint,
  TAccountUpdateAuthority,
  TAccountPrintingMintAuthority,
  TAccountMintAuthority,
  TAccountMetadata,
  TAccountPayer,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent,
  TAccountOneTimePrintingAuthorizationMintAuthority
> {
  // ...
}
