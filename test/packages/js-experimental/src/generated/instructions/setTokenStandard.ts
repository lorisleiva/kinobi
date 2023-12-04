/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
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
  WritableSignerAccount,
} from '@solana/instructions';
import {
  IAccountSignerMeta,
  IInstructionWithSigners,
  TransactionSigner,
} from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  IInstructionWithBytesCreatedOnChain,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

// Output.
export type SetTokenStandardInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountUpdateAuthority extends string
        ? WritableSignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountEdition extends string
        ? ReadonlyAccount<TAccountEdition>
        : TAccountEdition,
      ...TRemainingAccounts
    ]
  >;

export type SetTokenStandardInstructionData = { discriminator: number };

export type SetTokenStandardInstructionDataArgs = {};

export function getSetTokenStandardInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 35 })
  ) satisfies Encoder<SetTokenStandardInstructionDataArgs>;
}

export function getSetTokenStandardInstructionDataDecoder() {
  return getStructDecoder<SetTokenStandardInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<SetTokenStandardInstructionData>;
}

export function getSetTokenStandardInstructionDataCodec(): Codec<
  SetTokenStandardInstructionDataArgs,
  SetTokenStandardInstructionData
> {
  return combineCodec(
    getSetTokenStandardInstructionDataEncoder(),
    getSetTokenStandardInstructionDataDecoder()
  );
}

export function setTokenStandardInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountEdition extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    edition?: TAccountEdition extends string
      ? Address<TAccountEdition>
      : TAccountEdition;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.WRITABLE_SIGNER
      ),
      accountMetaWithDefault(accounts.mint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.edition ?? {
          address:
            'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getSetTokenStandardInstructionDataEncoder().encode({}),
    programAddress,
  } as SetTokenStandardInstruction<
    TProgram,
    TAccountMetadata,
    TAccountUpdateAuthority,
    TAccountMint,
    TAccountEdition,
    TRemainingAccounts
  >;
}

// Input.
export type SetTokenStandardInput<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TAccountMint extends string,
  TAccountEdition extends string
> = {
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** Metadata update authority */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /** Mint account */
  mint: Address<TAccountMint>;
  /** Edition account */
  edition?: Address<TAccountEdition>;
};

export async function setTokenStandard<
  TReturn,
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TAccountMint extends string,
  TAccountEdition extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      SetTokenStandardInstruction<
        TProgram,
        TAccountMetadata,
        WritableSignerAccount<TAccountUpdateAuthority> &
          IAccountSignerMeta<TAccountUpdateAuthority>,
        TAccountMint,
        TAccountEdition
      >,
      TReturn
    >,
  input: SetTokenStandardInput<
    TAccountMetadata,
    TAccountUpdateAuthority,
    TAccountMint,
    TAccountEdition
  >
): Promise<TReturn>;
export async function setTokenStandard<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TAccountMint extends string,
  TAccountEdition extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: SetTokenStandardInput<
    TAccountMetadata,
    TAccountUpdateAuthority,
    TAccountMint,
    TAccountEdition
  >
): Promise<
  SetTokenStandardInstruction<
    TProgram,
    TAccountMetadata,
    WritableSignerAccount<TAccountUpdateAuthority> &
      IAccountSignerMeta<TAccountUpdateAuthority>,
    TAccountMint,
    TAccountEdition
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function setTokenStandard<
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TAccountMint extends string,
  TAccountEdition extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: SetTokenStandardInput<
    TAccountMetadata,
    TAccountUpdateAuthority,
    TAccountMint,
    TAccountEdition
  >
): Promise<
  SetTokenStandardInstruction<
    TProgram,
    TAccountMetadata,
    WritableSignerAccount<TAccountUpdateAuthority> &
      IAccountSignerMeta<TAccountUpdateAuthority>,
    TAccountMint,
    TAccountEdition
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function setTokenStandard<
  TReturn,
  TAccountMetadata extends string,
  TAccountUpdateAuthority extends string,
  TAccountMint extends string,
  TAccountEdition extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | SetTokenStandardInput<
        TAccountMetadata,
        TAccountUpdateAuthority,
        TAccountMint,
        TAccountEdition
      >,
  rawInput?: SetTokenStandardInput<
    TAccountMetadata,
    TAccountUpdateAuthority,
    TAccountMint,
    TAccountEdition
  >
): Promise<
  | TReturn
  | (IInstruction &
      IInstructionWithSigners &
      IInstructionWithBytesCreatedOnChain)
> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as SetTokenStandardInput<
    TAccountMetadata,
    TAccountUpdateAuthority,
    TAccountMint,
    TAccountEdition
  >;

  // Program address.
  const defaultProgramAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  const programAddress = (
    context.getProgramAddress
      ? await context.getProgramAddress({
          name: 'mplTokenMetadata',
          address: defaultProgramAddress,
        })
      : defaultProgramAddress
  ) as Address<TProgram>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof setTokenStandardInstruction<
      TProgram,
      TAccountMetadata,
      TAccountUpdateAuthority,
      TAccountMint,
      TAccountEdition
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    updateAuthority: { value: input.updateAuthority ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    edition: { value: input.edition ?? null, isWritable: false },
  };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  // Remaining accounts.
  const remainingAccounts: IAccountMeta[] = [];

  // Bytes created on chain.
  const bytesCreatedOnChain = 0;

  // Instruction.
  const instruction = {
    ...setTokenStandardInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
