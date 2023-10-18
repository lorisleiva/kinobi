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
export type GetTokenDataSizeInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [TAccountMint extends string ? ReadonlyAccount<TAccountMint> : TAccountMint]
  >;

export type GetTokenDataSizeInstructionData = { discriminator: number };

export type GetTokenDataSizeInstructionDataArgs = {};

export function getGetTokenDataSizeInstructionDataEncoder(): Encoder<GetTokenDataSizeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<GetTokenDataSizeInstructionData>(
      [['discriminator', getU8Encoder()]],
      { description: 'GetTokenDataSizeInstructionData' }
    ),
    (value) =>
      ({ ...value, discriminator: 21 } as GetTokenDataSizeInstructionData)
  ) as Encoder<GetTokenDataSizeInstructionDataArgs>;
}

export function getGetTokenDataSizeInstructionDataDecoder(): Decoder<GetTokenDataSizeInstructionData> {
  return getStructDecoder<GetTokenDataSizeInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'GetTokenDataSizeInstructionData' }
  ) as Decoder<GetTokenDataSizeInstructionData>;
}

export function getGetTokenDataSizeInstructionDataCodec(): Codec<
  GetTokenDataSizeInstructionDataArgs,
  GetTokenDataSizeInstructionData
> {
  return combineCodec(
    getGetTokenDataSizeInstructionDataEncoder(),
    getGetTokenDataSizeInstructionDataDecoder()
  );
}

export function getTokenDataSizeInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [accountMetaWithDefault(accounts.mint, AccountRole.READONLY)],
    data: getGetTokenDataSizeInstructionDataEncoder().encode({}),
    programAddress,
  } as GetTokenDataSizeInstruction<TProgram, TAccountMint>;
}

// Input.
export type GetTokenDataSizeInput<TAccountMint extends string> = {
  mint: Base58EncodedAddress<TAccountMint>;
};

export async function getTokenDataSize<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      GetTokenDataSizeInstruction<TProgram, TAccountMint>,
      TReturn
    >,
  input: GetTokenDataSizeInput<TAccountMint>
): Promise<TReturn>;
export async function getTokenDataSize<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: GetTokenDataSizeInput<TAccountMint>
): Promise<
  WrappedInstruction<GetTokenDataSizeInstruction<TProgram, TAccountMint>>
>;
export async function getTokenDataSize<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  input: GetTokenDataSizeInput<TAccountMint>
): Promise<
  WrappedInstruction<GetTokenDataSizeInstruction<TProgram, TAccountMint>>
>;
export async function getTokenDataSize<
  TReturn,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string = string
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          GetTokenDataSizeInstruction<TProgram, TAccountMint>,
          TReturn
        >)
    | GetTokenDataSizeInput<TAccountMint>,
  rawInput?: GetTokenDataSizeInput<TAccountMint>
): Promise<
  | TReturn
  | WrappedInstruction<GetTokenDataSizeInstruction<TProgram, TAccountMint>>
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<
          GetTokenDataSizeInstruction<TProgram, TAccountMint>,
          TReturn
        >);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as GetTokenDataSizeInput<TAccountMint>;

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
  type AccountMetas = Parameters<typeof getTokenDataSizeInstruction>[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    mint: { value: input.mint ?? null, isWritable: false },
  };

  // Resolve default values.

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
    instruction: getTokenDataSizeInstruction(
      accountMetas as AccountMetas,
      programAddress
    ) as GetTokenDataSizeInstruction<TProgram, TAccountMint>,
    signers,
    bytesCreatedOnChain: 0,
  };
}
