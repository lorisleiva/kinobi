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
import { Signer, WrappedInstruction, accountMetaWithDefault } from '../shared';

// Output.
export type MintTokensToCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority
    ]
  >;

export type MintTokensToCheckedInstructionData = {
  discriminator: number;
  amount: bigint;
  decimals: number;
};

export type MintTokensToCheckedInstructionDataArgs = {
  amount: number | bigint;
  decimals: number;
};

export function getMintTokensToCheckedInstructionDataEncoder(): Encoder<MintTokensToCheckedInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MintTokensToCheckedInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
        ['decimals', getU8Encoder()],
      ],
      { description: 'MintTokensToCheckedInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 14 } as MintTokensToCheckedInstructionData)
  ) as Encoder<MintTokensToCheckedInstructionDataArgs>;
}

export function getMintTokensToCheckedInstructionDataDecoder(): Decoder<MintTokensToCheckedInstructionData> {
  return getStructDecoder<MintTokensToCheckedInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
      ['decimals', getU8Decoder()],
    ],
    { description: 'MintTokensToCheckedInstructionData' }
  ) as Decoder<MintTokensToCheckedInstructionData>;
}

export function getMintTokensToCheckedInstructionDataCodec(): Codec<
  MintTokensToCheckedInstructionDataArgs,
  MintTokensToCheckedInstructionData
> {
  return combineCodec(
    getMintTokensToCheckedInstructionDataEncoder(),
    getMintTokensToCheckedInstructionDataDecoder()
  );
}

export function mintTokensToCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    token: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
  },
  args: MintTokensToCheckedInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.token, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
    ],
    data: getMintTokensToCheckedInstructionDataEncoder().encode(args),
    programAddress,
  } as MintTokensToCheckedInstruction<
    TProgram,
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >;
}

// Input.
export type MintTokensToCheckedInput<
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string
> = {
  mint: Base58EncodedAddress<TAccountMint>;
  token: Base58EncodedAddress<TAccountToken>;
  mintAuthority: Signer<TAccountMintAuthority>;
  amount: MintTokensToCheckedInstructionDataArgs['amount'];
  decimals: MintTokensToCheckedInstructionDataArgs['decimals'];
};

export function mintTokensToChecked<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string,
  TAccountToken extends string = string,
  TAccountMintAuthority extends string = string
>(): WrappedInstruction<
  MintTokensToCheckedInstruction<
    TProgram,
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >
> {
  throw new Error('Not implemented');
}
