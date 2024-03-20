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
  Option,
  OptionOrNullable,
  combineCodec,
  getBooleanDecoder,
  getBooleanEncoder,
  getOptionDecoder,
  getOptionEncoder,
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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  DataV2,
  DataV2Args,
  getDataV2Decoder,
  getDataV2Encoder,
} from '../types';

export type UpdateMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type UpdateMetadataAccountV2InstructionData = {
  discriminator: number;
  data: Option<DataV2>;
  updateAuthority: Option<Address>;
  primarySaleHappened: Option<boolean>;
  isMutable: Option<boolean>;
};

export type UpdateMetadataAccountV2InstructionDataArgs = {
  data: OptionOrNullable<DataV2Args>;
  updateAuthority: OptionOrNullable<Address>;
  primarySaleHappened: OptionOrNullable<boolean>;
  isMutable: OptionOrNullable<boolean>;
};

export function getUpdateMetadataAccountV2InstructionDataEncoder(): Encoder<UpdateMetadataAccountV2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['data', getOptionEncoder(getDataV2Encoder())],
      ['updateAuthority', getOptionEncoder(getAddressEncoder())],
      ['primarySaleHappened', getOptionEncoder(getBooleanEncoder())],
      ['isMutable', getOptionEncoder(getBooleanEncoder())],
    ]),
    (value) => ({ ...value, discriminator: 15 })
  );
}

export function getUpdateMetadataAccountV2InstructionDataDecoder(): Decoder<UpdateMetadataAccountV2InstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['data', getOptionDecoder(getDataV2Decoder())],
    ['updateAuthority', getOptionDecoder(getAddressDecoder())],
    ['primarySaleHappened', getOptionDecoder(getBooleanDecoder())],
    ['isMutable', getOptionDecoder(getBooleanDecoder())],
  ]);
}

export function getUpdateMetadataAccountV2InstructionDataCodec(): Codec<
  UpdateMetadataAccountV2InstructionDataArgs,
  UpdateMetadataAccountV2InstructionData
> {
  return combineCodec(
    getUpdateMetadataAccountV2InstructionDataEncoder(),
    getUpdateMetadataAccountV2InstructionDataDecoder()
  );
}

export type UpdateMetadataAccountV2Input<
  TAccountMetadata extends string = string,
  TAccountUpdateAuthority extends string = string,
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Update authority key */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  data: UpdateMetadataAccountV2InstructionDataArgs['data'];
  updateAuthorityArg: UpdateMetadataAccountV2InstructionDataArgs['updateAuthority'];
  primarySaleHappened: UpdateMetadataAccountV2InstructionDataArgs['primarySaleHappened'];
  isMutable: UpdateMetadataAccountV2InstructionDataArgs['isMutable'];
};

export function getUpdateMetadataAccountV2Instruction<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
>(
  input: UpdateMetadataAccountV2Input<TAccountMetadata, TAccountUpdateAuthority>
): UpdateMetadataAccountV2Instruction<
  TProgram,
  TAccountMetadata,
  TAccountUpdateAuthority
> {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getUpdateMetadataAccountV2InstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountUpdateAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input, updateAuthority: input.updateAuthorityArg };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getUpdateMetadataAccountV2InstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as UpdateMetadataAccountV2InstructionDataArgs,
    programAddress
  ) as UpdateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountUpdateAuthority
  >;

  return instruction;
}

export function getUpdateMetadataAccountV2InstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
  },
  args: UpdateMetadataAccountV2InstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getUpdateMetadataAccountV2InstructionDataEncoder().encode(args),
    programAddress,
  } as UpdateMetadataAccountV2Instruction<
    TProgram,
    TAccountMetadata,
    TAccountUpdateAuthority,
    TRemainingAccounts
  >;
}

export type ParsedUpdateMetadataAccountV2Instruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata account */
    metadata: TAccountMetas[0];
    /** Update authority key */
    updateAuthority: TAccountMetas[1];
  };
  data: UpdateMetadataAccountV2InstructionData;
};

export function parseUpdateMetadataAccountV2Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedUpdateMetadataAccountV2Instruction<TProgram, TAccountMetas> {
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
      updateAuthority: getNextAccount(),
    },
    data: getUpdateMetadataAccountV2InstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
