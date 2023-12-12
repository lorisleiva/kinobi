/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
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
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

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

export type UpdatePrimarySaleHappenedViaTokenInstructionWithSigners<
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
        ? ReadonlySignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
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

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 4 })
  ) satisfies Encoder<UpdatePrimarySaleHappenedViaTokenInstructionDataArgs>;
}

export function getUpdatePrimarySaleHappenedViaTokenInstructionDataDecoder() {
  return getStructDecoder<UpdatePrimarySaleHappenedViaTokenInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<UpdatePrimarySaleHappenedViaTokenInstructionData>;
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

export type UpdatePrimarySaleHappenedViaTokenInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Owner on the token account */
  owner: Address<TAccountOwner>;
  /** Account containing tokens from the metadata's mint */
  token: Address<TAccountToken>;
};

export type UpdatePrimarySaleHappenedViaTokenInputWithSigners<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Owner on the token account */
  owner: TransactionSigner<TAccountOwner>;
  /** Account containing tokens from the metadata's mint */
  token: Address<TAccountToken>;
};

export function getUpdatePrimarySaleHappenedViaTokenInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UpdatePrimarySaleHappenedViaTokenInputWithSigners<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): UpdatePrimarySaleHappenedViaTokenInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountToken
>;
export function getUpdatePrimarySaleHappenedViaTokenInstruction<
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
): UpdatePrimarySaleHappenedViaTokenInstruction<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountToken
>;
export function getUpdatePrimarySaleHappenedViaTokenInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UpdatePrimarySaleHappenedViaTokenInputWithSigners<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >
): UpdatePrimarySaleHappenedViaTokenInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountToken
>;
export function getUpdatePrimarySaleHappenedViaTokenInstruction<
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
): UpdatePrimarySaleHappenedViaTokenInstruction<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountToken
>;
export function getUpdatePrimarySaleHappenedViaTokenInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountToken extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
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
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as UpdatePrimarySaleHappenedViaTokenInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountToken
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getUpdatePrimarySaleHappenedViaTokenInstructionRaw<
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
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getUpdatePrimarySaleHappenedViaTokenInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getUpdatePrimarySaleHappenedViaTokenInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    token: TAccountToken extends string
      ? Address<TAccountToken>
      : TAccountToken;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
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
