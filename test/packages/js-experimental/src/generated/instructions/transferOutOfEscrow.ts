/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress, address } from '@solana/addresses';
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
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
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
    systemProgram: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    ataProgram: TAccountAtaProgram extends string
      ? Base58EncodedAddress<TAccountAtaProgram>
      : TAccountAtaProgram;
    tokenProgram: TAccountTokenProgram extends string
      ? Base58EncodedAddress<TAccountTokenProgram>
      : TAccountTokenProgram;
    sysvarInstructions: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    authority: TAccountAuthority extends string
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
      accountMetaWithDefault(accounts.systemProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.ataProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.tokenProgram, AccountRole.READONLY),
      accountMetaWithDefault(accounts.sysvarInstructions, AccountRole.READONLY),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
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
