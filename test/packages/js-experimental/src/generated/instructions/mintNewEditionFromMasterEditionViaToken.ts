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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { ResolvedAccount, getAccountMetasWithSigners } from '../shared';
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  getMintNewEditionFromMasterEditionViaTokenArgsDecoder,
  getMintNewEditionFromMasterEditionViaTokenArgsEncoder,
} from '../types';

export type MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountNewMetadata extends string | IAccountMeta<string> = string,
  TAccountNewEdition extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountNewMint extends string | IAccountMeta<string> = string,
  TAccountEditionMarkPda extends string | IAccountMeta<string> = string,
  TAccountNewMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountNewMetadataUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
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
      TAccountNewMetadata extends string
        ? WritableAccount<TAccountNewMetadata>
        : TAccountNewMetadata,
      TAccountNewEdition extends string
        ? WritableAccount<TAccountNewEdition>
        : TAccountNewEdition,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountNewMint extends string
        ? WritableAccount<TAccountNewMint>
        : TAccountNewMint,
      TAccountEditionMarkPda extends string
        ? WritableAccount<TAccountEditionMarkPda>
        : TAccountEditionMarkPda,
      TAccountNewMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNewMintAuthority> &
            IAccountSignerMeta<TAccountNewMintAuthority>
        : TAccountNewMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountTokenAccountOwner extends string
        ? ReadonlySignerAccount<TAccountTokenAccountOwner> &
            IAccountSignerMeta<TAccountTokenAccountOwner>
        : TAccountTokenAccountOwner,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountNewMetadataUpdateAuthority extends string
        ? ReadonlyAccount<TAccountNewMetadataUpdateAuthority>
        : TAccountNewMetadataUpdateAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
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

export type MintNewEditionFromMasterEditionViaTokenInstructionData = {
  discriminator: number;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};

export type MintNewEditionFromMasterEditionViaTokenInstructionDataArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder(): Encoder<MintNewEditionFromMasterEditionViaTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      [
        'mintNewEditionFromMasterEditionViaTokenArgs',
        getMintNewEditionFromMasterEditionViaTokenArgsEncoder(),
      ],
    ]),
    (value) => ({ ...value, discriminator: 11 })
  );
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder(): Decoder<MintNewEditionFromMasterEditionViaTokenInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    [
      'mintNewEditionFromMasterEditionViaTokenArgs',
      getMintNewEditionFromMasterEditionViaTokenArgsDecoder(),
    ],
  ]);
}

export function getMintNewEditionFromMasterEditionViaTokenInstructionDataCodec(): Codec<
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  MintNewEditionFromMasterEditionViaTokenInstructionData
> {
  return combineCodec(
    getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder(),
    getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder()
  );
}

export type MintNewEditionFromMasterEditionViaTokenInput<
  TAccountNewMetadata extends string = string,
  TAccountNewEdition extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountNewMint extends string = string,
  TAccountEditionMarkPda extends string = string,
  TAccountNewMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountTokenAccountOwner extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountNewMetadataUpdateAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
