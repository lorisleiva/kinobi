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
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      ...TRemainingAccounts
    ]
  >;

export type CloseEscrowAccountInstructionWithSigners<
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
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
      ...TRemainingAccounts
    ]
  >;

export type CloseEscrowAccountInstructionData = { discriminator: number };

export type CloseEscrowAccountInstructionDataArgs = {};

export function getCloseEscrowAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 39 })
  ) satisfies Encoder<CloseEscrowAccountInstructionDataArgs>;
}

export function getCloseEscrowAccountInstructionDataDecoder() {
  return getStructDecoder<CloseEscrowAccountInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<CloseEscrowAccountInstructionData>;
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
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string
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
  payer: Address<TAccountPayer>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
};

export type CloseEscrowAccountInputWithSigners<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string
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
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CloseEscrowAccountInputWithSigners<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions
  >
): CloseEscrowAccountInstructionWithSigners<
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
export function getCloseEscrowAccountInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
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
>;
export function getCloseEscrowAccountInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
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
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getCloseEscrowAccountInstructionRaw<
      TProgram,
      TAccountEscrow,
      TAccountMetadata,
      TAccountMint,
      TAccountTokenAccount,
      TAccountEdition,
      TAccountPayer,
      TAccountSystemProgram,
      TAccountSysvarInstructions
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
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
    accounts.systemProgram.isWritable = false;
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

  const instruction = getCloseEscrowAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getCloseEscrowAccountInstructionRaw<
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
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    escrow: TAccountEscrow extends string
      ? Address<TAccountEscrow>
      : TAccountEscrow;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    edition: TAccountEdition extends string
      ? Address<TAccountEdition>
      : TAccountEdition;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Address<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.escrow, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.READONLY),
      accountMetaWithDefault(accounts.edition, AccountRole.READONLY),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.sysvarInstructions ??
          'Sysvar1nstructions1111111111111111111111111',
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCloseEscrowAccountInstructionDataEncoder().encode({}),
    programAddress,
  } as CloseEscrowAccountInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TRemainingAccounts
  >;
}

export type ParsedCloseEscrowAccountInstruction = {
  accounts: {
    /** Escrow account */
    escrow: Address;
    /** Metadata account */
    metadata: Address;
    /** Mint account */
    mint: Address;
    /** Token account */
    tokenAccount: Address;
    /** Edition account */
    edition: Address;
    /** Wallet paying for the transaction and new account */
    payer: Address;
    /** System program */
    systemProgram: Address;
    /** Instructions sysvar account */
    sysvarInstructions: Address;
  };
  data: CloseEscrowAccountInstructionData;
};

export function parseCloseEscrowAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedCloseEscrowAccountInstruction {
  if (!instruction.accounts || instruction.accounts.length < 8) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const { address } = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return address;
  };
  return {
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
