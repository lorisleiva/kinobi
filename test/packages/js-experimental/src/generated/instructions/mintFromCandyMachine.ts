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
  getArrayDecoder,
  getArrayEncoder,
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
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type MintFromCandyMachineInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftMintAuthority extends string | IAccountMeta<string> = string,
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountNftMasterEdition extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthorityPda extends string
        ? WritableAccount<TAccountAuthorityPda>
        : TAccountAuthorityPda,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountNftMint extends string
        ? WritableAccount<TAccountNftMint>
        : TAccountNftMint,
      TAccountNftMintAuthority extends string
        ? ReadonlySignerAccount<TAccountNftMintAuthority>
        : TAccountNftMintAuthority,
      TAccountNftMetadata extends string
        ? WritableAccount<TAccountNftMetadata>
        : TAccountNftMetadata,
      TAccountNftMasterEdition extends string
        ? WritableAccount<TAccountNftMasterEdition>
        : TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionMasterEdition extends string
        ? ReadonlyAccount<TAccountCollectionMasterEdition>
        : TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority extends string
        ? ReadonlyAccount<TAccountCollectionUpdateAuthority>
        : TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRecentSlothashes extends string
        ? ReadonlyAccount<TAccountRecentSlothashes>
        : TAccountRecentSlothashes
    ]
  >;

export type MintFromCandyMachineInstructionData = {
  discriminator: Array<number>;
};

export type MintFromCandyMachineInstructionDataArgs = {};

export function getMintFromCandyMachineInstructionDataEncoder(): Encoder<MintFromCandyMachineInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MintFromCandyMachineInstructionData>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'MintFromCandyMachineInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: [51, 57, 225, 47, 182, 146, 137, 166],
      } as MintFromCandyMachineInstructionData)
  ) as Encoder<MintFromCandyMachineInstructionDataArgs>;
}

export function getMintFromCandyMachineInstructionDataDecoder(): Decoder<MintFromCandyMachineInstructionData> {
  return getStructDecoder<MintFromCandyMachineInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'MintFromCandyMachineInstructionData' }
  ) as Decoder<MintFromCandyMachineInstructionData>;
}

export function getMintFromCandyMachineInstructionDataCodec(): Codec<
  MintFromCandyMachineInstructionDataArgs,
  MintFromCandyMachineInstructionData
> {
  return combineCodec(
    getMintFromCandyMachineInstructionDataEncoder(),
    getMintFromCandyMachineInstructionDataDecoder()
  );
}

export function mintFromCandyMachineInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftMintAuthority extends string | IAccountMeta<string> = string,
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountNftMasterEdition extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string | IAccountMeta<string> = string
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Base58EncodedAddress<TAccountCandyMachine>
      : TAccountCandyMachine;
    authorityPda: TAccountAuthorityPda extends string
      ? Base58EncodedAddress<TAccountAuthorityPda>
      : TAccountAuthorityPda;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    nftMint: TAccountNftMint extends string
      ? Base58EncodedAddress<TAccountNftMint>
      : TAccountNftMint;
    nftMintAuthority: TAccountNftMintAuthority extends string
      ? Base58EncodedAddress<TAccountNftMintAuthority>
      : TAccountNftMintAuthority;
    nftMetadata: TAccountNftMetadata extends string
      ? Base58EncodedAddress<TAccountNftMetadata>
      : TAccountNftMetadata;
    nftMasterEdition: TAccountNftMasterEdition extends string
      ? Base58EncodedAddress<TAccountNftMasterEdition>
      : TAccountNftMasterEdition;
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Base58EncodedAddress<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    collectionMint: TAccountCollectionMint extends string
      ? Base58EncodedAddress<TAccountCollectionMint>
      : TAccountCollectionMint;
    collectionMetadata: TAccountCollectionMetadata extends string
      ? Base58EncodedAddress<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    collectionMasterEdition: TAccountCollectionMasterEdition extends string
      ? Base58EncodedAddress<TAccountCollectionMasterEdition>
      : TAccountCollectionMasterEdition;
    collectionUpdateAuthority: TAccountCollectionUpdateAuthority extends string
      ? Base58EncodedAddress<TAccountCollectionUpdateAuthority>
      : TAccountCollectionUpdateAuthority;
    tokenMetadataProgram?: TAccountTokenMetadataProgram extends string
      ? Base58EncodedAddress<TAccountTokenMetadataProgram>
      : TAccountTokenMetadataProgram;
    tokenProgram?: TAccountTokenProgram extends string
      ? Base58EncodedAddress<TAccountTokenProgram>
      : TAccountTokenProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    recentSlothashes: TAccountRecentSlothashes extends string
      ? Base58EncodedAddress<TAccountRecentSlothashes>
      : TAccountRecentSlothashes;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authorityPda, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.nftMint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.nftMintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.nftMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.nftMasterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.collectionMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionMasterEdition,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.collectionUpdateAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.tokenMetadataProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.recentSlothashes, AccountRole.READONLY),
    ],
    data: getMintFromCandyMachineInstructionDataEncoder().encode({}),
    programAddress,
  } as MintFromCandyMachineInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >;
}

