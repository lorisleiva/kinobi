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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type BurnTokenCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority
    ]
  >;

export type BurnTokenCheckedInstructionData = {
  discriminator: number;
  amount: bigint;
  decimals: number;
};

export type BurnTokenCheckedInstructionDataArgs = {
  amount: number | bigint;
  decimals: number;
};

export function getBurnTokenCheckedInstructionDataEncoder(): Encoder<BurnTokenCheckedInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      amount: number | bigint;
      decimals: number;
    }>(
      [
        ['discriminator', getU8Encoder()],
        ['amount', getU64Encoder()],
        ['decimals', getU8Encoder()],
      ],
      { description: 'BurnTokenCheckedInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 15 })
  ) as Encoder<BurnTokenCheckedInstructionDataArgs>;
}

export function getBurnTokenCheckedInstructionDataDecoder(): Decoder<BurnTokenCheckedInstructionData> {
  return getStructDecoder<BurnTokenCheckedInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
      ['decimals', getU8Decoder()],
    ],
    { description: 'BurnTokenCheckedInstructionData' }
  ) as Decoder<BurnTokenCheckedInstructionData>;
}

export function getBurnTokenCheckedInstructionDataCodec(): Codec<
  BurnTokenCheckedInstructionDataArgs,
  BurnTokenCheckedInstructionData
> {
  return combineCodec(
    getBurnTokenCheckedInstructionDataEncoder(),
    getBurnTokenCheckedInstructionDataDecoder()
  );
}

export function burnTokenCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  args: BurnTokenCheckedInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
    ],
    data: getBurnTokenCheckedInstructionDataEncoder().encode(args),
    programAddress,
  } as BurnTokenCheckedInstruction<
    TProgram,
    TAccountAccount,
    TAccountMint,
    TAccountAuthority
  >;
}

// Input.
export type BurnTokenCheckedInput<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountAuthority extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  mint: Base58EncodedAddress<TAccountMint>;
  authority?: Signer<TAccountAuthority>;
  amount: BurnTokenCheckedInstructionDataArgs['amount'];
  decimals: BurnTokenCheckedInstructionDataArgs['decimals'];
};

export async function burnTokenChecked<
  TReturn,
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      BurnTokenCheckedInstruction<
        TProgram,
        TAccountAccount,
        TAccountMint,
        TAccountAuthority
      >,
      TReturn
    >,
  input: BurnTokenCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>
): Promise<TReturn>;
export async function burnTokenChecked<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BurnTokenCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>
): Promise<
  WrappedInstruction<
    BurnTokenCheckedInstruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountAuthority
    >
  >
>;
export async function burnTokenChecked<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: BurnTokenCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>
): Promise<
  WrappedInstruction<
    BurnTokenCheckedInstruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountAuthority
    >
  >
>;
export async function burnTokenChecked<
  TReturn,
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | BurnTokenCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>,
  rawInput?: BurnTokenCheckedInput<
    TAccountAccount,
    TAccountMint,
    TAccountAuthority
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as BurnTokenCheckedInput<TAccountAccount, TAccountMint, TAccountAuthority>;

  // Program address.
  const defaultProgramAddress =
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'splToken',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof burnTokenCheckedInstruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const [accountMetas, signers] = getAccountMetasAndSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  // TODO

  // Bytes created on chain.
  // TODO

  return {
    instruction: burnTokenCheckedInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as BurnTokenCheckedInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
