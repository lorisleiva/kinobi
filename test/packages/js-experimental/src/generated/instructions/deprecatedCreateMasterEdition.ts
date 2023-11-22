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
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import { IInstructionWithSigners, TransactionSigner } from '@solana/signers';
import {
  Context,
  CustomGeneratedInstruction,
  IInstructionWithBytesCreatedOnChain,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';
import {
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsDecoder,
  getCreateMasterEditionArgsEncoder,
} from '../types';

// Output.
export type DeprecatedCreateMasterEditionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountPrintingMint extends string | IAccountMeta<string> = string,
  TAccountOneTimePrintingAuthorizationMint extends
    | string
    | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPrintingMintAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountOneTimePrintingAuthorizationMintAuthority extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountEdition extends string
        ? WritableAccount<TAccountEdition>
        : TAccountEdition,
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountPrintingMint extends string
        ? WritableAccount<TAccountPrintingMint>
        : TAccountPrintingMint,
      TAccountOneTimePrintingAuthorizationMint extends string
        ? WritableAccount<TAccountOneTimePrintingAuthorizationMint>
        : TAccountOneTimePrintingAuthorizationMint,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountPrintingMintAuthority extends string
        ? ReadonlySignerAccount<TAccountPrintingMintAuthority>
        : TAccountPrintingMintAuthority,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      TAccountOneTimePrintingAuthorizationMintAuthority extends string
        ? ReadonlySignerAccount<TAccountOneTimePrintingAuthorizationMintAuthority>
        : TAccountOneTimePrintingAuthorizationMintAuthority,
      ...TRemainingAccounts
    ]
  >;

export type DeprecatedCreateMasterEditionInstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};

export type DeprecatedCreateMasterEditionInstructionDataArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

export function getDeprecatedCreateMasterEditionInstructionDataEncoder(): Encoder<DeprecatedCreateMasterEditionInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      createMasterEditionArgs: CreateMasterEditionArgsArgs;
    }>(
      [
        ['discriminator', getU8Encoder()],
        ['createMasterEditionArgs', getCreateMasterEditionArgsEncoder()],
      ],
      { description: 'DeprecatedCreateMasterEditionInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 2 })
  ) as Encoder<DeprecatedCreateMasterEditionInstructionDataArgs>;
}

export function getDeprecatedCreateMasterEditionInstructionDataDecoder(): Decoder<DeprecatedCreateMasterEditionInstructionData> {
  return getStructDecoder<DeprecatedCreateMasterEditionInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['createMasterEditionArgs', getCreateMasterEditionArgsDecoder()],
    ],
    { description: 'DeprecatedCreateMasterEditionInstructionData' }
  ) as Decoder<DeprecatedCreateMasterEditionInstructionData>;
}

export function getDeprecatedCreateMasterEditionInstructionDataCodec(): Codec<
  DeprecatedCreateMasterEditionInstructionDataArgs,
  DeprecatedCreateMasterEditionInstructionData
> {
  return combineCodec(
    getDeprecatedCreateMasterEditionInstructionDataEncoder(),
    getDeprecatedCreateMasterEditionInstructionDataDecoder()
  );
}

export function deprecatedCreateMasterEditionInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountEdition extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountPrintingMint extends string | IAccountMeta<string> = string,
  TAccountOneTimePrintingAuthorizationMint extends
    | string
    | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountPrintingMintAuthority extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TAccountOneTimePrintingAuthorizationMintAuthority extends
    | string
    | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    edition: TAccountEdition extends string
      ? Address<TAccountEdition>
      : TAccountEdition;
    mint: TAccountMint extends string ? Address<TAccountMint> : TAccountMint;
    printingMint: TAccountPrintingMint extends string
      ? Address<TAccountPrintingMint>
      : TAccountPrintingMint;
    oneTimePrintingAuthorizationMint: TAccountOneTimePrintingAuthorizationMint extends string
      ? Address<TAccountOneTimePrintingAuthorizationMint>
      : TAccountOneTimePrintingAuthorizationMint;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    printingMintAuthority: TAccountPrintingMintAuthority extends string
      ? Address<TAccountPrintingMintAuthority>
      : TAccountPrintingMintAuthority;
    mintAuthority: TAccountMintAuthority extends string
      ? Address<TAccountMintAuthority>
      : TAccountMintAuthority;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    tokenProgram?: TAccountTokenProgram extends string
      ? Address<TAccountTokenProgram>
      : TAccountTokenProgram;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
    oneTimePrintingAuthorizationMintAuthority: TAccountOneTimePrintingAuthorizationMintAuthority extends string
      ? Address<TAccountOneTimePrintingAuthorizationMintAuthority>
      : TAccountOneTimePrintingAuthorizationMintAuthority;
  },
  args: DeprecatedCreateMasterEditionInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.edition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.printingMint, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.oneTimePrintingAuthorizationMint,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.printingMintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.mintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
      accountMetaWithDefault(accounts.payer, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(
        accounts.tokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.rent ?? 'SysvarRent111111111111111111111111111111111',
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.oneTimePrintingAuthorizationMintAuthority,
        AccountRole.READONLY_SIGNER
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getDeprecatedCreateMasterEditionInstructionDataEncoder().encode(args),
    programAddress,
  } as DeprecatedCreateMasterEditionInstruction<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority,
    TRemainingAccounts
  >;
}

// Input.
export type DeprecatedCreateMasterEditionInput<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountPrintingMint extends string,
  TAccountOneTimePrintingAuthorizationMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountPrintingMintAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountOneTimePrintingAuthorizationMintAuthority extends string
