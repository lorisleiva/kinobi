/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

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
export type BurnNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountOwner extends string = string,
  TAccountMint extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountMasterEditionAccount extends string = string,
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<BurnNftInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountOwner>,
      WritableAccount<TAccountMint>,
      WritableAccount<TAccountTokenAccount>,
      WritableAccount<TAccountMasterEditionAccount>,
      ReadonlyAccount<TAccountSplTokenProgram>,
      WritableAccount<TAccountCollectionMetadata>
    ]
  >;
