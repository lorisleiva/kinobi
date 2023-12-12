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
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

export type ApproveCollectionAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority extends string
        ? ReadonlyAccount<TAccountNewCollectionAuthority>
        : TAccountNewCollectionAuthority,
      TAccountUpdateAuthority extends string
        ? WritableSignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type ApproveCollectionAuthorityInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority extends string
        ? ReadonlyAccount<TAccountNewCollectionAuthority>
        : TAccountNewCollectionAuthority,
      TAccountUpdateAuthority extends string
        ? WritableSignerAccount<TAccountUpdateAuthority> &
            IAccountSignerMeta<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type ApproveCollectionAuthorityInstructionData = {
  discriminator: number;
};

export type ApproveCollectionAuthorityInstructionDataArgs = {};

export function getApproveCollectionAuthorityInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 23 })
  ) satisfies Encoder<ApproveCollectionAuthorityInstructionDataArgs>;
}

export function getApproveCollectionAuthorityInstructionDataDecoder() {
  return getStructDecoder<ApproveCollectionAuthorityInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<ApproveCollectionAuthorityInstructionData>;
}

export function getApproveCollectionAuthorityInstructionDataCodec(): Codec<
  ApproveCollectionAuthorityInstructionDataArgs,
  ApproveCollectionAuthorityInstructionData
> {
  return combineCodec(
    getApproveCollectionAuthorityInstructionDataEncoder(),
    getApproveCollectionAuthorityInstructionDataDecoder()
  );
}

export type ApproveCollectionAuthorityInput<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Address<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: Address<TAccountUpdateAuthority>;
  /** Payer */
  payer?: Address<TAccountPayer>;
  /** Collection Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Address<TAccountMint>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export type ApproveCollectionAuthorityInputWithSigners<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Collection Authority Record PDA */
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  /** A Collection Authority */
  newCollectionAuthority: Address<TAccountNewCollectionAuthority>;
  /** Update Authority of Collection NFT */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /** Payer */
  payer?: TransactionSigner<TAccountPayer>;
  /** Collection Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Mint of Collection Metadata */
  mint: Address<TAccountMint>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: ApproveCollectionAuthorityInputWithSigners<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveCollectionAuthorityInstructionWithSigners<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountNewCollectionAuthority,
  TAccountUpdateAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountMint,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: ApproveCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveCollectionAuthorityInstruction<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountNewCollectionAuthority,
  TAccountUpdateAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountMint,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ApproveCollectionAuthorityInputWithSigners<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveCollectionAuthorityInstructionWithSigners<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountNewCollectionAuthority,
  TAccountUpdateAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountMint,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: ApproveCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): ApproveCollectionAuthorityInstruction<
  TProgram,
  TAccountCollectionAuthorityRecord,
  TAccountNewCollectionAuthority,
  TAccountUpdateAuthority,
  TAccountPayer,
  TAccountMetadata,
  TAccountMint,
  TAccountSystemProgram,
  TAccountRent
>;
export function getApproveCollectionAuthorityInstruction<
  TAccountCollectionAuthorityRecord extends string,
  TAccountNewCollectionAuthority extends string,
  TAccountUpdateAuthority extends string,
  TAccountPayer extends string,
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | ApproveCollectionAuthorityInput<
        TAccountCollectionAuthorityRecord,
        TAccountNewCollectionAuthority,
        TAccountUpdateAuthority,
        TAccountPayer,
        TAccountMetadata,
        TAccountMint,
        TAccountSystemProgram,
        TAccountRent
      >,
  rawInput?: ApproveCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as ApproveCollectionAuthorityInput<
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent
  >;

  // Program address.
  const programAddress = getProgramAddress(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>
  );

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getApproveCollectionAuthorityInstructionRaw<
      TProgram,
      TAccountCollectionAuthorityRecord,
      TAccountNewCollectionAuthority,
      TAccountUpdateAuthority,
      TAccountPayer,
      TAccountMetadata,
      TAccountMint,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: true,
    },
    newCollectionAuthority: {
      value: input.newCollectionAuthority ?? null,
      isWritable: false,
    },
    updateAuthority: { value: input.updateAuthority ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: true },
    metadata: { value: input.metadata ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getApproveCollectionAuthorityInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getApproveCollectionAuthorityInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountNewCollectionAuthority extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    collectionAuthorityRecord: TAccountCollectionAuthorityRecord extends string
      ? Address<TAccountCollectionAuthorityRecord>
      : TAccountCollectionAuthorityRecord;
    newCollectionAuthority: TAccountNewCollectionAuthority extends string
      ? Address<TAccountNewCollectionAuthority>
      : TAccountNewCollectionAuthority;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
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
      accountMetaWithDefault(
        accounts.newCollectionAuthority,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getApproveCollectionAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as ApproveCollectionAuthorityInstruction<
    TProgram,
    TAccountCollectionAuthorityRecord,
    TAccountNewCollectionAuthority,
    TAccountUpdateAuthority,
    TAccountPayer,
    TAccountMetadata,
    TAccountMint,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}
