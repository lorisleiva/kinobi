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
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { ResolvedAccount, getAccountMetasWithSigners } from '../shared';
import {
  DelegateArgs,
  DelegateArgsArgs,
  getDelegateArgsDecoder,
  getDelegateArgsEncoder,
} from '../types';

export type DelegateInstruction<
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
  TAccountAuthorizationRules extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
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
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
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
        : TAccountAuthorizationRules,
      ...TRemainingAccounts,
    ]
  >;

export type DelegateInstructionData = {
  discriminator: number;
  delegateArgs: DelegateArgs;
};

export type DelegateInstructionDataArgs = { delegateArgs: DelegateArgsArgs };

export function getDelegateInstructionDataEncoder(): Encoder<DelegateInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['delegateArgs', getDelegateArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 48 })
  );
}

export function getDelegateInstructionDataDecoder(): Decoder<DelegateInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['delegateArgs', getDelegateArgsDecoder()],
  ]);
}

export function getDelegateInstructionDataCodec(): Codec<
  DelegateInstructionDataArgs,
  DelegateInstructionData
> {
  return combineCodec(
    getDelegateInstructionDataEncoder(),
    getDelegateInstructionDataDecoder()
  );
}

export type DelegateInput<
  TAccountDelegateRecord extends string = string,
  TAccountDelegate extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountToken extends string = string,
  TAccountAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountSysvarInstructions extends string = string,
  TAccountSplTokenProgram extends string = string,
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string,
> = {
  /** Delegate account key (pda of [mint id, delegate role, user id, authority id]) */
  delegateRecord: Address<TAccountDelegateRecord>;
  /** Owner of the delegated account */
  delegate: Address<TAccountDelegate>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Master Edition account */
  masterEdition?: Address<TAccountMasterEdition>;
  /** Mint of metadata */
  mint: Address<TAccountMint>;
  /** Owned Token Account of mint */
  token?: Address<TAccountToken>;
  /** Authority to approve the delegation */
  authority: TransactionSigner<TAccountAuthority>;
  /** Payer */
  payer: TransactionSigner<TAccountPayer>;
  /** System Program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Instructions sysvar account */
  sysvarInstructions?: Address<TAccountSysvarInstructions>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  /** Token Authorization Rules account */
  authorizationRules?: Address<TAccountAuthorizationRules>;
  delegateArgs: DelegateInstructionDataArgs['delegateArgs'];
};

export function getDelegateInstruction<
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
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: DelegateInput<
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
): DelegateInstruction<
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
> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountKeys =
    | 'delegateRecord'
    | 'delegate'
    | 'metadata'
    | 'masterEdition'
    | 'mint'
    | 'token'
    | 'authority'
    | 'payer'
    | 'systemProgram'
    | 'sysvarInstructions'
    | 'splTokenProgram'
    | 'authorizationRulesProgram'
    | 'authorizationRules';
  const accounts: Record<AccountKeys, ResolvedAccount> = {
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
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
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

  const instruction = {
    accounts: [
      accountMetas.delegateRecord,
      accountMetas.delegate,
      accountMetas.metadata,
      accountMetas.masterEdition,
      accountMetas.mint,
      accountMetas.token,
      accountMetas.authority,
      accountMetas.payer,
      accountMetas.systemProgram,
      accountMetas.sysvarInstructions,
      accountMetas.splTokenProgram,
      accountMetas.authorizationRulesProgram,
      accountMetas.authorizationRules,
    ],
    programAddress,
    data: getDelegateInstructionDataEncoder().encode(args),
  } as DelegateInstruction<
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

  return instruction;
}

export type ParsedDelegateInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Delegate account key (pda of [mint id, delegate role, user id, authority id]) */
    delegateRecord: TAccountMetas[0];
    /** Owner of the delegated account */
    delegate: TAccountMetas[1];
    /** Metadata account */
    metadata: TAccountMetas[2];
    /** Master Edition account */
    masterEdition?: TAccountMetas[3] | undefined;
    /** Mint of metadata */
    mint: TAccountMetas[4];
    /** Owned Token Account of mint */
    token?: TAccountMetas[5] | undefined;
    /** Authority to approve the delegation */
    authority: TAccountMetas[6];
    /** Payer */
    payer: TAccountMetas[7];
    /** System Program */
    systemProgram: TAccountMetas[8];
    /** Instructions sysvar account */
    sysvarInstructions: TAccountMetas[9];
    /** SPL Token Program */
    splTokenProgram?: TAccountMetas[10] | undefined;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: TAccountMetas[11] | undefined;
    /** Token Authorization Rules account */
    authorizationRules?: TAccountMetas[12] | undefined;
  };
  data: DelegateInstructionData;
};

export function parseDelegateInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDelegateInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 13) {
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
    return accountMeta.address === 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      delegateRecord: getNextAccount(),
      delegate: getNextAccount(),
      metadata: getNextAccount(),
      masterEdition: getNextOptionalAccount(),
      mint: getNextAccount(),
      token: getNextOptionalAccount(),
      authority: getNextAccount(),
      payer: getNextAccount(),
      systemProgram: getNextAccount(),
      sysvarInstructions: getNextAccount(),
      splTokenProgram: getNextOptionalAccount(),
      authorizationRulesProgram: getNextOptionalAccount(),
      authorizationRules: getNextOptionalAccount(),
    },
    data: getDelegateInstructionDataDecoder().decode(instruction.data),
  };
}
