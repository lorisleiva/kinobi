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
import { IInstructionWithSigners, TransactionSigner } from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

// Output.
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

export type TransferOutOfEscrowInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type TransferOutOfEscrowInstructionDataArgs = {
  amount: number | bigint;
};

export function getTransferOutOfEscrowInstructionDataEncoder(): Encoder<TransferOutOfEscrowInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; amount: number | bigint }>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
      ],
      { description: 'TransferOutOfEscrowInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 40 })
  ) as Encoder<TransferOutOfEscrowInstructionDataArgs>;
}

export function getTransferOutOfEscrowInstructionDataDecoder(): Decoder<TransferOutOfEscrowInstructionData> {
  return getStructDecoder<TransferOutOfEscrowInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
    ],
    { description: 'TransferOutOfEscrowInstructionData' }
  ) as Decoder<TransferOutOfEscrowInstructionData>;
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

export function transferOutOfEscrowInstruction<
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

// Input.
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
  payer?: TransactionSigner<TAccountPayer>;
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

export async function transferOutOfEscrow<
  TReturn,
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
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      TransferOutOfEscrowInstruction<
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
      >,
      TReturn
    >,
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
): Promise<TReturn>;
export async function transferOutOfEscrow<
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
  context: Pick<Context, 'getProgramAddress'>,
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
): Promise<
  TransferOutOfEscrowInstruction<
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
  > &
    IInstructionWithSigners
>;
export async function transferOutOfEscrow<
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
): Promise<
  TransferOutOfEscrowInstruction<
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
  > &
    IInstructionWithSigners
>;
export async function transferOutOfEscrow<
  TReturn,
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
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | TransferOutOfEscrowInput<
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
      >,
  rawInput?: TransferOutOfEscrowInput<
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
): Promise<TReturn | (IInstruction & IInstructionWithSigners)> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as TransferOutOfEscrowInput<
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
    typeof transferOutOfEscrowInstruction<
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
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.ataProgram.value) {
    accounts.ataProgram.value = await getProgramAddress(
      context,
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    );
    accounts.ataProgram.isWritable = false;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
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

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Instruction.
  const instruction = {
    ...transferOutOfEscrowInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as TransferOutOfEscrowInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
