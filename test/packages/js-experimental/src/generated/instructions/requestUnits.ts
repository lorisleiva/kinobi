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
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { IInstruction, IInstructionWithData } from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  WrappedInstruction,
} from '../shared';

// Output.
export type RequestUnitsInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
> = IInstruction<TProgram> & IInstructionWithData<Uint8Array>;

export type RequestUnitsInstructionData = {
  discriminator: number;
  /** Units to request for transaction-wide compute. */
  units: number;
  /** Prioritization fee lamports. */
  additionalFee: number;
};

export type RequestUnitsInstructionDataArgs = {
  /** Units to request for transaction-wide compute. */
  units: number;
  /** Prioritization fee lamports. */
  additionalFee: number;
};

export function getRequestUnitsInstructionDataEncoder(): Encoder<RequestUnitsInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<RequestUnitsInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['units', getU32Encoder()],
        ['additionalFee', getU32Encoder()],
      ],
      { description: 'RequestUnitsInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 0 } as RequestUnitsInstructionData)
  ) as Encoder<RequestUnitsInstructionDataArgs>;
}

export function getRequestUnitsInstructionDataDecoder(): Decoder<RequestUnitsInstructionData> {
  return getStructDecoder<RequestUnitsInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['units', getU32Decoder()],
      ['additionalFee', getU32Decoder()],
    ],
    { description: 'RequestUnitsInstructionData' }
  ) as Decoder<RequestUnitsInstructionData>;
}

export function getRequestUnitsInstructionDataCodec(): Codec<
  RequestUnitsInstructionDataArgs,
  RequestUnitsInstructionData
> {
  return combineCodec(
    getRequestUnitsInstructionDataEncoder(),
    getRequestUnitsInstructionDataDecoder()
  );
}

export function requestUnitsInstruction<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  args: RequestUnitsInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'ComputeBudget111111111111111111111111111111' as Base58EncodedAddress<TProgram>
) {
  return {
    data: getRequestUnitsInstructionDataEncoder().encode(args),
    programAddress,
  } as RequestUnitsInstruction<TProgram>;
}

// Input.
export type RequestUnitsInput = {
  units: RequestUnitsInstructionDataArgs['units'];
  additionalFee: RequestUnitsInstructionDataArgs['additionalFee'];
};

export async function requestUnits<
  TReturn,
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<RequestUnitsInstruction<TProgram>, TReturn>,
  input: RequestUnitsInput
): Promise<TReturn>;
export async function requestUnits<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: RequestUnitsInput
): Promise<WrappedInstruction<RequestUnitsInstruction<TProgram>>>;
export async function requestUnits<
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  input: RequestUnitsInput
): Promise<WrappedInstruction<RequestUnitsInstruction<TProgram>>>;
export async function requestUnits<
  TReturn,
  TProgram extends string = 'ComputeBudget111111111111111111111111111111'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<RequestUnitsInstruction<TProgram>, TReturn>)
    | RequestUnitsInput,
  rawInput?: RequestUnitsInput
): Promise<TReturn | WrappedInstruction<RequestUnitsInstruction<TProgram>>> {
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<RequestUnitsInstruction<TProgram>, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as RequestUnitsInput;

  const defaultProgramAddress =
    'ComputeBudget111111111111111111111111111111' as Base58EncodedAddress<'ComputeBudget111111111111111111111111111111'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'splComputeBudget',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  return {
    instruction: requestUnitsInstruction(input as any, input, programAddress),
    signers: [],
    bytesCreatedOnChain: 0,
  };
}
