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
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { Signer, accountMetaWithDefault } from '../shared';
import {
  DataV2,
  DataV2Args,
  getDataV2Decoder,
  getDataV2Encoder,
} from '../types';

// Output.
export type CreateMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type CreateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: DataV2;
  isMutable: boolean;
};

export type CreateMetadataAccountV2InstructionDataArgs = {
  data: DataV2Args;
  isMutable: boolean;
};

export function getCreateMetadataAccountV2InstructionDataEncoder(): Encoder<CreateMetadataAccountV2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CreateMetadataAccountV2InstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['data', getDataV2Encoder()],
        ['isMutable', getBooleanEncoder()],
      ],
      { description: 'CreateMetadataAccountV2InstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 16,
      } as CreateMetadataAccountV2InstructionData)
  ) as Encoder<CreateMetadataAccountV2InstructionDataArgs>;
}

export function getCreateMetadataAccountV2InstructionDataDecoder(): Decoder<CreateMetadataAccountV2InstructionData> {
  return getStructDecoder<CreateMetadataAccountV2InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['data', getDataV2Decoder()],
      ['isMutable', getBooleanDecoder()],
    ],
    { description: 'CreateMetadataAccountV2InstructionData' }
  ) as Decoder<CreateMetadataAccountV2InstructionData>;
}

export function getCreateMetadataAccountV2InstructionDataCodec(): Codec<
  CreateMetadataAccountV2InstructionDataArgs,
  CreateMetadataAccountV2InstructionData
> {
  return combineCodec(
    getCreateMetadataAccountV2InstructionDataEncoder(),
    getCreateMetadataAccountV2InstructionDataDecoder()
  );
}

export function createMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: CreateMetadataAccountV2InstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.updateAuthority, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getCreateMetadataAccountV2InstructionDataEncoder().encode(args),
    programAddress,
  } as CreateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >;
}

// Input.
export type CreateMetadataAccountV2Input<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Mint of token asset */
  mint: Base58EncodedAddress<TAccountMint>;
  /** Mint authority */
  mintAuthority: Signer<TAccountMintAuthority>;
  /** payer */
  payer: Signer<TAccountPayer>;
  /** update authority info */
  updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
  /** System program */
  systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
  /** Rent info */
  rent: Base58EncodedAddress<TAccountRent>;
};
