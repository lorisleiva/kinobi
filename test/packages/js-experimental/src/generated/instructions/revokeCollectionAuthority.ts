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

export type RevokeCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountDelegateAuthority extends string | IAccountMeta<string> = string,
  TAccountRevokeAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountDelegateAuthority extends string
        ? WritableAccount<TAccountDelegateAuthority>
        : TAccountDelegateAuthority,
      TAccountRevokeAuthority extends string
        ? WritableSignerAccount<TAccountRevokeAuthority>
        : TAccountRevokeAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      ...TRemainingAccounts
    ]
  >;

export type RevokeCollectionAuthorityInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountDelegateAuthority extends string | IAccountMeta<string> = string,
  TAccountRevokeAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountDelegateAuthority extends string
        ? WritableAccount<TAccountDelegateAuthority>
        : TAccountDelegateAuthority,
      TAccountRevokeAuthority extends string
        ? WritableSignerAccount<TAccountRevokeAuthority> &
            IAccountSignerMeta<TAccountRevokeAuthority>
        : TAccountRevokeAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      ...TRemainingAccounts
    ]
  >;

export type RevokeCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type RevokeCollectionAuthorityInstructionDataArgs = {};

export function getRevokeCollectionAuthorityInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 24 })
  ) satisfies Encoder<RevokeCollectionAuthorityInstructionDataArgs>;
}

export function getRevokeCollectionAuthorityInstructionDataDecoder() {
  return getStructDecoder<RevokeCollectionAuthorityInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<RevokeCollectionAuthorityInstructionData>;
}

export function getRevokeCollectionAuthorityInstructionDataCodec(): Codec<
  RevokeCollectionAuthorityInstructionDataArgs,
  RevokeCollectionAuthorityInstructionData
> {
  return combineCodec(
    getRevokeCollectionAuthorityInstructionDataEncoder(),
    getRevokeCollectionAuthorityInstructionDataDecoder()
  );
}

export type RevokeCollectionAuthorityInput<
  TAccountCollectionAuthorityRecord extends string,
  TAccountDelegateAuthority extends string,
  TAccountRevokeAuthority extends string,
  TAccountMetadata extends string,
  TAccountMint extends string
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** Delegated Collection Authority */
  delegateAuthority: Address<TAccountDelegateAuthority>;
  /** Update Authority, or Delegated Authority, of Collection NFT */
  revokeAuthority: Address<TAccountRevokeAuthority>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
};

export type RevokeCollectionAuthorityInputWithSigners<
  TAccountCollectionAuthorityRecord extends string,
  TAccountDelegateAuthority extends string,
  TAccountRevokeAuthority extends string,
  TAccountMetadata extends string,
  TAccountMint extends string
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** Delegated Collection Authority */
  delegateAuthority: Address<TAccountDelegateAuthority>;
  /** Update Authority, or Delegated Authority, of Collection NFT */
  revokeAuthority: TransactionSigner<TAccountRevokeAuthority>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
};

export function getRevokeCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountDelegateAuthority extends string,
  TAccountRevokeAuthority extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RevokeCollectionAuthorityInputWithSigners<
    TAccountCollectionAuthorityRecord,
    TAccountDelegateAuthority,
    TAccountRevokeAuthority,
    TAccountMetadata,
    TAccountMint
  >
): RevokeCollectionAuthorityInstructionWithSigners<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountDelegateAuthority,
  TAccountRevokeAuthority,
  TAccountMetadata,
  TAccountMint
>;
export function getRevokeCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountDelegateAuthority extends string,
  TAccountRevokeAuthority extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RevokeCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountDelegateAuthority,
    TAccountRevokeAuthority,
    TAccountMetadata,
    TAccountMint
  >
): RevokeCollectionAuthorityInstruction<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountDelegateAuthority,
  TAccountRevokeAuthority,
  TAccountMetadata,
  TAccountMint
>;
export function getRevokeCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountDelegateAuthority extends string,
  TAccountRevokeAuthority extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RevokeCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountDelegateAuthority,
    TAccountRevokeAuthority,
    TAccountMetadata,
    TAccountMint
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getRevokeCollectionAuthorityInstructionRaw<
      TProgram,
      TAccountCollectionAuthorityRecord,
      TAccountDelegateAuthority,
      TAccountRevokeAuthority,
      TAccountMetadata,
      TAccountMint
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: true,
    },
    delegateAuthority: {
      value: input.delegateAuthority ?? null,
      isWritable: true,
    },
    revokeAuthority: { value: input.revokeAuthority ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getRevokeCollectionAuthorityInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getRevokeCollectionAuthorityInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountDelegateAuthority extends string | IAccountMeta<string> = string,
  TAccountRevokeAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    delegateAuthority: TAccountDelegateAuthority extends string
      ? Address<TAccountDelegateAuthority>
      : TAccountDelegateAuthority;
    revokeAuthority: TAccountRevokeAuthority extends string
      ? Address<TAccountRevokeAuthority>
      : TAccountRevokeAuthority;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(
        accounts.collectionAuthorityRecord,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(accounts.delegateAuthority, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.revokeAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getRevokeCollectionAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as RevokeCollectionAuthorityInstruction<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountDelegateAuthority,
    TAccountRevokeAuthority,
    TAccountMetadata,
    TAccountMint,
    TRemainingAccounts
  >;
}

export type ParsedRevokeCollectionAuthorityInstruction = {
  accounts: {
    /** Collection Authority Record PDA */
    collectionAuthorityRecord: Address;
    /** Delegated Collection Authority */
    delegateAuthority: Address;
    /** Update Authority, or Delegated Authority, of Collection NFT */
    revokeAuthority: Address;
    /** Metadata account */
    metadata: Address;
    /** Mint of Metadata */
    mint: Address;
  };
  data: RevokeCollectionAuthorityInstructionData;
};

export function parseRevokeCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedRevokeCollectionAuthorityInstruction {
  if (!instruction.accounts || instruction.accounts.length < 5) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const address = instruction.accounts![accountIndex]!.address;
    accountIndex += 1;
    return address;
  };
  return {
    accounts: {
      collectionAuthorityRecord: getNextAccount(),
      delegateAuthority: getNextAccount(),
      revokeAuthority: getNextAccount(),
      metadata: getNextAccount(),
      mint: getNextAccount(),
    },
    data: getRevokeCollectionAuthorityInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
