/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import { IInstruction, IInstructionWithData } from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  WrappedInstruction,
} from '../shared';

// Output.
export type AddMemoInstruction<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
> = IInstruction<TProgram> & IInstructionWithData<Uint8Array>;

export type AddMemoInstructionData = { memo: string };

export type AddMemoInstructionDataArgs = AddMemoInstructionData;

export function getAddMemoInstructionDataEncoder(): Encoder<AddMemoInstructionDataArgs> {
  return getStructEncoder<AddMemoInstructionDataArgs>(
    [['memo', getStringEncoder()]],
    { description: 'AddMemoInstructionData' }
  ) as Encoder<AddMemoInstructionDataArgs>;
}

export function getAddMemoInstructionDataDecoder(): Decoder<AddMemoInstructionData> {
  return getStructDecoder<AddMemoInstructionData>(
    [['memo', getStringDecoder()]],
    { description: 'AddMemoInstructionData' }
  ) as Decoder<AddMemoInstructionData>;
}

export function getAddMemoInstructionDataCodec(): Codec<
  AddMemoInstructionDataArgs,
  AddMemoInstructionData
> {
  return combineCodec(
    getAddMemoInstructionDataEncoder(),
    getAddMemoInstructionDataDecoder()
  );
}

export function addMemoInstruction<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
>(
  args: AddMemoInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo' as Base58EncodedAddress<TProgram>
) {
  return {
    data: getAddMemoInstructionDataEncoder().encode(args),
    programAddress,
  } as AddMemoInstruction<TProgram>;
}

// Input.
export type AddMemoInput = {
  memo: AddMemoInstructionDataArgs['memo'];
};

export async function addMemo<
  TReturn,
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<AddMemoInstruction<TProgram>, TReturn>,
  input: AddMemoInput
): Promise<TReturn>;
export async function addMemo<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: AddMemoInput
): Promise<WrappedInstruction<AddMemoInstruction<TProgram>>>;
export async function addMemo<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
>(
  input: AddMemoInput
): Promise<WrappedInstruction<AddMemoInstruction<TProgram>>>;
export async function addMemo<
  TReturn,
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | AddMemoInput,
  rawInput?: AddMemoInput
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as AddMemoInput;

  // Program address.
  const defaultProgramAddress =
    'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo' as Base58EncodedAddress<'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'splMemo',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original args.
  const args = { ...input };

  // Remaining accounts.
  // TODO

  // Bytes created on chain.
  // TODO

  return {
    instruction: addMemoInstruction(
      args as AddMemoInstructionDataArgs,
      programAddress
    ),
    signers: [],
    bytesCreatedOnChain: 0,
  };
}
