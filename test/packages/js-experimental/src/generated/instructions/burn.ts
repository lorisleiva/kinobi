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
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
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
import {
  BurnArgs,
  BurnArgsArgs,
  getBurnArgsDecoder,
  getBurnArgsEncoder,
} from '../types';

// Output.
export type BurnInstruction<
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
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string
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
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram
    ]
  >;

export type BurnInstructionData = { discriminator: number; burnArgs: BurnArgs };

export type BurnInstructionDataArgs = { burnArgs: BurnArgsArgs };

export function getBurnInstructionDataEncoder(): Encoder<BurnInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; burnArgs: BurnArgsArgs }>(
      [
        ['discriminator', getU8Encoder()],
        ['burnArgs', getBurnArgsEncoder()],
      ],
      { description: 'BurnInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 44 })
  ) as Encoder<BurnInstructionDataArgs>;
}

export function getBurnInstructionDataDecoder(): Decoder<BurnInstructionData> {
  return getStructDecoder<BurnInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['burnArgs', getBurnArgsDecoder()],
    ],
    { description: 'BurnInstructionData' }
  ) as Decoder<BurnInstructionData>;
}

export function getBurnInstructionDataCodec(): Codec<
  BurnInstructionDataArgs,
  BurnInstructionData
> {
  return combineCodec(
    getBurnInstructionDataEncoder(),
    getBurnInstructionDataDecoder()
  );
}

export function burnInstruction<
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
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    tokenAccount: TAccountTokenAccount extends string
      ? Base58EncodedAddress<TAccountTokenAccount>
      : TAccountTokenAccount;
    masterEditionAccount: TAccountMasterEditionAccount extends string
      ? Base58EncodedAddress<TAccountMasterEditionAccount>
      : TAccountMasterEditionAccount;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    collectionMetadata?: TAccountCollectionMetadata extends string
      ? Base58EncodedAddress<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
  },
  args: BurnInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
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
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.collectionMetadata ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.authorizationRulesProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getBurnInstructionDataEncoder().encode(args),
    programAddress,
  } as BurnInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >;
}

// Input.
export type BurnInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Asset owner */
  owner: Signer<TAccountOwner>;
  /** Mint of token asset */
  mint: Base58EncodedAddress<TAccountMint>;
  /** Token account to close */
  tokenAccount: Base58EncodedAddress<TAccountTokenAccount>;
  /** MasterEdition of the asset */
  masterEditionAccount: Base58EncodedAddress<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Base58EncodedAddress<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Base58EncodedAddress<TAccountCollectionMetadata>;
  /** Token Authorization Rules account */
  authorizationRules?: Base58EncodedAddress<TAccountAuthorizationRules>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
  burnArgs: BurnInstructionDataArgs['burnArgs'];
};

export async function burn<
  TReturn,
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      BurnInstruction<
        TProgram,
        TAccountMetadata,
        TAccountOwner,
        TAccountMint,
        TAccountTokenAccount,
        TAccountMasterEditionAccount,
        TAccountSplTokenProgram,
        TAccountCollectionMetadata,
        TAccountAuthorizationRules,
        TAccountAuthorizationRulesProgram
      >,
      TReturn
    >,
  input: BurnInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<TReturn>;
export async function burn<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BurnInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<
  WrappedInstruction<
    BurnInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountMint,
      TAccountTokenAccount,
      TAccountMasterEditionAccount,
      TAccountSplTokenProgram,
      TAccountCollectionMetadata,
      TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram
    >
  >
>;
export async function burn<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<
  WrappedInstruction<
    BurnInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountMint,
      TAccountTokenAccount,
      TAccountMasterEditionAccount,
      TAccountSplTokenProgram,
      TAccountCollectionMetadata,
      TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram
    >
  >
>;
export async function burn<
  TReturn,
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountMint extends string,
  TAccountTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountSplTokenProgram extends string,
  TAccountCollectionMetadata extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | BurnInput<
        TAccountMetadata,
        TAccountOwner,
        TAccountMint,
        TAccountTokenAccount,
        TAccountMasterEditionAccount,
        TAccountSplTokenProgram,
        TAccountCollectionMetadata,
        TAccountAuthorizationRules,
        TAccountAuthorizationRulesProgram
      >,
  rawInput?: BurnInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (rawInput === undefined ? rawContext : rawInput) as BurnInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountMint,
    TAccountTokenAccount,
    TAccountMasterEditionAccount,
    TAccountSplTokenProgram,
    TAccountCollectionMetadata,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof burnInstruction<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountMint,
      TAccountTokenAccount,
      TAccountMasterEditionAccount,
      TAccountSplTokenProgram,
      TAccountCollectionMetadata,
      TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram
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
    authorizationRules: {
      value: input.authorizationRules ?? null,
      isWritable: false,
    },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

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
    instruction: burnInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as BurnInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
