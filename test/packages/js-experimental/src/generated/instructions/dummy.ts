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
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
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
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { resolveTokenOrAta } from '../../hooked';
import { findDelegateRecordPda } from '../pdas';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  expectSome,
  expectTransactionSigner,
  getAccountMetasWithSigners,
} from '../shared';
import { DelegateRole } from '../types';

export type DummyInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFoo extends string | IAccountMeta<string> = string,
  TAccountBar extends
    | string
    | IAccountMeta<string> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountTokenOrAtaProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEdition extends string
        ? WritableSignerAccount<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMintAuthority extends string
        ? WritableSignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountFoo extends string ? WritableAccount<TAccountFoo> : TAccountFoo,
      TAccountBar extends string
        ? ReadonlySignerAccount<TAccountBar>
        : TAccountBar,
      TAccountDelegate extends string
        ? ReadonlySignerAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountTokenOrAtaProgram extends string
        ? ReadonlyAccount<TAccountTokenOrAtaProgram>
        : TAccountTokenOrAtaProgram,
      ...TRemainingAccounts,
    ]
  >;

export type DummyInstructionWithSigners<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFoo extends string | IAccountMeta<string> = string,
  TAccountBar extends
    | string
    | IAccountMeta<string> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountTokenOrAtaProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEdition extends string
        ? WritableSignerAccount<TAccountEdition> &
            IAccountSignerMeta<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMintAuthority extends string
        ? WritableSignerAccount<TAccountMintAuthority> &
            IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountFoo extends string ? WritableAccount<TAccountFoo> : TAccountFoo,
      TAccountBar extends string
        ? ReadonlySignerAccount<TAccountBar> & IAccountSignerMeta<TAccountBar>
        : TAccountBar,
      TAccountDelegate extends string
        ? ReadonlySignerAccount<TAccountDelegate> &
            IAccountSignerMeta<TAccountDelegate>
        : TAccountDelegate,
      TAccountDelegateRecord extends string
        ? WritableAccount<TAccountDelegateRecord>
        : TAccountDelegateRecord,
      TAccountTokenOrAtaProgram extends string
        ? ReadonlyAccount<TAccountTokenOrAtaProgram>
        : TAccountTokenOrAtaProgram,
      ...TRemainingAccounts,
    ]
  >;

export type DummyInstructionData = { discriminator: Array<number> };

export type DummyInstructionDataArgs = {};

export function getDummyInstructionDataEncoder(): Encoder<DummyInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
    ]),
    (value) => ({
      ...value,
      discriminator: [167, 117, 211, 79, 251, 254, 47, 135],
    })
  );
}

export function getDummyInstructionDataDecoder(): Decoder<DummyInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
  ]);
}

export function getDummyInstructionDataCodec(): Codec<
  DummyInstructionDataArgs,
  DummyInstructionData
> {
  return combineCodec(
    getDummyInstructionDataEncoder(),
    getDummyInstructionDataDecoder()
  );
}

export type DummyInstructionExtraArgs = {
  identityArg: Address;
  proof?: Array<Address>;
};

export type DummyAsyncInput<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
> = {
  edition?: Address<TAccountEdition>;
  mint?: Address<TAccountMint>;
  updateAuthority: Address<TAccountUpdateAuthority>;
  mintAuthority?: Address<TAccountMintAuthority>;
  payer: Address<TAccountPayer>;
  foo?: Address<TAccountFoo>;
  bar?: Address<TAccountBar>;
  delegate?: Address<TAccountDelegate>;
  delegateRecord?: Address<TAccountDelegateRecord>;
  tokenOrAtaProgram?: Address<TAccountTokenOrAtaProgram>;
  identityArg?: DummyInstructionExtraArgs['identityArg'];
  proof?: DummyInstructionExtraArgs['proof'];
};

export type DummyAsyncInputWithSigners<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
> = {
  edition?: TransactionSigner<TAccountEdition>;
  mint?: Address<TAccountMint>;
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  mintAuthority?: TransactionSigner<TAccountMintAuthority>;
  payer: TransactionSigner<TAccountPayer>;
  foo?: Address<TAccountFoo>;
  bar?: TransactionSigner<TAccountBar>;
  delegate?: TransactionSigner<TAccountDelegate>;
  delegateRecord?: Address<TAccountDelegateRecord>;
  tokenOrAtaProgram?: Address<TAccountTokenOrAtaProgram>;
  identityArg?: DummyInstructionExtraArgs['identityArg'];
  proof?: DummyInstructionExtraArgs['proof'];
};

export async function getDummyInstructionAsync<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: DummyAsyncInputWithSigners<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
): Promise<
  DummyInstructionWithSigners<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
