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
import { ResolvedAccount, getAccountMetasWithSigners } from '../shared';

export type CloseEscrowAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEscrow extends string
        ? WritableAccount<TAccountEscrow>
        : TAccountEscrow,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? ReadonlyAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      ...TRemainingAccounts,
    ]
  >;

export type CloseEscrowAccountInstructionData = { discriminator: number };

export type CloseEscrowAccountInstructionDataArgs = {};

export function getCloseEscrowAccountInstructionDataEncoder(): Encoder<CloseEscrowAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 39 })
  );
}

export function getCloseEscrowAccountInstructionDataDecoder(): Decoder<CloseEscrowAccountInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getCloseEscrowAccountInstructionDataCodec(): Codec<
  CloseEscrowAccountInstructionDataArgs,
  CloseEscrowAccountInstructionData
> {
  return combineCodec(
    getCloseEscrowAccountInstructionDataEncoder(),
    getCloseEscrowAccountInstructionDataDecoder()
  );
}

export type CloseEscrowAccountInput<
  TAccountEscrow extends string = string,
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountEdition extends string = string,
  TAccountPayer extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSysvarInstructions extends string = string,
> = {
  /** Escrow account */
  escrow: Address<TAccountEscrow>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint account */
  mint: Address<TAccountMint>;
  /** Token account */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition account */
  edition: Address<TAccountEdition>;
  /** Wallet paying for the transaction and new account */
  payer: TransactionSigner<TAccountPayer>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
};

export function getCloseEscrowAccountInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: CloseEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions
  >
): CloseEscrowAccountInstruction<
  TProgram,
  TAccountEscrow,
  TAccountMetadata,
  TAccountMint,
  TAccountTokenAccount,
  TAccountEdition,
  TAccountPayer,
  TAccountSystemProgram,
  TAccountSysvarInstructions
> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountKeys =
    | 'escrow'
    | 'metadata'
    | 'mint'
    | 'tokenAccount'
    | 'edition'
    | 'payer'
    | 'systemProgram'
    | 'sysvarInstructions';
  const accounts: Record<AccountKeys, ResolvedAccount> = {
    escrow: { value: input.escrow ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: false },
    edition: { value: input.edition ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
  };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = {
    accounts: [
      accountMetas.escrow,
      accountMetas.metadata,
      accountMetas.mint,
      accountMetas.tokenAccount,
      accountMetas.edition,
      accountMetas.payer,
      accountMetas.systemProgram,
      accountMetas.sysvarInstructions,
    ],
    programAddress,
    data: getCloseEscrowAccountInstructionDataEncoder().encode({}),
  } as CloseEscrowAccountInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions
  >;

  return instruction;
}

export type ParsedCloseEscrowAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Escrow account */
    escrow: TAccountMetas[0];
    /** Metadata account */
    metadata: TAccountMetas[1];
    /** Mint account */
    mint: TAccountMetas[2];
    /** Token account */
    tokenAccount: TAccountMetas[3];
    /** Edition account */
    edition: TAccountMetas[4];
    /** Wallet paying for the transaction and new account */
    payer: TAccountMetas[5];
    /** System program */
    systemProgram: TAccountMetas[6];
    /** Instructions sysvar account */
    sysvarInstructions: TAccountMetas[7];
  };
  data: CloseEscrowAccountInstructionData;
};

export function parseCloseEscrowAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedCloseEscrowAccountInstruction<TProgram, TAccountMetas> {
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
  return {
    programAddress: instruction.programAddress,
    accounts: {
      escrow: getNextAccount(),
      metadata: getNextAccount(),
      mint: getNextAccount(),
      tokenAccount: getNextAccount(),
      edition: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarInstructions: getNextAccount(),
    },
    data: getCloseEscrowAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
