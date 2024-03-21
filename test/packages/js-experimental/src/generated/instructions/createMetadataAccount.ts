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
  Option,
  OptionOrNullable,
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStringDecoder,
  getStringEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { getMetadataSize } from '../accounts';
import { findMetadataPda } from '../pdas';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import {
  IInstructionWithByteDelta,
  ResolvedAccount,
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
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
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
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
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
      ...TRemainingAccounts,
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

export function getCreateMetadataAccountInstructionDataEncoder(): Encoder<CreateMetadataAccountInstructionDataArgs> {
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
  );
}

export function getCreateMetadataAccountInstructionDataDecoder(): Decoder<CreateMetadataAccountInstructionData> {
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
  ]);
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
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
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
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithByteDelta
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
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
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

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

  const instruction = {
    accounts: [
      accountMetas.metadata,
      accountMetas.mint,
      accountMetas.mintAuthority,
      accountMetas.payer,
      accountMetas.updateAuthority,
      accountMetas.systemProgram,
      accountMetas.rent,
    ],
    programAddress,
    data: getCreateMetadataAccountInstructionDataEncoder().encode(
      args as CreateMetadataAccountInstructionDataArgs
    ),
  } as CreateMetadataAccountInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >;

  return Object.freeze({ ...instruction, byteDelta });
}

export type CreateMetadataAccountInput<
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
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
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata,
  TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountRent
> &
  IInstructionWithByteDelta {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
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
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

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

  const instruction = {
    accounts: [
      accountMetas.metadata,
      accountMetas.mint,
      accountMetas.mintAuthority,
      accountMetas.payer,
      accountMetas.updateAuthority,
      accountMetas.systemProgram,
      accountMetas.rent,
    ],
    programAddress,
    data: getCreateMetadataAccountInstructionDataEncoder().encode(
      args as CreateMetadataAccountInstructionDataArgs
    ),
  } as CreateMetadataAccountInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >;

  return Object.freeze({ ...instruction, byteDelta });
}

export type ParsedCreateMetadataAccountInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
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
  TAccountMetas extends readonly IAccountMeta[],
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
