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
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type UiAmountToAmountInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<UiAmountToAmountInstructionData> &
  IInstructionWithAccounts<[ReadonlyAccount<TAccountMint>]>;

export type UiAmountToAmountInstructionData = {
  discriminator: number;
  uiAmount: bigint;
};

export type UiAmountToAmountInstructionDataArgs = { uiAmount: number | bigint };

export function getUiAmountToAmountInstructionDataEncoder(): Encoder<UiAmountToAmountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UiAmountToAmountInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['uiAmount', getU64Encoder()],
      ],
      { description: 'UiAmountToAmountInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 24 } as UiAmountToAmountInstructionData)
  ) as Encoder<UiAmountToAmountInstructionDataArgs>;
}

export function getUiAmountToAmountInstructionDataDecoder(): Decoder<UiAmountToAmountInstructionData> {
  return getStructDecoder<UiAmountToAmountInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['uiAmount', getU64Decoder()],
    ],
    { description: 'UiAmountToAmountInstructionData' }
  ) as Decoder<UiAmountToAmountInstructionData>;
}

export function getUiAmountToAmountInstructionDataCodec(): Codec<
  UiAmountToAmountInstructionDataArgs,
  UiAmountToAmountInstructionData
> {
  return combineCodec(
    getUiAmountToAmountInstructionDataEncoder(),
    getUiAmountToAmountInstructionDataDecoder()
  );
}

export function uiAmountToAmountInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  accounts: {
    mint: Base58EncodedAddress<TAccountMint>;
  },
  args: UiAmountToAmountInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
): UiAmountToAmountInstruction<TProgram, TAccountMint> {
  // ...
}
