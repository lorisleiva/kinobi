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
  ReadonlyAccount,
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
export type TransferTokensCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSource extends string
        ? WritableAccount<TAccountSource>
        : TAccountSource,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountAuthority extends string
        ? ReadonlySignerAccount<TAccountAuthority>
        : TAccountAuthority
    ]
  >;

export type TransferTokensCheckedInstructionData = {
  discriminator: number;
  amount: bigint;
  decimals: number;
};

export type TransferTokensCheckedInstructionDataArgs = {
  amount: number | bigint;
  decimals: number;
};

export function getTransferTokensCheckedInstructionDataEncoder(): Encoder<TransferTokensCheckedInstructionDataArgs> {
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
      { description: 'TransferTokensCheckedInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 12 })
  ) as Encoder<TransferTokensCheckedInstructionDataArgs>;
}

export function getTransferTokensCheckedInstructionDataDecoder(): Decoder<TransferTokensCheckedInstructionData> {
  return getStructDecoder<TransferTokensCheckedInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['amount', getU64Decoder()],
      ['decimals', getU8Decoder()],
    ],
    { description: 'TransferTokensCheckedInstructionData' }
  ) as Decoder<TransferTokensCheckedInstructionData>;
}

export function getTransferTokensCheckedInstructionDataCodec(): Codec<
  TransferTokensCheckedInstructionDataArgs,
  TransferTokensCheckedInstructionData
> {
  return combineCodec(
    getTransferTokensCheckedInstructionDataEncoder(),
    getTransferTokensCheckedInstructionDataDecoder()
  );
}

export function transferTokensCheckedInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string
>(
  accounts: {
    source: TAccountSource extends string
      ? Base58EncodedAddress<TAccountSource>
      : TAccountSource;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    destination: TAccountDestination extends string
      ? Base58EncodedAddress<TAccountDestination>
      : TAccountDestination;
    authority: TAccountAuthority extends string
      ? Base58EncodedAddress<TAccountAuthority>
      : TAccountAuthority;
  },
  args: TransferTokensCheckedInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.source, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.authority, AccountRole.READONLY_SIGNER),
    ],
    data: getTransferTokensCheckedInstructionDataEncoder().encode(args),
    programAddress,
  } as TransferTokensCheckedInstruction<
    TProgram,
    TAccountSource,
    TAccountMint,
    TAccountDestination,
    TAccountAuthority
  >;
}

// Input.
export type TransferTokensCheckedInput<
  TAccountSource extends string,
  TAccountMint extends string,
  TAccountDestination extends string,
  TAccountAuthority extends string
> = {
  source: Base58EncodedAddress<TAccountSource>;
  mint: Base58EncodedAddress<TAccountMint>;
  destination: Base58EncodedAddress<TAccountDestination>;
  authority?: Signer<TAccountAuthority>;
  amount: TransferTokensCheckedInstructionDataArgs['amount'];
  decimals: TransferTokensCheckedInstructionDataArgs['decimals'];
};

export async function transferTokensChecked<
  TReturn,
  TAccountSource extends string,
  TAccountMint extends string,
  TAccountDestination extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      TransferTokensCheckedInstruction<
        TProgram,
        TAccountSource,
        TAccountMint,
        TAccountDestination,
        TAccountAuthority
      >,
      TReturn
    >,
  input: TransferTokensCheckedInput<
    TAccountSource,
    TAccountMint,
    TAccountDestination,
    TAccountAuthority
  >
): Promise<TReturn>;
export async function transferTokensChecked<
  TAccountSource extends string,
  TAccountMint extends string,
  TAccountDestination extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: TransferTokensCheckedInput<
    TAccountSource,
    TAccountMint,
    TAccountDestination,
    TAccountAuthority
  >
): Promise<
  WrappedInstruction<
    TransferTokensCheckedInstruction<
      TProgram,
      TAccountSource,
      TAccountMint,
      TAccountDestination,
      TAccountAuthority
    >
  >
>;
export async function transferTokensChecked<
  TAccountSource extends string,
  TAccountMint extends string,
  TAccountDestination extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: TransferTokensCheckedInput<
    TAccountSource,
    TAccountMint,
    TAccountDestination,
    TAccountAuthority
  >
): Promise<
  WrappedInstruction<
    TransferTokensCheckedInstruction<
      TProgram,
      TAccountSource,
      TAccountMint,
      TAccountDestination,
      TAccountAuthority
    >
  >
>;
export async function transferTokensChecked<
  TReturn,
  TAccountSource extends string,
  TAccountMint extends string,
  TAccountDestination extends string,
  TAccountAuthority extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | TransferTokensCheckedInput<
        TAccountSource,
        TAccountMint,
        TAccountDestination,
        TAccountAuthority
      >,
  rawInput?: TransferTokensCheckedInput<
    TAccountSource,
    TAccountMint,
    TAccountDestination,
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
  ) as TransferTokensCheckedInput<
    TAccountSource,
    TAccountMint,
    TAccountDestination,
    TAccountAuthority
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
    typeof transferTokensCheckedInstruction<
      TProgram,
      TAccountSource,
      TAccountMint,
      TAccountDestination,
      TAccountAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    source: { value: input.source ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    destination: { value: input.destination ?? null, isWritable: true },
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
    instruction: transferTokensCheckedInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as TransferTokensCheckedInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
