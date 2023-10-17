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
  WritableAccount,
} from '@solana/instructions';
import { accountMetaWithDefault } from '../shared';

// Output.
export type InitializeImmutableOwnerInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount
    ]
  >;

export type InitializeImmutableOwnerInstructionData = { discriminator: number };

export type InitializeImmutableOwnerInstructionDataArgs = {};

export function getInitializeImmutableOwnerInstructionDataEncoder(): Encoder<InitializeImmutableOwnerInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<InitializeImmutableOwnerInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'InitializeImmutableOwnerInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 22,
      } as InitializeImmutableOwnerInstructionData)
  ) as Encoder<InitializeImmutableOwnerInstructionDataArgs>;
}

export function getInitializeImmutableOwnerInstructionDataDecoder(): Decoder<InitializeImmutableOwnerInstructionData> {
  return getStructDecoder<InitializeImmutableOwnerInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'InitializeImmutableOwnerInstructionData' }
  ) as Decoder<InitializeImmutableOwnerInstructionData>;
}

export function getInitializeImmutableOwnerInstructionDataCodec(): Codec<
  InitializeImmutableOwnerInstructionDataArgs,
  InitializeImmutableOwnerInstructionData
> {
  return combineCodec(
    getInitializeImmutableOwnerInstructionDataEncoder(),
    getInitializeImmutableOwnerInstructionDataDecoder()
  );
}

export function initializeImmutableOwnerInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [accountMetaWithDefault(accounts.account, AccountRole.WRITABLE)],
    data: getInitializeImmutableOwnerInstructionDataEncoder().encode({}),
    programAddress,
  } as InitializeImmutableOwnerInstruction<TProgram, TAccountAccount>;
}

// Input.
export type InitializeImmutableOwnerInput<TAccountAccount extends string> = {
  account: Base58EncodedAddress<TAccountAccount>;
  discriminator: TODO;
};
