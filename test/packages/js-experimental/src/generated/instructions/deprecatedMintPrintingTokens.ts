/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { address } from '@solana/addresses';
import { mapEncoder } from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
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
import {
  MintPrintingTokensViaTokenArgs,
  MintPrintingTokensViaTokenArgsArgs,
  getMintPrintingTokensViaTokenArgsDecoder,
  getMintPrintingTokensViaTokenArgsEncoder,
} from '../types';

// Output.
export type DeprecatedMintPrintingTokensInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDestination extends string = string,
  TAccountPrintingMint extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<DeprecatedMintPrintingTokensInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountDestination>,
      WritableAccount<TAccountPrintingMint>,
      ReadonlySignerAccount<TAccountUpdateAuthority>,
      ReadonlyAccount<TAccountMetadata>,
      ReadonlyAccount<TAccountMasterEdition>,
      ReadonlyAccount<TAccountTokenProgram>,
      ReadonlyAccount<TAccountRent>
    ]
  >;
