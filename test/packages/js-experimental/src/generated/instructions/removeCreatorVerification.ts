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
export type RemoveCreatorVerificationInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountCreator extends string
        ? ReadonlySignerAccount<TAccountCreator>
        : TAccountCreator
    ]
  >;

export type RemoveCreatorVerificationInstructionData = {
  discriminator: number;
};

export type RemoveCreatorVerificationInstructionDataArgs = {};

export function getRemoveCreatorVerificationInstructionDataEncoder(): Encoder<RemoveCreatorVerificationInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>(
      [['discriminator', getU8Encoder()]],
      { description: 'RemoveCreatorVerificationInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 28 })
  ) as Encoder<RemoveCreatorVerificationInstructionDataArgs>;
}

export function getRemoveCreatorVerificationInstructionDataDecoder(): Decoder<RemoveCreatorVerificationInstructionData> {
  return getStructDecoder<RemoveCreatorVerificationInstructionData>(
    [['discriminator', getU8Decoder()]],
    { description: 'RemoveCreatorVerificationInstructionData' }
  ) as Decoder<RemoveCreatorVerificationInstructionData>;
}

export function getRemoveCreatorVerificationInstructionDataCodec(): Codec<
  RemoveCreatorVerificationInstructionDataArgs,
  RemoveCreatorVerificationInstructionData
> {
  return combineCodec(
    getRemoveCreatorVerificationInstructionDataEncoder(),
    getRemoveCreatorVerificationInstructionDataDecoder()
  );
}

export function removeCreatorVerificationInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountCreator extends string | IAccountMeta<string> = string
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Base58EncodedAddress<TAccountMetadata>
      : TAccountMetadata;
    creator: TAccountCreator extends string
      ? Base58EncodedAddress<TAccountCreator>
      : TAccountCreator;
  },
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.creator, AccountRole.READONLY_SIGNER),
    ],
    data: getRemoveCreatorVerificationInstructionDataEncoder().encode({}),
    programAddress,
  } as RemoveCreatorVerificationInstruction<
    TProgram,
    TAccountMetadata,
    TAccountCreator
  >;
}

// Input.
export type RemoveCreatorVerificationInput<
  TAccountMetadata extends string,
  TAccountCreator extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Base58EncodedAddress<TAccountMetadata>;
  /** Creator */
  creator: Signer<TAccountCreator>;
};

export async function removeCreatorVerification<
  TReturn,
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      RemoveCreatorVerificationInstruction<
        TProgram,
        TAccountMetadata,
        TAccountCreator
      >,
      TReturn
    >,
  input: RemoveCreatorVerificationInput<TAccountMetadata, TAccountCreator>
): Promise<TReturn>;
export async function removeCreatorVerification<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: RemoveCreatorVerificationInput<TAccountMetadata, TAccountCreator>
): Promise<
  WrappedInstruction<
    RemoveCreatorVerificationInstruction<
      TProgram,
      TAccountMetadata,
      TAccountCreator
    >
  >
>;
export async function removeCreatorVerification<
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: RemoveCreatorVerificationInput<TAccountMetadata, TAccountCreator>
): Promise<
  WrappedInstruction<
    RemoveCreatorVerificationInstruction<
      TProgram,
      TAccountMetadata,
      TAccountCreator
    >
  >
>;
export async function removeCreatorVerification<
  TReturn,
  TAccountMetadata extends string,
  TAccountCreator extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | RemoveCreatorVerificationInput<TAccountMetadata, TAccountCreator>,
  rawInput?: RemoveCreatorVerificationInput<TAccountMetadata, TAccountCreator>
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as RemoveCreatorVerificationInput<TAccountMetadata, TAccountCreator>;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Base58EncodedAddress<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof removeCreatorVerificationInstruction<
      TProgram,
      TAccountMetadata,
      TAccountCreator
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    creator: { value: input.creator ?? null, isWritable: false },
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
    instruction: removeCreatorVerificationInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
