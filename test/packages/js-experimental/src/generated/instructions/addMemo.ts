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
import { WrappedInstruction } from '../shared';

// Output.
export type AddMemoInstruction<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
> = IInstruction<TProgram> & IInstructionWithData<Uint8Array>;

export type AddMemoInstructionData = { memo: string };

export type AddMemoInstructionDataArgs = AddMemoInstructionData;

export function getAddMemoInstructionDataEncoder(): Encoder<AddMemoInstructionDataArgs> {
  return getStructEncoder<AddMemoInstructionData>(
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

export function addMemo<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
>(): WrappedInstruction<AddMemoInstruction<TProgram>> {
  throw new Error('Not implemented');
}
