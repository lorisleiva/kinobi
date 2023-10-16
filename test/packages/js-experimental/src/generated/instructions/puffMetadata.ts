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
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  WritableAccount,
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
export type PuffMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<PuffMetadataInstructionData> &
  IInstructionWithAccounts<[WritableAccount<TAccountMetadata>]>;

export type PuffMetadataInstructionData = { discriminator: number };

export type PuffMetadataInstructionDataArgs = {};

export function getPuffMetadataInstructionDataEncoder(): Encoder<PuffMetadataInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<PuffMetadataInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'PuffMetadataInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 14 } as PuffMetadataInstructionData)
  ) as Encoder<PuffMetadataInstructionDataArgs>;
}

export function getPuffMetadataInstructionDataDecoder(): Decoder<PuffMetadataInstructionData> {
  return getStructDecoder<PuffMetadataInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'PuffMetadataInstructionData' }
  ) as Decoder<PuffMetadataInstructionData>;
}

export function getPuffMetadataInstructionDataCodec(): Codec<
  PuffMetadataInstructionDataArgs,
  PuffMetadataInstructionData
> {
  return combineCodec(
    getPuffMetadataInstructionDataEncoder(),
    getPuffMetadataInstructionDataDecoder()
  );
}

export function puffMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): PuffMetadataInstruction<TProgram, TAccountMetadata> {
  return {
    accounts: [
      { address: accounts.metadata, role: AccountRole.WRITABLE_SIGNER },
    ],
    data: getPuffMetadataInstructionDataEncoder().encode({}),
    programAddress,
  };
}