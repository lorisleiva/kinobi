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
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type UpdatePrimarySaleHappenedViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
        : TAccountToken,
      ...TRemainingAccounts
    ]
  >;

export type UpdatePrimarySaleHappenedViaTokenInstructionData = {
  discriminator: number;
};

export type UpdatePrimarySaleHappenedViaTokenInstructionDataArgs = {};

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataEncoder(): Encoder<UpdatePrimarySaleHappenedViaTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>(
      [['discriminator', getU8Encoder()]],
      { description: 'UpdatePrimarySaleHappenedViaTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 4 })
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
  TAccountToken extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.token, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getUpdatePrimarySaleHappenedViaTokenInstructionDataEncoder().encode(
      {}
    ),
    programAddress,
  } as UpdatePrimarySaleHappenedViaTokenInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountToken,
    TRemainingAccounts
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
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
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
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
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
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
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
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | UpdatePrimarySaleHappenedViaTokenInput<
        TAccountMetadata,
        TAccountOwner,
        TAccountToken
      >,
  rawInput?: UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof updatePrimarySaleHappenedViaTokenInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountToken
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    token: { value: input.token ?? null, isWritable: false },
  };

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  // TODO

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: updatePrimarySaleHappenedViaTokenInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress
    ),
    signers,
    bytesCreatedOnChain,
  };
}
