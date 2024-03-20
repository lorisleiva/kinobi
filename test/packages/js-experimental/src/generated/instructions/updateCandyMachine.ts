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
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { ResolvedAccount, getAccountMetasWithSigners } from '../shared';
import {
  CandyMachineData,
  CandyMachineDataArgs,
  getCandyMachineDataDecoder,
  getCandyMachineDataEncoder,
} from '../types';

export type UpdateCandyMachineInstruction<
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

export type UpdateCandyMachineInstructionData = {
  discriminator: Array<number>;
  data: CandyMachineData;
};

export type UpdateCandyMachineInstructionDataArgs = {
  data: CandyMachineDataArgs;
};

export function getUpdateCandyMachineInstructionDataEncoder(): Encoder<UpdateCandyMachineInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['data', getCandyMachineDataEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [219, 200, 88, 176, 158, 63, 253, 127],
    })
  );
}

export function getUpdateCandyMachineInstructionDataDecoder(): Decoder<UpdateCandyMachineInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['data', getCandyMachineDataDecoder()],
  ]);
}

export function getUpdateCandyMachineInstructionDataCodec(): Codec<
  UpdateCandyMachineInstructionDataArgs,
  UpdateCandyMachineInstructionData
> {
  return combineCodec(
    getUpdateCandyMachineInstructionDataEncoder(),
    getUpdateCandyMachineInstructionDataDecoder()
  );
}

export type UpdateCandyMachineInput<
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority: TransactionSigner<TAccountAuthority>;
  data: UpdateCandyMachineInstructionDataArgs['data'];
};

export function getUpdateCandyMachineInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: UpdateCandyMachineInput<TAccountCandyMachine, TAccountAuthority>
): UpdateCandyMachineInstruction<
  TProgram,
  TAccountCandyMachine,
  TAccountAuthority
> {
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
    data: getUpdateCandyMachineInstructionDataEncoder().encode(args),
  } as UpdateCandyMachineInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthority
  >;

  return instruction;
}

export type ParsedUpdateCandyMachineInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    candyMachine: TAccountMetas[0];
    authority: TAccountMetas[1];
  };
  data: UpdateCandyMachineInstructionData;
};

export function parseUpdateCandyMachineInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateCandyMachineInstruction<TProgram, TAccountMetas> {
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
    data: getUpdateCandyMachineInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
