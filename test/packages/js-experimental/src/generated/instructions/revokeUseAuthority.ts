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

// Output.
export type RevokeUseAuthorityInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountUser extends string
        ? ReadonlyAccount<TAccountUser>
        : TAccountUser,
      TAccountOwnerTokenAccount extends string
        ? WritableAccount<TAccountOwnerTokenAccount>
        : TAccountOwnerTokenAccount,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type RevokeUseAuthorityInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountUser extends string
        ? ReadonlyAccount<TAccountUser>
        : TAccountUser,
      TAccountOwnerTokenAccount extends string
        ? WritableAccount<TAccountOwnerTokenAccount>
        : TAccountOwnerTokenAccount,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export type RevokeUseAuthorityInstructionData = { discriminator: number };

export type RevokeUseAuthorityInstructionDataArgs = {};

export function getRevokeUseAuthorityInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 21 })
  ) satisfies Encoder<RevokeUseAuthorityInstructionDataArgs>;
}

export function getRevokeUseAuthorityInstructionDataDecoder() {
  return getStructDecoder<RevokeUseAuthorityInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<RevokeUseAuthorityInstructionData>;
}

export function getRevokeUseAuthorityInstructionDataCodec(): Codec<
  RevokeUseAuthorityInstructionDataArgs,
  RevokeUseAuthorityInstructionData
> {
  return combineCodec(
    getRevokeUseAuthorityInstructionDataEncoder(),
    getRevokeUseAuthorityInstructionDataDecoder()
  );
}

// Input.
export type RevokeUseAuthorityInput<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Use Authority Record PDA */
  useAuthorityRecord: Address<TAccountUseAuthorityRecord>;
  /** Owner */
  owner: Address<TAccountOwner>;
  /** A Use Authority */
  user: Address<TAccountUser>;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: Address<TAccountOwnerTokenAccount>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

// Input.
export type RevokeUseAuthorityInputWithSigners<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** Use Authority Record PDA */
  useAuthorityRecord: Address<TAccountUseAuthorityRecord>;
  /** Owner */
  owner: TransactionSigner<TAccountOwner>;
  /** A Use Authority */
  user: Address<TAccountUser>;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: Address<TAccountOwnerTokenAccount>;
  /** Mint of Metadata */
  mint: Address<TAccountMint>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export function getRevokeUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: RevokeUseAuthorityInputWithSigners<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): RevokeUseAuthorityInstructionWithSigners<
  TProgram,
  TAccountUseAuthorityRecord,
  WritableSignerAccount<TAccountOwner> & IAccountSignerMeta<TAccountOwner>,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMint,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getRevokeUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: RevokeUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): RevokeUseAuthorityInstruction<
  TProgram,
  TAccountUseAuthorityRecord,
  WritableSignerAccount<TAccountOwner> & IAccountSignerMeta<TAccountOwner>,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMint,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getRevokeUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RevokeUseAuthorityInputWithSigners<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): RevokeUseAuthorityInstructionWithSigners<
  TProgram,
  TAccountUseAuthorityRecord,
  WritableSignerAccount<TAccountOwner> & IAccountSignerMeta<TAccountOwner>,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMint,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getRevokeUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RevokeUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >
): RevokeUseAuthorityInstruction<
  TProgram,
  TAccountUseAuthorityRecord,
  WritableSignerAccount<TAccountOwner> & IAccountSignerMeta<TAccountOwner>,
  TAccountUser,
  TAccountOwnerTokenAccount,
  TAccountMint,
  TAccountMetadata,
  TAccountTokenProgram,
  TAccountSystemProgram,
  TAccountRent
>;
export function getRevokeUseAuthorityInstruction<
  TAccountUseAuthorityRecord extends string,
  TAccountOwner extends string,
  TAccountUser extends string,
  TAccountOwnerTokenAccount extends string,
  TAccountMint extends string,
  TAccountMetadata extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | RevokeUseAuthorityInput<
        TAccountUseAuthorityRecord,
        TAccountOwner,
        TAccountUser,
        TAccountOwnerTokenAccount,
        TAccountMint,
        TAccountMetadata,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRent
      >,
  rawInput?: RevokeUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
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
  ) as RevokeUseAuthorityInput<
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getRevokeUseAuthorityInstructionRaw<
      TProgram,
      TAccountUseAuthorityRecord,
      TAccountOwner,
      TAccountUser,
      TAccountOwnerTokenAccount,
      TAccountMint,
      TAccountMetadata,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    useAuthorityRecord: {
      value: input.useAuthorityRecord ?? null,
      isWritable: true,
    },
    owner: { value: input.owner ?? null, isWritable: true },
    user: { value: input.user ?? null, isWritable: false },
    ownerTokenAccount: {
      value: input.ownerTokenAccount ?? null,
      isWritable: true,
    },
    mint: { value: input.mint ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.tokenProgram.isWritable = false;
  }
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

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  return Object.freeze({
    ...getRevokeUseAuthorityInstructionRaw(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  });
}

export function getRevokeUseAuthorityInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountUser extends string | IAccountMeta<string> = string,
  TAccountOwnerTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    useAuthorityRecord: TAccountUseAuthorityRecord extends string
      ? Address<TAccountUseAuthorityRecord>
      : TAccountUseAuthorityRecord;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    user: TAccountUser extends string ? Address<TAccountUser> : TAccountUser;
    ownerTokenAccount: TAccountOwnerTokenAccount extends string
      ? Address<TAccountOwnerTokenAccount>
      : TAccountOwnerTokenAccount;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
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
      accountMetaWithDefault(accounts.useAuthorityRecord, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.user, AccountRole.READONLY),
      accountMetaWithDefault(accounts.ownerTokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
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
    data: getRevokeUseAuthorityInstructionDataEncoder().encode({}),
    programAddress,
  } as RevokeUseAuthorityInstruction<
    TProgram,
    TAccountUseAuthorityRecord,
    TAccountOwner,
    TAccountUser,
    TAccountOwnerTokenAccount,
    TAccountMint,
    TAccountMetadata,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}
