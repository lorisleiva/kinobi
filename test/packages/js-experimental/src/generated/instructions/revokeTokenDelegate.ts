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
export type RevokeTokenDelegateInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string = string,
  TAccountOwner extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<RevokeTokenDelegateInstructionData> &
  IInstructionWithAccounts<
    [WritableAccount<TAccountSource>, ReadonlySignerAccount<TAccountOwner>]
  >;

export type RevokeTokenDelegateInstructionData = { discriminator: number };

export type RevokeTokenDelegateInstructionDataArgs = {};

export function getRevokeTokenDelegateInstructionDataEncoder(): Encoder<RevokeTokenDelegateInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<RevokeTokenDelegateInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'RevokeTokenDelegateInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 5 } as RevokeTokenDelegateInstructionData)
  ) as Encoder<RevokeTokenDelegateInstructionDataArgs>;
}

export function getRevokeTokenDelegateInstructionDataDecoder(): Decoder<RevokeTokenDelegateInstructionData> {
  return getStructDecoder<RevokeTokenDelegateInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'RevokeTokenDelegateInstructionData' }
  ) as Decoder<RevokeTokenDelegateInstructionData>;
}

export function getRevokeTokenDelegateInstructionDataCodec(): Codec<
  RevokeTokenDelegateInstructionDataArgs,
  RevokeTokenDelegateInstructionData
> {
  return combineCodec(
    getRevokeTokenDelegateInstructionDataEncoder(),
    getRevokeTokenDelegateInstructionDataDecoder()
  );
}

export function revokeTokenDelegateInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string = string,
  TAccountOwner extends string = string
>(
  accounts: {
    source: Base58EncodedAddress<TAccountSource>;
    owner: Base58EncodedAddress<TAccountOwner>;
  },
  programId: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
): RevokeTokenDelegateInstruction<TProgram, TAccountSource, TAccountOwner> {
  // ...
}
