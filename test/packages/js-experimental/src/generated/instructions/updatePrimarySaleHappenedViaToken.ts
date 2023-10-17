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
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
} from '../shared';

// Output.
export type UpdatePrimarySaleHappenedViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountToken extends string
        ? ReadonlyAccount<TAccountToken>
        : TAccountToken
    ]
  >;

export type UpdatePrimarySaleHappenedViaTokenInstructionData = {
  discriminator: number;
};

export type UpdatePrimarySaleHappenedViaTokenInstructionDataArgs = {};

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataEncoder(): Encoder<UpdatePrimarySaleHappenedViaTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UpdatePrimarySaleHappenedViaTokenInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'UpdatePrimarySaleHappenedViaTokenInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 4,
      } as UpdatePrimarySaleHappenedViaTokenInstructionData)
  ) as Encoder<UpdatePrimarySaleHappenedViaTokenInstructionDataArgs>;
}

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataDecoder(): Decoder<UpdatePrimarySaleHappenedViaTokenInstructionData> {
  return getStructDecoder<UpdatePrimarySaleHappenedViaTokenInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'UpdatePrimarySaleHappenedViaTokenInstructionData' }
  ) as Decoder<UpdatePrimarySaleHappenedViaTokenInstructionData>;
}

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataCodec(): Codec<
  UpdatePrimarySaleHappenedViaTokenInstructionDataArgs,
  UpdatePrimarySaleHappenedViaTokenInstructionData
> {
  return combineCodec(
    getUpdatePrimarySaleHappenedViaTokenInstructionDataEncoder(),
    getUpdatePrimarySaleHappenedViaTokenInstructionDataDecoder()
  );
}

export function updatePrimarySaleHappenedViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
    token: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.token, AccountRole.READONLY),
    ],
    data: getUpdatePrimarySaleHappenedViaTokenInstructionDataEncoder().encode(
      {}
    ),
    programAddress,
  } as UpdatePrimarySaleHappenedViaTokenInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >;
}

// Input.
export type UpdatePrimarySaleHappenedViaTokenInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Owner on the token account */
  owner: Signer<TAccountOwner>;
  /** Account containing tokens from the metadata's mint */
  token: Base58EncodedAddress<TAccountToken>;
};

export async function updatePrimarySaleHappenedViaToken<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountToken extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      UpdatePrimarySaleHappenedViaTokenInstruction<
        TProgram,
        TAccountMetadata,
        TAccountOwner,
        TAccountToken
      >,
      TReturn
    >,
  input: UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): Promise<TReturn>;
export async function updatePrimarySaleHappenedViaToken<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountToken extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): Promise<
  WrappedInstruction<
    UpdatePrimarySaleHappenedViaTokenInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountToken
    >
  >
>;
export async function updatePrimarySaleHappenedViaToken<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountToken extends string = string
>(
  input: UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): Promise<
  WrappedInstruction<
    UpdatePrimarySaleHappenedViaTokenInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountToken
    >
  >
>;
export async function updatePrimarySaleHappenedViaToken<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountToken extends string = string
>(
  context:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          UpdatePrimarySaleHappenedViaTokenInstruction<
            TProgram,
            TAccountMetadata,
            TAccountOwner,
            TAccountToken
          >,
          TReturn
        >)
    | UpdatePrimarySaleHappenedViaTokenInput<
        TAccountMetadata,
        TAccountOwner,
        TAccountToken
      >,
  input?: UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): Promise<
  | TReturn
  | WrappedInstruction<
      UpdatePrimarySaleHappenedViaTokenInstruction<
        TProgram,
        TAccountMetadata,
        TAccountOwner,
        TAccountToken
      >
    >
> {
  throw new Error('Not implemented');
}