> = {
  /** Unallocated edition V1 account with address as pda of ['metadata', program id, mint, 'edition'] */
  edition: Address<TAccountEdition>;
  /** Metadata mint */
  mint: Address<TAccountMint>;
  /** Printing mint - A mint you control that can mint tokens that can be exchanged for limited editions of your master edition via the MintNewEditionFromMasterEditionViaToken endpoint */
  printingMint: Address<TAccountPrintingMint>;
  /** One time authorization printing mint - A mint you control that prints tokens that gives the bearer permission to mint any number of tokens from the printing mint one time via an endpoint with the token-metadata program for your metadata. Also burns the token. */
  oneTimePrintingAuthorizationMint: Address<TAccountOneTimePrintingAuthorizationMint>;
  /** Current Update authority key */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /** Printing mint authority - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY. */
  printingMintAuthority: TransactionSigner<TAccountPrintingMintAuthority>;
  /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** Metadata account */
  metadata: Address<TAccountMetadata>;
  /** payer */
  payer?: TransactionSigner<TAccountPayer>;
  /** Token program */
  tokenProgram?: Address<TAccountTokenProgram>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  /** One time authorization printing mint authority - must be provided if using max supply. THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY. */
  oneTimePrintingAuthorizationMintAuthority: TransactionSigner<TAccountOneTimePrintingAuthorizationMintAuthority>;
  createMasterEditionArgs: DeprecatedCreateMasterEditionInstructionDataArgs['createMasterEditionArgs'];
};

export async function deprecatedCreateMasterEdition<
  TReturn,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountPrintingMint extends string,
  TAccountOneTimePrintingAuthorizationMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountPrintingMintAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountOneTimePrintingAuthorizationMintAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      DeprecatedCreateMasterEditionInstruction<
        TProgram,
        TAccountEdition,
        TAccountMint,
        TAccountPrintingMint,
        TAccountOneTimePrintingAuthorizationMint,
        TAccountUpdateAuthority,
        TAccountPrintingMintAuthority,
        TAccountMintAuthority,
        TAccountMetadata,
        TAccountPayer,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRent,
        TAccountOneTimePrintingAuthorizationMintAuthority
      >,
      TReturn
    >,
  input: DeprecatedCreateMasterEditionInput<
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
  >
): Promise<TReturn>;
export async function deprecatedCreateMasterEdition<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountPrintingMint extends string,
  TAccountOneTimePrintingAuthorizationMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountPrintingMintAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountOneTimePrintingAuthorizationMintAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: DeprecatedCreateMasterEditionInput<
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
  >
): Promise<
  DeprecatedCreateMasterEditionInstruction<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function deprecatedCreateMasterEdition<
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountPrintingMint extends string,
  TAccountOneTimePrintingAuthorizationMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountPrintingMintAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountOneTimePrintingAuthorizationMintAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: DeprecatedCreateMasterEditionInput<
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
  >
): Promise<
  DeprecatedCreateMasterEditionInstruction<
    TProgram,
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
  > &
    IInstructionWithSigners &
    IInstructionWithBytesCreatedOnChain
>;
export async function deprecatedCreateMasterEdition<
  TReturn,
  TAccountEdition extends string,
  TAccountMint extends string,
  TAccountPrintingMint extends string,
  TAccountOneTimePrintingAuthorizationMint extends string,
  TAccountUpdateAuthority extends string,
  TAccountPrintingMintAuthority extends string,
  TAccountMintAuthority extends string,
  TAccountMetadata extends string,
  TAccountPayer extends string,
  TAccountTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountOneTimePrintingAuthorizationMintAuthority extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | DeprecatedCreateMasterEditionInput<
        TAccountEdition,
        TAccountMint,
        TAccountPrintingMint,
        TAccountOneTimePrintingAuthorizationMint,
        TAccountUpdateAuthority,
        TAccountPrintingMintAuthority,
        TAccountMintAuthority,
        TAccountMetadata,
        TAccountPayer,
        TAccountTokenProgram,
        TAccountSystemProgram,
        TAccountRent,
        TAccountOneTimePrintingAuthorizationMintAuthority
      >,
  rawInput?: DeprecatedCreateMasterEditionInput<
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
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
  ) as DeprecatedCreateMasterEditionInput<
    TAccountEdition,
    TAccountMint,
    TAccountPrintingMint,
    TAccountOneTimePrintingAuthorizationMint,
    TAccountUpdateAuthority,
    TAccountPrintingMintAuthority,
    TAccountMintAuthority,
    TAccountMetadata,
    TAccountPayer,
    TAccountTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountOneTimePrintingAuthorizationMintAuthority
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
    typeof deprecatedCreateMasterEditionInstruction<
      TProgram,
      TAccountEdition,
      TAccountMint,
      TAccountPrintingMint,
      TAccountOneTimePrintingAuthorizationMint,
      TAccountUpdateAuthority,
      TAccountPrintingMintAuthority,
      TAccountMintAuthority,
      TAccountMetadata,
      TAccountPayer,
      TAccountTokenProgram,
      TAccountSystemProgram,
      TAccountRent,
      TAccountOneTimePrintingAuthorizationMintAuthority
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    edition: { value: input.edition ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    printingMint: { value: input.printingMint ?? null, isWritable: true },
    oneTimePrintingAuthorizationMint: {
      value: input.oneTimePrintingAuthorizationMint ?? null,
      isWritable: true,
    },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    printingMintAuthority: {
      value: input.printingMintAuthority ?? null,
      isWritable: false,
    },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
    oneTimePrintingAuthorizationMintAuthority: {
      value: input.oneTimePrintingAuthorizationMintAuthority ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = await getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.tokenProgram.isWritable = false;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = await getProgramAddress(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    );
    accounts.systemProgram.isWritable = false;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }

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
    ...deprecatedCreateMasterEditionInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as DeprecatedCreateMasterEditionInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
