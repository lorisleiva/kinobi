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
export type SetCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
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
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord
    ]
  >;

export type SetCollectionSizeInstructionData = {
  discriminator: number;
  setCollectionSizeArgs: SetCollectionSizeArgs;
};

export type SetCollectionSizeInstructionDataArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};

export function getSetCollectionSizeInstructionDataEncoder(): Encoder<SetCollectionSizeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SetCollectionSizeInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['setCollectionSizeArgs', getSetCollectionSizeArgsEncoder()],
      ],
      { description: 'SetCollectionSizeInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 34 } as SetCollectionSizeInstructionData)
  ) as Encoder<SetCollectionSizeInstructionDataArgs>;
}

export function getSetCollectionSizeInstructionDataDecoder(): Decoder<SetCollectionSizeInstructionData> {
  return getStructDecoder<SetCollectionSizeInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['setCollectionSizeArgs', getSetCollectionSizeArgsDecoder()],
    ],
    { description: 'SetCollectionSizeInstructionData' }
  ) as Decoder<SetCollectionSizeInstructionData>;
}

export function getSetCollectionSizeInstructionDataCodec(): Codec<
  SetCollectionSizeInstructionDataArgs,
  SetCollectionSizeInstructionData
> {
  return combineCodec(
    getSetCollectionSizeInstructionDataEncoder(),
    getSetCollectionSizeInstructionDataDecoder()
  );
}

export function setCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
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
    collectionAuthorityRecord?: TAccountCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
  },
  args: SetCollectionSizeInstructionDataArgs,
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
        accounts.collectionAuthorityRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getSetCollectionSizeInstructionDataEncoder().encode(args),
    programAddress,
  } as SetCollectionSizeInstruction<
    TProgram,
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountCollectionAuthorityRecord
  >;
}
