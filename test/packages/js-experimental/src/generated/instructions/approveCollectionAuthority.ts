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
export type ApproveCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority extends string
        ? ReadonlyAccount<TAccountNewCollectionAuthority>
        : TAccountNewCollectionAuthority,
      TAccountUpdateAuthority extends string
        ? WritableSignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type ApproveCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type ApproveCollectionAuthorityInstructionDataArgs = {};

export function getApproveCollectionAuthorityInstructionDataEncoder(): Encoder<ApproveCollectionAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<ApproveCollectionAuthorityInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'ApproveCollectionAuthorityInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 23,
      } as ApproveCollectionAuthorityInstructionData)
  ) as Encoder<ApproveCollectionAuthorityInstructionDataArgs>;
}

export function getApproveCollectionAuthorityInstructionDataDecoder(): Decoder<ApproveCollectionAuthorityInstructionData> {
  return getStructDecoder<ApproveCollectionAuthorityInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'ApproveCollectionAuthorityInstructionData' }
  ) as Decoder<ApproveCollectionAuthorityInstructionData>;
}

export function getApproveCollectionAuthorityInstructionDataCodec(): Codec<
  ApproveCollectionAuthorityInstructionDataArgs,
  ApproveCollectionAuthorityInstructionData
> {
  return combineCodec(
    getApproveCollectionAuthorityInstructionDataEncoder(),
    getApproveCollectionAuthorityInstructionDataDecoder()
  );
}

export function approveCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
>(
  accounts: {
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    newCollectionAuthority: TAccountNewCollectionAuthority extends string
      ? Base58EncodedAddress<TAccountNewCollectionAuthority>
      : TAccountNewCollectionAuthority;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.newCollectionAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getApproveCollectionAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as ApproveCollectionAuthorityInstruction<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >;
}

// Input.
export type ApproveCollectionAuthorityInput<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Base58EncodedAddress<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: Signer<TAccountUpdateAuthority>;
  /** Payer */
  payer?: Signer<TAccountPayer>;
  /** Collection Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Base58EncodedAddress<TAccountMint>;
  /** System program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** Rent info */
  rent?: Base58EncodedAddress<TAccountRent>;
};

export function approveCollectionAuthority<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountNewCollectionAuthority extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRent extends string = string
>(): WrappedInstruction<
  ApproveCollectionAuthorityInstruction<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
> {
  throw new Error('Not implemented');
}
