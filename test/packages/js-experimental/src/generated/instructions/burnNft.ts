/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
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
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IInstructionWithSigners, TransactionSigner } from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type BurnNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      ...TRemainingAccounts
    ]
  >;

export type BurnNftInstructionData = { discriminator: number };

export type BurnNftInstructionDataArgs = {};

export function getBurnNftInstructionDataEncoder(): Encoder<BurnNftInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>(
      [['discriminator', getU8Encoder()]],
      { description: 'BurnNftInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 29 })
  ) as Encoder<BurnNftInstructionDataArgs>;
}

export function getBurnNftInstructionDataDecoder(): Decoder<BurnNftInstructionData> {
  return getStructDecoder<BurnNftInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'BurnNftInstructionData' }
  ) as Decoder<BurnNftInstructionData>;
}

export function getBurnNftInstructionDataCodec(): Codec<
  BurnNftInstructionDataArgs,
  BurnNftInstructionData
> {
  return combineCodec(
    getBurnNftInstructionDataEncoder(),
    getBurnNftInstructionDataDecoder()
  );
}

export function burnNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    masterEditionAccount: TAccountMasterEditionAccount extends string
      ? Address<TAccountMasterEditionAccount>
      : TAccountMasterEditionAccount;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Address<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    collectionMetadata?: TAccountCollectionMetadata extends string
      ? Address<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEditionAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.collectionMetadata ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getBurnNftInstructionDataEncoder().encode({}),
    programAddress,
  } as BurnNftInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TRemainingAccounts
  >;
}

// Input.
export type BurnNftInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** NFT owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Mint of the NFT */
  mint: Address<TAccountMint>;
  /** Token account to close */
  tokenAccount: Address<TAccountTokenAccount>;
  /** MasterEdition2 of the NFT */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Address<TAccountCollectionMetadata>;
};

export async function burnNft<
  TReturn,
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      BurnNftInstruction<
        TProgram,
        TAccountMetadata,
        TAccountOwner,
        TAccountMint,
        TAccountTokenAccount,
        TAccountMasterEditionAccount,
        TAccountSplTokenProgram,
        TAccountCollectionMetadata
      >,
      TReturn
    >,
  input: BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): Promise<TReturn>;
export async function burnNft<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): Promise<
  BurnNftInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  > &
    IInstructionWithSigners
>;
export async function burnNft<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): Promise<
  BurnNftInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  > &
    IInstructionWithSigners
>;
export async function burnNft<
  TReturn,
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | BurnNftInput<
        TAccountMetadata,
        TAccountOwner,
        TAccountMint,
        TAccountTokenAccount,
        TAccountMasterEditionAccount,
        TAccountSplTokenProgram,
        TAccountCollectionMetadata
      >,
  rawInput?: BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >
): Promise<TReturn | (IInstruction & IInstructionWithSigners)> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as BurnNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof burnNftInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountMint,
      TAccountTokenAccount,
      TAccountMasterEditionAccount,
      TAccountSplTokenProgram,
      TAccountCollectionMetadata
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    masterEditionAccount: {
      value: input.masterEditionAccount ?? null,
      isWritable: true,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
  };

  // Resolve default values.
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.splTokenProgram.isWritable = false;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Instruction.
  const instruction = {
    ...burnNftInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
