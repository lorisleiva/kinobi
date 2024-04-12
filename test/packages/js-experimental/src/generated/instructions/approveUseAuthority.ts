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
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
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

export type ApproveUseAuthorityInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
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
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUser extends string
        ? ReadonlyAccount<TAccountUser>
        : TAccountUser,
      TAccountOwnerTokenAccount extends string
        ? WritableAccount<TAccountOwnerTokenAccount>
        : TAccountOwnerTokenAccount,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountBurner extends string
        ? ReadonlyAccount<TAccountBurner>
        : TAccountBurner,
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

export type ApproveUseAuthorityInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type ApproveUseAuthorityInstructionDataArgs = {
  numberOfUses: number | bigint;
};

export function getApproveUseAuthorityInstructionDataEncoder(): Encoder<ApproveUseAuthorityInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['numberOfUses', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 20 })
  );
}

export function getApproveUseAuthorityInstructionDataDecoder(): Decoder<ApproveUseAuthorityInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['numberOfUses', getU64Decoder()],
  ]);
}

export function getApproveUseAuthorityInstructionDataCodec(): Codec<
  ApproveUseAuthorityInstructionDataArgs,
  ApproveUseAuthorityInstructionData
> {
  return combineCodec(
    getApproveUseAuthorityInstructionDataEncoder(),
    getApproveUseAuthorityInstructionDataDecoder()
  );
}

export type ApproveUseAuthorityInput<
  TAccountUseAuthorityRecord extends string = string,
  TAccountOwner extends string = string,
  TAccountPayer extends string = string,
  TAccountUser extends string = string,
  TAccountOwnerTokenAccount extends string = string,
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountBurner extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
> = {
  /** Use Authority Record PDA */
  useAuthorityRecord: Address<TAccountUseAuthorityRecord>;
  /** Owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** A Use Authority */
  user: Address<TAccountUser>;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: Address<TAccountOwnerTokenAccount>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
  /** Program As Signer (Burner) */
  burner: Address<TAccountBurner>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  numberOfUses: ApproveUseAuthorityInstructionDataArgs['numberOfUses'];
};

export function getApproveUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountPayer extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountBurner extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
>(
  input: ApproveUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountPayer,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMetadata,
    TAccountMint,
    TAccountBurner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveUseAuthorityInstruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountUseAuthorityRecord,
  TAccountOwner,
  TAccountPayer,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMetadata,
  TAccountMint,
  TAccountBurner,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    useAuthorityRecord: {
      value: input.useAuthorityRecord ?? null,
      isWritable: true,
    },
    owner: { value: input.owner ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    user: { value: input.user ?? null, isWritable: false },
    ownerTokenAccount: {
      value: input.ownerTokenAccount ?? null,
      isWritable: true,
    },
    metadata: { value: input.metadata ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    burner: { value: input.burner ?? null, isWritable: false },
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

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.useAuthorityRecord),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.user),
      getAccountMeta(accounts.ownerTokenAccount),
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.burner),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.rent),
    ],
    programAddress,
    data: getApproveUseAuthorityInstructionDataEncoder().encode(
      args as ApproveUseAuthorityInstructionDataArgs
    ),
  } as ApproveUseAuthorityInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountPayer,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMetadata,
    TAccountMint,
    TAccountBurner,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >;

  return instruction;
}

export type ParsedApproveUseAuthorityInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Use Authority Record PDA */
    useAuthorityRecord: TAccountMetas[0];
    /** Owner */
    owner: TAccountMetas[1];
    /** Payer */
    payer: TAccountMetas[2];
    /** A Use Authority */
    user: TAccountMetas[3];
    /** Owned Token Account Of Mint */
    ownerTokenAccount: TAccountMetas[4];
    /** Metadata account */
    metadata: TAccountMetas[5];
    /** Mint of Metadata */
    mint: TAccountMetas[6];
    /** Program As Signer (Burner) */
    burner: TAccountMetas[7];
    /** Token program */
    tokenProgram: TAccountMetas[8];
    /** System program */
    systemProgram: TAccountMetas[9];
    /** Rent info */
    rent?: TAccountMetas[10] | undefined;
  };
  data: ApproveUseAuthorityInstructionData;
};

export function parseApproveUseAuthorityInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedApproveUseAuthorityInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 11) {
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
      useAuthorityRecord: getNextAccount(),
      owner: getNextAccount(),
      payer: getNextAccount(),
      user: getNextAccount(),
      ownerTokenAccount: getNextAccount(),
      metadata: getNextAccount(),
      mint: getNextAccount(),
      burner: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextOptionalAccount(),
    },
    data: getApproveUseAuthorityInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
