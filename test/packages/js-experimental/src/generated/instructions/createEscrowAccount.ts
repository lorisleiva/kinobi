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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  IAccountSignerMeta,
  IInstructionWithSigners,
  TransactionSigner,
} from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  IInstructionWithBytesCreatedOnChain,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type CreateEscrowAccountInstruction<
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
  TAccountAuthority extends string | IAccountMeta<string> = string,
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
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type CreateEscrowAccountInstructionData = { discriminator: number };

export type CreateEscrowAccountInstructionDataArgs = {};

export function getCreateEscrowAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 38 })
  ) satisfies Encoder<CreateEscrowAccountInstructionDataArgs>;
}

export function getCreateEscrowAccountInstructionDataDecoder() {
  return getStructDecoder<CreateEscrowAccountInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<CreateEscrowAccountInstructionData>;
}

export function getCreateEscrowAccountInstructionDataCodec(): Codec<
  CreateEscrowAccountInstructionDataArgs,
  CreateEscrowAccountInstructionData
> {
  return combineCodec(
    getCreateEscrowAccountInstructionDataEncoder(),
    getCreateEscrowAccountInstructionDataDecoder()
  );
}

export function createEscrowAccountInstruction<
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
  TAccountAuthority extends string | IAccountMeta<string> = string,
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
    authority?: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
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
      accountMetaWithDefault(
        accounts.authority ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getCreateEscrowAccountInstructionDataEncoder().encode({}),
    programAddress,
  } as CreateEscrowAccountInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority,
    TRemainingAccounts
  >;
}

// Input.
export type CreateEscrowAccountInput<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string
> = {
  /** Escrow account */
  escrow: Address<TAccountEscrow>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint account */
  mint: Address<TAccountMint>;
  /** Token account of the token */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition account */
  edition: Address<TAccountEdition>;
  /** Wallet paying for the transaction and new account */
  payer?: TransactionSigner<TAccountPayer>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Authority/creator of the escrow account */
  authority?: TransactionSigner<TAccountAuthority>;
};

export async function createEscrowAccount<
  TReturn,
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CreateEscrowAccountInstruction<
        TProgram,
        TAccountEscrow,
        TAccountMetadata,
        TAccountMint,
        TAccountTokenAccount,
        TAccountEdition,
        WritableSignerAccount<TAccountPayer> &
          IAccountSignerMeta<TAccountPayer>,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        ReadonlySignerAccount<TAccountAuthority> &
          IAccountSignerMeta<TAccountAuthority>
      >,
      TReturn
    >,
  input: CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): Promise<TReturn>;
export async function createEscrowAccount<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): Promise<
  CreateEscrowAccountInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    ReadonlySignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function createEscrowAccount<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): Promise<
  CreateEscrowAccountInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    ReadonlySignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function createEscrowAccount<
  TReturn,
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | CreateEscrowAccountInput<
        TAccountEscrow,
        TAccountMetadata,
        TAccountMint,
        TAccountTokenAccount,
        TAccountEdition,
        TAccountPayer,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountAuthority
      >,
  rawInput?: CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): Promise<
  | TReturn
  | (IInstruction &
      IInstructionWithSigners &
      IInstructionWithBytesCreatedOnChain)
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateEscrowAccountInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountMint,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof createEscrowAccountInstruction<
      TProgram,
      TAccountEscrow,
      TAccountMetadata,
      TAccountMint,
      TAccountTokenAccount,
      TAccountEdition,
      TAccountPayer,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountAuthority
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
    authority: { value: input.authority ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
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

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Instruction.
  const instruction = {
    ...createEscrowAccountInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
