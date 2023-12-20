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
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
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

export type TransferOutOfEscrowInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAttributeMint extends string | IAccountMeta<string> = string,
  TAccountAttributeSrc extends string | IAccountMeta<string> = string,
  TAccountAttributeDst extends string | IAccountMeta<string> = string,
  TAccountEscrowMint extends string | IAccountMeta<string> = string,
  TAccountEscrowAccount extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
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
        ? ReadonlyAccount<TAccountEscrow>
        : TAccountEscrow,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountAttributeMint extends string
        ? ReadonlyAccount<TAccountAttributeMint>
        : TAccountAttributeMint,
      TAccountAttributeSrc extends string
        ? WritableAccount<TAccountAttributeSrc>
        : TAccountAttributeSrc,
      TAccountAttributeDst extends string
        ? WritableAccount<TAccountAttributeDst>
        : TAccountAttributeDst,
      TAccountEscrowMint extends string
        ? ReadonlyAccount<TAccountEscrowMint>
        : TAccountEscrowMint,
      TAccountEscrowAccount extends string
        ? ReadonlyAccount<TAccountEscrowAccount>
        : TAccountEscrowAccount,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountAtaProgram extends string
        ? ReadonlyAccount<TAccountAtaProgram>
        : TAccountAtaProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type TransferOutOfEscrowInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAttributeMint extends string | IAccountMeta<string> = string,
  TAccountAttributeSrc extends string | IAccountMeta<string> = string,
  TAccountAttributeDst extends string | IAccountMeta<string> = string,
  TAccountEscrowMint extends string | IAccountMeta<string> = string,
  TAccountEscrowAccount extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
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
        ? ReadonlyAccount<TAccountEscrow>
        : TAccountEscrow,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountAttributeMint extends string
        ? ReadonlyAccount<TAccountAttributeMint>
        : TAccountAttributeMint,
      TAccountAttributeSrc extends string
        ? WritableAccount<TAccountAttributeSrc>
        : TAccountAttributeSrc,
      TAccountAttributeDst extends string
        ? WritableAccount<TAccountAttributeDst>
        : TAccountAttributeDst,
      TAccountEscrowMint extends string
        ? ReadonlyAccount<TAccountEscrowMint>
        : TAccountEscrowMint,
      TAccountEscrowAccount extends string
        ? ReadonlyAccount<TAccountEscrowAccount>
        : TAccountEscrowAccount,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountAtaProgram extends string
        ? ReadonlyAccount<TAccountAtaProgram>
        : TAccountAtaProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      ...TRemainingAccounts
    ]
  >;

export type TransferOutOfEscrowInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type TransferOutOfEscrowInstructionDataArgs = {
  amount: number | bigint;
};

export function getTransferOutOfEscrowInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; amount: number | bigint }>([
      ['discriminator', getU8Encoder()],
      ['amount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 40 })
  ) satisfies Encoder<TransferOutOfEscrowInstructionDataArgs>;
}

export function getTransferOutOfEscrowInstructionDataDecoder() {
  return getStructDecoder<TransferOutOfEscrowInstructionData>([
    ['discriminator', getU8Decoder()],
    ['amount', getU64Decoder()],
  ]) satisfies Decoder<TransferOutOfEscrowInstructionData>;
}

export function getTransferOutOfEscrowInstructionDataCodec(): Codec<
  TransferOutOfEscrowInstructionDataArgs,
  TransferOutOfEscrowInstructionData
> {
  return combineCodec(
    getTransferOutOfEscrowInstructionDataEncoder(),
    getTransferOutOfEscrowInstructionDataDecoder()
  );
}

export type TransferOutOfEscrowInput<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountAttributeMint extends string,
  TAccountAttributeSrc extends string,
  TAccountAttributeDst extends string,
  TAccountEscrowMint extends string,
  TAccountEscrowAccount extends string,
  TAccountSystemProgram extends string,
  TAccountAtaProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string
> = {
  /** Escrow account */
  escrow: Address<TAccountEscrow>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Wallet paying for the transaction and new account */
  payer: Address<TAccountPayer>;
  /** Mint account for the new attribute */
  attributeMint: Address<TAccountAttributeMint>;
  /** Token account source for the new attribute */
  attributeSrc: Address<TAccountAttributeSrc>;
  /** Token account, owned by TM, destination for the new attribute */
  attributeDst: Address<TAccountAttributeDst>;
  /** Mint account that the escrow is attached */
  escrowMint: Address<TAccountEscrowMint>;
  /** Token account that holds the token the escrow is attached to */
  escrowAccount: Address<TAccountEscrowAccount>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Associated Token program */
  ataProgram?: Address<TAccountAtaProgram>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Authority/creator of the escrow account */
  authority?: Address<TAccountAuthority>;
  amount: TransferOutOfEscrowInstructionDataArgs['amount'];
};

export type TransferOutOfEscrowInputWithSigners<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountAttributeMint extends string,
  TAccountAttributeSrc extends string,
  TAccountAttributeDst extends string,
  TAccountEscrowMint extends string,
  TAccountEscrowAccount extends string,
  TAccountSystemProgram extends string,
  TAccountAtaProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string
> = {
  /** Escrow account */
  escrow: Address<TAccountEscrow>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Wallet paying for the transaction and new account */
  payer: TransactionSigner<TAccountPayer>;
  /** Mint account for the new attribute */
  attributeMint: Address<TAccountAttributeMint>;
  /** Token account source for the new attribute */
  attributeSrc: Address<TAccountAttributeSrc>;
  /** Token account, owned by TM, destination for the new attribute */
  attributeDst: Address<TAccountAttributeDst>;
  /** Mint account that the escrow is attached */
  escrowMint: Address<TAccountEscrowMint>;
  /** Token account that holds the token the escrow is attached to */
  escrowAccount: Address<TAccountEscrowAccount>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Associated Token program */
  ataProgram?: Address<TAccountAtaProgram>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Authority/creator of the escrow account */
  authority?: TransactionSigner<TAccountAuthority>;
  amount: TransferOutOfEscrowInstructionDataArgs['amount'];
};

export function getTransferOutOfEscrowInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountAttributeMint extends string,
  TAccountAttributeSrc extends string,
  TAccountAttributeDst extends string,
  TAccountEscrowMint extends string,
  TAccountEscrowAccount extends string,
  TAccountSystemProgram extends string,
  TAccountAtaProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: TransferOutOfEscrowInputWithSigners<
    TAccountEscrow,
    TAccountMetadata,
    TAccountPayer,
    TAccountAttributeMint,
    TAccountAttributeSrc,
    TAccountAttributeDst,
    TAccountEscrowMint,
    TAccountEscrowAccount,
    TAccountSystemProgram,
    TAccountAtaProgram,
    TAccountTokenProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): TransferOutOfEscrowInstructionWithSigners<
  TProgram,
  TAccountEscrow,
  TAccountMetadata,
  TAccountPayer,
  TAccountAttributeMint,
  TAccountAttributeSrc,
  TAccountAttributeDst,
  TAccountEscrowMint,
  TAccountEscrowAccount,
  TAccountSystemProgram,
  TAccountAtaProgram,
  TAccountTokenProgram,
  TAccountSysvarInstructions,
  TAccountAuthority
>;
export function getTransferOutOfEscrowInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountAttributeMint extends string,
  TAccountAttributeSrc extends string,
  TAccountAttributeDst extends string,
  TAccountEscrowMint extends string,
  TAccountEscrowAccount extends string,
  TAccountSystemProgram extends string,
  TAccountAtaProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: TransferOutOfEscrowInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountPayer,
    TAccountAttributeMint,
    TAccountAttributeSrc,
    TAccountAttributeDst,
    TAccountEscrowMint,
    TAccountEscrowAccount,
    TAccountSystemProgram,
    TAccountAtaProgram,
    TAccountTokenProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): TransferOutOfEscrowInstruction<
  TProgram,
  TAccountEscrow,
  TAccountMetadata,
  TAccountPayer,
  TAccountAttributeMint,
  TAccountAttributeSrc,
  TAccountAttributeDst,
  TAccountEscrowMint,
  TAccountEscrowAccount,
  TAccountSystemProgram,
  TAccountAtaProgram,
  TAccountTokenProgram,
  TAccountSysvarInstructions,
  TAccountAuthority
