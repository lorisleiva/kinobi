/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress, address } from '@solana/addresses';
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
} from '../shared';
import {
  MintArgs,
  MintArgsArgs,
  getMintArgsDecoder,
  getMintArgsEncoder,
} from '../types';

// Output.
export type MintInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountSplAtaProgram extends string
        ? ReadonlyAccount<TAccountSplAtaProgram>
        : TAccountSplAtaProgram,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules
    ]
  >;

export type MintInstructionData = { discriminator: number; mintArgs: MintArgs };

export type MintInstructionDataArgs = { mintArgs: MintArgsArgs };

export function getMintInstructionDataEncoder(): Encoder<MintInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MintInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['mintArgs', getMintArgsEncoder()],
      ],
      { description: 'MintInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 42 } as MintInstructionData)
  ) as Encoder<MintInstructionDataArgs>;
}

export function getMintInstructionDataDecoder(): Decoder<MintInstructionData> {
  return getStructDecoder<MintInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['mintArgs', getMintArgsDecoder()],
    ],
    { description: 'MintInstructionData' }
  ) as Decoder<MintInstructionData>;
}

export function getMintInstructionDataCodec(): Codec<
  MintInstructionDataArgs,
  MintInstructionData
> {
  return combineCodec(
    getMintInstructionDataEncoder(),
    getMintInstructionDataDecoder()
  );
}

export function mintInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string
>(
  accounts: {
    token: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    splAtaProgram?: TAccountSplAtaProgram extends string
      ? Base58EncodedAddress<TAccountSplAtaProgram>
      : TAccountSplAtaProgram;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
  },
  args: MintInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.token, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
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
      accountMetaWithDefault(
        accounts.splAtaProgram ?? {
          address:
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Base58EncodedAddress<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>,
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
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getMintInstructionDataEncoder().encode(args),
    programAddress,
  } as MintInstruction<
    TProgram,
    TAccountToken,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >;
}

// Input.
export type MintInput<
  TAccountToken extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountPayer extends string,
  TAccountAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Token account */
  token: Base58EncodedAddress<TAccountToken>;
  /** Metadata account key (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Master Edition account */
  masterEdition?: Base58EncodedAddress<TAccountMasterEdition>;
  /** Mint of token asset */
  mint: Base58EncodedAddress<TAccountMint>;
  /** Payer */
  payer?: Signer<TAccountPayer>;
  /** (Mint or Update) authority */
  authority?: Signer<TAccountAuthority>;
  /** System program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Base58EncodedAddress<TAccountSysvarInstructions>;
  /** SPL Token program */
  splTokenProgram?: Base58EncodedAddress<TAccountSplTokenProgram>;
  /** SPL Associated Token Account program */
  splAtaProgram?: Base58EncodedAddress<TAccountSplAtaProgram>;
  /** Token Authorization Rules program */
  authorizationRulesProgram?: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Base58EncodedAddress<TAccountAuthorizationRules>;
  mintArgs: MintInstructionDataArgs['mintArgs'];
};

export async function mint<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      MintInstruction<
        TProgram,
        TAccountToken,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountPayer,
        TAccountAuthority,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
      TReturn
    >,
  input: MintInput<
    TAccountToken,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn>;
export async function mint<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintInput<
    TAccountToken,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    MintInstruction<
      TProgram,
      TAccountToken,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountPayer,
      TAccountAuthority,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function mint<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string
>(
  input: MintInput<
    TAccountToken,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    MintInstruction<
      TProgram,
      TAccountToken,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountPayer,
      TAccountAuthority,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function mint<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          MintInstruction<
            TProgram,
            TAccountToken,
            TAccountMetadata,
            TAccountMasterEdition,
            TAccountMint,
            TAccountPayer,
            TAccountAuthority,
            TAccountSystemProgram,
            TAccountSysvarInstructions,
            TAccountSplTokenProgram,
            TAccountSplAtaProgram,
            TAccountAuthorizationRulesProgram,
            TAccountAuthorizationRules
          >,
          TReturn
        >)
    | MintInput<
        TAccountToken,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountPayer,
        TAccountAuthority,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
  rawInput?: MintInput<
    TAccountToken,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  | TReturn
  | WrappedInstruction<
      MintInstruction<
        TProgram,
        TAccountToken,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountPayer,
        TAccountAuthority,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >
    >
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          MintInstruction<
            TProgram,
            TAccountToken,
            TAccountMetadata,
            TAccountMasterEdition,
            TAccountMint,
            TAccountPayer,
            TAccountAuthority,
            TAccountSystemProgram,
            TAccountSysvarInstructions,
            TAccountSplTokenProgram,
            TAccountSplAtaProgram,
            TAccountAuthorizationRulesProgram,
            TAccountAuthorizationRules
          >,
          TReturn
        >);
  const input = (rawInput === undefined ? rawContext : rawInput) as MintInput<
    TAccountToken,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountPayer,
    TAccountAuthority,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
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
  type AccountMetas = Parameters<typeof mintInstruction>[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    token: { value: input.token ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: false },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    splAtaProgram: { value: input.splAtaProgram ?? null, isWritable: false },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
    authorizationRules: {
      value: input.authorizationRules ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.

  resolvedAccounts.systemProgram.value = context.programs.getPublicKey(
    'splSystem',
    '11111111111111111111111111111111'
  );
  resolvedAccounts.systemProgram.isWritable = false;
  resolvedAccounts.sysvarInstructions.value = address(
    'Sysvar1nstructions1111111111111111111111111'
  );
  resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey(
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );
  resolvedAccounts.splTokenProgram.isWritable = false;
  resolvedAccounts.splAtaProgram.value = context.programs.getPublicKey(
    'splAssociatedToken',
    'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
  );
  resolvedAccounts.splAtaProgram.isWritable = false;

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
    instruction: mintInstruction(
      accountMetas as AccountMetas,
      args,
      programAddress
    ) as MintInstruction<
      TProgram,
      TAccountToken,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountPayer,
      TAccountAuthority,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >,
    signers,
    bytesCreatedOnChain: 0,
  };
}
