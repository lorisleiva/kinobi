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
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { Signer, accountMetaWithDefault } from '../shared';

// Output.
export type BurnTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority
    ]
  >;

export type BurnTokenInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type BurnTokenInstructionDataArgs = { amount: number | bigint };

export function getBurnTokenInstructionDataEncoder(): Encoder<BurnTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<BurnTokenInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
      ],
      { description: 'BurnTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 8 } as BurnTokenInstructionData)
  ) as Encoder<BurnTokenInstructionDataArgs>;
}

export function getBurnTokenInstructionDataDecoder(): Decoder<BurnTokenInstructionData> {
  return getStructDecoder<BurnTokenInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
    ],
    { description: 'BurnTokenInstructionData' }
  ) as Decoder<BurnTokenInstructionData>;
}

export function getBurnTokenInstructionDataCodec(): Codec<
  BurnTokenInstructionDataArgs,
  BurnTokenInstructionData
> {
  return combineCodec(
    getBurnTokenInstructionDataEncoder(),
    getBurnTokenInstructionDataDecoder()
  );
}

export function burnTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  args: BurnTokenInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
    ],
    data: getBurnTokenInstructionDataEncoder().encode(args),
    programAddress,
  } as BurnTokenInstruction<
    TProgram,
    TAccountAccount,
    TAccountMint,
    TAccountAuthority
  >;
}

// Input.
export type BurnTokenInput<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountAuthority extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  mint: Base58EncodedAddress<TAccountMint>;
  authority: Signer<TAccountAuthority>;
};
