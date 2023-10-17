/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
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
  Context,
  CustomGeneratedInstruction,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
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
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
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
        : TAccountTokenProgram
    ]
  >;

export type FreezeDelegatedAccountInstructionData = { discriminator: number };

export type FreezeDelegatedAccountInstructionDataArgs = {};

export function getFreezeDelegatedAccountInstructionDataEncoder(): Encoder<FreezeDelegatedAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<FreezeDelegatedAccountInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'FreezeDelegatedAccountInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 26 } as FreezeDelegatedAccountInstructionData)
  ) as Encoder<FreezeDelegatedAccountInstructionDataArgs>;
}

export function getFreezeDelegatedAccountInstructionDataDecoder(): Decoder<FreezeDelegatedAccountInstructionData> {
  return getStructDecoder<FreezeDelegatedAccountInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'FreezeDelegatedAccountInstructionData' }
  ) as Decoder<FreezeDelegatedAccountInstructionData>;
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
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  accounts: {
    delegate: TAccountDelegate extends string
      ? Base58EncodedAddress<TAccountDelegate>
      : TAccountDelegate;
    tokenAccount: TAccountTokenAccount extends string
      ? Base58EncodedAddress<TAccountTokenAccount>
      : TAccountTokenAccount;
    edition: TAccountEdition extends string
      ? Base58EncodedAddress<TAccountEdition>
      : TAccountEdition;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    tokenProgram?: TAccountTokenProgram extends string
      ? Base58EncodedAddress<TAccountTokenProgram>
      : TAccountTokenProgram;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
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
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
    ],
    data: getFreezeDelegatedAccountInstructionDataEncoder().encode({}),
    programAddress,
  } as FreezeDelegatedAccountInstruction<
    TProgram,
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
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
  delegate: Signer<TAccountDelegate>;
  /** Token account to freeze */
  tokenAccount: Base58EncodedAddress<TAccountTokenAccount>;
  /** Edition */
  edition: Base58EncodedAddress<TAccountEdition>;
  /** Token mint */
  mint: Base58EncodedAddress<TAccountMint>;
  /** Token Program */
  tokenProgram?: Base58EncodedAddress<TAccountTokenProgram>;
};

export async function freezeDelegatedAccount<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      FreezeDelegatedAccountInstruction<
        TProgram,
        TAccountDelegate,
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
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
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
  WrappedInstruction<
    FreezeDelegatedAccountInstruction<
      TProgram,
      TAccountDelegate,
      TAccountTokenAccount,
      TAccountEdition,
      TAccountMint,
      TAccountTokenProgram
    >
  >
>;
export async function freezeDelegatedAccount<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >
): Promise<
  WrappedInstruction<
    FreezeDelegatedAccountInstruction<
      TProgram,
      TAccountDelegate,
      TAccountTokenAccount,
      TAccountEdition,
      TAccountMint,
      TAccountTokenProgram
    >
  >
>;
export async function freezeDelegatedAccount<
  TReturn,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountDelegate extends string = string,
  TAccountTokenAccount extends string = string,
  TAccountEdition extends string = string,
  TAccountMint extends string = string,
  TAccountTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          FreezeDelegatedAccountInstruction<
            TProgram,
            TAccountDelegate,
            TAccountTokenAccount,
            TAccountEdition,
            TAccountMint,
            TAccountTokenProgram
          >,
          TReturn
        >)
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
  | WrappedInstruction<
      FreezeDelegatedAccountInstruction<
        TProgram,
        TAccountDelegate,
        TAccountTokenAccount,
        TAccountEdition,
        TAccountMint,
        TAccountTokenProgram
      >
    >
> {
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          FreezeDelegatedAccountInstruction<
            TProgram,
            TAccountDelegate,
            TAccountTokenAccount,
            TAccountEdition,
            TAccountMint,
            TAccountTokenProgram
          >,
          TReturn
        >);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as FreezeDelegatedAccountInput<
    TAccountDelegate,
    TAccountTokenAccount,
    TAccountEdition,
    TAccountMint,
    TAccountTokenProgram
  >;

  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  return {
    instruction: freezeDelegatedAccountInstruction(
      input as any,
      input,
      programAddress
    ),
    signers: [],
    bytesCreatedOnChain: 0,
  };
}
