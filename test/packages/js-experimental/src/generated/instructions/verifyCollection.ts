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
export type VerifyCollectionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollection extends string = string,
  TAccountCollectionMasterEditionAccount extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<VerifyCollectionInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountCollectionAuthority>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountCollectionMint>,
      ReadonlyAccount<TAccountCollection>,
      ReadonlyAccount<TAccountCollectionMasterEditionAccount>
    ]
  >;
