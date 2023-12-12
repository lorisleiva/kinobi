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
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  Context,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

export type BurnEditionNftInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPrintEditionMint extends string | IAccountMeta<string> = string,
  TAccountMasterEditionMint extends string | IAccountMeta<string> = string,
  TAccountPrintEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountPrintEditionAccount extends string | IAccountMeta<string> = string,
  TAccountEditionMarkerAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner>
        : TAccountOwner,
      TAccountPrintEditionMint extends string
        ? WritableAccount<TAccountPrintEditionMint>
        : TAccountPrintEditionMint,
      TAccountMasterEditionMint extends string
        ? ReadonlyAccount<TAccountMasterEditionMint>
        : TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount extends string
        ? WritableAccount<TAccountPrintEditionTokenAccount>
        : TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount extends string
        ? ReadonlyAccount<TAccountMasterEditionTokenAccount>
        : TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountPrintEditionAccount extends string
        ? WritableAccount<TAccountPrintEditionAccount>
        : TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount extends string
        ? WritableAccount<TAccountEditionMarkerAccount>
        : TAccountEditionMarkerAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      ...TRemainingAccounts
    ]
  >;

export type BurnEditionNftInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPrintEditionMint extends string | IAccountMeta<string> = string,
  TAccountMasterEditionMint extends string | IAccountMeta<string> = string,
  TAccountPrintEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountPrintEditionAccount extends string | IAccountMeta<string> = string,
  TAccountEditionMarkerAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string
        ? WritableAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountPrintEditionMint extends string
        ? WritableAccount<TAccountPrintEditionMint>
        : TAccountPrintEditionMint,
      TAccountMasterEditionMint extends string
        ? ReadonlyAccount<TAccountMasterEditionMint>
        : TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount extends string
        ? WritableAccount<TAccountPrintEditionTokenAccount>
        : TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount extends string
        ? ReadonlyAccount<TAccountMasterEditionTokenAccount>
        : TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount extends string
        ? WritableAccount<TAccountMasterEditionAccount>
        : TAccountMasterEditionAccount,
      TAccountPrintEditionAccount extends string
        ? WritableAccount<TAccountPrintEditionAccount>
        : TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount extends string
        ? WritableAccount<TAccountEditionMarkerAccount>
        : TAccountEditionMarkerAccount,
      TAccountSplTokenProgram extends string
        ? ReadonlyAccount<TAccountSplTokenProgram>
        : TAccountSplTokenProgram,
      ...TRemainingAccounts
    ]
  >;

export type BurnEditionNftInstructionData = { discriminator: number };

export type BurnEditionNftInstructionDataArgs = {};

export function getBurnEditionNftInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{ discriminator: number }>([
      ['discriminator', getU8Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 37 })
  ) satisfies Encoder<BurnEditionNftInstructionDataArgs>;
}

export function getBurnEditionNftInstructionDataDecoder() {
  return getStructDecoder<BurnEditionNftInstructionData>([
    ['discriminator', getU8Decoder()],
  ]) satisfies Decoder<BurnEditionNftInstructionData>;
}

export function getBurnEditionNftInstructionDataCodec(): Codec<
  BurnEditionNftInstructionDataArgs,
  BurnEditionNftInstructionData
> {
  return combineCodec(
    getBurnEditionNftInstructionDataEncoder(),
    getBurnEditionNftInstructionDataDecoder()
  );
}

export type BurnEditionNftInput<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** NFT owner */
  owner: Address<TAccountOwner>;
  /** Mint of the print edition NFT */
  printEditionMint: Address<TAccountPrintEditionMint>;
  /** Mint of the original/master NFT */
  masterEditionMint: Address<TAccountMasterEditionMint>;
  /** Token account the print edition NFT is in */
  printEditionTokenAccount: Address<TAccountPrintEditionTokenAccount>;
  /** Token account the Master Edition NFT is in */
  masterEditionTokenAccount: Address<TAccountMasterEditionTokenAccount>;
  /** MasterEdition2 of the original NFT */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** Print Edition account of the NFT */
  printEditionAccount: Address<TAccountPrintEditionAccount>;
  /** Edition Marker PDA of the NFT */
  editionMarkerAccount: Address<TAccountEditionMarkerAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
};

