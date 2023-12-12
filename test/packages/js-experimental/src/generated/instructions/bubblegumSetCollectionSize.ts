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
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import {
  SetCollectionSizeArgs,
  SetCollectionSizeArgsArgs,
  getSetCollectionSizeArgsDecoder,
  getSetCollectionSizeArgsEncoder,
} from '../types';

export type BubblegumSetCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountBubblegumSigner extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
      TAccountBubblegumSigner extends string
        ? ReadonlySignerAccount<TAccountBubblegumSigner>
        : TAccountBubblegumSigner,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      ...TRemainingAccounts
    ]
  >;

export type BubblegumSetCollectionSizeInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountBubblegumSigner extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionAuthority extends string
        ? WritableSignerAccount<TAccountCollectionAuthority> &
            IAccountSignerMeta<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountBubblegumSigner extends string
        ? ReadonlySignerAccount<TAccountBubblegumSigner> &
            IAccountSignerMeta<TAccountBubblegumSigner>
        : TAccountBubblegumSigner,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      ...TRemainingAccounts
    ]
  >;

export type BubblegumSetCollectionSizeInstructionData = {
  discriminator: number;
  setCollectionSizeArgs: SetCollectionSizeArgs;
};

export type BubblegumSetCollectionSizeInstructionDataArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};

export function getBubblegumSetCollectionSizeInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      setCollectionSizeArgs: SetCollectionSizeArgsArgs;
    }>([
      ['discriminator', getU8Encoder()],
      ['setCollectionSizeArgs', getSetCollectionSizeArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 36 })
  ) satisfies Encoder<BubblegumSetCollectionSizeInstructionDataArgs>;
}

export function getBubblegumSetCollectionSizeInstructionDataDecoder() {
  return getStructDecoder<BubblegumSetCollectionSizeInstructionData>([
    ['discriminator', getU8Decoder()],
    ['setCollectionSizeArgs', getSetCollectionSizeArgsDecoder()],
  ]) satisfies Decoder<BubblegumSetCollectionSizeInstructionData>;
}

export function getBubblegumSetCollectionSizeInstructionDataCodec(): Codec<
  BubblegumSetCollectionSizeInstructionDataArgs,
  BubblegumSetCollectionSizeInstructionData
> {
  return combineCodec(
    getBubblegumSetCollectionSizeInstructionDataEncoder(),
    getBubblegumSetCollectionSizeInstructionDataDecoder()
  );
}

export type BubblegumSetCollectionSizeInput<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Collection Metadata account */
  collectionMetadata: Address<TAccountCollectionMetadata>;
  /** Collection Update authority */
  collectionAuthority: Address<TAccountCollectionAuthority>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Signing PDA of Bubblegum program */
  bubblegumSigner: Address<TAccountBubblegumSigner>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
  setCollectionSizeArgs: BubblegumSetCollectionSizeInstructionDataArgs['setCollectionSizeArgs'];
};

export type BubblegumSetCollectionSizeInputWithSigners<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Collection Metadata account */
  collectionMetadata: Address<TAccountCollectionMetadata>;
  /** Collection Update authority */
  collectionAuthority: TransactionSigner<TAccountCollectionAuthority>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Signing PDA of Bubblegum program */
  bubblegumSigner: TransactionSigner<TAccountBubblegumSigner>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
  setCollectionSizeArgs: BubblegumSetCollectionSizeInstructionDataArgs['setCollectionSizeArgs'];
};

export function getBubblegumSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BubblegumSetCollectionSizeInputWithSigners<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >
): BubblegumSetCollectionSizeInstructionWithSigners<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountBubblegumSigner,
  TAccountCollectionAuthorityRecord
>;
export function getBubblegumSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BubblegumSetCollectionSizeInput<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >
): BubblegumSetCollectionSizeInstruction<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountBubblegumSigner,
  TAccountCollectionAuthorityRecord
>;
export function getBubblegumSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BubblegumSetCollectionSizeInputWithSigners<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >
): BubblegumSetCollectionSizeInstructionWithSigners<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountBubblegumSigner,
  TAccountCollectionAuthorityRecord
>;
export function getBubblegumSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BubblegumSetCollectionSizeInput<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >
): BubblegumSetCollectionSizeInstruction<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountBubblegumSigner,
  TAccountCollectionAuthorityRecord
>;
export function getBubblegumSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountBubblegumSigner extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | BubblegumSetCollectionSizeInput<
        TAccountCollectionMetadata,
        TAccountCollectionAuthority,
        TAccountCollectionMint,
        TAccountBubblegumSigner,
        TAccountCollectionAuthorityRecord
      >,
  rawInput?: BubblegumSetCollectionSizeInput<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as BubblegumSetCollectionSizeInput<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord
  >;

  // Program address.
  const programAddress = getProgramAddress(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>
  );

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getBubblegumSetCollectionSizeInstructionRaw<
      TProgram,
      TAccountCollectionMetadata,
      TAccountCollectionAuthority,
      TAccountCollectionMint,
      TAccountBubblegumSigner,
      TAccountCollectionAuthorityRecord
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
    collectionAuthority: {
      value: input.collectionAuthority ?? null,
      isWritable: true,
    },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    bubblegumSigner: {
      value: input.bubblegumSigner ?? null,
      isWritable: false,
    },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getBubblegumSetCollectionSizeInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as BubblegumSetCollectionSizeInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getBubblegumSetCollectionSizeInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountBubblegumSigner extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    collectionMetadata: TAccountCollectionMetadata extends string
      ? Address<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    collectionAuthority: TAccountCollectionAuthority extends string
      ? Address<TAccountCollectionAuthority>
      : TAccountCollectionAuthority;
    collectionMint: TAccountCollectionMint extends string
      ? Address<TAccountCollectionMint>
      : TAccountCollectionMint;
    bubblegumSigner: TAccountBubblegumSigner extends string
      ? Address<TAccountBubblegumSigner>
      : TAccountBubblegumSigner;
    collectionAuthorityRecord?: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
  },
  args: BubblegumSetCollectionSizeInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
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
        accounts.bubblegumSigner,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getBubblegumSetCollectionSizeInstructionDataEncoder().encode(args),
    programAddress,
  } as BubblegumSetCollectionSizeInstruction<
    TProgram,
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountBubblegumSigner,
    TAccountCollectionAuthorityRecord,
    TRemainingAccounts
  >;
}
