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
} from '../shared';

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
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
        : TAccountCollectionAuthorityRecord,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type UnverifySizedCollectionItemInstructionWithSigners<
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
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCollectionAuthority extends string
        ? ReadonlySignerAccount<TAccountCollectionAuthority> &
            IAccountSignerMeta<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
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
        : TAccountCollectionAuthorityRecord,
      ...TRemainingAccounts
    ]
  >;

export type UnverifySizedCollectionItemInstructionData = {
  discriminator: number;
};

export type UnverifySizedCollectionItemInstructionDataArgs = {};

export function getUnverifySizedCollectionItemInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 31 })
  ) satisfies Encoder<UnverifySizedCollectionItemInstructionDataArgs>;
}

export function getUnverifySizedCollectionItemInstructionDataDecoder() {
  return getStructDecoder<UnverifySizedCollectionItemInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<UnverifySizedCollectionItemInstructionData>;
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
  metadata: Address<TAccountMetadata>;
  /** Collection Authority */
  collectionAuthority: Address<TAccountCollectionAuthority>;
  /** payer */
  payer?: Address<TAccountPayer>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Address<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Address<TAccountCollectionMasterEditionAccount>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
};

// Input.
export type UnverifySizedCollectionItemInputWithSigners<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Collection Authority */
  collectionAuthority: TransactionSigner<TAccountCollectionAuthority>;
  /** payer */
  payer?: TransactionSigner<TAccountPayer>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Address<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Address<TAccountCollectionMasterEditionAccount>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
};

export function getUnverifySizedCollectionItemInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UnverifySizedCollectionItemInputWithSigners<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): UnverifySizedCollectionItemInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  ReadonlySignerAccount<TAccountCollectionAuthority> &
    IAccountSignerMeta<TAccountCollectionAuthority>,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
>;
export function getUnverifySizedCollectionItemInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UnverifySizedCollectionItemInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): UnverifySizedCollectionItemInstruction<
  TProgram,
  TAccountMetadata,
  ReadonlySignerAccount<TAccountCollectionAuthority> &
    IAccountSignerMeta<TAccountCollectionAuthority>,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
>;
export function getUnverifySizedCollectionItemInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UnverifySizedCollectionItemInputWithSigners<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): UnverifySizedCollectionItemInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  ReadonlySignerAccount<TAccountCollectionAuthority> &
    IAccountSignerMeta<TAccountCollectionAuthority>,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
>;
export function getUnverifySizedCollectionItemInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UnverifySizedCollectionItemInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): UnverifySizedCollectionItemInstruction<
  TProgram,
  TAccountMetadata,
  ReadonlySignerAccount<TAccountCollectionAuthority> &
    IAccountSignerMeta<TAccountCollectionAuthority>,
  WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
>;
export function getUnverifySizedCollectionItemInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | UnverifySizedCollectionItemInput<
        TAccountMetadata,
        TAccountCollectionAuthority,
        TAccountPayer,
        TAccountCollectionMint,
        TAccountCollection,
        TAccountCollectionMasterEditionAccount,
        TAccountCollectionAuthorityRecord
      >,
  rawInput?: UnverifySizedCollectionItemInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
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
  ) as UnverifySizedCollectionItemInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
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
    typeof getUnverifySizedCollectionItemInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountCollectionAuthority,
      TAccountPayer,
      TAccountCollectionMint,
      TAccountCollection,
      TAccountCollectionMasterEditionAccount,
      TAccountCollectionAuthorityRecord
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    collectionAuthority: {
      value: input.collectionAuthority ?? null,
      isWritable: false,
    },
    payer: { value: input.payer ?? null, isWritable: true },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collection: { value: input.collection ?? null, isWritable: true },
    collectionMasterEditionAccount: {
      value: input.collectionMasterEditionAccount ?? null,
      isWritable: false,
    },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: false,
    },
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
    ...getUnverifySizedCollectionItemInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getUnverifySizedCollectionItemInstructionRaw<
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
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    collectionAuthority: TAccountCollectionAuthority extends string
      ? Address<TAccountCollectionAuthority>
      : TAccountCollectionAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    collectionMint: TAccountCollectionMint extends string
      ? Address<TAccountCollectionMint>
      : TAccountCollectionMint;
    collection: TAccountCollection extends string
      ? Address<TAccountCollection>
      : TAccountCollection;
    collectionMasterEditionAccount: TAccountCollectionMasterEditionAccount extends string
      ? Address<TAccountCollectionMasterEditionAccount>
      : TAccountCollectionMasterEditionAccount;
    collectionAuthorityRecord?: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
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
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
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
    TAccountCollectionAuthorityRecord,
    TRemainingAccounts
  >;
}
