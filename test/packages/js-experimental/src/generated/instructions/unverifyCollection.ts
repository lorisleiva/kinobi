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
import { Signer, accountMetaWithDefault } from '../shared';

// Output.
export type UnverifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollection extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEditionAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCollectionAuthority extends string
        ? WritableSignerAccount<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollection extends string
        ? ReadonlyAccount<TAccountCollection>
        : TAccountCollection,
      TAccountCollectionMasterEditionAccount extends string
        ? ReadonlyAccount<TAccountCollectionMasterEditionAccount>
        : TAccountCollectionMasterEditionAccount,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord
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
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollection extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEditionAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    collectionAuthority: TAccountCollectionAuthority extends string
      ? Base58EncodedAddress<TAccountCollectionAuthority>
      : TAccountCollectionAuthority;
    collectionMint: TAccountCollectionMint extends string
      ? Base58EncodedAddress<TAccountCollectionMint>
      : TAccountCollectionMint;
    collection: TAccountCollection extends string
      ? Base58EncodedAddress<TAccountCollection>
      : TAccountCollection;
    collectionMasterEditionAccount: TAccountCollectionMasterEditionAccount extends string
      ? Base58EncodedAddress<TAccountCollectionMasterEditionAccount>
      : TAccountCollectionMasterEditionAccount;
    collectionAuthorityRecord?: TAccountCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collection, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.collectionMasterEditionAccount,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getUnverifyCollectionInstructionDataEncoder().encode({}),
    programAddress,
  } as UnverifyCollectionInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >;
}

// Input.
export type UnverifyCollectionInput<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Collection Authority */
  collectionAuthority: Signer<TAccountCollectionAuthority>;
  /** Mint of the Collection */
  collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Base58EncodedAddress<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Base58EncodedAddress<TAccountCollectionMasterEditionAccount>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
  discriminator: TODO;
};
