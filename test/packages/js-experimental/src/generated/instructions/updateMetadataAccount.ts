/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU16Decoder,
  getU16Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  AccountRole,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  WritableAccount,
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
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  Creator,
  CreatorArgs,
  getCreatorDecoder,
  getCreatorEncoder,
} from '../types';

// Output.
export type UpdateMetadataAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountUpdateAuthority extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<UpdateMetadataAccountInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountMetadata>,
      ReadonlySignerAccount<TAccountUpdateAuthority>
    ]
  >;

export type UpdateMetadataAccountInstructionData = {
  discriminator: number;
  data: Option<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
  }>;
  updateAuthority: Option<Base58EncodedAddress>;
  primarySaleHappened: Option<boolean>;
};

export type UpdateMetadataAccountInstructionDataArgs = {
  data: OptionOrNullable<{
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
  }>;
  updateAuthority: OptionOrNullable<Base58EncodedAddress>;
  primarySaleHappened: OptionOrNullable<boolean>;
};

export function getUpdateMetadataAccountInstructionDataEncoder(): Encoder<UpdateMetadataAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UpdateMetadataAccountInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        [
          'data',
          getOptionEncoder(
            getStructEncoder<any>([
              ['name', getStringEncoder()],
              ['symbol', getStringEncoder()],
              ['uri', getStringEncoder()],
              ['sellerFeeBasisPoints', getU16Encoder()],
              [
                'creators',
                getOptionEncoder(getArrayEncoder(getCreatorEncoder())),
              ],
            ])
          ),
        ],
        ['updateAuthority', getOptionEncoder(getAddressEncoder())],
        ['primarySaleHappened', getOptionEncoder(getBooleanEncoder())],
      ],
      { description: 'UpdateMetadataAccountInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 1 } as UpdateMetadataAccountInstructionData)
  ) as Encoder<UpdateMetadataAccountInstructionDataArgs>;
}

export function getUpdateMetadataAccountInstructionDataDecoder(): Decoder<UpdateMetadataAccountInstructionData> {
  return getStructDecoder<UpdateMetadataAccountInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      [
        'data',
        getOptionDecoder(
          getStructDecoder<any>([
            ['name', getStringDecoder()],
            ['symbol', getStringDecoder()],
            ['uri', getStringDecoder()],
            ['sellerFeeBasisPoints', getU16Decoder()],
            [
              'creators',
              getOptionDecoder(getArrayDecoder(getCreatorDecoder())),
            ],
          ])
        ),
      ],
      ['updateAuthority', getOptionDecoder(getAddressDecoder())],
      ['primarySaleHappened', getOptionDecoder(getBooleanDecoder())],
    ],
    { description: 'UpdateMetadataAccountInstructionData' }
  ) as Decoder<UpdateMetadataAccountInstructionData>;
}

export function getUpdateMetadataAccountInstructionDataCodec(): Codec<
  UpdateMetadataAccountInstructionDataArgs,
  UpdateMetadataAccountInstructionData
> {
  return combineCodec(
    getUpdateMetadataAccountInstructionDataEncoder(),
    getUpdateMetadataAccountInstructionDataDecoder()
  );
}

export function updateMetadataAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountUpdateAuthority extends string = string
>(
  accounts: {
    metadata: Base58EncodedAddress<TAccountMetadata>;
    updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
  },
  args: UpdateMetadataAccountInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): UpdateMetadataAccountInstruction<
  TProgram,
  TAccountMetadata,
  TAccountUpdateAuthority
> {
  return {
    accounts: [
      { address: accounts.metadata, role: AccountRole.WRITABLE_SIGNER },
      { address: accounts.updateAuthority, role: AccountRole.WRITABLE_SIGNER },
    ],
    data: getUpdateMetadataAccountInstructionDataEncoder().encode(args),
    programAddress,
  };
}