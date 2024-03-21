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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { MPL_TOKEN_METADATA_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type SignMetadataInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCreator extends string
        ? ReadonlySignerAccount<TAccountCreator> &
            IAccountSignerMeta<TAccountCreator>
        : TAccountCreator,
      ...TRemainingAccounts,
    ]
  >;

export type SignMetadataInstructionData = { discriminator: number };

export type SignMetadataInstructionDataArgs = {};

export function getSignMetadataInstructionDataEncoder(): Encoder<SignMetadataInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 7 })
  );
}

export function getSignMetadataInstructionDataDecoder(): Decoder<SignMetadataInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getSignMetadataInstructionDataCodec(): Codec<
  SignMetadataInstructionDataArgs,
  SignMetadataInstructionData
> {
  return combineCodec(
    getSignMetadataInstructionDataEncoder(),
    getSignMetadataInstructionDataDecoder()
  );
}

export type SignMetadataInput<
  TAccountMetadata extends string = string,
  TAccountCreator extends string = string,
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Creator */
  creator: TransactionSigner<TAccountCreator>;
};

export function getSignMetadataInstruction<
  TAccountMetadata extends string,
  TAccountCreator extends string,
>(
  input: SignMetadataInput<TAccountMetadata, TAccountCreator>
): SignMetadataInstruction<
  typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata,
  TAccountCreator
> {
  // Program address.
  const programAddress = MPL_TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    creator: { value: input.creator ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.creator),
    ],
    programAddress,
    data: getSignMetadataInstructionDataEncoder().encode({}),
  } as SignMetadataInstruction<
    typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
    TAccountMetadata,
    TAccountCreator
  >;

  return instruction;
}

export type ParsedSignMetadataInstruction<
  TProgram extends string = typeof MPL_TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** Creator */
    creator: TAccountMetas[1];
  };
  data: SignMetadataInstructionData;
};

export function parseSignMetadataInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSignMetadataInstruction<TProgram, TAccountMetas> {
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
      metadata: getNextAccount(),
      creator: getNextAccount(),
    },
    data: getSignMetadataInstructionDataDecoder().decode(instruction.data),
  };
}
