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
  getArrayDecoder,
  getArrayEncoder,
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
import { resolveTokenOrAta } from '../../hooked';
import { findDelegateRecordPda } from '../accounts';
import {
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  expectSome,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type DummyInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFoo extends string | IAccountMeta<string> = string,
  TAccountBar extends
    | string
    | IAccountMeta<string> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountTokenOrAtaProgram extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEdition extends string
        ? WritableSignerAccount<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMintAuthority extends string
        ? WritableSignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountFoo extends string ? WritableAccount<TAccountFoo> : TAccountFoo,
      TAccountBar extends string
        ? ReadonlySignerAccount<TAccountBar>
        : TAccountBar,
      TAccountDelegate extends string
        ? ReadonlySignerAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountTokenOrAtaProgram extends string
        ? ReadonlyAccount<TAccountTokenOrAtaProgram>
        : TAccountTokenOrAtaProgram
    ]
  >;

export type DummyInstructionData = { discriminator: Array<number> };

export type DummyInstructionDataArgs = {};

export function getDummyInstructionDataEncoder(): Encoder<DummyInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<DummyInstructionData>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'DummyInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: [167, 117, 211, 79, 251, 254, 47, 135],
      } as DummyInstructionData)
  ) as Encoder<DummyInstructionDataArgs>;
}

export function getDummyInstructionDataDecoder(): Decoder<DummyInstructionData> {
  return getStructDecoder<DummyInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'DummyInstructionData' }
  ) as Decoder<DummyInstructionData>;
}

export function getDummyInstructionDataCodec(): Codec<
  DummyInstructionDataArgs,
  DummyInstructionData
> {
  return combineCodec(
    getDummyInstructionDataEncoder(),
    getDummyInstructionDataDecoder()
  );
}

export function dummyInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFoo extends string | IAccountMeta<string> = string,
  TAccountBar extends
    | string
    | IAccountMeta<string> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountTokenOrAtaProgram extends string | IAccountMeta<string> = string
>(
  accounts: {
    edition: TAccountEdition extends string
      ? Base58EncodedAddress<TAccountEdition>
      : TAccountEdition;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    foo: TAccountFoo extends string
      ? Base58EncodedAddress<TAccountFoo>
      : TAccountFoo;
    bar: TAccountBar extends string
      ? Base58EncodedAddress<TAccountBar>
      : TAccountBar;
    delegate: TAccountDelegate extends string
      ? Base58EncodedAddress<TAccountDelegate>
      : TAccountDelegate;
    delegateRecord: TAccountDelegateRecord extends string
      ? Base58EncodedAddress<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    tokenOrAtaProgram: TAccountTokenOrAtaProgram extends string
      ? Base58EncodedAddress<TAccountTokenOrAtaProgram>
      : TAccountTokenOrAtaProgram;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.edition, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.foo, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.bar, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.delegate, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.delegateRecord, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenOrAtaProgram, AccountRole.READONLY),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getDummyInstructionDataEncoder().encode({}),
    programAddress,
  } as DummyInstruction<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >;
}
