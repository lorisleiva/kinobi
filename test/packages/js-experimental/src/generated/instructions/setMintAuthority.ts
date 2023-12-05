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
  ReadonlySignerAccount,
  WritableAccount,
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
} from '../shared';

// Output.
export type SetMintAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type SetMintAuthorityInstructionWithSigners<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority> &
            IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      ...TRemainingAccounts
    ]
  >;

export type SetMintAuthorityInstructionData = { discriminator: Array<number> };

export type SetMintAuthorityInstructionDataArgs = {};

export function getSetMintAuthorityInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: Array<number> }>([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
    ]),
    (value) => ({
      ...value,
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
    })
  ) satisfies Encoder<SetMintAuthorityInstructionDataArgs>;
}

export function getSetMintAuthorityInstructionDataDecoder() {
  return getStructDecoder<SetMintAuthorityInstructionData>([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
  ]) satisfies Decoder<SetMintAuthorityInstructionData>;
}

export function getSetMintAuthorityInstructionDataCodec(): Codec<
  SetMintAuthorityInstructionDataArgs,
  SetMintAuthorityInstructionData
> {
  return combineCodec(
    getSetMintAuthorityInstructionDataEncoder(),
    getSetMintAuthorityInstructionDataDecoder()
  );
}

export function setMintAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Address<TAccountCandyMachine>
      : TAccountCandyMachine;
    authority: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
    mintAuthority: TAccountMintAuthority extends string
      ? Address<TAccountMintAuthority>
      : TAccountMintAuthority;
  },
  programAddress: Address<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getSetMintAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as SetMintAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority,
    TRemainingAccounts
  >;
}

// Input.
export type SetMintAuthorityInput<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority?: Address<TAccountAuthority>;
  mintAuthority: Address<TAccountMintAuthority>;
};

// Input.
export type SetMintAuthorityInputWithSigners<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority?: TransactionSigner<TAccountAuthority>;
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
};

// Input.
export type SetMintAuthorityInputAsync<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority?: Address<TAccountAuthority>;
  mintAuthority: Address<TAccountMintAuthority>;
};

// Input.
export type SetMintAuthorityInputAsyncWithSigners<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority?: TransactionSigner<TAccountAuthority>;
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
};

export async function setMintAuthority<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetMintAuthorityInstruction<
        TProgram,
        TAccountCandyMachine,
        ReadonlySignerAccount<TAccountAuthority> &
          IAccountSignerMeta<TAccountAuthority>,
        ReadonlySignerAccount<TAccountMintAuthority> &
          IAccountSignerMeta<TAccountMintAuthority>
      >,
      TReturn
    >,
  input: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<TReturn>;
export async function setMintAuthority<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<
  SetMintAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    ReadonlySignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>,
    ReadonlySignerAccount<TAccountMintAuthority> &
      IAccountSignerMeta<TAccountMintAuthority>
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function setMintAuthority<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
  >
): Promise<
  SetMintAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    ReadonlySignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>,
    ReadonlySignerAccount<TAccountMintAuthority> &
      IAccountSignerMeta<TAccountMintAuthority>
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function setMintAuthority<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | SetMintAuthorityInput<
        TAccountCandyMachine,
        TAccountAuthority,
        TAccountMintAuthority
      >,
  rawInput?: SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
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
  ) as SetMintAuthorityInput<
    TAccountCandyMachine,
    TAccountAuthority,
    TAccountMintAuthority
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
    typeof setMintAuthorityInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority,
      TAccountMintAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
  };

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
    ...setMintAuthorityInstruction(
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
