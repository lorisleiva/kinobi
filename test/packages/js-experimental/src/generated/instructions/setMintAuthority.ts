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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
} from '../shared';

// Output.
export type SetMintAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority
    ]
  >;

export type SetMintAuthorityInstructionData = { discriminator: Array<number> };

export type SetMintAuthorityInstructionDataArgs = {};

export function getSetMintAuthorityInstructionDataEncoder(): Encoder<SetMintAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SetMintAuthorityInstructionData>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'SetMintAuthorityInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
      } as SetMintAuthorityInstructionData)
  ) as Encoder<SetMintAuthorityInstructionDataArgs>;
}

export function getSetMintAuthorityInstructionDataDecoder(): Decoder<SetMintAuthorityInstructionData> {
  return getStructDecoder<SetMintAuthorityInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'SetMintAuthorityInstructionData' }
  ) as Decoder<SetMintAuthorityInstructionData>;
}

export function getSetMintAuthorityInstructionDataCodec(): Codec<
  SetMintAuthorityInstructionDataArgs,
  SetMintAuthorityInstructionData
> {
  return combineCodec(
    getSetMintAuthorityInstructionDataEncoder(),
    getSetMintAuthorityInstructionDataDecoder()
  );
}

export function setMintAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Base58EncodedAddress<TAccountCandyMachine>
      : TAccountCandyMachine;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
    ],
    data: getSetMintAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as SetMintAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >;
}

// Input.
export type SetMintAuthorityInput<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string
> = {
  candyMachine: Base58EncodedAddress<TAccountCandyMachine>;
  authority?: Signer<TAccountAuthority>;
  mintAuthority: Signer<TAccountMintAuthority>;
};

export async function setMintAuthority<
  TReturn,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
  TAccountMintAuthority extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetMintAuthorityInstruction<
        TProgram,
        TAccountCandyMachine,
        TAccountAuthority,
        TAccountMintAuthority
      >,
      TReturn
    >,
  input: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<TReturn>;
export async function setMintAuthority<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
  TAccountMintAuthority extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<
  WrappedInstruction<
    SetMintAuthorityInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority,
      TAccountMintAuthority
    >
  >
>;
export async function setMintAuthority<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
  TAccountMintAuthority extends string = string
>(
  input: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<
  WrappedInstruction<
    SetMintAuthorityInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority,
      TAccountMintAuthority
    >
  >
>;
export async function setMintAuthority<
  TReturn,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
  TAccountMintAuthority extends string = string
>(
  context:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          SetMintAuthorityInstruction<
            TProgram,
            TAccountCandyMachine,
            TAccountAuthority,
            TAccountMintAuthority
          >,
          TReturn
        >)
    | SetMintAuthorityInput<
        TAccountCandyMachine,
        TAccountAuthority,
        TAccountMintAuthority
      >,
  input?: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<
  | TReturn
  | WrappedInstruction<
      SetMintAuthorityInstruction<
        TProgram,
        TAccountCandyMachine,
        TAccountAuthority,
        TAccountMintAuthority
      >
    >
> {
  throw new Error('Not implemented');
}
