/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
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
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type SetAuthorityInstruction<
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
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority
    ]
  >;

export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: Base58EncodedAddress;
};

export type SetAuthorityInstructionDataArgs = {
  newAuthority: Base58EncodedAddress;
};

export function getSetAuthorityInstructionDataEncoder(): Encoder<SetAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SetAuthorityInstructionData>(
      [
        ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
        ['newAuthority', getAddressEncoder()],
      ],
      { description: 'SetAuthorityInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
      } as SetAuthorityInstructionData)
  ) as Encoder<SetAuthorityInstructionDataArgs>;
}

export function getSetAuthorityInstructionDataDecoder(): Decoder<SetAuthorityInstructionData> {
  return getStructDecoder<SetAuthorityInstructionData>(
    [
      ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
      ['newAuthority', getAddressDecoder()],
    ],
    { description: 'SetAuthorityInstructionData' }
  ) as Decoder<SetAuthorityInstructionData>;
}

export function getSetAuthorityInstructionDataCodec(): Codec<
  SetAuthorityInstructionDataArgs,
  SetAuthorityInstructionData
> {
  return combineCodec(
    getSetAuthorityInstructionDataEncoder(),
    getSetAuthorityInstructionDataDecoder()
  );
}

export function setAuthorityInstruction<
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
  args: SetAuthorityInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getSetAuthorityInstructionDataEncoder().encode(args),
    programAddress,
  } as SetAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority
  >;
}
