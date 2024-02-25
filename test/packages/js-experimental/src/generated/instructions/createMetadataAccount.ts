/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { BASE_ACCOUNT_SIZE } from '@solana/accounts';
import { Address, ProgramDerivedAddress } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU16Decoder,
  getU16Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
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
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { getMetadataSize } from '../accounts';
import { findMetadataPda } from '../pdas';
import {
  IInstructionWithByteDelta,
  ResolvedAccount,
  accountMetaWithDefault,
  expectAddress,
  expectProgramDerivedAddress,
  getAccountMetasWithSigners,
} from '../shared';
import {
  Creator,
  CreatorArgs,
  getCreatorDecoder,
  getCreatorEncoder,
} from '../types';

export type CreateMetadataAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type CreateMetadataAccountInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
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
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type CreateMetadataAccountInstructionData = {
  discriminator: number;
  data: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  };
  isMutable: boolean;
  metadataBump: number;
};

export type CreateMetadataAccountInstructionDataArgs = {
  data: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  };
  isMutable: boolean;
  metadataBump: number;
};

export function getCreateMetadataAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      [
        'data',
        getStructEncoder([
          ['name', getStringEncoder()],
          ['symbol', getStringEncoder()],
          ['uri', getStringEncoder()],
          ['sellerFeeBasisPoints', getU16Encoder()],
          ['creators', getOptionEncoder(getArrayEncoder(getCreatorEncoder()))],
        ]),
      ],
      ['isMutable', getBooleanEncoder()],
      ['metadataBump', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 0 })
  ) satisfies Encoder<CreateMetadataAccountInstructionDataArgs>;
}

export function getCreateMetadataAccountInstructionDataDecoder() {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    [
      'data',
      getStructDecoder([
        ['name', getStringDecoder()],
        ['symbol', getStringDecoder()],
        ['uri', getStringDecoder()],
        ['sellerFeeBasisPoints', getU16Decoder()],
        ['creators', getOptionDecoder(getArrayDecoder(getCreatorDecoder()))],
      ]),
    ],
    ['isMutable', getBooleanDecoder()],
    ['metadataBump', getU8Decoder()],
  ]) satisfies Decoder<CreateMetadataAccountInstructionData>;
}

export function getCreateMetadataAccountInstructionDataCodec(): Codec<
  CreateMetadataAccountInstructionDataArgs,
  CreateMetadataAccountInstructionData
> {
  return combineCodec(
    getCreateMetadataAccountInstructionDataEncoder(),
    getCreateMetadataAccountInstructionDataDecoder()
  );
}

export type CreateMetadataAccountAsyncInput<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata?: ProgramDerivedAddress<TAccountMetadata>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Mint authority */
  mintAuthority: Address<TAccountMintAuthority>;
  /** payer */
  payer: Address<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  data: CreateMetadataAccountInstructionDataArgs['data'];
  isMutable: CreateMetadataAccountInstructionDataArgs['isMutable'];
  metadataBump?: CreateMetadataAccountInstructionDataArgs['metadataBump'];
};

export type CreateMetadataAccountAsyncInputWithSigners<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata?: ProgramDerivedAddress<TAccountMetadata>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Mint authority */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** payer */
  payer: TransactionSigner<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  data: CreateMetadataAccountInstructionDataArgs['data'];
  isMutable: CreateMetadataAccountInstructionDataArgs['isMutable'];
  metadataBump?: CreateMetadataAccountInstructionDataArgs['metadataBump'];
};

export async function getCreateMetadataAccountInstructionAsync<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountAsyncInputWithSigners<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  CreateMetadataAccountInstructionWithSigners<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithByteDelta
>;
export async function getCreateMetadataAccountInstructionAsync<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountAsyncInput<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  CreateMetadataAccountInstruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithByteDelta
>;
export async function getCreateMetadataAccountInstructionAsync<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountAsyncInput<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<IInstruction & IInstructionWithByteDelta> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateMetadataAccountInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountMint,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.metadata.value) {
    accounts.metadata.value = await findMetadataPda({
      mint: expectAddress(accounts.mint.value),
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }
  if (!args.metadataBump) {
    args.metadataBump = expectProgramDerivedAddress(accounts.metadata.value)[1];
  }

  // Bytes created or reallocated by the instruction.
  const byteDelta: number = [getMetadataSize() + BASE_ACCOUNT_SIZE].reduce(
    (a, b) => a + b,
    0
  );

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateMetadataAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateMetadataAccountInstructionDataArgs,
    programAddress
  );

  return Object.freeze({ ...instruction, byteDelta });
}

export type CreateMetadataAccountInput<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: ProgramDerivedAddress<TAccountMetadata>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Mint authority */
  mintAuthority: Address<TAccountMintAuthority>;
  /** payer */
  payer: Address<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  data: CreateMetadataAccountInstructionDataArgs['data'];
  isMutable: CreateMetadataAccountInstructionDataArgs['isMutable'];
  metadataBump?: CreateMetadataAccountInstructionDataArgs['metadataBump'];
};

export type CreateMetadataAccountInputWithSigners<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: ProgramDerivedAddress<TAccountMetadata>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Mint authority */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** payer */
  payer: TransactionSigner<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  data: CreateMetadataAccountInstructionDataArgs['data'];
  isMutable: CreateMetadataAccountInstructionDataArgs['isMutable'];
  metadataBump?: CreateMetadataAccountInstructionDataArgs['metadataBump'];
};

export function getCreateMetadataAccountInstruction<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountInputWithSigners<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): CreateMetadataAccountInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountRent
> &
  IInstructionWithByteDelta;
export function getCreateMetadataAccountInstruction<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountInput<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): CreateMetadataAccountInstruction<
  TProgram,
  TAccountMetadata,
  TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountRent
> &
  IInstructionWithByteDelta;
export function getCreateMetadataAccountInstruction<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateMetadataAccountInput<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >
): IInstruction & IInstructionWithByteDelta {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCreateMetadataAccountInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountMint,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }
  if (!args.metadataBump) {
    args.metadataBump = expectProgramDerivedAddress(accounts.metadata.value)[1];
  }

  // Bytes created or reallocated by the instruction.
  const byteDelta: number = [getMetadataSize() + BASE_ACCOUNT_SIZE].reduce(
    (a, b) => a + b,
    0
  );

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getCreateMetadataAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as CreateMetadataAccountInstructionDataArgs,
    programAddress
  );

  return Object.freeze({ ...instruction, byteDelta });
}

export function getCreateMetadataAccountInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
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
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
  },
  args: CreateMetadataAccountInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
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
        accounts.rent ??
          ('SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>),
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateMetadataAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateMetadataAccountInstruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}

export type ParsedCreateMetadataAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata key (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** Mint of token asset */
    mint: TAccountMetas[1];
    /** Mint authority */
    mintAuthority: TAccountMetas[2];
    /** payer */
    payer: TAccountMetas[3];
    /** update authority info */
    updateAuthority: TAccountMetas[4];
    /** System program */
    systemProgram: TAccountMetas[5];
    /** Rent info */
    rent: TAccountMetas[6];
  };
  data: CreateMetadataAccountInstructionData;
};

export function parseCreateMetadataAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateMetadataAccountInstruction<TProgram, TAccountMetas> {
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
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      mint: getNextAccount(),
      mintAuthority: getNextAccount(),
      payer: getNextAccount(),
      updateAuthority: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextAccount(),
    },
    data: getCreateMetadataAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
