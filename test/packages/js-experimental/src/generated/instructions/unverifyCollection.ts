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

// Output.
export type UnverifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string,
  TAccountCollectionAuthorityRecord extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<UnverifyCollectionInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountCollectionAuthority>,
      ReadonlyAccount<TAccountCollectionMint>,
      ReadonlyAccount<TAccountCollection>,
      ReadonlyAccount<TAccountCollectionMasterEditionAccount>,
      ReadonlyAccount<TAccountCollectionAuthorityRecord>
    ]
  >;

export type UnverifyCollectionInstructionData = { discriminator: number };

export type UnverifyCollectionInstructionDataArgs = {};

export function getUnverifyCollectionInstructionDataEncoder(): Encoder<UnverifyCollectionInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UnverifyCollectionInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'UnverifyCollectionInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 22 } as UnverifyCollectionInstructionData)
  ) as Encoder<UnverifyCollectionInstructionDataArgs>;
}

export function getUnverifyCollectionInstructionDataDecoder(): Decoder<UnverifyCollectionInstructionData> {
  return getStructDecoder<UnverifyCollectionInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'UnverifyCollectionInstructionData' }
  ) as Decoder<UnverifyCollectionInstructionData>;
}

export function getUnverifyCollectionInstructionDataCodec(): Codec<
  UnverifyCollectionInstructionDataArgs,
  UnverifyCollectionInstructionData
> {
  return combineCodec(
    getUnverifyCollectionInstructionDataEncoder(),
    getUnverifyCollectionInstructionDataDecoder()
  );
}

export function unverifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string,
  TAccountCollectionAuthorityRecord extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    collectionAuthority: Base58EncodedAddress<TAccountCollectionAuthority>;
    collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
    collection: Base58EncodedAddress<TAccountCollection>;
    collectionMasterEditionAccount: Base58EncodedAddress<TAccountCollectionMasterEditionAccount>;
    collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
  },
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): UnverifyCollectionInstruction<
  TProgram,
  TAccountMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
> {
  // ...
}
