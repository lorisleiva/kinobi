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
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  BurnArgs,
  BurnArgsArgs,
  getBurnArgsDecoder,
  getBurnArgsEncoder,
} from '../types';

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
    | IAccountMeta<string> = string,
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
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      ...TRemainingAccounts
    ]
  >;

export type BurnInstructionWithSigners<
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
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
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
        : TAccountAuthorizationRulesProgram,
      ...TRemainingAccounts
    ]
  >;

export type BurnInstructionData = { discriminator: number; burnArgs: BurnArgs };

export type BurnInstructionDataArgs = { burnArgs: BurnArgsArgs };

export function getBurnInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; burnArgs: BurnArgsArgs }>([
      ['discriminator', getU8Encoder()],
      ['burnArgs', getBurnArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 44 })
  ) satisfies Encoder<BurnInstructionDataArgs>;
}

export function getBurnInstructionDataDecoder() {
  return getStructDecoder<BurnInstructionData>([
    ['discriminator', getU8Decoder()],
    ['burnArgs', getBurnArgsDecoder()],
  ]) satisfies Decoder<BurnInstructionData>;
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
  metadata: Address<TAccountMetadata>;
  /** Asset owner */
  owner: Address<TAccountOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Token account to close */
  tokenAccount: Address<TAccountTokenAccount>;
  /** MasterEdition of the asset */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Address<TAccountCollectionMetadata>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  burnArgs: BurnInstructionDataArgs['burnArgs'];
};

export type BurnInputWithSigners<
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
  metadata: Address<TAccountMetadata>;
  /** Asset owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Token account to close */
  tokenAccount: Address<TAccountTokenAccount>;
  /** MasterEdition of the asset */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Metadata of the Collection */
  collectionMetadata?: Address<TAccountCollectionMetadata>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  burnArgs: BurnInstructionDataArgs['burnArgs'];
};

export function getBurnInstruction<
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
  input: BurnInputWithSigners<
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
): BurnInstructionWithSigners<
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
export function getBurnInstruction<
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
): BurnInstruction<
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
export function getBurnInstruction<
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
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getBurnInstructionRaw<
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
    accounts.splTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
    accounts.splTokenProgram.isWritable = false;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getBurnInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as BurnInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getBurnInstructionRaw<
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
    | IAccountMeta<string> = string,
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
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Address<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Address<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
  },
  args: BurnInstructionDataArgs,
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
    TAccountAuthorizationRulesProgram,
    TRemainingAccounts
  >;
}

export type ParsedBurnInstruction = {
  accounts: {
    /** Metadata (pda of ['metadata', program id, mint id]) */
    metadata: Address;
    /** Asset owner */
    owner: Address;
    /** Mint of token asset */
    mint: Address;
    /** Token account to close */
    tokenAccount: Address;
    /** MasterEdition of the asset */
    masterEditionAccount: Address;
    /** SPL Token Program */
    splTokenProgram: Address;
    /** Metadata of the Collection */
    collectionMetadata?: Address | undefined;
    /** Token Authorization Rules account */
    authorizationRules?: Address | undefined;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: Address | undefined;
  };
  data: BurnInstructionData;
};

export function parseBurnInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedBurnInstruction {
  if (!instruction.accounts || instruction.accounts.length < 9) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const address = instruction.accounts![accountIndex]!.address;
    accountIndex += 1;
    return address;
  };
  const getNextOptionalAccount = (): Address | undefined => {
    const address = getNextAccount();
    return address === 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ? undefined
      : address;
  };
  return {
    accounts: {
      metadata: getNextAccount(),
      owner: getNextAccount(),
      mint: getNextAccount(),
      tokenAccount: getNextAccount(),
      masterEditionAccount: getNextAccount(),
      splTokenProgram: getNextAccount(),
      collectionMetadata: getNextOptionalAccount(),
      authorizationRules: getNextOptionalAccount(),
      authorizationRulesProgram: getNextOptionalAccount(),
    },
    data: getBurnInstructionDataDecoder().decode(instruction.data),
  };
}
