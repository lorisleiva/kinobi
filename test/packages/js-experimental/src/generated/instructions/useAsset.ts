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
  UseAssetArgs,
  UseAssetArgsArgs,
  getUseAssetArgsDecoder,
  getUseAssetArgsEncoder,
} from '../types';

// Output.
export type UseAssetInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUseAuthority extends string
        ? WritableSignerAccount<TAccountUseAuthority>
        : TAccountUseAuthority,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountAtaProgram extends string
        ? ReadonlyAccount<TAccountAtaProgram>
        : TAccountAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram
    ]
  >;

export type UseAssetInstructionData = {
  discriminator: number;
  useAssetArgs: UseAssetArgs;
};

export type UseAssetInstructionDataArgs = { useAssetArgs: UseAssetArgsArgs };

export function getUseAssetInstructionDataEncoder(): Encoder<UseAssetInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UseAssetInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['useAssetArgs', getUseAssetArgsEncoder()],
      ],
      { description: 'UseAssetInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 45 } as UseAssetInstructionData)
  ) as Encoder<UseAssetInstructionDataArgs>;
}

export function getUseAssetInstructionDataDecoder(): Decoder<UseAssetInstructionData> {
  return getStructDecoder<UseAssetInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['useAssetArgs', getUseAssetArgsDecoder()],
    ],
    { description: 'UseAssetInstructionData' }
  ) as Decoder<UseAssetInstructionData>;
}

export function getUseAssetInstructionDataCodec(): Codec<
  UseAssetInstructionDataArgs,
  UseAssetInstructionData
> {
  return combineCodec(
    getUseAssetInstructionDataEncoder(),
    getUseAssetInstructionDataDecoder()
  );
}

export function useAssetInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    tokenAccount: TAccountTokenAccount extends string
      ? Base58EncodedAddress<TAccountTokenAccount>
      : TAccountTokenAccount;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    useAuthority: TAccountUseAuthority extends string
      ? Base58EncodedAddress<TAccountUseAuthority>
      : TAccountUseAuthority;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
    splTokenProgram: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    ataProgram: TAccountAtaProgram extends string
      ? Base58EncodedAddress<TAccountAtaProgram>
      : TAccountAtaProgram;
    systemProgram: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    useAuthorityRecord: TAccountUseAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountUseAuthorityRecord>
      : TAccountUseAuthorityRecord;
    authorizationRules: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
    authorizationRulesProgram: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
  },
  args: UseAssetInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.useAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY),
      accountMetaWithDefault(accounts.splTokenProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.ataProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.systemProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.useAuthorityRecord, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authorizationRules, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.authorizationRulesProgram,
        AccountRole.READONLY
      ),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getUseAssetInstructionDataEncoder().encode(args),
    programAddress,
  } as UseAssetInstruction<
    TProgram,
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >;
}
