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
export type VerifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<VerifyCollectionInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountCollectionAuthority>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountCollectionMint>,
      ReadonlyAccount<TAccountCollection>,
      ReadonlyAccount<TAccountCollectionMasterEditionAccount>
    ]
  >;

export type VerifyCollectionInstructionData = { discriminator: number };

export type VerifyCollectionInstructionDataArgs = {};

export function getVerifyCollectionInstructionDataEncoder(): Encoder<VerifyCollectionInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<VerifyCollectionInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'VerifyCollectionInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 18 } as VerifyCollectionInstructionData)
  ) as Encoder<VerifyCollectionInstructionDataArgs>;
}

export function getVerifyCollectionInstructionDataDecoder(): Decoder<VerifyCollectionInstructionData> {
  return getStructDecoder<VerifyCollectionInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'VerifyCollectionInstructionData' }
  ) as Decoder<VerifyCollectionInstructionData>;
}

export function getVerifyCollectionInstructionDataCodec(): Codec<
  VerifyCollectionInstructionDataArgs,
  VerifyCollectionInstructionData
> {
  return combineCodec(
    getVerifyCollectionInstructionDataEncoder(),
    getVerifyCollectionInstructionDataDecoder()
  );
}

export function verifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    collectionAuthority: Base58EncodedAddress<TAccountCollectionAuthority>;
    payer: Base58EncodedAddress<TAccountPayer>;
    collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
    collection: Base58EncodedAddress<TAccountCollection>;
    collectionMasterEditionAccount: Base58EncodedAddress<TAccountCollectionMasterEditionAccount>;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): VerifyCollectionInstruction<
  TProgram,
  TAccountMetadata,
  TAccountCollectionAuthority,
  TAccountPayer,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount
> {
  return {
    accounts: [
      { address: accounts.metadata, role: AccountRole.WRITABLE_SIGNER },
      {
        address: accounts.collectionAuthority,
        role: AccountRole.WRITABLE_SIGNER,
      },
      { address: accounts.payer, role: AccountRole.WRITABLE_SIGNER },
      { address: accounts.collectionMint, role: AccountRole.WRITABLE_SIGNER },
      { address: accounts.collection, role: AccountRole.WRITABLE_SIGNER },
      {
        address: accounts.collectionMasterEditionAccount,
        role: AccountRole.WRITABLE_SIGNER,
      },
    ],
    data: getVerifyCollectionInstructionDataEncoder().encode({}),
    programAddress,
  };
}