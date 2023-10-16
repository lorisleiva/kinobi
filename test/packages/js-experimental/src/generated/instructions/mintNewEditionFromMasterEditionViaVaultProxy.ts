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
export type MintNewEditionFromMasterEditionViaVaultProxyInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountVaultAuthority extends string | IAccountMeta<string> = string,
  TAccountSafetyDepositStore extends string | IAccountMeta<string> = string,
  TAccountSafetyDepositBox extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountTokenVaultProgram extends string | IAccountMeta<string> = string,
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
      TAccountVaultAuthority extends string
        ? ReadonlySignerAccount<TAccountVaultAuthority>
        : TAccountVaultAuthority,
      TAccountSafetyDepositStore extends string
        ? ReadonlyAccount<TAccountSafetyDepositStore>
        : TAccountSafetyDepositStore,
      TAccountSafetyDepositBox extends string
        ? ReadonlyAccount<TAccountSafetyDepositBox>
        : TAccountSafetyDepositBox,
      TAccountVault extends string
        ? ReadonlyAccount<TAccountVault>
        : TAccountVault,
      TAccountNewMetadataUpdateAuthority extends string
        ? ReadonlyAccount<TAccountNewMetadataUpdateAuthority>
        : TAccountNewMetadataUpdateAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountTokenVaultProgram extends string
        ? ReadonlyAccount<TAccountTokenVaultProgram>
        : TAccountTokenVaultProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type MintNewEditionFromMasterEditionViaVaultProxyInstructionData = {
  discriminator: number;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};

export type MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};

export function getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataEncoder(): Encoder<MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MintNewEditionFromMasterEditionViaVaultProxyInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        [
          'mintNewEditionFromMasterEditionViaTokenArgs',
          getMintNewEditionFromMasterEditionViaTokenArgsEncoder(),
        ],
      ],
      {
        description:
          'MintNewEditionFromMasterEditionViaVaultProxyInstructionData',
      }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 13,
      } as MintNewEditionFromMasterEditionViaVaultProxyInstructionData)
  ) as Encoder<MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs>;
}

export function getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataDecoder(): Decoder<MintNewEditionFromMasterEditionViaVaultProxyInstructionData> {
  return getStructDecoder<MintNewEditionFromMasterEditionViaVaultProxyInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      [
        'mintNewEditionFromMasterEditionViaTokenArgs',
        getMintNewEditionFromMasterEditionViaTokenArgsDecoder(),
      ],
    ],
    {
      description:
        'MintNewEditionFromMasterEditionViaVaultProxyInstructionData',
    }
  ) as Decoder<MintNewEditionFromMasterEditionViaVaultProxyInstructionData>;
}

export function getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataCodec(): Codec<
  MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs,
  MintNewEditionFromMasterEditionViaVaultProxyInstructionData
> {
  return combineCodec(
    getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataEncoder(),
    getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataDecoder()
  );
}

export function mintNewEditionFromMasterEditionViaVaultProxyInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountVaultAuthority extends string | IAccountMeta<string> = string,
  TAccountSafetyDepositStore extends string | IAccountMeta<string> = string,
  TAccountSafetyDepositBox extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountTokenVaultProgram extends string | IAccountMeta<string> = string,
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
    vaultAuthority: TAccountVaultAuthority extends string
      ? Base58EncodedAddress<TAccountVaultAuthority>
      : TAccountVaultAuthority;
    safetyDepositStore: TAccountSafetyDepositStore extends string
      ? Base58EncodedAddress<TAccountSafetyDepositStore>
      : TAccountSafetyDepositStore;
    safetyDepositBox: TAccountSafetyDepositBox extends string
      ? Base58EncodedAddress<TAccountSafetyDepositBox>
      : TAccountSafetyDepositBox;
    vault: TAccountVault extends string
      ? Base58EncodedAddress<TAccountVault>
      : TAccountVault;
    newMetadataUpdateAuthority: TAccountNewMetadataUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountNewMetadataUpdateAuthority>
      : TAccountNewMetadataUpdateAuthority;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    tokenProgram: TAccountTokenProgram extends string
      ? Base58EncodedAddress<TAccountTokenProgram>
      : TAccountTokenProgram;
    tokenVaultProgram: TAccountTokenVaultProgram extends string
      ? Base58EncodedAddress<TAccountTokenVaultProgram>
      : TAccountTokenVaultProgram;
    systemProgram: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
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
        accounts.vaultAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.safetyDepositStore, AccountRole.READONLY),
      accountMetaWithDefault(accounts.safetyDepositBox, AccountRole.READONLY),
      accountMetaWithDefault(accounts.vault, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.newMetadataUpdateAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.tokenProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.tokenVaultProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.systemProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.rent, AccountRole.READONLY),
    ],
    data: getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataEncoder().encode(
      args
    ),
    programAddress,
  } as MintNewEditionFromMasterEditionViaVaultProxyInstruction<
    TProgram,
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountVaultAuthority,
    TAccountSafetyDepositStore,
    TAccountSafetyDepositBox,
    TAccountVault,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountTokenVaultProgram,
    TAccountSystemProgram,
    TAccountRent
  >;
}
