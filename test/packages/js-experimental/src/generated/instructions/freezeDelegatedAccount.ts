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
import {
  IAccountSignerMeta,
  IInstructionWithSigners,
  TransactionSigner,
} from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  IInstructionWithBytesCreatedOnChain,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type FreezeDelegatedAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountDelegate extends string
        ? WritableSignerAccount<TAccountDelegate>
        : TAccountDelegate,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts
    ]
  >;

// Output.
export type FreezeDelegatedAccountInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountDelegate extends string
        ? WritableSignerAccount<TAccountDelegate> &
            IAccountSignerMeta<TAccountDelegate>
        : TAccountDelegate,
      TAccountTokenAccount extends string
        ? WritableAccount<TAccountTokenAccount>
        : TAccountTokenAccount,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts
    ]
  >;

export type FreezeDelegatedAccountInstructionData = { discriminator: number };

export type FreezeDelegatedAccountInstructionDataArgs = {};

export function getFreezeDelegatedAccountInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 26 })
  ) satisfies Encoder<FreezeDelegatedAccountInstructionDataArgs>;
}

export function getFreezeDelegatedAccountInstructionDataDecoder() {
  return getStructDecoder<FreezeDelegatedAccountInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<FreezeDelegatedAccountInstructionData>;
}

export function getFreezeDelegatedAccountInstructionDataCodec(): Codec<
  FreezeDelegatedAccountInstructionDataArgs,
  FreezeDelegatedAccountInstructionData
> {
  return combineCodec(
    getFreezeDelegatedAccountInstructionDataEncoder(),
    getFreezeDelegatedAccountInstructionDataDecoder()
  );
}

export function freezeDelegatedAccountInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string | IAccountMeta<string> = string,
  TAccountTokenAccount extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    delegate: TAccountDelegate extends string
      ? Address<TAccountDelegate>
      : TAccountDelegate;
    tokenAccount: TAccountTokenAccount extends string
      ? Address<TAccountTokenAccount>
      : TAccountTokenAccount;
    edition: TAccountEdition extends string
      ? Address<TAccountEdition>
      : TAccountEdition;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.delegate, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.tokenAccount, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.edition, AccountRole.READONLY),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getFreezeDelegatedAccountInstructionDataEncoder().encode({}),
    programAddress,
  } as FreezeDelegatedAccountInstruction<
    TProgram,
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram,
    TRemainingAccounts
  >;
}

// Input.
export type FreezeDelegatedAccountInput<
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string
> = {
  /** Delegate */
  delegate: Address<TAccountDelegate>;
  /** Token account to freeze */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition */
  edition: Address<TAccountEdition>;
  /** Token mint */
  mint: Address<TAccountMint>;
  /** Token Program */
  tokenProgram?: Address<TAccountTokenProgram>;
};

// Input.
export type FreezeDelegatedAccountInputWithSigners<
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string
> = {
  /** Delegate */
  delegate: TransactionSigner<TAccountDelegate>;
  /** Token account to freeze */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition */
  edition: Address<TAccountEdition>;
  /** Token mint */
  mint: Address<TAccountMint>;
  /** Token Program */
  tokenProgram?: Address<TAccountTokenProgram>;
};

// Input.
export type FreezeDelegatedAccountInputAsync<
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string
> = {
  /** Delegate */
  delegate: Address<TAccountDelegate>;
  /** Token account to freeze */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition */
  edition: Address<TAccountEdition>;
  /** Token mint */
  mint: Address<TAccountMint>;
  /** Token Program */
  tokenProgram?: Address<TAccountTokenProgram>;
};

// Input.
export type FreezeDelegatedAccountInputAsyncWithSigners<
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string
> = {
  /** Delegate */
  delegate: TransactionSigner<TAccountDelegate>;
  /** Token account to freeze */
  tokenAccount: Address<TAccountTokenAccount>;
  /** Edition */
  edition: Address<TAccountEdition>;
  /** Token mint */
  mint: Address<TAccountMint>;
  /** Token Program */
  tokenProgram?: Address<TAccountTokenProgram>;
};

export async function freezeDelegatedAccount<
  TReturn,
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      FreezeDelegatedAccountInstruction<
        TProgram,
        WritableSignerAccount<TAccountDelegate> &
          IAccountSignerMeta<TAccountDelegate>,
        TAccountTokenAccount,
        TAccountEdition,
        TAccountMint,
        TAccountTokenProgram
      >,
      TReturn
    >,
  input: FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >
): Promise<TReturn>;
export async function freezeDelegatedAccount<
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >
): Promise<
  FreezeDelegatedAccountInstruction<
    TProgram,
    WritableSignerAccount<TAccountDelegate> &
      IAccountSignerMeta<TAccountDelegate>,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function freezeDelegatedAccount<
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >
): Promise<
  FreezeDelegatedAccountInstruction<
    TProgram,
    WritableSignerAccount<TAccountDelegate> &
      IAccountSignerMeta<TAccountDelegate>,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function freezeDelegatedAccount<
  TReturn,
  TAccountDelegate extends string,
  TAccountTokenAccount extends string,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | FreezeDelegatedAccountInput<
        TAccountDelegate,
        TAccountTokenAccount,
        TAccountEdition,
        TAccountMint,
        TAccountTokenProgram
      >,
  rawInput?: FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >
): Promise<
  | TReturn
  | (IInstruction &
      IInstructionWithSigners &
      IInstructionWithBytesCreatedOnChain)
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof freezeDelegatedAccountInstruction<
      TProgram,
      TAccountDelegate,
      TAccountTokenAccount,
      TAccountEdition,
      TAccountMint,
      TAccountTokenProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    delegate: { value: input.delegate ?? null, isWritable: true },
    tokenAccount: { value: input.tokenAccount ?? null, isWritable: true },
    edition: { value: input.edition ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
  };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.tokenProgram.isWritable = false;
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

  // Instruction.
  const instruction = {
    ...freezeDelegatedAccountInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
