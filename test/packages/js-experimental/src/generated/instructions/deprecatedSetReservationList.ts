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
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
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
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
import {
  Reservation,
  ReservationArgs,
  getReservationDecoder,
  getReservationEncoder,
} from '../types';

export type DeprecatedSetReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountReservationList extends string
        ? WritableAccount<TAccountReservationList>
        : TAccountReservationList,
      TAccountResource extends string
        ? ReadonlySignerAccount<TAccountResource>
        : TAccountResource,
      ...TRemainingAccounts
    ]
  >;

export type DeprecatedSetReservationListInstructionWithSigners<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMasterEdition extends string
        ? WritableAccount<TAccountMasterEdition>
        : TAccountMasterEdition,
      TAccountReservationList extends string
        ? WritableAccount<TAccountReservationList>
        : TAccountReservationList,
      TAccountResource extends string
        ? ReadonlySignerAccount<TAccountResource> &
            IAccountSignerMeta<TAccountResource>
        : TAccountResource,
      ...TRemainingAccounts
    ]
  >;

export type DeprecatedSetReservationListInstructionData = {
  discriminator: number;
  reservations: Array<Reservation>;
  totalReservationSpots: Option<bigint>;
  offset: bigint;
  totalSpotOffset: bigint;
};

export type DeprecatedSetReservationListInstructionDataArgs = {
  reservations: Array<ReservationArgs>;
  totalReservationSpots: OptionOrNullable<number | bigint>;
  offset: number | bigint;
  totalSpotOffset: number | bigint;
};

export function getDeprecatedSetReservationListInstructionDataEncoder() {
  return mapEncoder(
    getStructEncoder<{
      discriminator: number;
      reservations: Array<ReservationArgs>;
      totalReservationSpots: OptionOrNullable<number | bigint>;
      offset: number | bigint;
      totalSpotOffset: number | bigint;
    }>([
      ['discriminator', getU8Encoder()],
      ['reservations', getArrayEncoder(getReservationEncoder())],
      ['totalReservationSpots', getOptionEncoder(getU64Encoder())],
      ['offset', getU64Encoder()],
      ['totalSpotOffset', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 5 })
  ) satisfies Encoder<DeprecatedSetReservationListInstructionDataArgs>;
}

export function getDeprecatedSetReservationListInstructionDataDecoder() {
  return getStructDecoder<DeprecatedSetReservationListInstructionData>([
    ['discriminator', getU8Decoder()],
    ['reservations', getArrayDecoder(getReservationDecoder())],
    ['totalReservationSpots', getOptionDecoder(getU64Decoder())],
    ['offset', getU64Decoder()],
    ['totalSpotOffset', getU64Decoder()],
  ]) satisfies Decoder<DeprecatedSetReservationListInstructionData>;
}

export function getDeprecatedSetReservationListInstructionDataCodec(): Codec<
  DeprecatedSetReservationListInstructionDataArgs,
  DeprecatedSetReservationListInstructionData
> {
  return combineCodec(
    getDeprecatedSetReservationListInstructionDataEncoder(),
    getDeprecatedSetReservationListInstructionDataDecoder()
  );
}

export type DeprecatedSetReservationListInput<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string
> = {
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: Address<TAccountReservationList>;
  /** The resource you tied the reservation list too */
  resource: Address<TAccountResource>;
  reservations: DeprecatedSetReservationListInstructionDataArgs['reservations'];
  totalReservationSpots: DeprecatedSetReservationListInstructionDataArgs['totalReservationSpots'];
  offset: DeprecatedSetReservationListInstructionDataArgs['offset'];
  totalSpotOffset: DeprecatedSetReservationListInstructionDataArgs['totalSpotOffset'];
};

export type DeprecatedSetReservationListInputWithSigners<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string
> = {
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: Address<TAccountMasterEdition>;
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: Address<TAccountReservationList>;
  /** The resource you tied the reservation list too */
  resource: TransactionSigner<TAccountResource>;
  reservations: DeprecatedSetReservationListInstructionDataArgs['reservations'];
  totalReservationSpots: DeprecatedSetReservationListInstructionDataArgs['totalReservationSpots'];
  offset: DeprecatedSetReservationListInstructionDataArgs['offset'];
  totalSpotOffset: DeprecatedSetReservationListInstructionDataArgs['totalSpotOffset'];
};

export function getDeprecatedSetReservationListInstruction<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: DeprecatedSetReservationListInputWithSigners<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >
): DeprecatedSetReservationListInstructionWithSigners<
  TProgram,
  TAccountMasterEdition,
  TAccountReservationList,
  TAccountResource
>;
export function getDeprecatedSetReservationListInstruction<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: DeprecatedSetReservationListInput<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >
): DeprecatedSetReservationListInstruction<
  TProgram,
  TAccountMasterEdition,
  TAccountReservationList,
  TAccountResource
>;
export function getDeprecatedSetReservationListInstruction<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  input: DeprecatedSetReservationListInput<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >
): IInstruction {
  // Program address.
  const programAddress =
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getDeprecatedSetReservationListInstructionRaw<
      TProgram,
      TAccountMasterEdition,
      TAccountReservationList,
      TAccountResource
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    masterEdition: { value: input.masterEdition ?? null, isWritable: true },
    reservationList: { value: input.reservationList ?? null, isWritable: true },
    resource: { value: input.resource ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getDeprecatedSetReservationListInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as DeprecatedSetReservationListInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getDeprecatedSetReservationListInstructionRaw<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    masterEdition: TAccountMasterEdition extends string
      ? Address<TAccountMasterEdition>
      : TAccountMasterEdition;
    reservationList: TAccountReservationList extends string
      ? Address<TAccountReservationList>
      : TAccountReservationList;
    resource: TAccountResource extends string
      ? Address<TAccountResource>
      : TAccountResource;
  },
  args: DeprecatedSetReservationListInstructionDataArgs,
  programAddress: Address<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.masterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.reservationList, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.resource, AccountRole.READONLY_SIGNER),
      ...(remainingAccounts ?? []),
    ],
    data: getDeprecatedSetReservationListInstructionDataEncoder().encode(args),
    programAddress,
  } as DeprecatedSetReservationListInstruction<
    TProgram,
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource,
    TRemainingAccounts
  >;
}

export type ParsedDeprecatedSetReservationListInstruction = {
  accounts: {
    /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
    masterEdition: Address;
    /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
    reservationList: Address;
    /** The resource you tied the reservation list too */
    resource: Address;
  };
  data: DeprecatedSetReservationListInstructionData;
};

export function parseDeprecatedSetReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  instruction: IInstruction<TProgram> & IInstructionWithData<Uint8Array>
): ParsedDeprecatedSetReservationListInstruction {
  if (!instruction.accounts || instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  return {
    accounts: {
      masterEdition: instruction.accounts[accountIndex++]!.address,
      reservationList: instruction.accounts[accountIndex++]!.address,
      resource: instruction.accounts[accountIndex++]!.address,
    },
    data: getDeprecatedSetReservationListInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
