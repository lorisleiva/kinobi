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
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  getMintNewEditionFromMasterEditionViaTokenArgsDecoder,
  getMintNewEditionFromMasterEditionViaTokenArgsEncoder,
} from '../types';

// Output.
export type MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountNewMetadata extends string
        ? WritableAccount<TAccountNewMetadata>
        : TAccountNewMetadata,
      TAccountNewEdition extends string
        ? WritableAccount<TAccountNewEdition>
        : TAccountNewEdition,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountNewMint extends string
        ? WritableAccount<TAccountNewMint>
        : TAccountNewMint,
      TAccountEditionMarkPda extends string
        ? WritableAccount<TAccountEditionMarkPda>
        : TAccountEditionMarkPda,
      TAccountNewMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNewMintAuthority>
        : TAccountNewMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountTokenAccountOwner extends string
        ? ReadonlySignerAccount<TAccountTokenAccountOwner>
        : TAccountTokenAccountOwner,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountNewMetadataUpdateAuthority extends string
        ? ReadonlyAccount<TAccountNewMetadataUpdateAuthority>
        : TAccountNewMetadataUpdateAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type MintNewEditionFromMasterEditionViaTokenInstructionData = {
  discriminator: number;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};

export type MintNewEditionFromMasterEditionViaTokenInstructionDataArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder(): Encoder<MintNewEditionFromMasterEditionViaTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MintNewEditionFromMasterEditionViaTokenInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        [
          'mintNewEditionFromMasterEditionViaTokenArgs',
          getMintNewEditionFromMasterEditionViaTokenArgsEncoder(),
        ],
      ],
      { description: 'MintNewEditionFromMasterEditionViaTokenInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 11,
      } as MintNewEditionFromMasterEditionViaTokenInstructionData)
  ) as Encoder<MintNewEditionFromMasterEditionViaTokenInstructionDataArgs>;
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder(): Decoder<MintNewEditionFromMasterEditionViaTokenInstructionData> {
  return getStructDecoder<MintNewEditionFromMasterEditionViaTokenInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      [
        'mintNewEditionFromMasterEditionViaTokenArgs',
        getMintNewEditionFromMasterEditionViaTokenArgsDecoder(),
      ],
    ],
    { description: 'MintNewEditionFromMasterEditionViaTokenInstructionData' }
  ) as Decoder<MintNewEditionFromMasterEditionViaTokenInstructionData>;
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataCodec(): Codec<
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  MintNewEditionFromMasterEditionViaTokenInstructionData
> {
  return combineCodec(
    getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder(),
    getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder()
  );
}

export function mintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
>(
  accounts: {
    newMetadata: TAccountNewMetadata extends string
      ? Base58EncodedAddress<TAccountNewMetadata>
      : TAccountNewMetadata;
    newEdition: TAccountNewEdition extends string
      ? Base58EncodedAddress<TAccountNewEdition>
      : TAccountNewEdition;
    masterEdition: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    newMint: TAccountNewMint extends string
      ? Base58EncodedAddress<TAccountNewMint>
      : TAccountNewMint;
    editionMarkPda: TAccountEditionMarkPda extends string
      ? Base58EncodedAddress<TAccountEditionMarkPda>
      : TAccountEditionMarkPda;
    newMintAuthority: TAccountNewMintAuthority extends string
      ? Base58EncodedAddress<TAccountNewMintAuthority>
      : TAccountNewMintAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    tokenAccountOwner: TAccountTokenAccountOwner extends string
      ? Base58EncodedAddress<TAccountTokenAccountOwner>
      : TAccountTokenAccountOwner;
    tokenAccount: TAccountTokenAccount extends string
      ? Base58EncodedAddress<TAccountTokenAccount>
      : TAccountTokenAccount;
    newMetadataUpdateAuthority: TAccountNewMetadataUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountNewMetadataUpdateAuthority>
      : TAccountNewMetadataUpdateAuthority;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    tokenProgram: TAccountTokenProgram extends string
      ? Base58EncodedAddress<TAccountTokenProgram>
      : TAccountTokenProgram;
    systemProgram: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram,
  TAccountNewMetadata,
  TAccountNewEdition,
  TAccountMasterEdition,
  TAccountNewMint,
  TAccountEditionMarkPda,
  TAccountNewMintAuthority,
  TAccountPayer,
  TAccountTokenAccountOwner,
  TAccountTokenAccount,
  TAccountNewMetadataUpdateAuthority,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
> {
  return {
    accounts: [
      accountMetaWithDefault(accounts.newMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.newEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.masterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.newMint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.editionMarkPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.newMintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.tokenAccountOwner,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.newMetadataUpdateAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.tokenProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.systemProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.rent, AccountRole.READONLY),
    ],
    data: getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder().encode(
      args
    ),
    programAddress,
  };
}
