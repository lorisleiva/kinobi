/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
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
import {
  Context,
  CustomGeneratedInstruction,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
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
  TAccountAuthority extends string | IAccountMeta<string> = string
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
        : TAccountAuthority
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
    getStructEncoder<TransferOutOfEscrowInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
      ],
      { description: 'TransferOutOfEscrowInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 40 } as TransferOutOfEscrowInstructionData)
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
  TAccountAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    escrow: TAccountEscrow extends string
      ? Base58EncodedAddress<TAccountEscrow>
      : TAccountEscrow;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    attributeMint: TAccountAttributeMint extends string
      ? Base58EncodedAddress<TAccountAttributeMint>
      : TAccountAttributeMint;
    attributeSrc: TAccountAttributeSrc extends string
      ? Base58EncodedAddress<TAccountAttributeSrc>
      : TAccountAttributeSrc;
    attributeDst: TAccountAttributeDst extends string
      ? Base58EncodedAddress<TAccountAttributeDst>
      : TAccountAttributeDst;
    escrowMint: TAccountEscrowMint extends string
      ? Base58EncodedAddress<TAccountEscrowMint>
      : TAccountEscrowMint;
    escrowAccount: TAccountEscrowAccount extends string
      ? Base58EncodedAddress<TAccountEscrowAccount>
      : TAccountEscrowAccount;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    ataProgram?: TAccountAtaProgram extends string
      ? Base58EncodedAddress<TAccountAtaProgram>
      : TAccountAtaProgram;
    tokenProgram?: TAccountTokenProgram extends string
      ? Base58EncodedAddress<TAccountTokenProgram>
      : TAccountTokenProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    authority?: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  args: TransferOutOfEscrowInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
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
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.ataProgram ?? {
          address:
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Base58EncodedAddress<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
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
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY_SIGNER
      ),
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
    TAccountAuthority
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
  escrow: Base58EncodedAddress<TAccountEscrow>;
  /** Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Wallet paying for the transaction and new account */
  payer?: Signer<TAccountPayer>;
  /** Mint account for the new attribute */
  attributeMint: Base58EncodedAddress<TAccountAttributeMint>;
  /** Token account source for the new attribute */
  attributeSrc: Base58EncodedAddress<TAccountAttributeSrc>;
  /** Token account, owned by TM, destination for the new attribute */
  attributeDst: Base58EncodedAddress<TAccountAttributeDst>;
  /** Mint account that the escrow is attached */
  escrowMint: Base58EncodedAddress<TAccountEscrowMint>;
  /** Token account that holds the token the escrow is attached to */
  escrowAccount: Base58EncodedAddress<TAccountEscrowAccount>;
  /** System program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** Associated Token program */
  ataProgram?: Base58EncodedAddress<TAccountAtaProgram>;
  /** Token program */
  tokenProgram?: Base58EncodedAddress<TAccountTokenProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Base58EncodedAddress<TAccountSysvarInstructions>;
  /** Authority/creator of the escrow account */
  authority?: Signer<TAccountAuthority>;
  amount: TransferOutOfEscrowInstructionDataArgs['amount'];
};

export async function transferOutOfEscrow<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string = string,
  TAccountMetadata extends string = string,
  TAccountPayer extends string = string,
  TAccountAttributeMint extends string = string,
  TAccountAttributeSrc extends string = string,
  TAccountAttributeDst extends string = string,
  TAccountEscrowMint extends string = string,
  TAccountEscrowAccount extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string = string
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
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string = string,
  TAccountMetadata extends string = string,
  TAccountPayer extends string = string,
  TAccountAttributeMint extends string = string,
  TAccountAttributeSrc extends string = string,
  TAccountAttributeDst extends string = string,
  TAccountEscrowMint extends string = string,
  TAccountEscrowAccount extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string = string
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
  WrappedInstruction<
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
    >
  >
>;
export async function transferOutOfEscrow<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string = string,
  TAccountMetadata extends string = string,
  TAccountPayer extends string = string,
  TAccountAttributeMint extends string = string,
  TAccountAttributeSrc extends string = string,
  TAccountAttributeDst extends string = string,
  TAccountEscrowMint extends string = string,
  TAccountEscrowAccount extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string = string
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
  WrappedInstruction<
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
    >
  >
>;
export async function transferOutOfEscrow<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEscrow extends string = string,
  TAccountMetadata extends string = string,
  TAccountPayer extends string = string,
  TAccountAttributeMint extends string = string,
  TAccountAttributeSrc extends string = string,
  TAccountAttributeDst extends string = string,
  TAccountEscrowMint extends string = string,
  TAccountEscrowAccount extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthority extends string = string
>(
  context:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
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
        >)
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
  input?: TransferOutOfEscrowInput<
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
  | TReturn
  | WrappedInstruction<
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
      >
    >
> {
  throw new Error('Not implemented');
}