> = {
  /** New Metadata key (pda of ['metadata', program id, mint id]) */
  newMetadata: Address<TAccountNewMetadata>;
  /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
  newEdition: Address<TAccountNewEdition>;
  /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  newMint: Address<TAccountNewMint>;
  /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
  editionMarkPda: Address<TAccountEditionMarkPda>;
  /** Mint authority of new mint */
  newMintAuthority: TransactionSigner<TAccountNewMintAuthority>;
  /** payer */
  payer: TransactionSigner<TAccountPayer>;
  /** owner of token account containing master token (#8) */
  tokenAccountOwner: TransactionSigner<TAccountTokenAccountOwner>;
  /** token account containing token from master metadata mint */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Update authority info for new metadata */
  newMetadataUpdateAuthority: Address<TAccountNewMetadataUpdateAuthority>;
  /** Master record metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenInstructionDataArgs['mintNewEditionFromMasterEditionViaTokenArgs'];
};

export function getMintNewEditionFromMasterEditionViaTokenInstruction<
  TAccountNewMetadata extends string,
  TAccountNewEdition extends string,
  TAccountMasterEdition extends string,
  TAccountNewMint extends string,
  TAccountEditionMarkPda extends string,
  TAccountNewMintAuthority extends string,
  TAccountPayer extends string,
  TAccountTokenAccountOwner extends string,
  TAccountTokenAccount extends string,
  TAccountNewMetadataUpdateAuthority extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: MintNewEditionFromMasterEditionViaTokenInput<
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): MintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram,
  TAccountNewMetadata,
  TAccountNewEdition,
  TAccountMasterEdition,
  TAccountNewMint,
  TAccountEditionMarkPda,
  TAccountNewMintAuthority,
  TAccountPayer,
  TAccountTokenAccountOwner,
  TAccountTokenAccount,
  TAccountNewMetadataUpdateAuthority,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountKeys =
    | 'newMetadata'
    | 'newEdition'
    | 'masterEdition'
    | 'newMint'
    | 'editionMarkPda'
    | 'newMintAuthority'
    | 'payer'
    | 'tokenAccountOwner'
    | 'tokenAccount'
    | 'newMetadataUpdateAuthority'
    | 'metadata'
    | 'tokenProgram'
    | 'systemProgram'
    | 'rent';
  const accounts: Record<AccountKeys, ResolvedAccount> = {
    newMetadata: { value: input.newMetadata ?? null, isWritable: true },
    newEdition: { value: input.newEdition ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    newMint: { value: input.newMint ?? null, isWritable: true },
    editionMarkPda: { value: input.editionMarkPda ?? null, isWritable: true },
    newMintAuthority: {
      value: input.newMintAuthority ?? null,
      isWritable: false,
    },
    payer: { value: input.payer ?? null, isWritable: true },
    tokenAccountOwner: {
      value: input.tokenAccountOwner ?? null,
      isWritable: false,
    },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: false },
    newMetadataUpdateAuthority: {
      value: input.newMetadataUpdateAuthority ?? null,
      isWritable: false,
    },
    metadata: { value: input.metadata ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

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

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = {
    accounts: [
      accountMetas.newMetadata,
      accountMetas.newEdition,
      accountMetas.masterEdition,
      accountMetas.newMint,
      accountMetas.editionMarkPda,
      accountMetas.newMintAuthority,
      accountMetas.payer,
      accountMetas.tokenAccountOwner,
      accountMetas.tokenAccount,
      accountMetas.newMetadataUpdateAuthority,
      accountMetas.metadata,
      accountMetas.tokenProgram,
      accountMetas.systemProgram,
      accountMetas.rent,
    ],
    programAddress,
    data: getMintNewEditionFromMasterEditionViaTokenInstructionDataEncoder().encode(
      args
    ),
  } as MintNewEditionFromMasterEditionViaTokenInstruction<
    TProgram,
    TAccountNewMetadata,
    TAccountNewEdition,
    TAccountMasterEdition,
    TAccountNewMint,
    TAccountEditionMarkPda,
    TAccountNewMintAuthority,
    TAccountPayer,
    TAccountTokenAccountOwner,
    TAccountTokenAccount,
    TAccountNewMetadataUpdateAuthority,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >;

  return instruction;
}

export type ParsedMintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** New Metadata key (pda of ['metadata', program id, mint id]) */
    newMetadata: TAccountMetas[0];
    /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
    newEdition: TAccountMetas[1];
    /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
    masterEdition: TAccountMetas[2];
    /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
    newMint: TAccountMetas[3];
    /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
    editionMarkPda: TAccountMetas[4];
    /** Mint authority of new mint */
    newMintAuthority: TAccountMetas[5];
    /** payer */
    payer: TAccountMetas[6];
    /** owner of token account containing master token (#8) */
    tokenAccountOwner: TAccountMetas[7];
    /** token account containing token from master metadata mint */
    tokenAccount: TAccountMetas[8];
    /** Update authority info for new metadata */
    newMetadataUpdateAuthority: TAccountMetas[9];
    /** Master record metadata account */
    metadata: TAccountMetas[10];
    /** Token program */
    tokenProgram: TAccountMetas[11];
    /** System program */
    systemProgram: TAccountMetas[12];
    /** Rent info */
    rent?: TAccountMetas[13] | undefined;
  };
  data: MintNewEditionFromMasterEditionViaTokenInstructionData;
};

export function parseMintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedMintNewEditionFromMasterEditionViaTokenInstruction<
  TProgram,
  TAccountMetas
> {
  if (instruction.accounts.length < 14) {
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
      newMetadata: getNextAccount(),
      newEdition: getNextAccount(),
      masterEdition: getNextAccount(),
      newMint: getNextAccount(),
      editionMarkPda: getNextAccount(),
      newMintAuthority: getNextAccount(),
      payer: getNextAccount(),
      tokenAccountOwner: getNextAccount(),
      tokenAccount: getNextAccount(),
      newMetadataUpdateAuthority: getNextAccount(),
      metadata: getNextAccount(),
      tokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextOptionalAccount(),
    },
    data: getMintNewEditionFromMasterEditionViaTokenInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
