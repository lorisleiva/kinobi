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
  IAccountMeta,
  IInstruction,
  IInstructionWithData,
} from '@solana/instructions';
import { Context, TransactionBuilder, transactionBuilder } from 'umi';
import { Serializer } from 'umiSerializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type SetComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
> = IInstruction<TProgram> & IInstructionWithData<Uint8Array>;

export type SetComputeUnitPriceInstructionData = {
  discriminator: number;
  /** Transaction compute unit price used for prioritization fees. */
  microLamports: bigint;
};

export type SetComputeUnitPriceInstructionDataArgs = {
  /** Transaction compute unit price used for prioritization fees. */
  microLamports: number | bigint;
};

export function getSetComputeUnitPriceInstructionDataEncoder(): Encoder<SetComputeUnitPriceInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SetComputeUnitPriceInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['microLamports', getU64Encoder()],
      ],
      { description: 'SetComputeUnitPriceInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 3 } as SetComputeUnitPriceInstructionData)
  ) as Encoder<SetComputeUnitPriceInstructionDataArgs>;
}

export function getSetComputeUnitPriceInstructionDataDecoder(): Decoder<SetComputeUnitPriceInstructionData> {
  return getStructDecoder<SetComputeUnitPriceInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['microLamports', getU64Decoder()],
    ],
    { description: 'SetComputeUnitPriceInstructionData' }
  ) as Decoder<SetComputeUnitPriceInstructionData>;
}

export function getSetComputeUnitPriceInstructionDataCodec(): Codec<
  SetComputeUnitPriceInstructionDataArgs,
  SetComputeUnitPriceInstructionData
> {
  return combineCodec(
    getSetComputeUnitPriceInstructionDataEncoder(),
    getSetComputeUnitPriceInstructionDataDecoder()
  );
}

export function setComputeUnitPriceInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  args: SetComputeUnitPriceInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'ComputeBudget111111111111111111111111111111' as Base58EncodedAddress<TProgram>
) {
  return {
    data: getSetComputeUnitPriceInstructionDataEncoder().encode(args),
    programAddress,
  } as SetComputeUnitPriceInstruction<TProgram>;
}
