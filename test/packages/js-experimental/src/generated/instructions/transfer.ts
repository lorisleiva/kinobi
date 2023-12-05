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
import { resolveMasterEditionFromTokenStandard } from '../../hooked';
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
  TokenStandard,
  TokenStandardArgs,
  TransferArgs,
  TransferArgsArgs,
  getTransferArgsDecoder,
  getTransferArgsEncoder,
} from '../types';

// Output.
export type TransferInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountTokenOwner extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountDestinationOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountTokenOwner extends string
        ? ReadonlyAccount<TAccountTokenOwner>
        : TAccountTokenOwner,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountDestinationOwner extends string
        ? ReadonlyAccount<TAccountDestinationOwner>
        : TAccountDestinationOwner,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountSplAtaProgram extends string
        ? ReadonlyAccount<TAccountSplAtaProgram>
        : TAccountSplAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type TransferInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountTokenOwner extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountDestinationOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountTokenOwner extends string
        ? ReadonlyAccount<TAccountTokenOwner>
        : TAccountTokenOwner,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountDestinationOwner extends string
        ? ReadonlyAccount<TAccountDestinationOwner>
        : TAccountDestinationOwner,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      TAccountSplAtaProgram extends string
        ? ReadonlyAccount<TAccountSplAtaProgram>
        : TAccountSplAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountSysvarInstructions extends string
        ? ReadonlyAccount<TAccountSysvarInstructions>
        : TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules extends string
        ? ReadonlyAccount<TAccountAuthorizationRules>
        : TAccountAuthorizationRules,
      ...TRemainingAccounts
    ]
  >;

export type TransferInstructionData = {
  discriminator: number;
  transferArgs: TransferArgs;
};

export type TransferInstructionDataArgs = { transferArgs: TransferArgsArgs };

export function getTransferInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; transferArgs: TransferArgsArgs }>(
      [
        ['discriminator', getU8Encoder()],
        ['transferArgs', getTransferArgsEncoder()],
      ]
    ),
    (value) => ({ ...value, discriminator: 46 })
  ) satisfies Encoder<TransferInstructionDataArgs>;
}

export function getTransferInstructionDataDecoder() {
  return getStructDecoder<TransferInstructionData>([
    ['discriminator', getU8Decoder()],
    ['transferArgs', getTransferArgsDecoder()],
  ]) satisfies Decoder<TransferInstructionData>;
}

export function getTransferInstructionDataCodec(): Codec<
  TransferInstructionDataArgs,
  TransferInstructionData
> {
  return combineCodec(
    getTransferInstructionDataEncoder(),
    getTransferInstructionDataDecoder()
  );
}

export type TransferInstructionExtraArgs = { tokenStandard: TokenStandardArgs };

export function transferInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountTokenOwner extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountDestinationOwner extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends
    | string
    | IAccountMeta<string> = 'Sysvar1nstructions1111111111111111111111111',
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = string,
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    authority: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
    delegateRecord?: TAccountDelegateRecord extends string
      ? Address<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    token: TAccountToken extends string
      ? Address<TAccountToken>
      : TAccountToken;
    tokenOwner: TAccountTokenOwner extends string
      ? Address<TAccountTokenOwner>
      : TAccountTokenOwner;
    destination: TAccountDestination extends string
      ? Address<TAccountDestination>
      : TAccountDestination;
    destinationOwner: TAccountDestinationOwner extends string
      ? Address<TAccountDestinationOwner>
      : TAccountDestinationOwner;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    masterEdition?: TAccountMasterEdition extends string
      ? Address<TAccountMasterEdition>
      : TAccountMasterEdition;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Address<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
    splAtaProgram?: TAccountSplAtaProgram extends string
      ? Address<TAccountSplAtaProgram>
      : TAccountSplAtaProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    sysvarInstructions?: TAccountSysvarInstructions extends string
      ? Address<TAccountSysvarInstructions>
      : TAccountSysvarInstructions;
    authorizationRulesProgram?: TAccountAuthorizationRulesProgram extends string
      ? Address<TAccountAuthorizationRulesProgram>
      : TAccountAuthorizationRulesProgram;
    authorizationRules?: TAccountAuthorizationRules extends string
      ? Address<TAccountAuthorizationRules>
      : TAccountAuthorizationRules;
  },
  args: TransferInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.authority, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.delegateRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.token, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenOwner, AccountRole.READONLY),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.destinationOwner, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.masterEdition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
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
        accounts.splAtaProgram ?? {
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
        accounts.sysvarInstructions ??
          'Sysvar1nstructions1111111111111111111111111',
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
      accountMetaWithDefault(
        accounts.authorizationRules ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getTransferInstructionDataEncoder().encode(args),
    programAddress,
  } as TransferInstruction<
    TProgram,
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules,
    TRemainingAccounts
  >;
}