export type BurnEditionNftInputWithSigners<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string
> = {
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** NFT owner */
  owner: TransactionSigner<TAccountOwner>;
  /** Mint of the print edition NFT */
  printEditionMint: Address<TAccountPrintEditionMint>;
  /** Mint of the original/master NFT */
  masterEditionMint: Address<TAccountMasterEditionMint>;
  /** Token account the print edition NFT is in */
  printEditionTokenAccount: Address<TAccountPrintEditionTokenAccount>;
  /** Token account the Master Edition NFT is in */
  masterEditionTokenAccount: Address<TAccountMasterEditionTokenAccount>;
  /** MasterEdition2 of the original NFT */
  masterEditionAccount: Address<TAccountMasterEditionAccount>;
  /** Print Edition account of the NFT */
  printEditionAccount: Address<TAccountPrintEditionAccount>;
  /** Edition Marker PDA of the NFT */
  editionMarkerAccount: Address<TAccountEditionMarkerAccount>;
  /** SPL Token Program */
  splTokenProgram?: Address<TAccountSplTokenProgram>;
};

export function getBurnEditionNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BurnEditionNftInputWithSigners<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): BurnEditionNftInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountPrintEditionMint,
  TAccountMasterEditionMint,
  TAccountPrintEditionTokenAccount,
  TAccountMasterEditionTokenAccount,
  TAccountMasterEditionAccount,
  TAccountPrintEditionAccount,
  TAccountEditionMarkerAccount,
  TAccountSplTokenProgram
>;
export function getBurnEditionNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): BurnEditionNftInstruction<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountPrintEditionMint,
  TAccountMasterEditionMint,
  TAccountPrintEditionTokenAccount,
  TAccountMasterEditionTokenAccount,
  TAccountMasterEditionAccount,
  TAccountPrintEditionAccount,
  TAccountEditionMarkerAccount,
  TAccountSplTokenProgram
>;
export function getBurnEditionNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnEditionNftInputWithSigners<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): BurnEditionNftInstructionWithSigners<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountPrintEditionMint,
  TAccountMasterEditionMint,
  TAccountPrintEditionTokenAccount,
  TAccountMasterEditionTokenAccount,
  TAccountMasterEditionAccount,
  TAccountPrintEditionAccount,
  TAccountEditionMarkerAccount,
  TAccountSplTokenProgram
>;
export function getBurnEditionNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): BurnEditionNftInstruction<
  TProgram,
  TAccountMetadata,
  TAccountOwner,
  TAccountPrintEditionMint,
  TAccountMasterEditionMint,
  TAccountPrintEditionTokenAccount,
  TAccountMasterEditionTokenAccount,
  TAccountMasterEditionAccount,
  TAccountPrintEditionAccount,
  TAccountEditionMarkerAccount,
  TAccountSplTokenProgram
>;
export function getBurnEditionNftInstruction<
  TAccountMetadata extends string,
  TAccountOwner extends string,
  TAccountPrintEditionMint extends string,
  TAccountMasterEditionMint extends string,
  TAccountPrintEditionTokenAccount extends string,
  TAccountMasterEditionTokenAccount extends string,
  TAccountMasterEditionAccount extends string,
  TAccountPrintEditionAccount extends string,
  TAccountEditionMarkerAccount extends string,
  TAccountSplTokenProgram extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | BurnEditionNftInput<
        TAccountMetadata,
        TAccountOwner,
        TAccountPrintEditionMint,
        TAccountMasterEditionMint,
        TAccountPrintEditionTokenAccount,
        TAccountMasterEditionTokenAccount,
        TAccountMasterEditionAccount,
        TAccountPrintEditionAccount,
        TAccountEditionMarkerAccount,
        TAccountSplTokenProgram
      >,
  rawInput?: BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >
): IInstruction {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as Pick<
    Context,
    'getProgramAddress'
  >;
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as BurnEditionNftInput<
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram
  >;

  // Program address.
  const programAddress = getProgramAddress(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>
  );

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getBurnEditionNftInstructionRaw<
      TProgram,
      TAccountMetadata,
      TAccountOwner,
      TAccountPrintEditionMint,
      TAccountMasterEditionMint,
      TAccountPrintEditionTokenAccount,
      TAccountMasterEditionTokenAccount,
      TAccountMasterEditionAccount,
      TAccountPrintEditionAccount,
      TAccountEditionMarkerAccount,
      TAccountSplTokenProgram
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    printEditionMint: {
      value: input.printEditionMint ?? null,
      isWritable: true,
    },
    masterEditionMint: {
      value: input.masterEditionMint ?? null,
      isWritable: false,
    },
    printEditionTokenAccount: {
      value: input.printEditionTokenAccount ?? null,
      isWritable: true,
    },
    masterEditionTokenAccount: {
      value: input.masterEditionTokenAccount ?? null,
      isWritable: false,
    },
    masterEditionAccount: {
      value: input.masterEditionAccount ?? null,
      isWritable: true,
    },
    printEditionAccount: {
      value: input.printEditionAccount ?? null,
      isWritable: true,
    },
    editionMarkerAccount: {
      value: input.editionMarkerAccount ?? null,
      isWritable: true,
    },
    splTokenProgram: {
      value: input.splTokenProgram ?? null,
      isWritable: false,
    },
  };

  // Resolve default values.
  if (!accounts.splTokenProgram.value) {
    accounts.splTokenProgram.value = getProgramAddress(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    accounts.splTokenProgram.isWritable = false;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getBurnEditionNftInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    programAddress
  );

  return instruction;
}

