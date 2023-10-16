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
  IAccountMeta,
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
  accountMetaWithDefault,
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
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountBubblegumSigner extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionAuthority extends string
        ? WritableSignerAccount<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountBubblegumSigner extends string
        ? ReadonlySignerAccount<TAccountBubblegumSigner>
        : TAccountBubblegumSigner,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord
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
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountBubblegumSigner extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string
>(
  accounts: {
    collectionMetadata: TAccountCollectionMetadata extends string
      ? Base58EncodedAddress<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    collectionAuthority: TAccountCollectionAuthority extends string
      ? Base58EncodedAddress<TAccountCollectionAuthority>
      : TAccountCollectionAuthority;
    collectionMint: TAccountCollectionMint extends string
      ? Base58EncodedAddress<TAccountCollectionMint>
      : TAccountCollectionMint;
    bubblegumSigner: TAccountBubblegumSigner extends string
      ? Base58EncodedAddress<TAccountBubblegumSigner>
      : TAccountBubblegumSigner;
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
  },
  args: BubblegumSetCollectionSizeInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.collectionMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.bubblegumSigner,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.READONLY
      ),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getBubblegumSetCollectionSizeInstructionDataEncoder().encode(args),
    programAddress,
  } as BubblegumSetCollectionSizeInstruction<
    TProgram,
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >;
}
