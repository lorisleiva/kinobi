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
export type MintTokensToCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountToken extends string
        ? WritableAccount<TAccountToken>
        : TAccountToken,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority
    ]
  >;

export type MintTokensToCheckedInstructionData = {
  discriminator: number;
  amount: bigint;
  decimals: number;
};

export type MintTokensToCheckedInstructionDataArgs = {
  amount: number | bigint;
  decimals: number;
};

export function getMintTokensToCheckedInstructionDataEncoder(): Encoder<MintTokensToCheckedInstructionDataArgs> {
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
      { description: 'MintTokensToCheckedInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 14 })
  ) as Encoder<MintTokensToCheckedInstructionDataArgs>;
}

export function getMintTokensToCheckedInstructionDataDecoder(): Decoder<MintTokensToCheckedInstructionData> {
  return getStructDecoder<MintTokensToCheckedInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
      ['decimals', getU8Decoder()],
    ],
    { description: 'MintTokensToCheckedInstructionData' }
  ) as Decoder<MintTokensToCheckedInstructionData>;
}

export function getMintTokensToCheckedInstructionDataCodec(): Codec<
  MintTokensToCheckedInstructionDataArgs,
  MintTokensToCheckedInstructionData
> {
  return combineCodec(
    getMintTokensToCheckedInstructionDataEncoder(),
    getMintTokensToCheckedInstructionDataDecoder()
  );
}

export function mintTokensToCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountToken extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    token: TAccountToken extends string
      ? Base58EncodedAddress<TAccountToken>
      : TAccountToken;
    mintAuthority: TAccountMintAuthority extends string
      ? Base58EncodedAddress<TAccountMintAuthority>
      : TAccountMintAuthority;
  },
  args: MintTokensToCheckedInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.token, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
    ],
    data: getMintTokensToCheckedInstructionDataEncoder().encode(args),
    programAddress,
  } as MintTokensToCheckedInstruction<
    TProgram,
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >;
}

// Input.
export type MintTokensToCheckedInput<
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string
> = {
  mint: Base58EncodedAddress<TAccountMint>;
  token: Base58EncodedAddress<TAccountToken>;
  mintAuthority: Signer<TAccountMintAuthority>;
  amount: MintTokensToCheckedInstructionDataArgs['amount'];
  decimals: MintTokensToCheckedInstructionDataArgs['decimals'];
};

export async function mintTokensToChecked<
  TReturn,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      MintTokensToCheckedInstruction<
        TProgram,
        TAccountMint,
        TAccountToken,
        TAccountMintAuthority
      >,
      TReturn
    >,
  input: MintTokensToCheckedInput<
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >
): Promise<TReturn>;
export async function mintTokensToChecked<
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: MintTokensToCheckedInput<
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >
): Promise<
  WrappedInstruction<
    MintTokensToCheckedInstruction<
      TProgram,
      TAccountMint,
      TAccountToken,
      TAccountMintAuthority
    >
  >
>;
export async function mintTokensToChecked<
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: MintTokensToCheckedInput<
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >
): Promise<
  WrappedInstruction<
    MintTokensToCheckedInstruction<
      TProgram,
      TAccountMint,
      TAccountToken,
      TAccountMintAuthority
    >
  >
>;
export async function mintTokensToChecked<
  TReturn,
  TAccountMint extends string,
  TAccountToken extends string,
  TAccountMintAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | MintTokensToCheckedInput<
        TAccountMint,
        TAccountToken,
        TAccountMintAuthority
      >,
  rawInput?: MintTokensToCheckedInput<
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as MintTokensToCheckedInput<
    TAccountMint,
    TAccountToken,
    TAccountMintAuthority
  >;

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
    typeof mintTokensToCheckedInstruction<
      TProgram,
      TAccountMint,
      TAccountToken,
      TAccountMintAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    mint: { value: input.mint ?? null, isWritable: true },
    token: { value: input.token ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
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
    instruction: mintTokensToCheckedInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as MintTokensToCheckedInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
