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
  getArrayDecoder,
  getArrayEncoder,
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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { ResolvedAccount, getAccountMetasWithSigners } from '../shared';

export type SetAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
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
      ...TRemainingAccounts,
    ]
  >;

export type SetAuthorityInstructionData = {
  discriminator: Array<number>;
  newAuthority: Address;
};

export type SetAuthorityInstructionDataArgs = { newAuthority: Address };

export function getSetAuthorityInstructionDataEncoder(): Encoder<SetAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['newAuthority', getAddressEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [133, 250, 37, 21, 110, 163, 26, 121],
    })
  );
}

export function getSetAuthorityInstructionDataDecoder(): Decoder<SetAuthorityInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['newAuthority', getAddressDecoder()],
  ]);
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

export type SetAuthorityInput<
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority: TransactionSigner<TAccountAuthority>;
  newAuthority: SetAuthorityInstructionDataArgs['newAuthority'];
};

export function getSetAuthorityInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: SetAuthorityInput<TAccountCandyMachine, TAccountAuthority>
): SetAuthorityInstruction<TProgram, TAccountCandyMachine, TAccountAuthority> {
  // Program address.
  const programAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;

  // Original accounts.
  type AccountKeys = 'candyMachine' | 'authority';
  const accounts: Record<AccountKeys, ResolvedAccount> = {
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

  const instruction = {
    accounts: [accountMetas.candyMachine, accountMetas.authority],
    programAddress,
    data: getSetAuthorityInstructionDataEncoder().encode(
      args as SetAuthorityInstructionDataArgs
    ),
  } as SetAuthorityInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority
  >;

  return instruction;
}

export type ParsedSetAuthorityInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    candyMachine: TAccountMetas[0];
    authority: TAccountMetas[1];
  };
  data: SetAuthorityInstructionData;
};

export function parseSetAuthorityInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetAuthorityInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      candyMachine: getNextAccount(),
      authority: getNextAccount(),
    },
    data: getSetAuthorityInstructionDataDecoder().decode(instruction.data),
  };
}
