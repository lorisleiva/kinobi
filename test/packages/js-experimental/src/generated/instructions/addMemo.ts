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
import { Context, TransactionBuilder, transactionBuilder } from 'umi';
import { Serializer } from 'umiSerializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type AddMemoInstruction<
  TProgram extends string = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'
> = IInstruction<TProgram> & IInstructionWithData<AddMemoInstructionData>;

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
  programId: Base58EncodedAddress<TProgram> = 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo' as Base58EncodedAddress<TProgram>
): AddMemoInstruction<TProgram> {
  // ...
}
