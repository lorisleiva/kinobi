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

// Output.
export type SignMetadataInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCreator extends string
        ? ReadonlySignerAccount<TAccountCreator>
        : TAccountCreator,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type SignMetadataInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCreator extends string
        ? ReadonlySignerAccount<TAccountCreator> &
            IAccountSignerMeta<TAccountCreator>
        : TAccountCreator,
      ...TRemainingAccounts
    ]
  >;

export type SignMetadataInstructionData = { discriminator: number };

export type SignMetadataInstructionDataArgs = {};

export function getSignMetadataInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 7 })
  ) satisfies Encoder<SignMetadataInstructionDataArgs>;
}

export function getSignMetadataInstructionDataDecoder() {
  return getStructDecoder<SignMetadataInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<SignMetadataInstructionData>;
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

export function getSignMetadataInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    creator: TAccountCreator extends string
      ? Address<TAccountCreator>
      : TAccountCreator;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.creator, AccountRole.READONLY_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getSignMetadataInstructionDataEncoder().encode({}),
    programAddress,
  } as SignMetadataInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCreator,
    TRemainingAccounts
  >;
}

// Input.
export type SignMetadataInput<
  TAccountMetadata extends string,
  TAccountCreator extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Creator */
  creator: Address<TAccountCreator>;
};

// Input.
export type SignMetadataInputWithSigners<
  TAccountMetadata extends string,
  TAccountCreator extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Creator */
  creator: TransactionSigner<TAccountCreator>;
};

// Input.
export type SignMetadataAsyncInput<
  TAccountMetadata extends string,
  TAccountCreator extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Creator */
  creator: Address<TAccountCreator>;
};

// Input.
export type SignMetadataAsyncInputWithSigners<
  TAccountMetadata extends string,
  TAccountCreator extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Creator */
  creator: TransactionSigner<TAccountCreator>;
};

export async function getSignMetadataInstructionAsync<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SignMetadataAsyncInputWithSigners<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstructionWithSigners<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstructionAsync<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SignMetadataAsyncInput<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstruction<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstructionAsync<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SignMetadataAsyncInputWithSigners<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstructionWithSigners<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstructionAsync<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SignMetadataAsyncInput<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstruction<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstructionAsync<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | SignMetadataAsyncInput<TAccountMetadata, TAccountCreator>,
  rawInput?: SignMetadataAsyncInput<TAccountMetadata, TAccountCreator>
): Promise<IInstruction> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SignMetadataAsyncInput<TAccountMetadata, TAccountCreator>;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getSignMetadataInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountCreator
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    creator: { value: input.creator ?? null, isWritable: false },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getSignMetadataInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export async function getSignMetadataInstruction<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SignMetadataInputWithSigners<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstructionWithSigners<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstruction<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SignMetadataInput<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstruction<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstruction<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SignMetadataInputWithSigners<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstructionWithSigners<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstruction<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SignMetadataInput<TAccountMetadata, TAccountCreator>
): Promise<
  SignMetadataInstruction<
    TProgram,
    TAccountMetadata,
    ReadonlySignerAccount<TAccountCreator> & IAccountSignerMeta<TAccountCreator>
  >
>;
export async function getSignMetadataInstruction<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | SignMetadataInput<TAccountMetadata, TAccountCreator>,
  rawInput?: SignMetadataInput<TAccountMetadata, TAccountCreator>
): Promise<IInstruction> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SignMetadataInput<TAccountMetadata, TAccountCreator>;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getSignMetadataInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountCreator
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    creator: { value: input.creator ?? null, isWritable: false },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getSignMetadataInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}
