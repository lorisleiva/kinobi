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
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type SetAndVerifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
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
        ? WritableSignerAccount<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollection extends string
        ? ReadonlyAccount<TAccountCollection>
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

export type SetAndVerifyCollectionInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
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
        ? WritableSignerAccount<TAccountCollectionAuthority> &
            IAccountSignerMeta<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollection extends string
        ? ReadonlyAccount<TAccountCollection>
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

export type SetAndVerifyCollectionInstructionData = { discriminator: number };

export type SetAndVerifyCollectionInstructionDataArgs = {};

export function getSetAndVerifyCollectionInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 25 })
  ) satisfies Encoder<SetAndVerifyCollectionInstructionDataArgs>;
}

export function getSetAndVerifyCollectionInstructionDataDecoder() {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<SetAndVerifyCollectionInstructionData>;
}

export function getSetAndVerifyCollectionInstructionDataCodec(): Codec<
  SetAndVerifyCollectionInstructionDataArgs,
  SetAndVerifyCollectionInstructionData
> {
  return combineCodec(
    getSetAndVerifyCollectionInstructionDataEncoder(),
    getSetAndVerifyCollectionInstructionDataDecoder()
  );
}

export type SetAndVerifyCollectionInput<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Collection Update authority */
  collectionAuthority: Address<TAccountCollectionAuthority>;
  /** Payer */
  payer: Address<TAccountPayer>;
  /** Update Authority of Collection NFT and NFT */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Address<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Address<TAccountCollectionMasterEditionAccount>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
};

export type SetAndVerifyCollectionInputWithSigners<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Collection Update authority */
  collectionAuthority: TransactionSigner<TAccountCollectionAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** Update Authority of Collection NFT and NFT */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Address<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Address<TAccountCollectionMasterEditionAccount>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
};

export function getSetAndVerifyCollectionInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetAndVerifyCollectionInputWithSigners<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): SetAndVerifyCollectionInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountCollectionAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
>;
export function getSetAndVerifyCollectionInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetAndVerifyCollectionInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): SetAndVerifyCollectionInstruction<
  TProgram,
  TAccountMetadata,
  TAccountCollectionAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount,
  TAccountCollectionAuthorityRecord
>;
export function getSetAndVerifyCollectionInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetAndVerifyCollectionInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getSetAndVerifyCollectionInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountCollectionAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
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
      isWritable: true,
    },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collection: { value: input.collection ?? null, isWritable: false },
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

  const instruction = getSetAndVerifyCollectionInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getSetAndVerifyCollectionInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
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
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
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
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.updateAuthority, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collection, AccountRole.READONLY),
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
    data: getSetAndVerifyCollectionInstructionDataEncoder().encode({}),
    programAddress,
  } as SetAndVerifyCollectionInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount,
    TAccountCollectionAuthorityRecord,
    TRemainingAccounts
  >;
}

export type ParsedSetAndVerifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata account */
    metadata: TAccountMetas[0];
    /** Collection Update authority */
    collectionAuthority: TAccountMetas[1];
    /** Payer */
    payer: TAccountMetas[2];
    /** Update Authority of Collection NFT and NFT */
    updateAuthority: TAccountMetas[3];
    /** Mint of the Collection */
    collectionMint: TAccountMetas[4];
    /** Metadata Account of the Collection */
    collection: TAccountMetas[5];
    /** MasterEdition2 Account of the Collection Token */
    collectionMasterEditionAccount: TAccountMetas[6];
    /** Collection Authority Record PDA */
    collectionAuthorityRecord?: TAccountMetas[7] | undefined;
  };
  data: SetAndVerifyCollectionInstructionData;
};

export function parseSetAndVerifyCollectionInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetAndVerifyCollectionInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 8) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      collectionAuthority: getNextAccount(),
      payer: getNextAccount(),
      updateAuthority: getNextAccount(),
      collectionMint: getNextAccount(),
      collection: getNextAccount(),
      collectionMasterEditionAccount: getNextAccount(),
      collectionAuthorityRecord: getNextOptionalAccount(),
    },
    data: getSetAndVerifyCollectionInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
