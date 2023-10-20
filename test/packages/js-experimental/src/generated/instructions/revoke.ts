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
import {
  RevokeArgs,
  RevokeArgsArgs,
  getRevokeArgsDecoder,
  getRevokeArgsEncoder,
} from '../types';

// Output.
export type RevokeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountDelegate extends string
        ? ReadonlyAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules
    ]
  >;

export type RevokeInstructionData = {
  discriminator: number;
  revokeArgs: RevokeArgs;
};

export type RevokeInstructionDataArgs = { revokeArgs: RevokeArgsArgs };

export function getRevokeInstructionDataEncoder(): Encoder<RevokeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; revokeArgs: RevokeArgsArgs }>(
      [
        ['discriminator', getU8Encoder()],
        ['revokeArgs', getRevokeArgsEncoder()],
      ],
      { description: 'RevokeInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 49 })
  ) as Encoder<RevokeInstructionDataArgs>;
}

export function getRevokeInstructionDataDecoder(): Decoder<RevokeInstructionData> {
  return getStructDecoder<RevokeInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['revokeArgs', getRevokeArgsDecoder()],
    ],
    { description: 'RevokeInstructionData' }
  ) as Decoder<RevokeInstructionData>;
}

export function getRevokeInstructionDataCodec(): Codec<
  RevokeInstructionDataArgs,
  RevokeInstructionData
> {
  return combineCodec(
    getRevokeInstructionDataEncoder(),
    getRevokeInstructionDataDecoder()
  );
}

export function revokeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string
>(
  accounts: {
    delegateRecord: TAccountDelegateRecord extends string
      ? Base58EncodedAddress<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    delegate: TAccountDelegate extends string
      ? Base58EncodedAddress<TAccountDelegate>
      : TAccountDelegate;
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    token?: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Base58EncodedAddress<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Base58EncodedAddress<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Base58EncodedAddress<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Base58EncodedAddress<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
  },
  args: RevokeInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.delegateRecord, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.delegate, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.token ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
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
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getRevokeInstructionDataEncoder().encode(args),
    programAddress,
  } as RevokeInstruction<
    TProgram,
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >;
}

// Input.
export type RevokeInput<
  TAccountDelegateRecord extends string,
  TAccountDelegate extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Delegate account key (pda of [mint id, delegate role, user id, authority id]) */
  delegateRecord: Base58EncodedAddress<TAccountDelegateRecord>;
  /** Owner of the delegated account */
  delegate: Base58EncodedAddress<TAccountDelegate>;
  /** Metadata account */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Master Edition account */
  masterEdition?: Base58EncodedAddress<TAccountMasterEdition>;
  /** Mint of metadata */
  mint: Base58EncodedAddress<TAccountMint>;
  /** Owned Token Account of mint */
  token?: Base58EncodedAddress<TAccountToken>;
  /** Authority to approve the delegation */
  authority?: Signer<TAccountAuthority>;
  /** Payer */
  payer?: Signer<TAccountPayer>;
  /** System Program */
  systemProgram?: Base58EncodedAddress<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Base58EncodedAddress<TAccountSysvarInstructions>;
  /** SPL Token Program */
  splTokenProgram?: Base58EncodedAddress<TAccountSplTokenProgram>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Base58EncodedAddress<TAccountAuthorizationRules>;
  revokeArgs: RevokeInstructionDataArgs['revokeArgs'];
};

export async function revoke<
  TReturn,
  TAccountDelegateRecord extends string,
  TAccountDelegate extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      RevokeInstruction<
        TProgram,
        TAccountDelegateRecord,
        TAccountDelegate,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountToken,
        TAccountAuthority,
        TAccountPayer,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
      TReturn
    >,
  input: RevokeInput<
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn>;
export async function revoke<
  TAccountDelegateRecord extends string,
  TAccountDelegate extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: RevokeInput<
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    RevokeInstruction<
      TProgram,
      TAccountDelegateRecord,
      TAccountDelegate,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountToken,
      TAccountAuthority,
      TAccountPayer,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function revoke<
  TAccountDelegateRecord extends string,
  TAccountDelegate extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RevokeInput<
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  WrappedInstruction<
    RevokeInstruction<
      TProgram,
      TAccountDelegateRecord,
      TAccountDelegate,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountToken,
      TAccountAuthority,
      TAccountPayer,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >
>;
export async function revoke<
  TReturn,
  TAccountDelegateRecord extends string,
  TAccountDelegate extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountSplTokenProgram extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | RevokeInput<
        TAccountDelegateRecord,
        TAccountDelegate,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountMint,
        TAccountToken,
        TAccountAuthority,
        TAccountPayer,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountSplTokenProgram,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
  rawInput?: RevokeInput<
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (rawInput === undefined ? rawContext : rawInput) as RevokeInput<
    TAccountDelegateRecord,
    TAccountDelegate,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountMint,
    TAccountToken,
    TAccountAuthority,
    TAccountPayer,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountSplTokenProgram,
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
  type AccountMetas = Parameters<
    typeof revokeInstruction<
      TProgram,
      TAccountDelegateRecord,
      TAccountDelegate,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountMint,
      TAccountToken,
      TAccountAuthority,
      TAccountPayer,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountSplTokenProgram,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: true },
    delegate: { value: input.delegate ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    token: { value: input.token ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
      isWritable: false,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
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
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.sysvarInstructions.value) {
    accounts.sysvarInstructions.value =
      'Sysvar1nstructions1111111111111111111111111' as Base58EncodedAddress<'Sysvar1nstructions1111111111111111111111111'>;
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
  const bytesCreatedOnChain = 0;

  return {
    instruction: revokeInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as RevokeInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain,
  };
}
