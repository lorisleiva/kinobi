/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
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
export type SetAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
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
      ...TRemainingAccounts
    ]
  >;

// Output.
export type SetAuthorityInstructionWithSigners<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
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
      ...TRemainingAccounts
    ]
  >;

export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: Address;
};

export type SetAuthorityInstructionDataArgs = { newAuthority: Address };

export function getSetAuthorityInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: Array<number>; newAuthority: Address }>([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['newAuthority', getAddressEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
    })
  ) satisfies Encoder<SetAuthorityInstructionDataArgs>;
}

export function getSetAuthorityInstructionDataDecoder() {
  return getStructDecoder<SetAuthorityInstructionData>([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['newAuthority', getAddressDecoder()],
  ]) satisfies Decoder<SetAuthorityInstructionData>;
}

export function getSetAuthorityInstructionDataCodec(): Codec<
  SetAuthorityInstructionDataArgs,
  SetAuthorityInstructionData
> {
  return combineCodec(
    getSetAuthorityInstructionDataEncoder(),
    getSetAuthorityInstructionDataDecoder()
  );
}

export function setAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    candyMachine: TAccountCandyMachine extends string
      ? Address<TAccountCandyMachine>
      : TAccountCandyMachine;
    authority: TAccountAuthority extends string
      ? Address<TAccountAuthority>
      : TAccountAuthority;
  },
  args: SetAuthorityInstructionDataArgs,
  programAddress: Address<TProgram> = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.candyMachine, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getSetAuthorityInstructionDataEncoder().encode(args),
    programAddress,
  } as SetAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority,
    TRemainingAccounts
  >;
}

// Input.
export type SetAuthorityInput<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority?: TransactionSigner<TAccountAuthority>;
  newAuthority: SetAuthorityInstructionDataArgs['newAuthority'];
};

export async function setAuthority<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetAuthorityInstruction<
        TProgram,
        TAccountCandyMachine,
        ReadonlySignerAccount<TAccountAuthority> &
          IAccountSignerMeta<TAccountAuthority>
      >,
      TReturn
    >,
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<TReturn>;
export async function setAuthority<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<
  SetAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    ReadonlySignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function setAuthority<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): Promise<
  SetAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    ReadonlySignerAccount<TAccountAuthority> &
      IAccountSignerMeta<TAccountAuthority>
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function setAuthority<
  TReturn,
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>,
  rawInput?: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
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
  ) as SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>;

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
    typeof setAuthorityInstruction<
      TProgram,
      TAccountCandyMachine,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

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
    ...setAuthorityInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as SetAuthorityInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
