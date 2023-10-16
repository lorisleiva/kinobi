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
  PickPartial,
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  expectPda,
  getAccountMetasAndSigners,
} from '../shared';
import {
  TaCreateArgs,
  TaCreateArgsArgs,
  getTaCreateArgsDecoder,
  getTaCreateArgsEncoder,
} from '../types';

// Output.
export type CreateRuleSetInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSetPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountRuleSetPda extends string
        ? WritableAccount<TAccountRuleSetPda>
        : TAccountRuleSetPda,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram
    ]
  >;

export type CreateRuleSetInstructionData = {
  discriminator: number;
  createArgs: TaCreateArgs;
  ruleSetBump: number;
};

export type CreateRuleSetInstructionDataArgs = {
  createArgs: TaCreateArgsArgs;
  ruleSetBump: number;
};

export function getCreateRuleSetInstructionDataEncoder(): Encoder<CreateRuleSetInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CreateRuleSetInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['createArgs', getTaCreateArgsEncoder()],
        ['ruleSetBump', getU8Encoder()],
      ],
      { description: 'CreateRuleSetInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 0 } as CreateRuleSetInstructionData)
  ) as Encoder<CreateRuleSetInstructionDataArgs>;
}

export function getCreateRuleSetInstructionDataDecoder(): Decoder<CreateRuleSetInstructionData> {
  return getStructDecoder<CreateRuleSetInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['createArgs', getTaCreateArgsDecoder()],
      ['ruleSetBump', getU8Decoder()],
    ],
    { description: 'CreateRuleSetInstructionData' }
  ) as Decoder<CreateRuleSetInstructionData>;
}

export function getCreateRuleSetInstructionDataCodec(): Codec<
  CreateRuleSetInstructionDataArgs,
  CreateRuleSetInstructionData
> {
  return combineCodec(
    getCreateRuleSetInstructionDataEncoder(),
    getCreateRuleSetInstructionDataDecoder()
  );
}

export function createRuleSetInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSetPda extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111'
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    ruleSetPda: TAccountRuleSetPda extends string
      ? Base58EncodedAddress<TAccountRuleSetPda>
      : TAccountRuleSetPda;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
  },
  args: CreateRuleSetInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.ruleSetPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getCreateRuleSetInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateRuleSetInstruction<
    TProgram,
    TAccountPayer,
    TAccountRuleSetPda,
    TAccountSystemProgram
  >;
}
