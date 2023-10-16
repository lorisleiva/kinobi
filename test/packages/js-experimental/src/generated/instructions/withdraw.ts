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

// Output.
export type WithdrawInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority>
        : TAccountAuthority
    ]
  >;

export type WithdrawInstructionData = { discriminator: Array<number> };

export type WithdrawInstructionDataArgs = {};

export function getWithdrawInstructionDataEncoder(): Encoder<WithdrawInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<WithdrawInstructionData>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'WithdrawInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
      } as WithdrawInstructionData)
  ) as Encoder<WithdrawInstructionDataArgs>;
}

export function getWithdrawInstructionDataDecoder(): Decoder<WithdrawInstructionData> {
  return getStructDecoder<WithdrawInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'WithdrawInstructionData' }
  ) as Decoder<WithdrawInstructionData>;
}

export function getWithdrawInstructionDataCodec(): Codec<
  WithdrawInstructionDataArgs,
  WithdrawInstructionData
> {
  return combineCodec(
    getWithdrawInstructionDataEncoder(),
    getWithdrawInstructionDataDecoder()
  );
}

export function withdrawInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Base58EncodedAddress<TAccountCandyMachine>
      : TAccountCandyMachine;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>
): WithdrawInstruction<TProgram, TAccountCandyMachine, TAccountAuthority> {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.WRITABLE_SIGNER),
    ],
    data: getWithdrawInstructionDataEncoder().encode({}),
    programAddress,
  };
}
