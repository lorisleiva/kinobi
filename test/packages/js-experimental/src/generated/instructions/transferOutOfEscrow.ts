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
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type TransferOutOfEscrowInstruction<
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
> = IInstruction<TProgram> &
  IInstructionWithData<TransferOutOfEscrowInstructionData> &
  IInstructionWithAccounts<
    [
      ReadonlyAccount<TAccountEscrow>,
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountAttributeMint>,
      WritableAccount<TAccountAttributeSrc>,
      WritableAccount<TAccountAttributeDst>,
      ReadonlyAccount<TAccountEscrowMint>,
      ReadonlyAccount<TAccountEscrowAccount>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountAtaProgram>,
      ReadonlyAccount<TAccountTokenProgram>,
      ReadonlyAccount<TAccountSysvarInstructions>,
      ReadonlySignerAccount<TAccountAuthority>
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
  accounts: {
    escrow: Base58EncodedAddress<TAccountEscrow>;
    metadata: Base58EncodedAddress<TAccountMetadata>;
    payer: Base58EncodedAddress<TAccountPayer>;
    attributeMint: Base58EncodedAddress<TAccountAttributeMint>;
    attributeSrc: Base58EncodedAddress<TAccountAttributeSrc>;
    attributeDst: Base58EncodedAddress<TAccountAttributeDst>;
    escrowMint: Base58EncodedAddress<TAccountEscrowMint>;
    escrowAccount: Base58EncodedAddress<TAccountEscrowAccount>;
    systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
    ataProgram: Base58EncodedAddress<TAccountAtaProgram>;
    tokenProgram: Base58EncodedAddress<TAccountTokenProgram>;
    sysvarInstructions: Base58EncodedAddress<TAccountSysvarInstructions>;
    authority: Base58EncodedAddress<TAccountAuthority>;
  },
  args: TransferOutOfEscrowInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
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
> {
  // ...
}
