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
  Option,
  OptionOrNullable,
  combineCodec,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
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
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  AssetData,
  AssetDataArgs,
  getAssetDataDecoder,
  getAssetDataEncoder,
} from '../types';

export type CreateV1Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority> &
            IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type CreateV1InstructionData = {
  discriminator: number;
  createV1Discriminator: number;
  assetData: AssetData;
  decimals: Option<number>;
  maxSupply: Option<bigint>;
};

export type CreateV1InstructionDataArgs = {
  assetData: AssetDataArgs;
  decimals: OptionOrNullable<number>;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getCreateV1InstructionDataEncoder(): Encoder<CreateV1InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['createV1Discriminator', getU8Encoder()],
      ['assetData', getAssetDataEncoder()],
      ['decimals', getOptionEncoder(getU8Encoder())],
      ['maxSupply', getOptionEncoder(getU64Encoder())],
    ]),
    (value) => ({ ...value, discriminator: 41, createV1Discriminator: 0 })
  );
}

export function getCreateV1InstructionDataDecoder(): Decoder<CreateV1InstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['createV1Discriminator', getU8Decoder()],
    ['assetData', getAssetDataDecoder()],
    ['decimals', getOptionDecoder(getU8Decoder())],
    ['maxSupply', getOptionDecoder(getU64Decoder())],
  ]);
}

export function getCreateV1InstructionDataCodec(): Codec<
  CreateV1InstructionDataArgs,
  CreateV1InstructionData
> {
  return combineCodec(
    getCreateV1InstructionDataEncoder(),
    getCreateV1InstructionDataDecoder()
  );
}

export type CreateV1Input<
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
> = {
  /** Metadata account key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
  masterEdition?: Address<TAccountMasterEdition>;
  /** Mint of token asset */
  mint: Address<TAccountMint> | TransactionSigner<TAccountMint>;
  /** Mint authority */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** SPL Token program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  assetData: CreateV1InstructionDataArgs['assetData'];
  decimals: CreateV1InstructionDataArgs['decimals'];
  maxSupply: CreateV1InstructionDataArgs['maxSupply'];
};

export function getCreateV1Instruction<
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: CreateV1Input<
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >
): CreateV1Instruction<
  TProgram,
  TAccountMetadata,
  TAccountMasterEdition,
  (typeof input)['mint'] extends TransactionSigner<TAccountMint>
    ? WritableSignerAccount<TAccountMint> & IAccountSignerMeta<TAccountMint>
    : TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountSplTokenProgram
> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateV1InstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }
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

  const instruction = getCreateV1InstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateV1InstructionDataArgs,
    programAddress
  ) as CreateV1Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMasterEdition,
    (typeof input)['mint'] extends TransactionSigner<TAccountMint>
      ? WritableSignerAccount<TAccountMint> & IAccountSignerMeta<TAccountMint>
      : TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >;

  return instruction;
}

export function getCreateV1InstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Address<TAccountMasterEdition>
      : TAccountMasterEdition;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    mintAuthority: TAccountMintAuthority extends string
      ? Address<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Address<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Address<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
  },
  args: CreateV1InstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.updateAuthority, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ??
          ('11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.sysvarInstructions ??
          ('Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>),
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ??
          ('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>),
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateV1InstructionDataEncoder().encode(args),
    programAddress,
  } as CreateV1Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TRemainingAccounts
  >;
}

export type ParsedCreateV1Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata account key (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
    masterEdition?: TAccountMetas[1] | undefined;
    /** Mint of token asset */
    mint: TAccountMetas[2];
    /** Mint authority */
    mintAuthority: TAccountMetas[3];
    /** Payer */
    payer: TAccountMetas[4];
    /** update authority info */
    updateAuthority: TAccountMetas[5];
    /** System program */
    systemProgram: TAccountMetas[6];
    /** Instructions sysvar account */
    sysvarInstructions: TAccountMetas[7];
    /** SPL Token program */
    splTokenProgram: TAccountMetas[8];
  };
  data: CreateV1InstructionData;
};

export function parseCreateV1Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateV1Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 9) {
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
      masterEdition: getNextOptionalAccount(),
      mint: getNextAccount(),
      mintAuthority: getNextAccount(),
      payer: getNextAccount(),
      updateAuthority: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarInstructions: getNextAccount(),
      splTokenProgram: getNextAccount(),
    },
    data: getCreateV1InstructionDataDecoder().decode(instruction.data),
  };
}
