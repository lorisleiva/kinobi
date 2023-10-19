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
export type CloseTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      TAccountOwner extends string
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner
    ]
  >;

export type CloseTokenInstructionData = { discriminator: number };

export type CloseTokenInstructionDataArgs = {};

export function getCloseTokenInstructionDataEncoder(): Encoder<CloseTokenInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>(
      [['discriminator', getU8Encoder()]],
      { description: 'CloseTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 9 })
  ) as Encoder<CloseTokenInstructionDataArgs>;
}

export function getCloseTokenInstructionDataDecoder(): Decoder<CloseTokenInstructionData> {
  return getStructDecoder<CloseTokenInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'CloseTokenInstructionData' }
  ) as Decoder<CloseTokenInstructionData>;
}

export function getCloseTokenInstructionDataCodec(): Codec<
  CloseTokenInstructionDataArgs,
  CloseTokenInstructionData
> {
  return combineCodec(
    getCloseTokenInstructionDataEncoder(),
    getCloseTokenInstructionDataDecoder()
  );
}

export function closeTokenInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string
>(
  accounts: {
    account: TAccountAccount extends string
      ? Base58EncodedAddress<TAccountAccount>
      : TAccountAccount;
    destination: TAccountDestination extends string
      ? Base58EncodedAddress<TAccountDestination>
      : TAccountDestination;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.account, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY_SIGNER),
    ],
    data: getCloseTokenInstructionDataEncoder().encode({}),
    programAddress,
  } as CloseTokenInstruction<
    TProgram,
    TAccountAccount,
    TAccountDestination,
    TAccountOwner
  >;
}

// Input.
export type CloseTokenInput<
  TAccountAccount extends string,
  TAccountDestination extends string,
  TAccountOwner extends string
> = {
  account: Base58EncodedAddress<TAccountAccount>;
  destination: Base58EncodedAddress<TAccountDestination>;
  owner: Signer<TAccountOwner>;
};

export async function closeToken<
  TReturn,
  TAccountAccount extends string,
  TAccountDestination extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CloseTokenInstruction<
        TProgram,
        TAccountAccount,
        TAccountDestination,
        TAccountOwner
      >,
      TReturn
    >,
  input: CloseTokenInput<TAccountAccount, TAccountDestination, TAccountOwner>
): Promise<TReturn>;
export async function closeToken<
  TAccountAccount extends string,
  TAccountDestination extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CloseTokenInput<TAccountAccount, TAccountDestination, TAccountOwner>
): Promise<
  WrappedInstruction<
    CloseTokenInstruction<
      TProgram,
      TAccountAccount,
      TAccountDestination,
      TAccountOwner
    >
  >
>;
export async function closeToken<
  TAccountAccount extends string,
  TAccountDestination extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: CloseTokenInput<TAccountAccount, TAccountDestination, TAccountOwner>
): Promise<
  WrappedInstruction<
    CloseTokenInstruction<
      TProgram,
      TAccountAccount,
      TAccountDestination,
      TAccountOwner
    >
  >
>;
export async function closeToken<
  TReturn,
  TAccountAccount extends string,
  TAccountDestination extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | CloseTokenInput<TAccountAccount, TAccountDestination, TAccountOwner>,
  rawInput?: CloseTokenInput<
    TAccountAccount,
    TAccountDestination,
    TAccountOwner
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CloseTokenInput<TAccountAccount, TAccountDestination, TAccountOwner>;

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
    typeof closeTokenInstruction<
      TProgram,
      TAccountAccount,
      TAccountDestination,
      TAccountOwner
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    account: { value: input.account ?? null, isWritable: true },
    destination: { value: input.destination ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
  };

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
    instruction: closeTokenInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
