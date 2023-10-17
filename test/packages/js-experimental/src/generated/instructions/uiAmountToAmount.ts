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
  WrappedInstruction,
  accountMetaWithDefault,
} from '../shared';

// Output.
export type UiAmountToAmountInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [TAccountMint extends string ? ReadonlyAccount<TAccountMint> : TAccountMint]
  >;

export type UiAmountToAmountInstructionData = {
  discriminator: number;
  uiAmount: bigint;
};

export type UiAmountToAmountInstructionDataArgs = { uiAmount: number | bigint };

export function getUiAmountToAmountInstructionDataEncoder(): Encoder<UiAmountToAmountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<UiAmountToAmountInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['uiAmount', getU64Encoder()],
      ],
      { description: 'UiAmountToAmountInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 24 } as UiAmountToAmountInstructionData)
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
  TAccountMint extends string | IAccountMeta<string> = string
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
  },
  args: UiAmountToAmountInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [accountMetaWithDefault(accounts.mint, AccountRole.READONLY)],
    data: getUiAmountToAmountInstructionDataEncoder().encode(args),
    programAddress,
  } as UiAmountToAmountInstruction<TProgram, TAccountMint>;
}

// Input.
export type UiAmountToAmountInput<TAccountMint extends string> = {
  mint: Base58EncodedAddress<TAccountMint>;
  uiAmount: UiAmountToAmountInstructionDataArgs['uiAmount'];
};

export async function uiAmountToAmount<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      UiAmountToAmountInstruction<TProgram, TAccountMint>,
      TReturn
    >,
  input: UiAmountToAmountInput<TAccountMint>
): Promise<TReturn>;
export async function uiAmountToAmount<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: UiAmountToAmountInput<TAccountMint>
): Promise<
  WrappedInstruction<UiAmountToAmountInstruction<TProgram, TAccountMint>>
>;
export async function uiAmountToAmount<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  input: UiAmountToAmountInput<TAccountMint>
): Promise<
  WrappedInstruction<UiAmountToAmountInstruction<TProgram, TAccountMint>>
>;
export async function uiAmountToAmount<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  context:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          UiAmountToAmountInstruction<TProgram, TAccountMint>,
          TReturn
        >)
    | UiAmountToAmountInput<TAccountMint>,
  input?: UiAmountToAmountInput<TAccountMint>
): Promise<
  | TReturn
  | WrappedInstruction<UiAmountToAmountInstruction<TProgram, TAccountMint>>
> {
  throw new Error('Not implemented');
}
