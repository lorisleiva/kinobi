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
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
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
import {
  SetCollectionSizeArgs,
  SetCollectionSizeArgsArgs,
  getSetCollectionSizeArgsDecoder,
  getSetCollectionSizeArgsEncoder,
} from '../types';

// Output.
export type BubblegumSetCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountBubblegumSigner extends string = string,
  TAccountCollectionAuthorityRecord extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<BubblegumSetCollectionSizeInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountCollectionMetadata>,
      WritableSignerAccount<TAccountCollectionAuthority>,
      ReadonlyAccount<TAccountCollectionMint>,
      ReadonlySignerAccount<TAccountBubblegumSigner>,
      ReadonlyAccount<TAccountCollectionAuthorityRecord>
    ]
  >;

export type BubblegumSetCollectionSizeInstructionData = {
  discriminator: number;
  setCollectionSizeArgs: SetCollectionSizeArgs;
};

export type BubblegumSetCollectionSizeInstructionDataArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};

export function getBubblegumSetCollectionSizeInstructionDataEncoder(): Encoder<BubblegumSetCollectionSizeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<BubblegumSetCollectionSizeInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['setCollectionSizeArgs', getSetCollectionSizeArgsEncoder()],
      ],
      { description: 'BubblegumSetCollectionSizeInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 36,
      } as BubblegumSetCollectionSizeInstructionData)
  ) as Encoder<BubblegumSetCollectionSizeInstructionDataArgs>;
}

export function getBubblegumSetCollectionSizeInstructionDataDecoder(): Decoder<BubblegumSetCollectionSizeInstructionData> {
  return getStructDecoder<BubblegumSetCollectionSizeInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['setCollectionSizeArgs', getSetCollectionSizeArgsDecoder()],
    ],
    { description: 'BubblegumSetCollectionSizeInstructionData' }
  ) as Decoder<BubblegumSetCollectionSizeInstructionData>;
}

export function getBubblegumSetCollectionSizeInstructionDataCodec(): Codec<
  BubblegumSetCollectionSizeInstructionDataArgs,
  BubblegumSetCollectionSizeInstructionData
> {
  return combineCodec(
    getBubblegumSetCollectionSizeInstructionDataEncoder(),
    getBubblegumSetCollectionSizeInstructionDataDecoder()
  );
}

export function bubblegumSetCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountBubblegumSigner extends string = string,
  TAccountCollectionAuthorityRecord extends string = string
>(
  accounts: {
    collectionMetadata: Base58EncodedAddress<TAccountCollectionMetadata>;
    collectionAuthority: Base58EncodedAddress<TAccountCollectionAuthority>;
    collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
    bubblegumSigner: Base58EncodedAddress<TAccountBubblegumSigner>;
    collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
  },
  args: BubblegumSetCollectionSizeInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): BubblegumSetCollectionSizeInstruction<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountBubblegumSigner,
  TAccountCollectionAuthorityRecord
> {
  // ...
}
