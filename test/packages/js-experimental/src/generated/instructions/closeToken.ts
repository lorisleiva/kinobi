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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { Signer, WrappedInstruction, accountMetaWithDefault } from '../shared';

// Output.
export type CloseTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountOwner extends string
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner
    ]
  >;

export type CloseTokenInstructionData = { discriminator: number };

export type CloseTokenInstructionDataArgs = {};

export function getCloseTokenInstructionDataEncoder(): Encoder<CloseTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CloseTokenInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'CloseTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 9 } as CloseTokenInstructionData)
  ) as Encoder<CloseTokenInstructionDataArgs>;
}

export function getCloseTokenInstructionDataDecoder(): Decoder<CloseTokenInstructionData> {
  return getStructDecoder<CloseTokenInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'CloseTokenInstructionData' }
  ) as Decoder<CloseTokenInstructionData>;
}

export function getCloseTokenInstructionDataCodec(): Codec<
  CloseTokenInstructionDataArgs,
  CloseTokenInstructionData
> {
  return combineCodec(
    getCloseTokenInstructionDataEncoder(),
    getCloseTokenInstructionDataDecoder()
  );
}

export function closeTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
    destination: TAccountDestination extends string
      ? Base58EncodedAddress<TAccountDestination>
      : TAccountDestination;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY_SIGNER),
    ],
    data: getCloseTokenInstructionDataEncoder().encode({}),
    programAddress,
  } as CloseTokenInstruction<
    TProgram,
    TAccountAccount,
    TAccountDestination,
    TAccountOwner
  >;
}

// Input.
export type CloseTokenInput<
  TAccountAccount extends string,
  TAccountDestination extends string,
  TAccountOwner extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  destination: Base58EncodedAddress<TAccountDestination>;
  owner: Signer<TAccountOwner>;
};

export function closeToken<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountDestination extends string = string,
  TAccountOwner extends string = string
>(): WrappedInstruction<
  CloseTokenInstruction<
    TProgram,
    TAccountAccount,
    TAccountDestination,
    TAccountOwner
  >
> {
  throw new Error('Not implemented');
}
