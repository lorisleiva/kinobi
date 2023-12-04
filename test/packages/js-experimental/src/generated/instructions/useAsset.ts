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
import {
  IAccountSignerMeta,
  IInstructionWithSigners,
  TransactionSigner,
} from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  IInstructionWithBytesCreatedOnChain,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import {
  UseAssetArgs,
  UseAssetArgsArgs,
  getUseAssetArgsDecoder,
  getUseAssetArgsEncoder,
} from '../types';

// Output.
export type UseAssetInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUseAuthority extends string
        ? WritableSignerAccount<TAccountUseAuthority>
        : TAccountUseAuthority,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountAtaProgram extends string
        ? ReadonlyAccount<TAccountAtaProgram>
        : TAccountAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      ...TRemainingAccounts
    ]
  >;

export type UseAssetInstructionData = {
  discriminator: number;
  useAssetArgs: UseAssetArgs;
};

export type UseAssetInstructionDataArgs = { useAssetArgs: UseAssetArgsArgs };

export function getUseAssetInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; useAssetArgs: UseAssetArgsArgs }>(
      [
        ['discriminator', getU8Encoder()],
        ['useAssetArgs', getUseAssetArgsEncoder()],
      ]
    ),
    (value) => ({ ...value, discriminator: 45 })
  ) satisfies Encoder<UseAssetInstructionDataArgs>;
}

export function getUseAssetInstructionDataDecoder() {
  return getStructDecoder<UseAssetInstructionData>([
    ['discriminator', getU8Decoder()],
    ['useAssetArgs', getUseAssetArgsDecoder()],
  ]) satisfies Decoder<UseAssetInstructionData>;
}

export function getUseAssetInstructionDataCodec(): Codec<
  UseAssetInstructionDataArgs,
  UseAssetInstructionData
> {
  return combineCodec(
    getUseAssetInstructionDataEncoder(),
    getUseAssetInstructionDataDecoder()
  );
}

export function useAssetInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    useAuthority: TAccountUseAuthority extends string
      ? Address<TAccountUseAuthority>
      : TAccountUseAuthority;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Address<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    ataProgram?: TAccountAtaProgram extends string
      ? Address<TAccountAtaProgram>
      : TAccountAtaProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    useAuthorityRecord?: TAccountUseAuthorityRecord extends string
      ? Address<TAccountUseAuthorityRecord>
      : TAccountUseAuthorityRecord;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Address<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Address<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
  },
  args: UseAssetInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.useAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.splTokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.ataProgram ?? {
          address:
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.useAuthorityRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.authorizationRulesProgram ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getUseAssetInstructionDataEncoder().encode(args),
    programAddress,
  } as UseAssetInstruction<
    TProgram,
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram,
    TRemainingAccounts
  >;
}

// Input.
export type UseAssetInput<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountSplTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token Account Of NFT */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Mint of the Metadata */
  mint: Address<TAccountMint>;
  /** Use authority or current owner of the asset */
  useAuthority: TransactionSigner<TAccountUseAuthority>;
  /** Owner */
  owner: Address<TAccountOwner>;
  /** SPL Token program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Associated Token program */
  ataProgram?: Address<TAccountAtaProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Use Authority Record PDA (if present the program assumes a delegated use authority) */
  useAuthorityRecord?: Address<TAccountUseAuthorityRecord>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  useAssetArgs: UseAssetInstructionDataArgs['useAssetArgs'];
};

export async function useAsset<
  TReturn,
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountSplTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      UseAssetInstruction<
        TProgram,
        TAccountMetadata,
        TAccountTokenAccount,
        TAccountMint,
        WritableSignerAccount<TAccountUseAuthority> &
          IAccountSignerMeta<TAccountUseAuthority>,
        TAccountOwner,
        TAccountSplTokenProgram,
        TAccountAtaProgram,
        TAccountSystemProgram,
        TAccountUseAuthorityRecord,
        TAccountAuthorizationRules,
        TAccountAuthorizationRulesProgram
      >,
      TReturn
    >,
  input: UseAssetInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<TReturn>;
export async function useAsset<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountSplTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UseAssetInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<
  UseAssetInstruction<
    TProgram,
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    WritableSignerAccount<TAccountUseAuthority> &
      IAccountSignerMeta<TAccountUseAuthority>,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function useAsset<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountSplTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UseAssetInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<
  UseAssetInstruction<
    TProgram,
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    WritableSignerAccount<TAccountUseAuthority> &
      IAccountSignerMeta<TAccountUseAuthority>,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function useAsset<
  TReturn,
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountSplTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountAuthorizationRules extends string,
  TAccountAuthorizationRulesProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | UseAssetInput<
        TAccountMetadata,
        TAccountTokenAccount,
        TAccountMint,
        TAccountUseAuthority,
        TAccountOwner,
        TAccountSplTokenProgram,
        TAccountAtaProgram,
        TAccountSystemProgram,
        TAccountUseAuthorityRecord,
        TAccountAuthorizationRules,
        TAccountAuthorizationRulesProgram
      >,
  rawInput?: UseAssetInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
  >
): Promise<
  | TReturn
  | (IInstruction &
      IInstructionWithSigners &
      IInstructionWithBytesCreatedOnChain)
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as UseAssetInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountSplTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountUseAuthorityRecord,
    TAccountAuthorizationRules,
    TAccountAuthorizationRulesProgram
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
    typeof useAssetInstruction<
      TProgram,
      TAccountMetadata,
      TAccountTokenAccount,
      TAccountMint,
      TAccountUseAuthority,
      TAccountOwner,
      TAccountSplTokenProgram,
      TAccountAtaProgram,
      TAccountSystemProgram,
      TAccountUseAuthorityRecord,
      TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    useAuthority: { value: input.useAuthority ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    ataProgram: { value: input.ataProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    useAuthorityRecord: {
      value: input.useAuthorityRecord ?? null,
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
  if (!accounts.ataProgram.value) {
    accounts.ataProgram.value = await getProgramAddress(
      context,
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    );
    accounts.ataProgram.isWritable = false;
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
    ...useAssetInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as UseAssetInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
