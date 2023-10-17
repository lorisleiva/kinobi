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
import { Signer, accountMetaWithDefault } from '../shared';

// Output.
export type UnverifySizedCollectionItemInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
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
        ? ReadonlySignerAccount<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollection extends string
        ? WritableAccount<TAccountCollection>
        : TAccountCollection,
      TAccountCollectionMasterEditionAccount extends string
        ? ReadonlyAccount<TAccountCollectionMasterEditionAccount>
        : TAccountCollectionMasterEditionAccount,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord
    ]
  >;

export type UnverifySizedCollectionItemInstructionData = {
  discriminator: number;
};

export type UnverifySizedCollectionItemInstructionDataArgs = {};

export function getUnverifySizedCollectionItemInstructionDataEncoder(): Encoder<UnverifySizedCollectionItemInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UnverifySizedCollectionItemInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'UnverifySizedCollectionItemInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 31,
      } as UnverifySizedCollectionItemInstructionData)
  ) as Encoder<UnverifySizedCollectionItemInstructionDataArgs>;
}

export function getUnverifySizedCollectionItemInstructionDataDecoder(): Decoder<UnverifySizedCollectionItemInstructionData> {
  return getStructDecoder<UnverifySizedCollectionItemInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'UnverifySizedCollectionItemInstructionData' }
  ) as Decoder<UnverifySizedCollectionItemInstructionData>;
}

export function getUnverifySizedCollectionItemInstructionDataCodec(): Codec<
  UnverifySizedCollectionItemInstructionDataArgs,
  UnverifySizedCollectionItemInstructionData
> {
  return combineCodec(
    getUnverifySizedCollectionItemInstructionDataEncoder(),
    getUnverifySizedCollectionItemInstructionDataDecoder()
  );
}

export function unverifySizedCollectionItemInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
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
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
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
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collection, AccountRole.WRITABLE),
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
    data: getUnverifySizedCollectionItemInstructionDataEncoder().encode({}),
    programAddress,
  } as UnverifySizedCollectionItemInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >;
}

// Input.
export type UnverifySizedCollectionItemInput<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Collection Authority */
  collectionAuthority: Signer<TAccountCollectionAuthority>;
  /** payer */
  payer: Signer<TAccountPayer>;
  /** Mint of the Collection */
  collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Base58EncodedAddress<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Base58EncodedAddress<TAccountCollectionMasterEditionAccount>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
};
