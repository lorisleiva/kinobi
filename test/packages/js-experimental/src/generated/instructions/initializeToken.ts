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
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  WrappedInstruction,
  accountMetaWithDefault,
} from '../shared';

// Output.
export type InitializeTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type InitializeTokenInstructionData = { discriminator: number };

export type InitializeTokenInstructionDataArgs = {};

export function getInitializeTokenInstructionDataEncoder(): Encoder<InitializeTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<InitializeTokenInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'InitializeTokenInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 1 } as InitializeTokenInstructionData)
  ) as Encoder<InitializeTokenInstructionDataArgs>;
}

export function getInitializeTokenInstructionDataDecoder(): Decoder<InitializeTokenInstructionData> {
  return getStructDecoder<InitializeTokenInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'InitializeTokenInstructionData' }
  ) as Decoder<InitializeTokenInstructionData>;
}

export function getInitializeTokenInstructionDataCodec(): Codec<
  InitializeTokenInstructionDataArgs,
  InitializeTokenInstructionData
> {
  return combineCodec(
    getInitializeTokenInstructionDataEncoder(),
    getInitializeTokenInstructionDataDecoder()
  );
}

export function initializeTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
    rent?: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.rent ?? 'SysvarRent111111111111111111111111111111111',
        AccountRole.READONLY
      ),
    ],
    data: getInitializeTokenInstructionDataEncoder().encode({}),
    programAddress,
  } as InitializeTokenInstruction<
    TProgram,
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >;
}

// Input.
export type InitializeTokenInput<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountOwner extends string,
  TAccountRent extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  mint: Base58EncodedAddress<TAccountMint>;
  owner: Base58EncodedAddress<TAccountOwner>;
  rent?: Base58EncodedAddress<TAccountRent>;
};

export async function initializeToken<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string,
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      InitializeTokenInstruction<
        TProgram,
        TAccountAccount,
        TAccountMint,
        TAccountOwner,
        TAccountRent
      >,
      TReturn
    >,
  input: InitializeTokenInput<
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >
): Promise<TReturn>;
export async function initializeToken<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string,
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: InitializeTokenInput<
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >
): Promise<
  WrappedInstruction<
    InitializeTokenInstruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountOwner,
      TAccountRent
    >
  >
>;
export async function initializeToken<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string,
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
>(
  input: InitializeTokenInput<
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >
): Promise<
  WrappedInstruction<
    InitializeTokenInstruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountOwner,
      TAccountRent
    >
  >
>;
export async function initializeToken<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string,
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
>(
  context:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          InitializeTokenInstruction<
            TProgram,
            TAccountAccount,
            TAccountMint,
            TAccountOwner,
            TAccountRent
          >,
          TReturn
        >)
    | InitializeTokenInput<
        TAccountAccount,
        TAccountMint,
        TAccountOwner,
        TAccountRent
      >,
  input?: InitializeTokenInput<
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >
): Promise<
  | TReturn
  | WrappedInstruction<
      InitializeTokenInstruction<
        TProgram,
        TAccountAccount,
        TAccountMint,
        TAccountOwner,
        TAccountRent
      >
    >
> {
  throw new Error('Not implemented');
}
