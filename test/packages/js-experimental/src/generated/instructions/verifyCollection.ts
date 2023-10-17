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
import { Signer, WrappedInstruction, accountMetaWithDefault } from '../shared';

// Output.
export type VerifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollection extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEditionAccount extends
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
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollection extends string
        ? ReadonlyAccount<TAccountCollection>
        : TAccountCollection,
      TAccountCollectionMasterEditionAccount extends string
        ? ReadonlyAccount<TAccountCollectionMasterEditionAccount>
        : TAccountCollectionMasterEditionAccount
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
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollection extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEditionAccount extends
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
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collection, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.collectionMasterEditionAccount,
        AccountRole.READONLY
      ),
    ],
    data: getVerifyCollectionInstructionDataEncoder().encode({}),
    programAddress,
  } as VerifyCollectionInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount
  >;
}

// Input.
export type VerifyCollectionInput<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string
> = {
  /** Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Collection Update authority */
  collectionAuthority: Signer<TAccountCollectionAuthority>;
  /** payer */
  payer?: Signer<TAccountPayer>;
  /** Mint of the Collection */
  collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Base58EncodedAddress<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Base58EncodedAddress<TAccountCollectionMasterEditionAccount>;
};

export function verifyCollection<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string
>(): WrappedInstruction<
  VerifyCollectionInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount
  >
> {
  throw new Error('Not implemented');
}