>;
export async function getDummyInstructionAsync<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: DummyAsyncInput<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
): Promise<
  DummyInstruction<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
>;
export async function getDummyInstructionAsync<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: DummyAsyncInput<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
): Promise<IInstruction> {
  // Program address.
  const programAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getDummyInstructionRaw<
      TProgram,
      TAccountEdition,
      TAccountMint,
      TAccountUpdateAuthority,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountFoo,
      TAccountBar,
      TAccountDelegate,
      TAccountDelegateRecord,
      TAccountTokenOrAtaProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    edition: { value: input.edition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    foo: { value: input.foo ?? null, isWritable: true },
    bar: { value: input.bar ?? null, isWritable: false },
    delegate: { value: input.delegate ?? null, isWritable: false },
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: true },
    tokenOrAtaProgram: {
      value: input.tokenOrAtaProgram ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolver scope.
  const resolverScope = { programAddress, accounts, args };

  // Resolve default values.
  if (!accounts.edition.value) {
    accounts.edition.value = expectSome(accounts.payer.value);
  }
  if (!accounts.mintAuthority.value) {
    accounts.mintAuthority.value = expectSome(accounts.updateAuthority.value);
  }
  if (!accounts.foo.value) {
    accounts.foo.value = expectTransactionSigner(accounts.bar.value).address;
  }
  if (!accounts.delegateRecord.value) {
    if (accounts.delegate.value) {
      accounts.delegateRecord.value = await findDelegateRecordPda({
        role: DelegateRole.Collection,
      });
    }
  }
  if (!accounts.tokenOrAtaProgram.value) {
    if (resolveTokenOrAta(resolverScope)) {
      accounts.tokenOrAtaProgram.value =
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
    } else {
      accounts.tokenOrAtaProgram.value =
        'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
    }
  }
  if (!args.proof) {
    args.proof = [];
  }

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [
    ...args.proof.map((address) => ({ address, role: AccountRole.READONLY })),
  ];

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getDummyInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress,
    remainingAccounts
  );

  return instruction;
}

export type DummyInput<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
> = {
  edition?: Address<TAccountEdition>;
  mint?: Address<TAccountMint>;
  updateAuthority: Address<TAccountUpdateAuthority>;
  mintAuthority?: Address<TAccountMintAuthority>;
  payer: Address<TAccountPayer>;
  foo?: Address<TAccountFoo>;
  bar?: Address<TAccountBar>;
  delegate?: Address<TAccountDelegate>;
  delegateRecord?: Address<TAccountDelegateRecord>;
  tokenOrAtaProgram?: Address<TAccountTokenOrAtaProgram>;
  identityArg?: DummyInstructionExtraArgs['identityArg'];
  proof?: DummyInstructionExtraArgs['proof'];
};

export type DummyInputWithSigners<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
> = {
  edition?: TransactionSigner<TAccountEdition>;
  mint?: Address<TAccountMint>;
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  mintAuthority?: TransactionSigner<TAccountMintAuthority>;
  payer: TransactionSigner<TAccountPayer>;
  foo?: Address<TAccountFoo>;
  bar?: TransactionSigner<TAccountBar>;
  delegate?: TransactionSigner<TAccountDelegate>;
  delegateRecord?: Address<TAccountDelegateRecord>;
  tokenOrAtaProgram?: Address<TAccountTokenOrAtaProgram>;
  identityArg?: DummyInstructionExtraArgs['identityArg'];
  proof?: DummyInstructionExtraArgs['proof'];
};

export function getDummyInstruction<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: DummyInputWithSigners<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
): DummyInstructionWithSigners<
  TProgram,
  TAccountEdition,
  TAccountMint,
  TAccountUpdateAuthority,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountFoo,
  TAccountBar,
  TAccountDelegate,
  TAccountDelegateRecord,
  TAccountTokenOrAtaProgram
>;
export function getDummyInstruction<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: DummyInput<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
): DummyInstruction<
  TProgram,
  TAccountEdition,
  TAccountMint,
  TAccountUpdateAuthority,
  TAccountMintAuthority,
  TAccountPayer,
  TAccountFoo,
  TAccountBar,
  TAccountDelegate,
  TAccountDelegateRecord,
  TAccountTokenOrAtaProgram
