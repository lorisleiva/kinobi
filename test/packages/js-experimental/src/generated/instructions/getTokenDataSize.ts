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
} from '@solana/instructions';
import {
  Context,
  Pda,
  PublicKey,
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
export type GetTokenDataSizeInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [TAccountMint extends string ? ReadonlyAccount<TAccountMint> : TAccountMint]
  >;

export type GetTokenDataSizeInstructionData = { discriminator: number };

export type GetTokenDataSizeInstructionDataArgs = {};

export function getGetTokenDataSizeInstructionDataEncoder(): Encoder<GetTokenDataSizeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<GetTokenDataSizeInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'GetTokenDataSizeInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 21 } as GetTokenDataSizeInstructionData)
  ) as Encoder<GetTokenDataSizeInstructionDataArgs>;
}

export function getGetTokenDataSizeInstructionDataDecoder(): Decoder<GetTokenDataSizeInstructionData> {
  return getStructDecoder<GetTokenDataSizeInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'GetTokenDataSizeInstructionData' }
  ) as Decoder<GetTokenDataSizeInstructionData>;
}

export function getGetTokenDataSizeInstructionDataCodec(): Codec<
  GetTokenDataSizeInstructionDataArgs,
  GetTokenDataSizeInstructionData
> {
  return combineCodec(
    getGetTokenDataSizeInstructionDataEncoder(),
    getGetTokenDataSizeInstructionDataDecoder()
  );
}

export function getTokenDataSizeInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getGetTokenDataSizeInstructionDataEncoder().encode({}),
    programAddress,
  } as GetTokenDataSizeInstruction<TProgram, TAccountMint>;
}
