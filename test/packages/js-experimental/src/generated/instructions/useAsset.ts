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
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  UseAssetArgs,
  UseAssetArgsArgs,
  getUseAssetArgsDecoder,
  getUseAssetArgsEncoder,
} from '../types';

export type UseAssetInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
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
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
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
        ? WritableSignerAccount<TAccountUseAuthority> &
            IAccountSignerMeta<TAccountUseAuthority>
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
      ...TRemainingAccounts,
    ]
  >;

export type UseAssetInstructionData = {
  discriminator: number;
  useAssetArgs: UseAssetArgs;
};

export type UseAssetInstructionDataArgs = { useAssetArgs: UseAssetArgsArgs };

export function getUseAssetInstructionDataEncoder(): Encoder<UseAssetInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['useAssetArgs', getUseAssetArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 45 })
  );
}

export function getUseAssetInstructionDataDecoder(): Decoder<UseAssetInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['useAssetArgs', getUseAssetArgsDecoder()],
  ]);
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

export type UseAssetInput<
  TAccountMetadata extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountMint extends string = string,
  TAccountUseAuthority extends string = string,
  TAccountOwner extends string = string,
  TAccountSplTokenProgram extends string = string,
  TAccountAtaProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountUseAuthorityRecord extends string = string,
  TAccountAuthorizationRules extends string = string,
  TAccountAuthorizationRulesProgram extends string = string,
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

export function getUseAssetInstruction<
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
): UseAssetInstruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
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
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
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
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }
  if (!accounts.ataProgram.value) {
    accounts.ataProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.tokenAccount),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.useAuthority),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.splTokenProgram),
      getAccountMeta(accounts.ataProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.useAuthorityRecord),
      getAccountMeta(accounts.authorizationRules),
      getAccountMeta(accounts.authorizationRulesProgram),
    ],
    programAddress,
    data: getUseAssetInstructionDataEncoder().encode(
      args as UseAssetInstructionDataArgs
    ),
  } as UseAssetInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
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

  return instruction;
}

export type ParsedUseAssetInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata account */
    metadata: TAccountMetas[0];
    /** Token Account Of NFT */
    tokenAccount: TAccountMetas[1];
    /** Mint of the Metadata */
    mint: TAccountMetas[2];
    /** Use authority or current owner of the asset */
    useAuthority: TAccountMetas[3];
    /** Owner */
    owner: TAccountMetas[4];
    /** SPL Token program */
    splTokenProgram: TAccountMetas[5];
    /** Associated Token program */
    ataProgram: TAccountMetas[6];
    /** System program */
    systemProgram: TAccountMetas[7];
    /** Use Authority Record PDA (if present the program assumes a delegated use authority) */
    useAuthorityRecord?: TAccountMetas[8] | undefined;
    /** Token Authorization Rules account */
    authorizationRules?: TAccountMetas[9] | undefined;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: TAccountMetas[10] | undefined;
  };
  data: UseAssetInstructionData;
};

export function parseUseAssetInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUseAssetInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 11) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === MPL_TOKEN_METADATA_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      tokenAccount: getNextAccount(),
      mint: getNextAccount(),
      useAuthority: getNextAccount(),
      owner: getNextAccount(),
      splTokenProgram: getNextAccount(),
      ataProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      useAuthorityRecord: getNextOptionalAccount(),
      authorizationRules: getNextOptionalAccount(),
      authorizationRulesProgram: getNextOptionalAccount(),
    },
    data: getUseAssetInstructionDataDecoder().decode(instruction.data),
  };
}