// Input.
export type TransferInput<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Transfer authority (token or delegate owner) */
  authority?: Address<TAccountAuthority>;
  /** Delegate record PDA */
  delegateRecord?: Address<TAccountDelegateRecord>;
  /** Token account */
  token: Address<TAccountToken>;
  /** Token account owner */
  tokenOwner: Address<TAccountTokenOwner>;
  /** Destination token account */
  destination: Address<TAccountDestination>;
  /** Destination token account owner */
  destinationOwner: Address<TAccountDestinationOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Master Edition of token asset */
  masterEdition?: Address<TAccountMasterEdition>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** SPL Associated Token Account program */
  splAtaProgram?: Address<TAccountSplAtaProgram>;
  /** System Program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  transferArgs: TransferInstructionDataArgs['transferArgs'];
  tokenStandard?: TransferInstructionExtraArgs['tokenStandard'];
};

// Input.
export type TransferInputWithSigners<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Transfer authority (token or delegate owner) */
  authority?: TransactionSigner<TAccountAuthority>;
  /** Delegate record PDA */
  delegateRecord?: Address<TAccountDelegateRecord>;
  /** Token account */
  token: Address<TAccountToken>;
  /** Token account owner */
  tokenOwner: Address<TAccountTokenOwner>;
  /** Destination token account */
  destination: Address<TAccountDestination>;
  /** Destination token account owner */
  destinationOwner: Address<TAccountDestinationOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Master Edition of token asset */
  masterEdition?: Address<TAccountMasterEdition>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** SPL Associated Token Account program */
  splAtaProgram?: Address<TAccountSplAtaProgram>;
  /** System Program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  transferArgs: TransferInstructionDataArgs['transferArgs'];
  tokenStandard?: TransferInstructionExtraArgs['tokenStandard'];
};

// Input.
export type TransferInputAsync<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Transfer authority (token or delegate owner) */
  authority?: Address<TAccountAuthority>;
  /** Delegate record PDA */
  delegateRecord?: Address<TAccountDelegateRecord>;
  /** Token account */
  token: Address<TAccountToken>;
  /** Token account owner */
  tokenOwner: Address<TAccountTokenOwner>;
  /** Destination token account */
  destination: Address<TAccountDestination>;
  /** Destination token account owner */
  destinationOwner: Address<TAccountDestinationOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Master Edition of token asset */
  masterEdition?: Address<TAccountMasterEdition>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** SPL Associated Token Account program */
  splAtaProgram?: Address<TAccountSplAtaProgram>;
  /** System Program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  transferArgs: TransferInstructionDataArgs['transferArgs'];
  tokenStandard?: TransferInstructionExtraArgs['tokenStandard'];
};

// Input.
export type TransferInputAsyncWithSigners<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string
> = {
  /** Transfer authority (token or delegate owner) */
  authority?: TransactionSigner<TAccountAuthority>;
  /** Delegate record PDA */
  delegateRecord?: Address<TAccountDelegateRecord>;
  /** Token account */
  token: Address<TAccountToken>;
  /** Token account owner */
  tokenOwner: Address<TAccountTokenOwner>;
  /** Destination token account */
  destination: Address<TAccountDestination>;
  /** Destination token account owner */
  destinationOwner: Address<TAccountDestinationOwner>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Master Edition of token asset */
  masterEdition?: Address<TAccountMasterEdition>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** SPL Associated Token Account program */
  splAtaProgram?: Address<TAccountSplAtaProgram>;
  /** System Program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  transferArgs: TransferInstructionDataArgs['transferArgs'];
  tokenStandard?: TransferInstructionExtraArgs['tokenStandard'];
};

export async function transfer<
  TReturn,
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
    CustomGeneratedInstruction<
      TransferInstruction<
        TProgram,
        WritableSignerAccount<TAccountAuthority> &
          IAccountSignerMeta<TAccountAuthority>,
        TAccountDelegateRecord,
        TAccountToken,
        TAccountTokenOwner,
        TAccountDestination,
        TAccountDestinationOwner,
        TAccountMint,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
      TReturn
    >,
  input: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<TReturn>;
export async function transfer<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>,
  input: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  TransferInstruction<
    TProgram,
    WritableSignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function transfer<
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  TransferInstruction<
    TProgram,
    WritableSignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function transfer<
  TReturn,
  TAccountAuthority extends string,
  TAccountDelegateRecord extends string,
  TAccountToken extends string,
  TAccountTokenOwner extends string,
  TAccountDestination extends string,
  TAccountDestinationOwner extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountMasterEdition extends string,
  TAccountSplTokenProgram extends string,
  TAccountSplAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountSysvarInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountAuthorizationRules extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>
    | (Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | TransferInput<
        TAccountAuthority,
        TAccountDelegateRecord,
        TAccountToken,
        TAccountTokenOwner,
        TAccountDestination,
        TAccountDestinationOwner,
        TAccountMint,
        TAccountMetadata,
        TAccountMasterEdition,
        TAccountSplTokenProgram,
        TAccountSplAtaProgram,
        TAccountSystemProgram,
        TAccountSysvarInstructions,
        TAccountAuthorizationRulesProgram,
        TAccountAuthorizationRules
      >,
  rawInput?: TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
  >
): Promise<
  | TReturn
  | (IInstruction &
      IInstructionWithSigners &
      IInstructionWithBytesCreatedOnChain)
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>
    | (Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as TransferInput<
    TAccountAuthority,
    TAccountDelegateRecord,
    TAccountToken,
    TAccountTokenOwner,
    TAccountDestination,
    TAccountDestinationOwner,
    TAccountMint,
    TAccountMetadata,
    TAccountMasterEdition,
    TAccountSplTokenProgram,
    TAccountSplAtaProgram,
    TAccountSystemProgram,
    TAccountSysvarInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountAuthorizationRules
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
    typeof transferInstruction<
      TProgram,
      TAccountAuthority,
      TAccountDelegateRecord,
      TAccountToken,
      TAccountTokenOwner,
      TAccountDestination,
      TAccountDestinationOwner,
      TAccountMint,
      TAccountMetadata,
      TAccountMasterEdition,
      TAccountSplTokenProgram,
      TAccountSplAtaProgram,
      TAccountSystemProgram,
      TAccountSysvarInstructions,
      TAccountAuthorizationRulesProgram,
      TAccountAuthorizationRules
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    authority: { value: input.authority ?? null, isWritable: true },
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: true },
    token: { value: input.token ?? null, isWritable: true },
    tokenOwner: { value: input.tokenOwner ?? null, isWritable: false },
    destination: { value: input.destination ?? null, isWritable: true },
    destinationOwner: {
      value: input.destinationOwner ?? null,
      isWritable: false,
    },
    mint: { value: input.mint ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: true },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
    splAtaProgram: { value: input.splAtaProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    sysvarInstructions: {
      value: input.sysvarInstructions ?? null,
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
  if (!args.tokenStandard) {
    args.tokenStandard = TokenStandard.NonFungible;
  }
  if (!accounts.masterEdition.value) {
    accounts.masterEdition = {
      ...accounts.masterEdition,
      ...(await resolveMasterEditionFromTokenStandard(
        context,
        accounts,
        args,
        programAddress,
        false
      )),
    };
  }
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.splTokenProgram.isWritable = false;
  }
  if (!accounts.splAtaProgram.value) {
    accounts.splAtaProgram.value = await getProgramAddress(
      context,
      'splAssociatedToken',
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
    );
    accounts.splAtaProgram.isWritable = false;
  }
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
      'Sysvar1nstructions1111111111111111111111111' as Address<'Sysvar1nstructions1111111111111111111111111'>;
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
    ...transferInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as TransferInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