// Input.
export type MintFromCandyMachineInput<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountNftMint extends string,
  TAccountNftMintAuthority extends string,
  TAccountNftMetadata extends string,
  TAccountNftMasterEdition extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRecentSlothashes extends string
> = {
  candyMachine: Base58EncodedAddress<TAccountCandyMachine>;
  authorityPda: Base58EncodedAddress<TAccountAuthorityPda>;
  mintAuthority: Signer<TAccountMintAuthority>;
  payer?: Signer<TAccountPayer>;
  nftMint: Base58EncodedAddress<TAccountNftMint>;
  nftMintAuthority?: Signer<TAccountNftMintAuthority>;
  nftMetadata: Base58EncodedAddress<TAccountNftMetadata>;
  nftMasterEdition: Base58EncodedAddress<TAccountNftMasterEdition>;
  collectionAuthorityRecord: Base58EncodedAddress<TAccountCollectionAuthorityRecord>;
  collectionMint: Base58EncodedAddress<TAccountCollectionMint>;
  collectionMetadata: Base58EncodedAddress<TAccountCollectionMetadata>;
  collectionMasterEdition: Base58EncodedAddress<TAccountCollectionMasterEdition>;
  collectionUpdateAuthority: Base58EncodedAddress<TAccountCollectionUpdateAuthority>;
  tokenMetadataProgram?: Base58EncodedAddress<TAccountTokenMetadataProgram>;
  tokenProgram?: Base58EncodedAddress<TAccountTokenProgram>;
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  recentSlothashes: Base58EncodedAddress<TAccountRecentSlothashes>;
};

export async function mintFromCandyMachine<
  TReturn,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthorityPda extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftMintAuthority extends string = string,
  TAccountNftMetadata extends string = string,
  TAccountNftMasterEdition extends string = string,
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionMasterEdition extends string = string,
  TAccountCollectionUpdateAuthority extends string = string,
  TAccountTokenMetadataProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      MintFromCandyMachineInstruction<
        TProgram,
        TAccountCandyMachine,
        TAccountAuthorityPda,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountNftMint,
        TAccountNftMintAuthority,
        TAccountNftMetadata,
        TAccountNftMasterEdition,
        TAccountCollectionAuthorityRecord,
        TAccountCollectionMint,
        TAccountCollectionMetadata,
        TAccountCollectionMasterEdition,
        TAccountCollectionUpdateAuthority,
        TAccountTokenMetadataProgram,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRecentSlothashes
      >,
      TReturn
    >,
  input: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): Promise<TReturn>;
export async function mintFromCandyMachine<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthorityPda extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftMintAuthority extends string = string,
  TAccountNftMetadata extends string = string,
  TAccountNftMasterEdition extends string = string,
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionMasterEdition extends string = string,
  TAccountCollectionUpdateAuthority extends string = string,
  TAccountTokenMetadataProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): Promise<
  WrappedInstruction<
    MintFromCandyMachineInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthorityPda,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountNftMint,
      TAccountNftMintAuthority,
      TAccountNftMetadata,
      TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRecentSlothashes
    >
  >
>;
export async function mintFromCandyMachine<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthorityPda extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftMintAuthority extends string = string,
  TAccountNftMetadata extends string = string,
  TAccountNftMasterEdition extends string = string,
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionMasterEdition extends string = string,
  TAccountCollectionUpdateAuthority extends string = string,
  TAccountTokenMetadataProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string = string
>(
  input: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): Promise<
  WrappedInstruction<
    MintFromCandyMachineInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthorityPda,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountNftMint,
      TAccountNftMintAuthority,
      TAccountNftMetadata,
      TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRecentSlothashes
    >
  >
