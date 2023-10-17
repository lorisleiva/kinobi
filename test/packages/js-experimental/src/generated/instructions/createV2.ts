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
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
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
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Context,
  CustomGeneratedInstruction,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
} from '../shared';
import {
  AssetData,
  AssetDataArgs,
  getAssetDataDecoder,
  getAssetDataEncoder,
} from '../types';

// Output.
export type CreateV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
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
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram
    ]
  >;

export type CreateV2InstructionData = {
  discriminator: number;
  createV2Discriminator: number;
  assetData: AssetData;
  maxSupply: Option<bigint>;
};

export type CreateV2InstructionDataArgs = {
  assetData: AssetDataArgs;
  maxSupply: OptionOrNullable<number | bigint>;
};

export function getCreateV2InstructionDataEncoder(): Encoder<CreateV2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<CreateV2InstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['createV2Discriminator', getU8Encoder()],
        ['assetData', getAssetDataEncoder()],
        ['maxSupply', getOptionEncoder(getU64Encoder())],
      ],
      { description: 'CreateV2InstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 41,
        createV2Discriminator: 1,
      } as CreateV2InstructionData)
  ) as Encoder<CreateV2InstructionDataArgs>;
}

export function getCreateV2InstructionDataDecoder(): Decoder<CreateV2InstructionData> {
  return getStructDecoder<CreateV2InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['createV2Discriminator', getU8Decoder()],
      ['assetData', getAssetDataDecoder()],
      ['maxSupply', getOptionDecoder(getU64Decoder())],
    ],
    { description: 'CreateV2InstructionData' }
  ) as Decoder<CreateV2InstructionData>;
}

export function getCreateV2InstructionDataCodec(): Codec<
  CreateV2InstructionDataArgs,
  CreateV2InstructionData
> {
  return combineCodec(
    getCreateV2InstructionDataEncoder(),
    getCreateV2InstructionDataDecoder()
  );
}

export function createV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
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
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
  },
  args: CreateV2InstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
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
        accounts.sysvarInstructions ??
          'Sysvar1nstructions1111111111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getCreateV2InstructionDataEncoder().encode(args),
    programAddress,
  } as CreateV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >;
}

// Input.
export type CreateV2Input<
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string
> = {
  /** Metadata account key (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition'] */
  masterEdition?: Base58EncodedAddress<TAccountMasterEdition>;
  /** Mint of token asset */
  mint: Base58EncodedAddress<TAccountMint> | Signer<TAccountMint>;
  /** Mint authority */
  mintAuthority: Signer<TAccountMintAuthority>;
  /** Payer */
  payer?: Signer<TAccountPayer>;
  /** update authority info */
  updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Base58EncodedAddress<TAccountSysvarInstructions>;
  /** SPL Token program */
  splTokenProgram?: Base58EncodedAddress<TAccountSplTokenProgram>;
  assetData: CreateV2InstructionDataArgs['assetData'];
  maxSupply: CreateV2InstructionDataArgs['maxSupply'];
};

export async function createV2<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CreateV2Instruction<
        TProgram,
        TAccountMetadata,
        TAccountMasterEdition,
        typeof input['mint'] extends Signer<TAccountMint>
          ? WritableSignerAccount<TAccountMint>
          : TAccountMint,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram
      >,
      TReturn
    >,
  input: CreateV2Input<
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >
): Promise<TReturn>;
export async function createV2<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateV2Input<
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >
): Promise<
  WrappedInstruction<
    CreateV2Instruction<
      TProgram,
      TAccountMetadata,
      TAccountMasterEdition,
      typeof input['mint'] extends Signer<TAccountMint>
        ? WritableSignerAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram
    >
  >
>;
export async function createV2<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: CreateV2Input<
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >
): Promise<
  WrappedInstruction<
    CreateV2Instruction<
      TProgram,
      TAccountMetadata,
      TAccountMasterEdition,
      typeof input['mint'] extends Signer<TAccountMint>
        ? WritableSignerAccount<TAccountMint>
        : TAccountMint,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram
    >
  >
>;
export async function createV2<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          CreateV2Instruction<
            TProgram,
            TAccountMetadata,
            TAccountMasterEdition,
            typeof input['mint'] extends Signer<TAccountMint>
              ? WritableSignerAccount<TAccountMint>
              : TAccountMint,
            TAccountMintAuthority,
            TAccountPayer,
            TAccountUpdateAuthority,
            TAccountSystemProgram,
            TAccountSysvarInstructions,
            TAccountSplTokenProgram
          >,
          TReturn
        >)
    | CreateV2Input<
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram
      >,
  input?: CreateV2Input<
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram
  >
): Promise<
  | TReturn
  | WrappedInstruction<
      CreateV2Instruction<
        TProgram,
        TAccountMetadata,
        TAccountMasterEdition,
        typeof input['mint'] extends Signer<TAccountMint>
          ? WritableSignerAccount<TAccountMint>
          : TAccountMint,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram
      >
    >
> {
  throw new Error('Not implemented');
}
