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

export type BurnNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      ...TRemainingAccounts
    ]
  >;

export type BurnNftInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      ...TRemainingAccounts
    ]
  >;

export type BurnNftInstructionData = { discriminator: number };

export type BurnNftInstructionDataArgs = {};

export function getBurnNftInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 29 })
  ) satisfies Encoder<BurnNftInstructionDataArgs>;
}

export function getBurnNftInstructionDataDecoder() {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<BurnNftInstructionData>;
}

export function getBurnNftInstructionDataCodec(): Codec<
  BurnNftInstructionDataArgs,
  BurnNftInstructionData
> {
  return combineCodec(
    getBurnNftInstructionDataEncoder(),
    getBurnNftInstructionDataDecoder()
  );
}

export type BurnNftInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** NFT owner */
  owner: Address<TAccountOwner>;
  /** Mint of the NFT */
  mint: Address<TAccountMint>;
  /** Token account to close */
  tokenAccount: Address<TAccountTokenAccount>;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Address<TAccountCollectionMetadata>;
};

export type BurnNftInputWithSigners<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** NFT owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Mint of the NFT */
  mint: Address<TAccountMint>;
  /** Token account to close */
  tokenAccount: Address<TAccountTokenAccount>;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Address<TAccountCollectionMetadata>;
};

export function getBurnNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnNftInputWithSigners<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): BurnNftInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountMint,
  TAccountTokenAccount,
  TAccountMasterEditionAccount,
  TAccountSplTokenProgram,
  TAccountCollectionMetadata
>;
export function getBurnNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): BurnNftInstruction<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountMint,
  TAccountTokenAccount,
  TAccountMasterEditionAccount,
  TAccountSplTokenProgram,
  TAccountCollectionMetadata
>;
export function getBurnNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getBurnNftInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountMint,
      TAccountTokenAccount,
      TAccountMasterEditionAccount,
      TAccountSplTokenProgram,
      TAccountCollectionMetadata
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    masterEditionAccount: {
      value: input.masterEditionAccount ?? null,
      isWritable: true,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
  };

  // Resolve default values.
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getBurnNftInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getBurnNftInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    masterEditionAccount: TAccountMasterEditionAccount extends string
      ? Address<TAccountMasterEditionAccount>
      : TAccountMasterEditionAccount;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Address<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    collectionMetadata?: TAccountCollectionMetadata extends string
      ? Address<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEditionAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ??
          ('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.collectionMetadata ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getBurnNftInstructionDataEncoder().encode({}),
    programAddress,
  } as BurnNftInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TRemainingAccounts
  >;
}

export type ParsedBurnNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** NFT owner */
    owner: TAccountMetas[1];
    /** Mint of the NFT */
    mint: TAccountMetas[2];
    /** Token account to close */
    tokenAccount: TAccountMetas[3];
    /** MasterEdition2 of the NFT */
    masterEditionAccount: TAccountMetas[4];
    /** SPL Token Program */
    splTokenProgram: TAccountMetas[5];
    /** Metadata of the Collection */
    collectionMetadata?: TAccountMetas[6] | undefined;
  };
  data: BurnNftInstructionData;
};

export function parseBurnNftInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedBurnNftInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 7) {
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
      owner: getNextAccount(),
      mint: getNextAccount(),
      tokenAccount: getNextAccount(),
      masterEditionAccount: getNextAccount(),
      splTokenProgram: getNextAccount(),
      collectionMetadata: getNextOptionalAccount(),
    },
    data: getBurnNftInstructionDataDecoder().decode(instruction.data),
  };
}