>;
export function getDummyInstruction<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountFoo extends string,
  TAccountBar extends string,
  TAccountDelegate extends string,
  TAccountDelegateRecord extends string,
  TAccountTokenOrAtaProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: DummyInput<
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram
  >
): IInstruction {
  // Program address.
  const programAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getDummyInstructionRaw<
      TProgram,
      TAccountEdition,
      TAccountMint,
      TAccountUpdateAuthority,
      TAccountMintAuthority,
      TAccountPayer,
      TAccountFoo,
      TAccountBar,
      TAccountDelegate,
      TAccountDelegateRecord,
      TAccountTokenOrAtaProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    edition: { value: input.edition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    foo: { value: input.foo ?? null, isWritable: true },
    bar: { value: input.bar ?? null, isWritable: false },
    delegate: { value: input.delegate ?? null, isWritable: false },
    delegateRecord: { value: input.delegateRecord ?? null, isWritable: true },
    tokenOrAtaProgram: {
      value: input.tokenOrAtaProgram ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolver scope.
  const resolverScope = { programAddress, accounts, args };

  // Resolve default values.
  if (!accounts.edition.value) {
    accounts.edition.value = expectSome(accounts.payer.value);
  }
  if (!accounts.mintAuthority.value) {
    accounts.mintAuthority.value = expectSome(accounts.updateAuthority.value);
  }
  if (!accounts.foo.value) {
    accounts.foo.value = expectTransactionSigner(accounts.bar.value).address;
  }
  if (!accounts.tokenOrAtaProgram.value) {
    if (resolveTokenOrAta(resolverScope)) {
      accounts.tokenOrAtaProgram.value =
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
    } else {
      accounts.tokenOrAtaProgram.value =
        'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
    }
  }
  if (!args.proof) {
    args.proof = [];
  }

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [
    ...args.proof.map((address) => ({ address, role: AccountRole.READONLY })),
  ];

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getDummyInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress,
    remainingAccounts
  );

  return instruction;
}

export function getDummyInstructionRaw<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountFoo extends string | IAccountMeta<string> = string,
  TAccountBar extends
    | string
    | IAccountMeta<string> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountDelegateRecord extends string | IAccountMeta<string> = string,
  TAccountTokenOrAtaProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
>(
  accounts: {
    edition: TAccountEdition extends string
      ? Address<TAccountEdition>
      : TAccountEdition;
    mint?: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    mintAuthority: TAccountMintAuthority extends string
      ? Address<TAccountMintAuthority>
      : TAccountMintAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    foo: TAccountFoo extends string ? Address<TAccountFoo> : TAccountFoo;
    bar?: TAccountBar extends string ? Address<TAccountBar> : TAccountBar;
    delegate?: TAccountDelegate extends string
      ? Address<TAccountDelegate>
      : TAccountDelegate;
    delegateRecord?: TAccountDelegateRecord extends string
      ? Address<TAccountDelegateRecord>
      : TAccountDelegateRecord;
    tokenOrAtaProgram: TAccountTokenOrAtaProgram extends string
      ? Address<TAccountTokenOrAtaProgram>
      : TAccountTokenOrAtaProgram;
  },
  programAddress: Address<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.edition, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(
        accounts.mint ?? {
          address:
            'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.foo, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.bar ?? {
          address:
            'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.delegate ?? {
          address:
            'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.delegateRecord ?? {
          address:
            'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.tokenOrAtaProgram, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getDummyInstructionDataEncoder().encode({}),
    programAddress,
  } as DummyInstruction<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountUpdateAuthority,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountFoo,
    TAccountBar,
    TAccountDelegate,
    TAccountDelegateRecord,
    TAccountTokenOrAtaProgram,
    TRemainingAccounts
  >;
}

export type ParsedDummyInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    edition: TAccountMetas[0];
    mint?: TAccountMetas[1] | undefined;
    updateAuthority: TAccountMetas[2];
    mintAuthority: TAccountMetas[3];
    payer: TAccountMetas[4];
    foo: TAccountMetas[5];
    bar?: TAccountMetas[6] | undefined;
    delegate?: TAccountMetas[7] | undefined;
    delegateRecord?: TAccountMetas[8] | undefined;
    tokenOrAtaProgram: TAccountMetas[9];
  };
  data: DummyInstructionData;
};

export function parseDummyInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedDummyInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 10) {
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
    return accountMeta.address ===
      'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      edition: getNextAccount(),
      mint: getNextOptionalAccount(),
      updateAuthority: getNextAccount(),
      mintAuthority: getNextAccount(),
      payer: getNextAccount(),
      foo: getNextAccount(),
      bar: getNextOptionalAccount(),
      delegate: getNextOptionalAccount(),
      delegateRecord: getNextOptionalAccount(),
      tokenOrAtaProgram: getNextAccount(),
    },
    data: getDummyInstructionDataDecoder().decode(instruction.data),
  };
}
