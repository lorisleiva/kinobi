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
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
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

export type UtilizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUseAuthority extends string
        ? WritableSignerAccount<TAccountUseAuthority>
        : TAccountUseAuthority,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAtaProgram extends string
        ? ReadonlyAccount<TAccountAtaProgram>
        : TAccountAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountBurner extends string
        ? ReadonlyAccount<TAccountBurner>
        : TAccountBurner,
      ...TRemainingAccounts
    ]
  >;

export type UtilizeInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountUseAuthority extends string
        ? WritableSignerAccount<TAccountUseAuthority> &
            IAccountSignerMeta<TAccountUseAuthority>
        : TAccountUseAuthority,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAtaProgram extends string
        ? ReadonlyAccount<TAccountAtaProgram>
        : TAccountAtaProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      TAccountUseAuthorityRecord extends string
        ? WritableAccount<TAccountUseAuthorityRecord>
        : TAccountUseAuthorityRecord,
      TAccountBurner extends string
        ? ReadonlyAccount<TAccountBurner>
        : TAccountBurner,
      ...TRemainingAccounts
    ]
  >;

export type UtilizeInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type UtilizeInstructionDataArgs = { numberOfUses: number | bigint };

export function getUtilizeInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; numberOfUses: number | bigint }>([
      ['discriminator', getU8Encoder()],
      ['numberOfUses', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 19 })
  ) satisfies Encoder<UtilizeInstructionDataArgs>;
}

export function getUtilizeInstructionDataDecoder() {
  return getStructDecoder<UtilizeInstructionData>([
    ['discriminator', getU8Decoder()],
    ['numberOfUses', getU64Decoder()],
  ]) satisfies Decoder<UtilizeInstructionData>;
}

export function getUtilizeInstructionDataCodec(): Codec<
  UtilizeInstructionDataArgs,
  UtilizeInstructionData
> {
  return combineCodec(
    getUtilizeInstructionDataEncoder(),
    getUtilizeInstructionDataDecoder()
  );
}

export type UtilizeInput<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountBurner extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token Account Of NFT */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Mint of the Metadata */
  mint: Address<TAccountMint>;
  /** A Use Authority / Can be the current Owner of the NFT */
  useAuthority: Address<TAccountUseAuthority>;
  /** Owner */
  owner: Address<TAccountOwner>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** Associated Token program */
  ataProgram?: Address<TAccountAtaProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  /** Use Authority Record PDA If present the program Assumes a delegated use authority */
  useAuthorityRecord?: Address<TAccountUseAuthorityRecord>;
  /** Program As Signer (Burner) */
  burner?: Address<TAccountBurner>;
  numberOfUses: UtilizeInstructionDataArgs['numberOfUses'];
};

export type UtilizeInputWithSigners<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountBurner extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Token Account Of NFT */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Mint of the Metadata */
  mint: Address<TAccountMint>;
  /** A Use Authority / Can be the current Owner of the NFT */
  useAuthority: TransactionSigner<TAccountUseAuthority>;
  /** Owner */
  owner: Address<TAccountOwner>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** Associated Token program */
  ataProgram?: Address<TAccountAtaProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  /** Use Authority Record PDA If present the program Assumes a delegated use authority */
  useAuthorityRecord?: Address<TAccountUseAuthorityRecord>;
  /** Program As Signer (Burner) */
  burner?: Address<TAccountBurner>;
  numberOfUses: UtilizeInstructionDataArgs['numberOfUses'];
};

export function getUtilizeInstruction<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountBurner extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UtilizeInputWithSigners<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountUseAuthorityRecord,
    TAccountBurner
  >
): UtilizeInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountTokenAccount,
  TAccountMint,
  TAccountUseAuthority,
  TAccountOwner,
  TAccountTokenProgram,
  TAccountAtaProgram,
  TAccountSystemProgram,
  TAccountRent,
  TAccountUseAuthorityRecord,
  TAccountBurner
>;
export function getUtilizeInstruction<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountBurner extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UtilizeInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountUseAuthorityRecord,
    TAccountBurner
  >
): UtilizeInstruction<
  TProgram,
  TAccountMetadata,
  TAccountTokenAccount,
  TAccountMint,
  TAccountUseAuthority,
  TAccountOwner,
  TAccountTokenProgram,
  TAccountAtaProgram,
  TAccountSystemProgram,
  TAccountRent,
  TAccountUseAuthorityRecord,
  TAccountBurner
