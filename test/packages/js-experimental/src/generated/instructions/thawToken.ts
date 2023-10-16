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

// Output.
export type ThawTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<ThawTokenInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountAccount>,
      ReadonlyAccount<TAccountMint>,
      ReadonlySignerAccount<TAccountOwner>
    ]
  >;

export type ThawTokenInstructionData = { discriminator: number };

export type ThawTokenInstructionDataArgs = {};

export function getThawTokenInstructionDataEncoder(): Encoder<ThawTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<ThawTokenInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'ThawTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 11 } as ThawTokenInstructionData)
  ) as Encoder<ThawTokenInstructionDataArgs>;
}

export function getThawTokenInstructionDataDecoder(): Decoder<ThawTokenInstructionData> {
  return getStructDecoder<ThawTokenInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'ThawTokenInstructionData' }
  ) as Decoder<ThawTokenInstructionData>;
}

export function getThawTokenInstructionDataCodec(): Codec<
  ThawTokenInstructionDataArgs,
  ThawTokenInstructionData
> {
  return combineCodec(
    getThawTokenInstructionDataEncoder(),
    getThawTokenInstructionDataDecoder()
  );
}

export function thawTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string
>(
  accounts: {
    account: Base58EncodedAddress<TAccountAccount>;
    mint: Base58EncodedAddress<TAccountMint>;
    owner: Base58EncodedAddress<TAccountOwner>;
  },
  programId: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
): ThawTokenInstruction<
  TProgram,
  TAccountAccount,
  TAccountMint,
  TAccountOwner
> {
  // ...
}
