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
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type UiAmountToAmountInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      ...TRemainingAccounts
    ]
  >;

export type UiAmountToAmountInstructionData = {
  discriminator: number;
  uiAmount: bigint;
};

export type UiAmountToAmountInstructionDataArgs = { uiAmount: number | bigint };

export function getUiAmountToAmountInstructionDataEncoder(): Encoder<UiAmountToAmountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; uiAmount: number | bigint }>(
      [
        ['discriminator', getU8Encoder()],
        ['uiAmount', getU64Encoder()],
      ],
      { description: 'UiAmountToAmountInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 24 })
  ) as Encoder<UiAmountToAmountInstructionDataArgs>;
}

export function getUiAmountToAmountInstructionDataDecoder(): Decoder<UiAmountToAmountInstructionData> {
  return getStructDecoder<UiAmountToAmountInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['uiAmount', getU64Decoder()],
    ],
    { description: 'UiAmountToAmountInstructionData' }
  ) as Decoder<UiAmountToAmountInstructionData>;
}

export function getUiAmountToAmountInstructionDataCodec(): Codec<
  UiAmountToAmountInstructionDataArgs,
  UiAmountToAmountInstructionData
> {
  return combineCodec(
    getUiAmountToAmountInstructionDataEncoder(),
    getUiAmountToAmountInstructionDataDecoder()
  );
}

export function uiAmountToAmountInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
  },
  args: UiAmountToAmountInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getUiAmountToAmountInstructionDataEncoder().encode(args),
    programAddress,
  } as UiAmountToAmountInstruction<TProgram, TAccountMint, TRemainingAccounts>;
}

// Input.
export type UiAmountToAmountInput<TAccountMint extends string> = {
  mint: Base58EncodedAddress<TAccountMint>;
  uiAmount: UiAmountToAmountInstructionDataArgs['uiAmount'];
};

export async function uiAmountToAmount<
  TReturn,
  TAccountMint extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      UiAmountToAmountInstruction<TProgram, TAccountMint>,
      TReturn
    >,
  input: UiAmountToAmountInput<TAccountMint>
): Promise<TReturn>;
export async function uiAmountToAmount<
  TAccountMint extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UiAmountToAmountInput<TAccountMint>
): Promise<
  WrappedInstruction<UiAmountToAmountInstruction<TProgram, TAccountMint>>
>;
export async function uiAmountToAmount<
  TAccountMint extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: UiAmountToAmountInput<TAccountMint>
): Promise<
  WrappedInstruction<UiAmountToAmountInstruction<TProgram, TAccountMint>>
>;
export async function uiAmountToAmount<
  TReturn,
  TAccountMint extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | UiAmountToAmountInput<TAccountMint>,
  rawInput?: UiAmountToAmountInput<TAccountMint>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as UiAmountToAmountInput<TAccountMint>;

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
    typeof uiAmountToAmountInstruction<TProgram, TAccountMint>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    mint: { value: input.mint ?? null, isWritable: false },
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
  const bytesCreatedOnChain = 0;

  return {
    instruction: uiAmountToAmountInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as UiAmountToAmountInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain,
  };
}
