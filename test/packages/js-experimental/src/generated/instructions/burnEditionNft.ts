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
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
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
export type BurnEditionNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountPrintEditionMint extends string = string,
  TAccountMasterEditionMint extends string = string,
  TAccountPrintEditionTokenAccount extends string = string,
  TAccountMasterEditionTokenAccount extends string = string,
  TAccountMasterEditionAccount extends string = string,
  TAccountPrintEditionAccount extends string = string,
  TAccountEditionMarkerAccount extends string = string,
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
> = IInstruction<TProgram> &
  IInstructionWithData<BurnEditionNftInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountOwner>,
      WritableAccount<TAccountPrintEditionMint>,
      ReadonlyAccount<TAccountMasterEditionMint>,
      WritableAccount<TAccountPrintEditionTokenAccount>,
      ReadonlyAccount<TAccountMasterEditionTokenAccount>,
      WritableAccount<TAccountMasterEditionAccount>,
      WritableAccount<TAccountPrintEditionAccount>,
      WritableAccount<TAccountEditionMarkerAccount>,
      ReadonlyAccount<TAccountSplTokenProgram>
    ]
  >;

export type BurnEditionNftInstructionData = { discriminator: number };

export type BurnEditionNftInstructionDataArgs = {};

export function getBurnEditionNftInstructionDataEncoder(): Encoder<BurnEditionNftInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<BurnEditionNftInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'BurnEditionNftInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 37 } as BurnEditionNftInstructionData)
  ) as Encoder<BurnEditionNftInstructionDataArgs>;
}

export function getBurnEditionNftInstructionDataDecoder(): Decoder<BurnEditionNftInstructionData> {
  return getStructDecoder<BurnEditionNftInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'BurnEditionNftInstructionData' }
  ) as Decoder<BurnEditionNftInstructionData>;
}

export function getBurnEditionNftInstructionDataCodec(): Codec<
  BurnEditionNftInstructionDataArgs,
  BurnEditionNftInstructionData
> {
  return combineCodec(
    getBurnEditionNftInstructionDataEncoder(),
    getBurnEditionNftInstructionDataDecoder()
  );
}

export function burnEditionNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountPrintEditionMint extends string = string,
  TAccountMasterEditionMint extends string = string,
  TAccountPrintEditionTokenAccount extends string = string,
  TAccountMasterEditionTokenAccount extends string = string,
  TAccountMasterEditionAccount extends string = string,
  TAccountPrintEditionAccount extends string = string,
  TAccountEditionMarkerAccount extends string = string,
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    owner: Base58EncodedAddress<TAccountOwner>;
    printEditionMint: Base58EncodedAddress<TAccountPrintEditionMint>;
    masterEditionMint: Base58EncodedAddress<TAccountMasterEditionMint>;
    printEditionTokenAccount: Base58EncodedAddress<TAccountPrintEditionTokenAccount>;
    masterEditionTokenAccount: Base58EncodedAddress<TAccountMasterEditionTokenAccount>;
    masterEditionAccount: Base58EncodedAddress<TAccountMasterEditionAccount>;
    printEditionAccount: Base58EncodedAddress<TAccountPrintEditionAccount>;
    editionMarkerAccount: Base58EncodedAddress<TAccountEditionMarkerAccount>;
    splTokenProgram: Base58EncodedAddress<TAccountSplTokenProgram>;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): BurnEditionNftInstruction<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountPrintEditionMint,
  TAccountMasterEditionMint,
  TAccountPrintEditionTokenAccount,
  TAccountMasterEditionTokenAccount,
  TAccountMasterEditionAccount,
  TAccountPrintEditionAccount,
  TAccountEditionMarkerAccount,
  TAccountSplTokenProgram
> {
  return {
    accounts: [
      { address: accounts.metadata, role: AccountRole.WRITABLE_SIGNER },
      { address: accounts.owner, role: AccountRole.WRITABLE_SIGNER },
      { address: accounts.printEditionMint, role: AccountRole.WRITABLE_SIGNER },
      {
        address: accounts.masterEditionMint,
        role: AccountRole.WRITABLE_SIGNER,
      },
      {
        address: accounts.printEditionTokenAccount,
        role: AccountRole.WRITABLE_SIGNER,
      },
      {
        address: accounts.masterEditionTokenAccount,
        role: AccountRole.WRITABLE_SIGNER,
      },
      {
        address: accounts.masterEditionAccount,
        role: AccountRole.WRITABLE_SIGNER,
      },
      {
        address: accounts.printEditionAccount,
        role: AccountRole.WRITABLE_SIGNER,
      },
      {
        address: accounts.editionMarkerAccount,
        role: AccountRole.WRITABLE_SIGNER,
      },
      { address: accounts.splTokenProgram, role: AccountRole.WRITABLE_SIGNER },
    ],
    data: getBurnEditionNftInstructionDataEncoder().encode({}),
    programAddress,
  };
}