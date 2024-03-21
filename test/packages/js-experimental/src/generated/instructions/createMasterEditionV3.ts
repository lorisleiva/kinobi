/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { BASE_ACCOUNT_SIZE } from '@solana/accounts';
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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { getMasterEditionV2Size } from '../accounts';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import {
  IInstructionWithByteDelta,
  ResolvedAccount,
  getAccountMetasWithSigners,
} from '../shared';
import {
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsDecoder,
  getCreateMasterEditionArgsEncoder,
} from '../types';

export type CreateMasterEditionV3Instruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEdition extends string
        ? WritableAccount<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority> &
            IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts,
    ]
  >;

export type CreateMasterEditionV3InstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};

export type CreateMasterEditionV3InstructionDataArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

export function getCreateMasterEditionV3InstructionDataEncoder(): Encoder<CreateMasterEditionV3InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['createMasterEditionArgs', getCreateMasterEditionArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 17 })
  );
}

export function getCreateMasterEditionV3InstructionDataDecoder(): Decoder<CreateMasterEditionV3InstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['createMasterEditionArgs', getCreateMasterEditionArgsDecoder()],
  ]);
}

export function getCreateMasterEditionV3InstructionDataCodec(): Codec<
  CreateMasterEditionV3InstructionDataArgs,
  CreateMasterEditionV3InstructionData
> {
  return combineCodec(
    getCreateMasterEditionV3InstructionDataEncoder(),
    getCreateMasterEditionV3InstructionDataDecoder()
  );
}

export type CreateMasterEditionV3Input<
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountMetadata extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
> = {
  /** Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition'] */
  edition: Address<TAccountEdition>;
  /** Metadata mint */
  mint: Address<TAccountMint>;
  /** Update authority */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** payer */
  payer: TransactionSigner<TAccountPayer>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  createMasterEditionArgs: CreateMasterEditionV3InstructionDataArgs['createMasterEditionArgs'];
};

export function getCreateMasterEditionV3Instruction<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
>(
  input: CreateMasterEditionV3Input<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): CreateMasterEditionV3Instruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountEdition,
  TAccountMint,
  TAccountUpdateAuthority,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
> &
  IInstructionWithByteDelta {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    edition: { value: input.edition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
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
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Bytes created or reallocated by the instruction.
  const byteDelta: number = [
    getMasterEditionV2Size() + BASE_ACCOUNT_SIZE,
  ].reduce((a, b) => a + b, 0);

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = {
    accounts: [
      accountMetas.edition,
      accountMetas.mint,
      accountMetas.updateAuthority,
      accountMetas.mintAuthority,
      accountMetas.payer,
      accountMetas.metadata,
      accountMetas.tokenProgram,
      accountMetas.systemProgram,
      accountMetas.rent,
    ],
    programAddress,
    data: getCreateMasterEditionV3InstructionDataEncoder().encode(
      args as CreateMasterEditionV3InstructionDataArgs
    ),
  } as CreateMasterEditionV3Instruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >;

  return Object.freeze({ ...instruction, byteDelta });
}

export type ParsedCreateMasterEditionV3Instruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition'] */
    edition: TAccountMetas[0];
    /** Metadata mint */
    mint: TAccountMetas[1];
    /** Update authority */
    updateAuthority: TAccountMetas[2];
    /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
    mintAuthority: TAccountMetas[3];
    /** payer */
    payer: TAccountMetas[4];
    /** Metadata account */
    metadata: TAccountMetas[5];
    /** Token program */
    tokenProgram: TAccountMetas[6];
    /** System program */
    systemProgram: TAccountMetas[7];
    /** Rent info */
    rent?: TAccountMetas[8] | undefined;
  };
  data: CreateMasterEditionV3InstructionData;
};

export function parseCreateMasterEditionV3Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCreateMasterEditionV3Instruction<TProgram, TAccountMetas> {
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
    return accountMeta.address === MPL_TOKEN_METADATA_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      edition: getNextAccount(),
      mint: getNextAccount(),
      updateAuthority: getNextAccount(),
      mintAuthority: getNextAccount(),
      payer: getNextAccount(),
      metadata: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextOptionalAccount(),
    },
    data: getCreateMasterEditionV3InstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
