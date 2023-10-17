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
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { Signer, accountMetaWithDefault } from '../shared';

// Output.
export type ApproveTokenDelegateInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSource extends string
        ? WritableAccount<TAccountSource>
        : TAccountSource,
      TAccountDelegate extends string
        ? ReadonlyAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountOwner extends string
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner
    ]
  >;

export type ApproveTokenDelegateInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type ApproveTokenDelegateInstructionDataArgs = {
  amount: number | bigint;
};

export function getApproveTokenDelegateInstructionDataEncoder(): Encoder<ApproveTokenDelegateInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<ApproveTokenDelegateInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
      ],
      { description: 'ApproveTokenDelegateInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 4 } as ApproveTokenDelegateInstructionData)
  ) as Encoder<ApproveTokenDelegateInstructionDataArgs>;
}

export function getApproveTokenDelegateInstructionDataDecoder(): Decoder<ApproveTokenDelegateInstructionData> {
  return getStructDecoder<ApproveTokenDelegateInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
    ],
    { description: 'ApproveTokenDelegateInstructionData' }
  ) as Decoder<ApproveTokenDelegateInstructionData>;
}

export function getApproveTokenDelegateInstructionDataCodec(): Codec<
  ApproveTokenDelegateInstructionDataArgs,
  ApproveTokenDelegateInstructionData
> {
  return combineCodec(
    getApproveTokenDelegateInstructionDataEncoder(),
    getApproveTokenDelegateInstructionDataDecoder()
  );
}

export function approveTokenDelegateInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
>(
  accounts: {
    source: TAccountSource extends string
      ? Base58EncodedAddress<TAccountSource>
      : TAccountSource;
    delegate: TAccountDelegate extends string
      ? Base58EncodedAddress<TAccountDelegate>
      : TAccountDelegate;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
  },
  args: ApproveTokenDelegateInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.source, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.delegate, AccountRole.READONLY),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY_SIGNER),
    ],
    data: getApproveTokenDelegateInstructionDataEncoder().encode(args),
    programAddress,
  } as ApproveTokenDelegateInstruction<
    TProgram,
    TAccountSource,
    TAccountDelegate,
    TAccountOwner
  >;
}

// Input.
export type ApproveTokenDelegateInput<
  TAccountSource extends string,
  TAccountDelegate extends string,
  TAccountOwner extends string
> = {
  source: Base58EncodedAddress<TAccountSource>;
  delegate: Base58EncodedAddress<TAccountDelegate>;
  owner: Signer<TAccountOwner>;
  discriminator: TODO;
  amount: TODO;
};
