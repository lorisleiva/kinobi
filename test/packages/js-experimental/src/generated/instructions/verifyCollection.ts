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
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type VerifyCollectionInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollection extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEditionAccount extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
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
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollection extends string
        ? ReadonlyAccount<TAccountCollection>
        : TAccountCollection,
      TAccountCollectionMasterEditionAccount extends string
        ? ReadonlyAccount<TAccountCollectionMasterEditionAccount>
        : TAccountCollectionMasterEditionAccount,
      ...TRemainingAccounts,
    ]
  >;

export type VerifyCollectionInstructionData = { discriminator: number };

export type VerifyCollectionInstructionDataArgs = {};

export function getVerifyCollectionInstructionDataEncoder(): Encoder<VerifyCollectionInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 18 })
  );
}

export function getVerifyCollectionInstructionDataDecoder(): Decoder<VerifyCollectionInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
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

export type VerifyCollectionInput<
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string,
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Collection Update authority */
  collectionAuthority: TransactionSigner<TAccountCollectionAuthority>;
  /** payer */
  payer: TransactionSigner<TAccountPayer>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Metadata Account of the Collection */
  collection: Address<TAccountCollection>;
  /** MasterEdition2 Account of the Collection Token */
  collectionMasterEditionAccount: Address<TAccountCollectionMasterEditionAccount>;
};

export function getVerifyCollectionInstruction<
  TAccountMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMint extends string,
  TAccountCollection extends string,
  TAccountCollectionMasterEditionAccount extends string,
>(
  input: VerifyCollectionInput<
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount
  >
): VerifyCollectionInstruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata,
  TAccountCollectionAuthority,
  TAccountPayer,
  TAccountCollectionMint,
  TAccountCollection,
  TAccountCollectionMasterEditionAccount
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    collectionAuthority: {
      value: input.collectionAuthority ?? null,
      isWritable: true,
    },
    payer: { value: input.payer ?? null, isWritable: true },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collection: { value: input.collection ?? null, isWritable: false },
    collectionMasterEditionAccount: {
      value: input.collectionMasterEditionAccount ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.collectionAuthority),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.collectionMint),
      getAccountMeta(accounts.collection),
      getAccountMeta(accounts.collectionMasterEditionAccount),
    ],
    programAddress,
    data: getVerifyCollectionInstructionDataEncoder().encode({}),
  } as VerifyCollectionInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountCollectionAuthority,
    TAccountPayer,
    TAccountCollectionMint,
    TAccountCollection,
    TAccountCollectionMasterEditionAccount
  >;

  return instruction;
}

export type ParsedVerifyCollectionInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata account */
    metadata: TAccountMetas[0];
    /** Collection Update authority */
    collectionAuthority: TAccountMetas[1];
    /** payer */
    payer: TAccountMetas[2];
    /** Mint of the Collection */
    collectionMint: TAccountMetas[3];
    /** Metadata Account of the Collection */
    collection: TAccountMetas[4];
    /** MasterEdition2 Account of the Collection Token */
    collectionMasterEditionAccount: TAccountMetas[5];
  };
  data: VerifyCollectionInstructionData;
};

export function parseVerifyCollectionInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedVerifyCollectionInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      collectionAuthority: getNextAccount(),
      payer: getNextAccount(),
      collectionMint: getNextAccount(),
      collection: getNextAccount(),
      collectionMasterEditionAccount: getNextAccount(),
    },
    data: getVerifyCollectionInstructionDataDecoder().decode(instruction.data),
  };
}
