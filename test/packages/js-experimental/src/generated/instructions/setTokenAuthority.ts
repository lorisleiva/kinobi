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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  Signer,
  WrappedInstruction,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';
import {
  TokenAuthorityType,
  TokenAuthorityTypeArgs,
  getTokenAuthorityTypeDecoder,
  getTokenAuthorityTypeEncoder,
} from '../types';

// Output.
export type SetTokenAuthorityInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountOwned extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountOwned extends string
        ? WritableAccount<TAccountOwned>
        : TAccountOwned,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      ...TRemainingAccounts
    ]
  >;

export type SetTokenAuthorityInstructionData = {
  discriminator: number;
  authorityType: TokenAuthorityType;
  newAuthority: Option<Base58EncodedAddress>;
};

export type SetTokenAuthorityInstructionDataArgs = {
  authorityType: TokenAuthorityTypeArgs;
  newAuthority: OptionOrNullable<Base58EncodedAddress>;
};

export function getSetTokenAuthorityInstructionDataEncoder(): Encoder<SetTokenAuthorityInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      authorityType: TokenAuthorityTypeArgs;
      newAuthority: OptionOrNullable<Base58EncodedAddress>;
    }>(
      [
        ['discriminator', getU8Encoder()],
        ['authorityType', getTokenAuthorityTypeEncoder()],
        ['newAuthority', getOptionEncoder(getAddressEncoder())],
      ],
      { description: 'SetTokenAuthorityInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 6 })
  ) as Encoder<SetTokenAuthorityInstructionDataArgs>;
}

export function getSetTokenAuthorityInstructionDataDecoder(): Decoder<SetTokenAuthorityInstructionData> {
  return getStructDecoder<SetTokenAuthorityInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['authorityType', getTokenAuthorityTypeDecoder()],
      ['newAuthority', getOptionDecoder(getAddressDecoder())],
    ],
    { description: 'SetTokenAuthorityInstructionData' }
  ) as Decoder<SetTokenAuthorityInstructionData>;
}

export function getSetTokenAuthorityInstructionDataCodec(): Codec<
  SetTokenAuthorityInstructionDataArgs,
  SetTokenAuthorityInstructionData
> {
  return combineCodec(
    getSetTokenAuthorityInstructionDataEncoder(),
    getSetTokenAuthorityInstructionDataDecoder()
  );
}

export function setTokenAuthorityInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountOwned extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    owned: TAccountOwned extends string
      ? Base58EncodedAddress<TAccountOwned>
      : TAccountOwned;
    owner: TAccountOwner extends string
      ? Base58EncodedAddress<TAccountOwner>
      : TAccountOwner;
  },
  args: SetTokenAuthorityInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.owned, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getSetTokenAuthorityInstructionDataEncoder().encode(args),
    programAddress,
  } as SetTokenAuthorityInstruction<
    TProgram,
    TAccountOwned,
    TAccountOwner,
    TRemainingAccounts
  >;
}

// Input.
export type SetTokenAuthorityInput<
  TAccountOwned extends string,
  TAccountOwner extends string
> = {
  owned: Base58EncodedAddress<TAccountOwned>;
  owner: Base58EncodedAddress<TAccountOwner> | Signer<TAccountOwner>;
  authorityType: SetTokenAuthorityInstructionDataArgs['authorityType'];
  newAuthority: SetTokenAuthorityInstructionDataArgs['newAuthority'];
};

export async function setTokenAuthority<
  TReturn,
  TAccountOwned extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetTokenAuthorityInstruction<
        TProgram,
        TAccountOwned,
        typeof input['owner'] extends Signer<TAccountOwner>
          ? ReadonlySignerAccount<TAccountOwner>
          : TAccountOwner
      >,
      TReturn
    >,
  input: SetTokenAuthorityInput<TAccountOwned, TAccountOwner>
): Promise<TReturn>;
export async function setTokenAuthority<
  TAccountOwned extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetTokenAuthorityInput<TAccountOwned, TAccountOwner>
): Promise<
  WrappedInstruction<
    SetTokenAuthorityInstruction<
      TProgram,
      TAccountOwned,
      typeof input['owner'] extends Signer<TAccountOwner>
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner
    >
  >
>;
export async function setTokenAuthority<
  TAccountOwned extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  input: SetTokenAuthorityInput<TAccountOwned, TAccountOwner>
): Promise<
  WrappedInstruction<
    SetTokenAuthorityInstruction<
      TProgram,
      TAccountOwned,
      typeof input['owner'] extends Signer<TAccountOwner>
        ? ReadonlySignerAccount<TAccountOwner>
        : TAccountOwner
    >
  >
>;
export async function setTokenAuthority<
  TReturn,
  TAccountOwned extends string,
  TAccountOwner extends string,
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | SetTokenAuthorityInput<TAccountOwned, TAccountOwner>,
  rawInput?: SetTokenAuthorityInput<TAccountOwned, TAccountOwner>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SetTokenAuthorityInput<TAccountOwned, TAccountOwner>;

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
    typeof setTokenAuthorityInstruction<TProgram, TAccountOwned, TAccountOwner>
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    owned: { value: input.owned ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
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
    instruction: setTokenAuthorityInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as SetTokenAuthorityInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain,
  };
}
