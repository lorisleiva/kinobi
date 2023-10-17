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
import { accountMetaWithDefault } from '../shared';

// Output.
export type InitializeToken2Instruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
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
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type InitializeToken2InstructionData = {
  discriminator: number;
  owner: Base58EncodedAddress;
};

export type InitializeToken2InstructionDataArgs = {
  owner: Base58EncodedAddress;
};

export function getInitializeToken2InstructionDataEncoder(): Encoder<InitializeToken2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<InitializeToken2InstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['owner', getAddressEncoder()],
      ],
      { description: 'InitializeToken2InstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 16 } as InitializeToken2InstructionData)
  ) as Encoder<InitializeToken2InstructionDataArgs>;
}

export function getInitializeToken2InstructionDataDecoder(): Decoder<InitializeToken2InstructionData> {
  return getStructDecoder<InitializeToken2InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['owner', getAddressDecoder()],
    ],
    { description: 'InitializeToken2InstructionData' }
  ) as Decoder<InitializeToken2InstructionData>;
}

export function getInitializeToken2InstructionDataCodec(): Codec<
  InitializeToken2InstructionDataArgs,
  InitializeToken2InstructionData
> {
  return combineCodec(
    getInitializeToken2InstructionDataEncoder(),
    getInitializeToken2InstructionDataDecoder()
  );
}

export function initializeToken2Instruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
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
    rent?: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: InitializeToken2InstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.rent ?? 'SysvarRent111111111111111111111111111111111',
        AccountRole.READONLY
      ),
    ],
    data: getInitializeToken2InstructionDataEncoder().encode(args),
    programAddress,
  } as InitializeToken2Instruction<
    TProgram,
    TAccountAccount,
    TAccountMint,
    TAccountRent
  >;
}

// Input.
export type InitializeToken2Input<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountRent extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  mint: Base58EncodedAddress<TAccountMint>;
  rent?: Base58EncodedAddress<TAccountRent>;
  discriminator: TODO;
  owner: TODO;
};