>;
export function getUtilizeInstruction<
  TAccountMetadata extends string,
  TAccountTokenAccount extends string,
  TAccountMint extends string,
  TAccountUseAuthority extends string,
  TAccountOwner extends string,
  TAccountTokenProgram extends string,
  TAccountAtaProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountUseAuthorityRecord extends string,
  TAccountBurner extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: UtilizeInput<
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountUseAuthorityRecord,
    TAccountBurner
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getUtilizeInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountTokenAccount,
      TAccountMint,
      TAccountUseAuthority,
      TAccountOwner,
      TAccountTokenProgram,
      TAccountAtaProgram,
      TAccountSystemProgram,
      TAccountRent,
      TAccountUseAuthorityRecord,
      TAccountBurner
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    useAuthority: { value: input.useAuthority ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    ataProgram: { value: input.ataProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
    useAuthorityRecord: {
      value: input.useAuthorityRecord ?? null,
      isWritable: true,
    },
    burner: { value: input.burner ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
    accounts.tokenProgram.isWritable = false;
  }
  if (!accounts.ataProgram.value) {
    accounts.ataProgram.value =
      'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>;
    accounts.ataProgram.isWritable = false;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getUtilizeInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as UtilizeInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getUtilizeInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountUseAuthority extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAtaProgram extends
    | string
    | IAccountMeta<string> = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountUseAuthorityRecord extends string | IAccountMeta<string> = string,
  TAccountBurner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    useAuthority: TAccountUseAuthority extends string
      ? Address<TAccountUseAuthority>
      : TAccountUseAuthority;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
    ataProgram?: TAccountAtaProgram extends string
      ? Address<TAccountAtaProgram>
      : TAccountAtaProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
    useAuthorityRecord?: TAccountUseAuthorityRecord extends string
      ? Address<TAccountUseAuthorityRecord>
      : TAccountUseAuthorityRecord;
    burner?: TAccountBurner extends string
      ? Address<TAccountBurner>
      : TAccountBurner;
  },
  args: UtilizeInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.useAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.ataProgram ?? {
          address:
            'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL' as Address<'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'>,
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
        accounts.rent ?? 'SysvarRent111111111111111111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.useAuthorityRecord ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.burner ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getUtilizeInstructionDataEncoder().encode(args),
    programAddress,
  } as UtilizeInstruction<
    TProgram,
    TAccountMetadata,
    TAccountTokenAccount,
    TAccountMint,
    TAccountUseAuthority,
    TAccountOwner,
    TAccountTokenProgram,
    TAccountAtaProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountUseAuthorityRecord,
    TAccountBurner,
    TRemainingAccounts
  >;
}

export type ParsedUtilizeInstruction = {
  accounts: {
    /** Metadata account */
    metadata: Address;
    /** Token Account Of NFT */
    tokenAccount: Address;
    /** Mint of the Metadata */
    mint: Address;
    /** A Use Authority / Can be the current Owner of the NFT */
    useAuthority: Address;
    /** Owner */
    owner: Address;
    /** Token program */
    tokenProgram: Address;
    /** Associated Token program */
    ataProgram: Address;
    /** System program */
    systemProgram: Address;
    /** Rent info */
    rent: Address;
    /** Use Authority Record PDA If present the program Assumes a delegated use authority */
    useAuthorityRecord: Address;
    /** Program As Signer (Burner) */
    burner: Address;
  };
  data: UtilizeInstructionData;
};

export function parseUtilizeInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedUtilizeInstruction {
  if (!instruction.accounts || instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  return {
    accounts: {
      metadata: instruction.accounts[accountIndex++]!.address,
      tokenAccount: instruction.accounts[accountIndex++]!.address,
      mint: instruction.accounts[accountIndex++]!.address,
      useAuthority: instruction.accounts[accountIndex++]!.address,
      owner: instruction.accounts[accountIndex++]!.address,
      tokenProgram: instruction.accounts[accountIndex++]!.address,
      ataProgram: instruction.accounts[accountIndex++]!.address,
      systemProgram: instruction.accounts[accountIndex++]!.address,
      rent: instruction.accounts[accountIndex++]!.address,
      useAuthorityRecord: instruction.accounts[accountIndex++]!.address,
      burner: instruction.accounts[accountIndex++]!.address,
    },
    data: getUtilizeInstructionDataDecoder().decode(instruction.data),
  };
}
