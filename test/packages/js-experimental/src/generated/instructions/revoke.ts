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
  RevokeArgs,
  RevokeArgsArgs,
  getRevokeArgsDecoder,
  getRevokeArgsEncoder,
} from '../types';

// Output.
export type RevokeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountDelegate extends string
        ? ReadonlyAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules
    ]
  >;

export type RevokeInstructionData = {
  discriminator: number;
  revokeArgs: RevokeArgs;
};

export type RevokeInstructionDataArgs = { revokeArgs: RevokeArgsArgs };

export function getRevokeInstructionDataEncoder(): Encoder<RevokeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<RevokeInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['revokeArgs', getRevokeArgsEncoder()],
      ],
      { description: 'RevokeInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 49 } as RevokeInstructionData)
  ) as Encoder<RevokeInstructionDataArgs>;
}

export function getRevokeInstructionDataDecoder(): Decoder<RevokeInstructionData> {
  return getStructDecoder<RevokeInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['revokeArgs', getRevokeArgsDecoder()],
    ],
    { description: 'RevokeInstructionData' }
  ) as Decoder<RevokeInstructionData>;
}

export function getRevokeInstructionDataCodec(): Codec<
  RevokeInstructionDataArgs,
  RevokeInstructionData
> {
  return combineCodec(
    getRevokeInstructionDataEncoder(),
    getRevokeInstructionDataDecoder()
  );
}

export function revokeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string
>(
  accounts: {
    delegateRecord: TAccountDelegateRecord extends string
      ? Base58EncodedAddress<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    delegate: TAccountDelegate extends string
      ? Base58EncodedAddress<TAccountDelegate>
      : TAccountDelegate;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    masterEdition: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    token: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    systemProgram: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    splTokenProgram: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    authorizationRulesProgram: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
    authorizationRules: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
  },
  args: RevokeInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.delegateRecord, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.delegate, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.masterEdition, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.token, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.systemProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.sysvarInstructions, AccountRole.READONLY),
      accountMetaWithDefault(accounts.splTokenProgram, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.authorizationRulesProgram,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.authorizationRules, AccountRole.READONLY),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getRevokeInstructionDataEncoder().encode(args),
    programAddress,
  } as RevokeInstruction<
    TProgram,
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >;
}
