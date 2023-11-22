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
  getArrayDecoder,
  getArrayEncoder,
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
import { IInstructionWithSigners, TransactionSigner } from '@solana/signers';
import { resolveTokenOrAta } from '../../hooked';
import { findDelegateRecordPda } from '../accounts';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  accountMetaWithDefault,
  expectSome,
  expectTransactionSigner,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import { DelegateRole } from '../types';

// Output.
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
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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
      ...TRemainingAccounts
    ]
  >;

export type DummyInstructionData = { discriminator: Array<number> };

export type DummyInstructionDataArgs = {};

export function getDummyInstructionDataEncoder(): Encoder<DummyInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: Array<number> }>(
      [['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })]],
      { description: 'DummyInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [167, 117, 211, 79, 251, 254, 47, 135],
    })
  ) as Encoder<DummyInstructionDataArgs>;
}

export function getDummyInstructionDataDecoder(): Decoder<DummyInstructionData> {
  return getStructDecoder<DummyInstructionData>(
    [['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })]],
    { description: 'DummyInstructionData' }
  ) as Decoder<DummyInstructionData>;
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
  proof: Array<Address>;
};

export function dummyInstruction<
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
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
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

// Input.
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
  TAccountTokenOrAtaProgram extends string
> = {
  edition?: TransactionSigner<TAccountEdition>;
  mint?: Address<TAccountMint>;
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  mintAuthority?: TransactionSigner<TAccountMintAuthority>;
  payer?: TransactionSigner<TAccountPayer>;
  foo?: Address<TAccountFoo>;
  bar?: TransactionSigner<TAccountBar>;
  delegate?: TransactionSigner<TAccountDelegate>;
  delegateRecord?: Address<TAccountDelegateRecord>;
  tokenOrAtaProgram?: Address<TAccountTokenOrAtaProgram>;
  identityArg?: DummyInstructionExtraArgs['identityArg'];
  proof?: DummyInstructionExtraArgs['proof'];
};

export async function dummy<
  TReturn,
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
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
    CustomGeneratedInstruction<
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
      >,
      TReturn
    >,
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
): Promise<TReturn>;
export async function dummy<
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
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>,
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
  > &
    IInstructionWithSigners
>;
export async function dummy<
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
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
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
  > &
    IInstructionWithSigners
>;
export async function dummy<
  TReturn,
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
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>
    | (Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | DummyInput<
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
      >,
  rawInput?: DummyInput<
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
): Promise<TReturn | (IInstruction & IInstructionWithSigners)> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'>
    | (Pick<Context, 'getProgramAddress' | 'getProgramDerivedAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (rawInput === undefined ? rawContext : rawInput) as DummyInput<
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

  // Program address.
  const defaultProgramAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplCandyMachineCore',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof dummyInstruction<
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
      accounts.delegateRecord.value = await findDelegateRecordPda(context, {
        role: DelegateRole.Collection,
      });
    }
  }
  if (!args.proof) {
    args.proof = [];
  }
  if (!accounts.tokenOrAtaProgram.value) {
    if (
      await resolveTokenOrAta(context, accounts, args, programAddress, false)
    ) {
      accounts.tokenOrAtaProgram.value = await getProgramAddress(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      );
      accounts.tokenOrAtaProgram.isWritable = false;
    } else {
      accounts.tokenOrAtaProgram.value = await getProgramAddress(
        context,
        'splAssociatedToken',
        'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
      );
      accounts.tokenOrAtaProgram.isWritable = false;
    }
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = args.proof.map((address) => ({
    address,
    role: AccountRole.READONLY,
  }));

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Instruction.
  const instruction = {
    ...dummyInstruction(
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
