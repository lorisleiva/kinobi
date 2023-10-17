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
  WritableAccount,
} from '@solana/instructions';
import {
  Context,
  CustomGeneratedInstruction,
  WrappedInstruction,
  accountMetaWithDefault,
} from '../shared';

// Output.
export type SyncNativeInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount
    ]
  >;

export type SyncNativeInstructionData = { discriminator: number };

export type SyncNativeInstructionDataArgs = {};

export function getSyncNativeInstructionDataEncoder(): Encoder<SyncNativeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<SyncNativeInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'SyncNativeInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 17 } as SyncNativeInstructionData)
  ) as Encoder<SyncNativeInstructionDataArgs>;
}

export function getSyncNativeInstructionDataDecoder(): Decoder<SyncNativeInstructionData> {
  return getStructDecoder<SyncNativeInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'SyncNativeInstructionData' }
  ) as Decoder<SyncNativeInstructionData>;
}

export function getSyncNativeInstructionDataCodec(): Codec<
  SyncNativeInstructionDataArgs,
  SyncNativeInstructionData
> {
  return combineCodec(
    getSyncNativeInstructionDataEncoder(),
    getSyncNativeInstructionDataDecoder()
  );
}

export function syncNativeInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [accountMetaWithDefault(accounts.account, AccountRole.WRITABLE)],
    data: getSyncNativeInstructionDataEncoder().encode({}),
    programAddress,
  } as SyncNativeInstruction<TProgram, TAccountAccount>;
}

// Input.
export type SyncNativeInput<TAccountAccount extends string> = {
  account: Base58EncodedAddress<TAccountAccount>;
};

export async function syncNative<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SyncNativeInstruction<TProgram, TAccountAccount>,
      TReturn
    >,
  input: SyncNativeInput<TAccountAccount>
): Promise<TReturn>;
export async function syncNative<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SyncNativeInput<TAccountAccount>
): Promise<
  WrappedInstruction<SyncNativeInstruction<TProgram, TAccountAccount>>
>;
export async function syncNative<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string
>(
  input: SyncNativeInput<TAccountAccount>
): Promise<
  WrappedInstruction<SyncNativeInstruction<TProgram, TAccountAccount>>
>;
export async function syncNative<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string = string
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          SyncNativeInstruction<TProgram, TAccountAccount>,
          TReturn
        >)
    | SyncNativeInput<TAccountAccount>,
  rawInput?: SyncNativeInput<TAccountAccount>
): Promise<
  TReturn | WrappedInstruction<SyncNativeInstruction<TProgram, TAccountAccount>>
> {
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          SyncNativeInstruction<TProgram, TAccountAccount>,
          TReturn
        >);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SyncNativeInput<TAccountAccount>;

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

  return {
    instruction: syncNativeInstruction(input as any, input, programAddress),
    signers: [],
    bytesCreatedOnChain: 0,
  };
}
