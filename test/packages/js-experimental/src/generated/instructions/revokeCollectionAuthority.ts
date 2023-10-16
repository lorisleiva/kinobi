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

// Output.
export type RevokeCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountDelegateAuthority extends string = string,
  TAccountRevokeAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountMint extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<RevokeCollectionAuthorityInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountCollectionAuthorityRecord>,
      WritableAccount<TAccountDelegateAuthority>,
      WritableSignerAccount<TAccountRevokeAuthority>,
      ReadonlyAccount<TAccountMetadata>,
      ReadonlyAccount<TAccountMint>
    ]
  >;

export type RevokeCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type RevokeCollectionAuthorityInstructionDataArgs = {};

export function getRevokeCollectionAuthorityInstructionDataEncoder(): Encoder<RevokeCollectionAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<RevokeCollectionAuthorityInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'RevokeCollectionAuthorityInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 24,
      } as RevokeCollectionAuthorityInstructionData)
  ) as Encoder<RevokeCollectionAuthorityInstructionDataArgs>;
}

export function getRevokeCollectionAuthorityInstructionDataDecoder(): Decoder<RevokeCollectionAuthorityInstructionData> {
  return getStructDecoder<RevokeCollectionAuthorityInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'RevokeCollectionAuthorityInstructionData' }
  ) as Decoder<RevokeCollectionAuthorityInstructionData>;
}

export function getRevokeCollectionAuthorityInstructionDataCodec(): Codec<
  RevokeCollectionAuthorityInstructionDataArgs,
  RevokeCollectionAuthorityInstructionData
> {
  return combineCodec(
    getRevokeCollectionAuthorityInstructionDataEncoder(),
    getRevokeCollectionAuthorityInstructionDataDecoder()
  );
}

export function revokeCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountDelegateAuthority extends string = string,
  TAccountRevokeAuthority extends string = string,
  TAccountMetadata extends string = string,
  TAccountMint extends string = string
>(
  accounts: {
    collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
    delegateAuthority: Base58EncodedAddress<TAccountDelegateAuthority>;
    revokeAuthority: Base58EncodedAddress<TAccountRevokeAuthority>;
    metadata: Base58EncodedAddress<TAccountMetadata>;
    mint: Base58EncodedAddress<TAccountMint>;
  },
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): RevokeCollectionAuthorityInstruction<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountDelegateAuthority,
  TAccountRevokeAuthority,
  TAccountMetadata,
  TAccountMint
> {
  // ...
}