>;
export async function mintFromCandyMachine<
  TReturn,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string = string,
  TAccountAuthorityPda extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftMintAuthority extends string = string,
  TAccountNftMetadata extends string = string,
  TAccountNftMasterEdition extends string = string,
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionMasterEdition extends string = string,
  TAccountCollectionUpdateAuthority extends string = string,
  TAccountTokenMetadataProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRecentSlothashes extends string = string
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          MintFromCandyMachineInstruction<
            TProgram,
            TAccountCandyMachine,
            TAccountAuthorityPda,
            TAccountMintAuthority,
            TAccountPayer,
            TAccountNftMint,
            TAccountNftMintAuthority,
            TAccountNftMetadata,
            TAccountNftMasterEdition,
            TAccountCollectionAuthorityRecord,
            TAccountCollectionMint,
            TAccountCollectionMetadata,
            TAccountCollectionMasterEdition,
            TAccountCollectionUpdateAuthority,
            TAccountTokenMetadataProgram,
            TAccountTokenProgram,
            TAccountSystemProgram,
            TAccountRecentSlothashes
          >,
          TReturn
        >)
    | MintFromCandyMachineInput<
        TAccountCandyMachine,
        TAccountAuthorityPda,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountNftMint,
        TAccountNftMintAuthority,
        TAccountNftMetadata,
        TAccountNftMasterEdition,
        TAccountCollectionAuthorityRecord,
        TAccountCollectionMint,
        TAccountCollectionMetadata,
        TAccountCollectionMasterEdition,
        TAccountCollectionUpdateAuthority,
        TAccountTokenMetadataProgram,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRecentSlothashes
      >,
  rawInput?: MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >
): Promise<
  | TReturn
  | WrappedInstruction<
      MintFromCandyMachineInstruction<
        TProgram,
        TAccountCandyMachine,
        TAccountAuthorityPda,
        TAccountMintAuthority,
        TAccountPayer,
        TAccountNftMint,
        TAccountNftMintAuthority,
        TAccountNftMetadata,
        TAccountNftMasterEdition,
        TAccountCollectionAuthorityRecord,
        TAccountCollectionMint,
        TAccountCollectionMetadata,
        TAccountCollectionMasterEdition,
        TAccountCollectionUpdateAuthority,
        TAccountTokenMetadataProgram,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRecentSlothashes
      >
    >
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          MintFromCandyMachineInstruction<
            TProgram,
            TAccountCandyMachine,
            TAccountAuthorityPda,
            TAccountMintAuthority,
            TAccountPayer,
            TAccountNftMint,
            TAccountNftMintAuthority,
            TAccountNftMetadata,
            TAccountNftMasterEdition,
            TAccountCollectionAuthorityRecord,
            TAccountCollectionMint,
            TAccountCollectionMetadata,
            TAccountCollectionMasterEdition,
            TAccountCollectionUpdateAuthority,
            TAccountTokenMetadataProgram,
            TAccountTokenProgram,
            TAccountSystemProgram,
            TAccountRecentSlothashes
          >,
          TReturn
        >);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as MintFromCandyMachineInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountNftMint,
    TAccountNftMintAuthority,
    TAccountNftMetadata,
    TAccountNftMasterEdition,
    TAccountCollectionAuthorityRecord,
    TAccountCollectionMint,
    TAccountCollectionMetadata,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountTokenMetadataProgram,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRecentSlothashes
  >;

  // Program address.
  const defaultProgramAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Base58EncodedAddress<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplCandyMachineCore',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<typeof mintFromCandyMachineInstruction>[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authorityPda: { value: input.authorityPda ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    nftMint: { value: input.nftMint ?? null, isWritable: true },
    nftMintAuthority: {
      value: input.nftMintAuthority ?? null,
      isWritable: false,
    },
    nftMetadata: { value: input.nftMetadata ?? null, isWritable: true },
    nftMasterEdition: {
      value: input.nftMasterEdition ?? null,
      isWritable: true,
    },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: false,
    },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
    collectionMasterEdition: {
      value: input.collectionMasterEdition ?? null,
      isWritable: false,
    },
    collectionUpdateAuthority: {
      value: input.collectionUpdateAuthority ?? null,
      isWritable: false,
    },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    recentSlothashes: {
      value: input.recentSlothashes ?? null,
      isWritable: false,
    },
  };

  // Resolve default values.
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value = await getProgramAddress(
      context,
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    );
    accounts.tokenMetadataProgram.isWritable = false;
  }
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.tokenProgram.isWritable = false;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  // TODO

  // Bytes created on chain.
  // TODO

  return {
    instruction: mintFromCandyMachineInstruction(
      accountMetas as AccountMetas,
      programAddress
    ) as MintFromCandyMachineInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthorityPda,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountNftMint,
      TAccountNftMintAuthority,
      TAccountNftMetadata,
      TAccountNftMasterEdition,
      TAccountCollectionAuthorityRecord,
      TAccountCollectionMint,
      TAccountCollectionMetadata,
      TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority,
      TAccountTokenMetadataProgram,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRecentSlothashes
    >,
    signers,
    bytesCreatedOnChain: 0,
  };
}
