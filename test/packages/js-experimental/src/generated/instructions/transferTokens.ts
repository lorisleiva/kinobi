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
export type TransferTokensInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSource extends string
        ? WritableAccount<TAccountSource>
        : TAccountSource,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority
    ]
  >;

export type TransferTokensInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type TransferTokensInstructionDataArgs = { amount: number | bigint };

export function getTransferTokensInstructionDataEncoder(): Encoder<TransferTokensInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<TransferTokensInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
      ],
      { description: 'TransferTokensInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 3 } as TransferTokensInstructionData)
  ) as Encoder<TransferTokensInstructionDataArgs>;
}

export function getTransferTokensInstructionDataDecoder(): Decoder<TransferTokensInstructionData> {
  return getStructDecoder<TransferTokensInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
    ],
    { description: 'TransferTokensInstructionData' }
  ) as Decoder<TransferTokensInstructionData>;
}

export function getTransferTokensInstructionDataCodec(): Codec<
  TransferTokensInstructionDataArgs,
  TransferTokensInstructionData
> {
  return combineCodec(
    getTransferTokensInstructionDataEncoder(),
    getTransferTokensInstructionDataDecoder()
  );
}

export function transferTokensInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    source: TAccountSource extends string
      ? Base58EncodedAddress<TAccountSource>
      : TAccountSource;
    destination: TAccountDestination extends string
      ? Base58EncodedAddress<TAccountDestination>
      : TAccountDestination;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  args: TransferTokensInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
): TransferTokensInstruction<
  TProgram,
  TAccountSource,
  TAccountDestination,
  TAccountAuthority
> {
  return {
    accounts: [
      accountMetaWithDefault(accounts.source, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
    ],
    data: getTransferTokensInstructionDataEncoder().encode(args),
    programAddress,
  };
}
