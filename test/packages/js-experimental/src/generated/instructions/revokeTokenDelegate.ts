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
export type RevokeTokenDelegateInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSource extends string
        ? WritableAccount<TAccountSource>
        : TAccountSource,
      TAccountOwner extends string
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner
    ]
  >;

export type RevokeTokenDelegateInstructionData = { discriminator: number };

export type RevokeTokenDelegateInstructionDataArgs = {};

export function getRevokeTokenDelegateInstructionDataEncoder(): Encoder<RevokeTokenDelegateInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<RevokeTokenDelegateInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'RevokeTokenDelegateInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 5 } as RevokeTokenDelegateInstructionData)
  ) as Encoder<RevokeTokenDelegateInstructionDataArgs>;
}

export function getRevokeTokenDelegateInstructionDataDecoder(): Decoder<RevokeTokenDelegateInstructionData> {
  return getStructDecoder<RevokeTokenDelegateInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'RevokeTokenDelegateInstructionData' }
  ) as Decoder<RevokeTokenDelegateInstructionData>;
}

export function getRevokeTokenDelegateInstructionDataCodec(): Codec<
  RevokeTokenDelegateInstructionDataArgs,
  RevokeTokenDelegateInstructionData
> {
  return combineCodec(
    getRevokeTokenDelegateInstructionDataEncoder(),
    getRevokeTokenDelegateInstructionDataDecoder()
  );
}

export function revokeTokenDelegateInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
>(
  accounts: {
    source: TAccountSource extends string
      ? Base58EncodedAddress<TAccountSource>
      : TAccountSource;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.source, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY_SIGNER),
    ],
    data: getRevokeTokenDelegateInstructionDataEncoder().encode({}),
    programAddress,
  } as RevokeTokenDelegateInstruction<TProgram, TAccountSource, TAccountOwner>;
}

// Input.
export type RevokeTokenDelegateInput<
  TAccountSource extends string,
  TAccountOwner extends string
> = {
  source: Base58EncodedAddress<TAccountSource>;
  owner: Signer<TAccountOwner>;
};

export function revokeTokenDelegate<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string = string,
  TAccountOwner extends string = string
>(): WrappedInstruction<
  RevokeTokenDelegateInstruction<TProgram, TAccountSource, TAccountOwner>
> {
  throw new Error('Not implemented');
}
