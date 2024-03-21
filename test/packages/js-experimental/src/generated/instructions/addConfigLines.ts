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
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
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
import { MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  ConfigLine,
  ConfigLineArgs,
  getConfigLineDecoder,
  getConfigLineEncoder,
} from '../types';

export type AddConfigLinesInstruction<
  TProgram extends string = typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
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

export type AddConfigLinesInstructionData = {
  discriminator: Array<number>;
  index: number;
  configLines: Array<ConfigLine>;
  /** More dummy lines. */
  moreLines: Array<ConfigLine>;
};

export type AddConfigLinesInstructionDataArgs = {
  index: number;
  configLines: Array<ConfigLineArgs>;
  /** More dummy lines. */
  moreLines: Array<ConfigLineArgs>;
};

export function getAddConfigLinesInstructionDataEncoder(): Encoder<AddConfigLinesInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['index', getU32Encoder()],
      ['configLines', getArrayEncoder(getConfigLineEncoder())],
      [
        'moreLines',
        getArrayEncoder(getConfigLineEncoder(), { size: getU64Encoder() }),
      ],
    ]),
    (value) => ({
      ...value,
      discriminator: [223, 50, 224, 227, 151, 8, 115, 106],
    })
  );
}

export function getAddConfigLinesInstructionDataDecoder(): Decoder<AddConfigLinesInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['index', getU32Decoder()],
    ['configLines', getArrayDecoder(getConfigLineDecoder())],
    [
      'moreLines',
      getArrayDecoder(getConfigLineDecoder(), { size: getU64Decoder() }),
    ],
  ]);
}

export function getAddConfigLinesInstructionDataCodec(): Codec<
  AddConfigLinesInstructionDataArgs,
  AddConfigLinesInstructionData
> {
  return combineCodec(
    getAddConfigLinesInstructionDataEncoder(),
    getAddConfigLinesInstructionDataDecoder()
  );
}

export type AddConfigLinesInput<
  TAccountCandyMachine extends string = string,
  TAccountAuthority extends string = string,
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authority: TransactionSigner<TAccountAuthority>;
  index: AddConfigLinesInstructionDataArgs['index'];
  configLines: AddConfigLinesInstructionDataArgs['configLines'];
  moreLines: AddConfigLinesInstructionDataArgs['moreLines'];
};

export function getAddConfigLinesInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthority extends string,
>(
  input: AddConfigLinesInput<TAccountCandyMachine, TAccountAuthority>
): AddConfigLinesInstruction<
  typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
  TAccountCandyMachine,
  TAccountAuthority
> {
  // Program address.
  const programAddress = MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.candyMachine),
      getAccountMeta(accounts.authority),
    ],
    programAddress,
    data: getAddConfigLinesInstructionDataEncoder().encode(
      args as AddConfigLinesInstructionDataArgs
    ),
  } as AddConfigLinesInstruction<
    typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
    TAccountCandyMachine,
    TAccountAuthority
  >;

  return instruction;
}

export type ParsedAddConfigLinesInstruction<
  TProgram extends string = typeof MPL_CANDY_MACHINE_CORE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    candyMachine: TAccountMetas[0];
    authority: TAccountMetas[1];
  };
  data: AddConfigLinesInstructionData;
};

export function parseAddConfigLinesInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAddConfigLinesInstruction<TProgram, TAccountMetas> {
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
    data: getAddConfigLinesInstructionDataDecoder().decode(instruction.data),
  };
}
