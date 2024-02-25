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
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  SetCollectionSizeArgs,
  SetCollectionSizeArgsArgs,
  getSetCollectionSizeArgsDecoder,
  getSetCollectionSizeArgsEncoder,
} from '../types';

export type SetCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionAuthority extends string
        ? WritableSignerAccount<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      ...TRemainingAccounts
    ]
  >;

export type SetCollectionSizeInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionMetadata extends string
        ? WritableAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionAuthority extends string
        ? WritableSignerAccount<TAccountCollectionAuthority> &
            IAccountSignerMeta<TAccountCollectionAuthority>
        : TAccountCollectionAuthority,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionAuthorityRecord extends string
        ? ReadonlyAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      ...TRemainingAccounts
    ]
  >;

export type SetCollectionSizeInstructionData = {
  discriminator: number;
  setCollectionSizeArgs: SetCollectionSizeArgs;
};

export type SetCollectionSizeInstructionDataArgs = {
  setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};

export function getSetCollectionSizeInstructionDataEncoder(): Encoder<SetCollectionSizeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['setCollectionSizeArgs', getSetCollectionSizeArgsEncoder()],
    ]),
    (value) => ({ ...value, discriminator: 34 })
  );
}

export function getSetCollectionSizeInstructionDataDecoder(): Decoder<SetCollectionSizeInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['setCollectionSizeArgs', getSetCollectionSizeArgsDecoder()],
  ]);
}

export function getSetCollectionSizeInstructionDataCodec(): Codec<
  SetCollectionSizeInstructionDataArgs,
  SetCollectionSizeInstructionData
> {
  return combineCodec(
    getSetCollectionSizeInstructionDataEncoder(),
    getSetCollectionSizeInstructionDataDecoder()
  );
}

export type SetCollectionSizeInput<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Collection Metadata account */
  collectionMetadata: Address<TAccountCollectionMetadata>;
  /** Collection Update authority */
  collectionAuthority: Address<TAccountCollectionAuthority>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
  setCollectionSizeArgs: SetCollectionSizeInstructionDataArgs['setCollectionSizeArgs'];
};

export type SetCollectionSizeInputWithSigners<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionAuthorityRecord extends string
> = {
  /** Collection Metadata account */
  collectionMetadata: Address<TAccountCollectionMetadata>;
  /** Collection Update authority */
  collectionAuthority: TransactionSigner<TAccountCollectionAuthority>;
  /** Mint of the Collection */
  collectionMint: Address<TAccountCollectionMint>;
  /** Collection Authority Record PDA */
  collectionAuthorityRecord?: Address<TAccountCollectionAuthorityRecord>;
  setCollectionSizeArgs: SetCollectionSizeInstructionDataArgs['setCollectionSizeArgs'];
};

export function getSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetCollectionSizeInputWithSigners<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountCollectionAuthorityRecord
  >
): SetCollectionSizeInstructionWithSigners<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountCollectionAuthorityRecord
>;
export function getSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetCollectionSizeInput<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountCollectionAuthorityRecord
  >
): SetCollectionSizeInstruction<
  TProgram,
  TAccountCollectionMetadata,
  TAccountCollectionAuthority,
  TAccountCollectionMint,
  TAccountCollectionAuthorityRecord
>;
export function getSetCollectionSizeInstruction<
  TAccountCollectionMetadata extends string,
  TAccountCollectionAuthority extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionAuthorityRecord extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetCollectionSizeInput<
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountCollectionAuthorityRecord
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getSetCollectionSizeInstructionRaw<
      TProgram,
      TAccountCollectionMetadata,
      TAccountCollectionAuthority,
      TAccountCollectionMint,
      TAccountCollectionAuthorityRecord
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: true,
    },
    collectionAuthority: {
      value: input.collectionAuthority ?? null,
      isWritable: true,
    },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getSetCollectionSizeInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as SetCollectionSizeInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getSetCollectionSizeInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    collectionMetadata: TAccountCollectionMetadata extends string
      ? Address<TAccountCollectionMetadata>
      : TAccountCollectionMetadata;
    collectionAuthority: TAccountCollectionAuthority extends string
      ? Address<TAccountCollectionAuthority>
      : TAccountCollectionAuthority;
    collectionMint: TAccountCollectionMint extends string
      ? Address<TAccountCollectionMint>
      : TAccountCollectionMint;
    collectionAuthorityRecord?: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
  },
  args: SetCollectionSizeInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.collectionMetadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.collectionAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.collectionMint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getSetCollectionSizeInstructionDataEncoder().encode(args),
    programAddress,
  } as SetCollectionSizeInstruction<
    TProgram,
    TAccountCollectionMetadata,
    TAccountCollectionAuthority,
    TAccountCollectionMint,
    TAccountCollectionAuthorityRecord,
    TRemainingAccounts
  >;
}

export type ParsedSetCollectionSizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Collection Metadata account */
    collectionMetadata: TAccountMetas[0];
    /** Collection Update authority */
    collectionAuthority: TAccountMetas[1];
    /** Mint of the Collection */
    collectionMint: TAccountMetas[2];
    /** Collection Authority Record PDA */
    collectionAuthorityRecord?: TAccountMetas[3] | undefined;
  };
  data: SetCollectionSizeInstructionData;
};

export function parseSetCollectionSizeInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetCollectionSizeInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
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
      collectionMetadata: getNextAccount(),
      collectionAuthority: getNextAccount(),
      collectionMint: getNextAccount(),
      collectionAuthorityRecord: getNextOptionalAccount(),
    },
    data: getSetCollectionSizeInstructionDataDecoder().decode(instruction.data),
  };
}
