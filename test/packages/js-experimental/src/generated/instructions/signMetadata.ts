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
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type SignMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCreator extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<SignMetadataInstructionData> &
  IInstructionWithAccounts<
    [WritableAccount<TAccountMetadata>, ReadonlySignerAccount<TAccountCreator>]
  >;

export type SignMetadataInstructionData = { discriminator: number };

export type SignMetadataInstructionDataArgs = {};

export function getSignMetadataInstructionDataEncoder(): Encoder<SignMetadataInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SignMetadataInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'SignMetadataInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 7 } as SignMetadataInstructionData)
  ) as Encoder<SignMetadataInstructionDataArgs>;
}

export function getSignMetadataInstructionDataDecoder(): Decoder<SignMetadataInstructionData> {
  return getStructDecoder<SignMetadataInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'SignMetadataInstructionData' }
  ) as Decoder<SignMetadataInstructionData>;
}

export function getSignMetadataInstructionDataCodec(): Codec<
  SignMetadataInstructionDataArgs,
  SignMetadataInstructionData
> {
  return combineCodec(
    getSignMetadataInstructionDataEncoder(),
    getSignMetadataInstructionDataDecoder()
  );
}

export function signMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCreator extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    creator: Base58EncodedAddress<TAccountCreator>;
  },
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): SignMetadataInstruction<TProgram, TAccountMetadata, TAccountCreator> {
  // ...
}
