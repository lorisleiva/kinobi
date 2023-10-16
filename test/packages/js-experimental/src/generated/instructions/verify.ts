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
import {
  VerifyArgs,
  VerifyArgsArgs,
  getVerifyArgsDecoder,
  getVerifyArgsEncoder,
} from '../types';

// Output.
export type VerifyInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthorizationRules extends string = string,
  TAccountAuthorizationRulesProgram extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<VerifyInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      WritableSignerAccount<TAccountCollectionAuthority>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlyAccount<TAccountAuthorizationRules>,
      ReadonlyAccount<TAccountAuthorizationRulesProgram>
    ]
  >;

export type VerifyInstructionData = {
  discriminator: number;
  verifyArgs: VerifyArgs;
};

export type VerifyInstructionDataArgs = { verifyArgs: VerifyArgsArgs };

export function getVerifyInstructionDataEncoder(): Encoder<VerifyInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<VerifyInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['verifyArgs', getVerifyArgsEncoder()],
      ],
      { description: 'VerifyInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 47 } as VerifyInstructionData)
  ) as Encoder<VerifyInstructionDataArgs>;
}

export function getVerifyInstructionDataDecoder(): Decoder<VerifyInstructionData> {
  return getStructDecoder<VerifyInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['verifyArgs', getVerifyArgsDecoder()],
    ],
    { description: 'VerifyInstructionData' }
  ) as Decoder<VerifyInstructionData>;
}

export function getVerifyInstructionDataCodec(): Codec<
  VerifyInstructionDataArgs,
  VerifyInstructionData
> {
  return combineCodec(
    getVerifyInstructionDataEncoder(),
    getVerifyInstructionDataDecoder()
  );
}

export function verifyInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountCollectionAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthorizationRules extends string = string,
  TAccountAuthorizationRulesProgram extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    collectionAuthority: Base58EncodedAddress<TAccountCollectionAuthority>;
    payer: Base58EncodedAddress<TAccountPayer>;
    authorizationRules: Base58EncodedAddress<TAccountAuthorizationRules>;
    authorizationRulesProgram: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
  },
  args: VerifyInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): VerifyInstruction<
  TProgram,
  TAccountMetadata,
  TAccountCollectionAuthority,
  TAccountPayer,
  TAccountAuthorizationRules,
  TAccountAuthorizationRulesProgram
> {
  // ...
}
