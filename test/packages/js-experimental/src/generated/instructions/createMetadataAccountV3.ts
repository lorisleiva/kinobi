/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { mapEncoder } from '@solana/codecs-core';
import {
  getBooleanDecoder,
  getBooleanEncoder,
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
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import { findMetadataPda } from '../accounts';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  CollectionDetails,
  CollectionDetailsArgs,
  DataV2,
  DataV2Args,
  getCollectionDetailsDecoder,
  getCollectionDetailsEncoder,
  getDataV2Decoder,
  getDataV2Encoder,
} from '../types';

// Output.
export type CreateMetadataAccountV3Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRent extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<CreateMetadataAccountV3InstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      ReadonlyAccount<TAccountMint>,
      ReadonlySignerAccount<TAccountMintAuthority>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountUpdateAuthority>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountRent>
    ]
  >;
