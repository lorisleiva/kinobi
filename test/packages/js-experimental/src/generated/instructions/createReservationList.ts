/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
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
  CreateReservationListInstructionDataArgs,
  getCreateReservationListInstructionDataEncoder,
} from '../../hooked';
import {
  Context,
  CustomGeneratedInstruction,
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
  getProgramAddress,
} from '../shared';

// Output.
export type CreateReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountReservationList extends string
        ? WritableAccount<TAccountReservationList>
        : TAccountReservationList,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlySignerAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountMasterEdition extends string
        ? ReadonlyAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountResource extends string
        ? ReadonlyAccount<TAccountResource>
        : TAccountResource,
      TAccountMetadata extends string
        ? ReadonlyAccount<TAccountMetadata>
        : TAccountMetadata,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts
    ]
  >;

export function createReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    reservationList: TAccountReservationList extends string
      ? Address<TAccountReservationList>
      : TAccountReservationList;
    payer: TAccountPayer extends string
      ? Address<TAccountPayer>
      : TAccountPayer;
    updateAuthority: TAccountUpdateAuthority extends string
      ? Address<TAccountUpdateAuthority>
      : TAccountUpdateAuthority;
    masterEdition: TAccountMasterEdition extends string
      ? Address<TAccountMasterEdition>
      : TAccountMasterEdition;
    resource: TAccountResource extends string
      ? Address<TAccountResource>
      : TAccountResource;
    metadata: TAccountMetadata extends string
      ? Address<TAccountMetadata>
      : TAccountMetadata;
    systemProgram?: TAccountSystemProgram extends string
      ? Address<TAccountSystemProgram>
      : TAccountSystemProgram;
    rent?: TAccountRent extends string ? Address<TAccountRent> : TAccountRent;
  },
  args: CreateReservationListInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.reservationList, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.payer, AccountRole.READONLY_SIGNER),
      accountMetaWithDefault(
        accounts.updateAuthority,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.masterEdition, AccountRole.READONLY),
      accountMetaWithDefault(accounts.resource, AccountRole.READONLY),
      accountMetaWithDefault(accounts.metadata, AccountRole.READONLY),
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
      ...(remainingAccounts ?? []),
    ],
    data: getCreateReservationListInstructionDataEncoder().encode(args),
    programAddress,
  } as CreateReservationListInstruction<
    TProgram,
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent,
    TRemainingAccounts
  >;
}

// Input.
export type CreateReservationListInput<
  TAccountReservationList extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountMasterEdition extends string,
  TAccountResource extends string,
  TAccountMetadata extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string
> = {
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: Address<TAccountReservationList>;
  /** Payer */
  payer?: TransactionSigner<TAccountPayer>;
  /** Update authority */
  updateAuthority: TransactionSigner<TAccountUpdateAuthority>;
  /**  Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** A resource you wish to tie the reservation list to. This is so your later visitors who come to redeem can derive your reservation list PDA with something they can easily get at. You choose what this should be. */
  resource: Address<TAccountResource>;
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
};

export async function createReservationList<
  TReturn,
  TAccountReservationList extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountMasterEdition extends string,
  TAccountResource extends string,
  TAccountMetadata extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      CreateReservationListInstruction<
        TProgram,
        TAccountReservationList,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountMasterEdition,
        TAccountResource,
        TAccountMetadata,
        TAccountSystemProgram,
        TAccountRent
      >,
      TReturn
    >,
  input: CreateReservationListInput<
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<TReturn>;
export async function createReservationList<
  TAccountReservationList extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountMasterEdition extends string,
  TAccountResource extends string,
  TAccountMetadata extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: CreateReservationListInput<
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  CreateReservationListInstruction<
    TProgram,
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithSigners
>;
export async function createReservationList<
  TAccountReservationList extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountMasterEdition extends string,
  TAccountResource extends string,
  TAccountMetadata extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: CreateReservationListInput<
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<
  CreateReservationListInstruction<
    TProgram,
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  > &
    IInstructionWithSigners
>;
export async function createReservationList<
  TReturn,
  TAccountReservationList extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountMasterEdition extends string,
  TAccountResource extends string,
  TAccountMetadata extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | CreateReservationListInput<
        TAccountReservationList,
        TAccountPayer,
        TAccountUpdateAuthority,
        TAccountMasterEdition,
        TAccountResource,
        TAccountMetadata,
        TAccountSystemProgram,
        TAccountRent
      >,
  rawInput?: CreateReservationListInput<
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
  >
): Promise<TReturn | (IInstruction & IInstructionWithSigners)> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawContext) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as CreateReservationListInput<
    TAccountReservationList,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountMasterEdition,
    TAccountResource,
    TAccountMetadata,
    TAccountSystemProgram,
    TAccountRent
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
    typeof createReservationListInstruction<
      TProgram,
      TAccountReservationList,
      TAccountPayer,
      TAccountUpdateAuthority,
      TAccountMasterEdition,
      TAccountResource,
      TAccountMetadata,
      TAccountSystemProgram,
      TAccountRent
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    reservationList: { value: input.reservationList ?? null, isWritable: true },
    payer: { value: input.payer ?? null, isWritable: false },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    masterEdition: { value: input.masterEdition ?? null, isWritable: false },
    resource: { value: input.resource ?? null, isWritable: false },
    metadata: { value: input.metadata ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
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
    ...createReservationListInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as CreateReservationListInstructionDataArgs,
      programAddress,
      remainingAccounts
    ),
    bytesCreatedOnChain,
  };

  return 'getGeneratedInstruction' in context && context.getGeneratedInstruction
    ? context.getGeneratedInstruction(instruction)
    : instruction;
}