>;
export function getTransferOutOfEscrowInstruction<
  TAccountEscrow extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountAttributeMint extends string,
  TAccountAttributeSrc extends string,
  TAccountAttributeDst extends string,
  TAccountEscrowMint extends string,
  TAccountEscrowAccount extends string,
  TAccountSystemProgram extends string,
  TAccountAtaProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: TransferOutOfEscrowInput<
    TAccountEscrow,
    TAccountMetadata,
    TAccountPayer,
    TAccountAttributeMint,
    TAccountAttributeSrc,
    TAccountAttributeDst,
    TAccountEscrowMint,
    TAccountEscrowAccount,
    TAccountSystemProgram,
    TAccountAtaProgram,
    TAccountTokenProgram,
    TAccountSysvarInstructions,
    TAccountAuthority
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getTransferOutOfEscrowInstructionRaw<
      TProgram,
      TAccountEscrow,
      TAccountMetadata,
      TAccountPayer,
      TAccountAttributeMint,
      TAccountAttributeSrc,
      TAccountAttributeDst,
      TAccountEscrowMint,
      TAccountEscrowAccount,
      TAccountSystemProgram,
      TAccountAtaProgram,
      TAccountTokenProgram,
      TAccountSysvarInstructions,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    escrow: { value: input.escrow ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    attributeMint: { value: input.attributeMint ?? null, isWritable: false },
    attributeSrc: { value: input.attributeSrc ?? null, isWritable: true },
    attributeDst: { value: input.attributeDst ?? null, isWritable: true },
    escrowMint: { value: input.escrowMint ?? null, isWritable: false },
    escrowAccount: { value: input.escrowAccount ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    ataProgram: { value: input.ataProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    authority: { value: input.authority ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.ataProgram.value) {
    accounts.ataProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
    accounts.ataProgram.isWritable = false;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
    accounts.tokenProgram.isWritable = false;
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

  const instruction = getTransferOutOfEscrowInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as TransferOutOfEscrowInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getTransferOutOfEscrowInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAttributeMint extends string | IAccountMeta<string> = string,
  TAccountAttributeSrc extends string | IAccountMeta<string> = string,
  TAccountAttributeDst extends string | IAccountMeta<string> = string,
  TAccountEscrowMint extends string | IAccountMeta<string> = string,
  TAccountEscrowAccount extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
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
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    attributeMint: TAccountAttributeMint extends string
      ? Address<TAccountAttributeMint>
      : TAccountAttributeMint;
    attributeSrc: TAccountAttributeSrc extends string
      ? Address<TAccountAttributeSrc>
      : TAccountAttributeSrc;
    attributeDst: TAccountAttributeDst extends string
      ? Address<TAccountAttributeDst>
      : TAccountAttributeDst;
    escrowMint: TAccountEscrowMint extends string
      ? Address<TAccountEscrowMint>
      : TAccountEscrowMint;
    escrowAccount: TAccountEscrowAccount extends string
      ? Address<TAccountEscrowAccount>
      : TAccountEscrowAccount;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    ataProgram?: TAccountAtaProgram extends string
      ? Address<TAccountAtaProgram>
      : TAccountAtaProgram;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Address<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    authority?: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
  },
  args: TransferOutOfEscrowInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.escrow, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.attributeMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.attributeSrc, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.attributeDst, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.escrowMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.escrowAccount, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.ataProgram ?? {
          address:
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
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
    data: getTransferOutOfEscrowInstructionDataEncoder().encode(args),
    programAddress,
  } as TransferOutOfEscrowInstruction<
    TProgram,
    TAccountEscrow,
    TAccountMetadata,
    TAccountPayer,
    TAccountAttributeMint,
    TAccountAttributeSrc,
    TAccountAttributeDst,
    TAccountEscrowMint,
    TAccountEscrowAccount,
    TAccountSystemProgram,
    TAccountAtaProgram,
    TAccountTokenProgram,
    TAccountSysvarInstructions,
    TAccountAuthority,
    TRemainingAccounts
  >;
}

export type ParsedTransferOutOfEscrowInstruction = {
  accounts: {
    /** Escrow account */
    escrow: Address;
    /** Metadata account */
    metadata: Address;
    /** Wallet paying for the transaction and new account */
    payer: Address;
    /** Mint account for the new attribute */
    attributeMint: Address;
    /** Token account source for the new attribute */
    attributeSrc: Address;
    /** Token account, owned by TM, destination for the new attribute */
    attributeDst: Address;
    /** Mint account that the escrow is attached */
    escrowMint: Address;
    /** Token account that holds the token the escrow is attached to */
    escrowAccount: Address;
    /** System program */
    systemProgram: Address;
    /** Associated Token program */
    ataProgram: Address;
    /** Token program */
    tokenProgram: Address;
    /** Instructions sysvar account */
    sysvarInstructions: Address;
    /** Authority/creator of the escrow account */
    authority: Address;
  };
  data: TransferOutOfEscrowInstructionData;
};

export function parseTransferOutOfEscrowInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedTransferOutOfEscrowInstruction {
  if (!instruction.accounts || instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  return {
    accounts: {
      escrow: instruction.accounts[accountIndex++]!.address,
      metadata: instruction.accounts[accountIndex++]!.address,
      payer: instruction.accounts[accountIndex++]!.address,
      attributeMint: instruction.accounts[accountIndex++]!.address,
      attributeSrc: instruction.accounts[accountIndex++]!.address,
      attributeDst: instruction.accounts[accountIndex++]!.address,
      escrowMint: instruction.accounts[accountIndex++]!.address,
      escrowAccount: instruction.accounts[accountIndex++]!.address,
      systemProgram: instruction.accounts[accountIndex++]!.address,
      ataProgram: instruction.accounts[accountIndex++]!.address,
      tokenProgram: instruction.accounts[accountIndex++]!.address,
      sysvarInstructions: instruction.accounts[accountIndex++]!.address,
      authority: instruction.accounts[accountIndex++]!.address,
    },
    data: getTransferOutOfEscrowInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