export function getBurnEditionNftInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountPrintEditionMint extends string | IAccountMeta<string> = string,
  TAccountMasterEditionMint extends string | IAccountMeta<string> = string,
  TAccountPrintEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionTokenAccount extends
    | string
    | IAccountMeta<string> = string,
  TAccountMasterEditionAccount extends string | IAccountMeta<string> = string,
  TAccountPrintEditionAccount extends string | IAccountMeta<string> = string,
  TAccountEditionMarkerAccount extends string | IAccountMeta<string> = string,
  TAccountSplTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    owner: TAccountOwner extends string
      ? Address<TAccountOwner>
      : TAccountOwner;
    printEditionMint: TAccountPrintEditionMint extends string
      ? Address<TAccountPrintEditionMint>
      : TAccountPrintEditionMint;
    masterEditionMint: TAccountMasterEditionMint extends string
      ? Address<TAccountMasterEditionMint>
      : TAccountMasterEditionMint;
    printEditionTokenAccount: TAccountPrintEditionTokenAccount extends string
      ? Address<TAccountPrintEditionTokenAccount>
      : TAccountPrintEditionTokenAccount;
    masterEditionTokenAccount: TAccountMasterEditionTokenAccount extends string
      ? Address<TAccountMasterEditionTokenAccount>
      : TAccountMasterEditionTokenAccount;
    masterEditionAccount: TAccountMasterEditionAccount extends string
      ? Address<TAccountMasterEditionAccount>
      : TAccountMasterEditionAccount;
    printEditionAccount: TAccountPrintEditionAccount extends string
      ? Address<TAccountPrintEditionAccount>
      : TAccountPrintEditionAccount;
    editionMarkerAccount: TAccountEditionMarkerAccount extends string
      ? Address<TAccountEditionMarkerAccount>
      : TAccountEditionMarkerAccount;
    splTokenProgram?: TAccountSplTokenProgram extends string
      ? Address<TAccountSplTokenProgram>
      : TAccountSplTokenProgram;
  },
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.metadata, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.owner, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.printEditionMint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.masterEditionMint, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.printEditionTokenAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.masterEditionTokenAccount,
        AccountRole.READONLY
      ),
      accountMetaWithDefault(
        accounts.masterEditionAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.printEditionAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.editionMarkerAccount,
        AccountRole.WRITABLE
      ),
      accountMetaWithDefault(
        accounts.splTokenProgram ?? {
          address:
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getBurnEditionNftInstructionDataEncoder().encode({}),
    programAddress,
  } as BurnEditionNftInstruction<
    TProgram,
    TAccountMetadata,
    TAccountOwner,
    TAccountPrintEditionMint,
    TAccountMasterEditionMint,
    TAccountPrintEditionTokenAccount,
    TAccountMasterEditionTokenAccount,
    TAccountMasterEditionAccount,
    TAccountPrintEditionAccount,
    TAccountEditionMarkerAccount,
    TAccountSplTokenProgram,
    TRemainingAccounts
  >;
}
