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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { Signer, WrappedInstruction, accountMetaWithDefault } from '../shared';

// Output.
export type SignMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCreator extends string
        ? ReadonlySignerAccount<TAccountCreator>
        : TAccountCreator
    ]
  >;

export type SignMetadataInstructionData = { discriminator: number };

export type SignMetadataInstructionDataArgs = {};

export function getSignMetadataInstructionDataEncoder(): Encoder<SignMetadataInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SignMetadataInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'SignMetadataInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 7 } as SignMetadataInstructionData)
  ) as Encoder<SignMetadataInstructionDataArgs>;
}

export function getSignMetadataInstructionDataDecoder(): Decoder<SignMetadataInstructionData> {
  return getStructDecoder<SignMetadataInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'SignMetadataInstructionData' }
  ) as Decoder<SignMetadataInstructionData>;
}

export function getSignMetadataInstructionDataCodec(): Codec<
  SignMetadataInstructionDataArgs,
  SignMetadataInstructionData
> {
  return combineCodec(
    getSignMetadataInstructionDataEncoder(),
    getSignMetadataInstructionDataDecoder()
  );
}

export function signMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    creator: TAccountCreator extends string
      ? Base58EncodedAddress<TAccountCreator>
      : TAccountCreator;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.creator, AccountRole.READONLY_SIGNER),
    ],
    data: getSignMetadataInstructionDataEncoder().encode({}),
    programAddress,
  } as SignMetadataInstruction<TProgram, TAccountMetadata, TAccountCreator>;
}

// Input.
export type SignMetadataInput<
  TAccountMetadata extends string,
  TAccountCreator extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Creator */
  creator: Signer<TAccountCreator>;
};

export function signMetadata<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCreator extends string = string
>(): WrappedInstruction<
  SignMetadataInstruction<TProgram, TAccountMetadata, TAccountCreator>
> {
  throw new Error('Not implemented');
}
