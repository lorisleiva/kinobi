/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
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
export type InitializeToken2Instruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type InitializeToken2InstructionData = {
  discriminator: number;
  owner: Base58EncodedAddress;
};

export type InitializeToken2InstructionDataArgs = {
  owner: Base58EncodedAddress;
};

export function getInitializeToken2InstructionDataEncoder(): Encoder<InitializeToken2InstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number; owner: Base58EncodedAddress }>(
      [
        ['discriminator', getU8Encoder()],
        ['owner', getAddressEncoder()],
      ],
      { description: 'InitializeToken2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 16 })
  ) as Encoder<InitializeToken2InstructionDataArgs>;
}

export function getInitializeToken2InstructionDataDecoder(): Decoder<InitializeToken2InstructionData> {
  return getStructDecoder<InitializeToken2InstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['owner', getAddressDecoder()],
    ],
    { description: 'InitializeToken2InstructionData' }
  ) as Decoder<InitializeToken2InstructionData>;
}

export function getInitializeToken2InstructionDataCodec(): Codec<
  InitializeToken2InstructionDataArgs,
  InitializeToken2InstructionData
> {
  return combineCodec(
    getInitializeToken2InstructionDataEncoder(),
    getInitializeToken2InstructionDataDecoder()
  );
}

export function initializeToken2Instruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    rent?: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: InitializeToken2InstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.rent ?? 'SysvarRent111111111111111111111111111111111',
        AccountRole.READONLY
      ),
    ],
    data: getInitializeToken2InstructionDataEncoder().encode(args),
    programAddress,
  } as InitializeToken2Instruction<
    TProgram,
    TAccountAccount,
    TAccountMint,
    TAccountRent
  >;
}

// Input.
export type InitializeToken2Input<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountRent extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  mint: Base58EncodedAddress<TAccountMint>;
  rent?: Base58EncodedAddress<TAccountRent>;
  owner: InitializeToken2InstructionDataArgs['owner'];
};

export async function initializeToken2<
  TReturn,
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountRent extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      InitializeToken2Instruction<
        TProgram,
        TAccountAccount,
        TAccountMint,
        TAccountRent
      >,
      TReturn
    >,
  input: InitializeToken2Input<TAccountAccount, TAccountMint, TAccountRent>
): Promise<TReturn>;
export async function initializeToken2<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountRent extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: InitializeToken2Input<TAccountAccount, TAccountMint, TAccountRent>
): Promise<
  WrappedInstruction<
    InitializeToken2Instruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountRent
    >
  >
>;
export async function initializeToken2<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountRent extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: InitializeToken2Input<TAccountAccount, TAccountMint, TAccountRent>
): Promise<
  WrappedInstruction<
    InitializeToken2Instruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountRent
    >
  >
>;
export async function initializeToken2<
  TReturn,
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountRent extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | InitializeToken2Input<TAccountAccount, TAccountMint, TAccountRent>,
  rawInput?: InitializeToken2Input<TAccountAccount, TAccountMint, TAccountRent>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as InitializeToken2Input<TAccountAccount, TAccountMint, TAccountRent>;

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
    typeof initializeToken2Instruction<
      TProgram,
      TAccountAccount,
      TAccountMint,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Base58EncodedAddress<'SysvarRent111111111111111111111111111111111'>;
  }

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
    instruction: initializeToken2Instruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as InitializeToken2InstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain,
  };
}
