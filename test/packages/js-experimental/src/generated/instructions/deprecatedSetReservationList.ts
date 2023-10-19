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
  Reservation,
  ReservationArgs,
  getReservationDecoder,
  getReservationEncoder,
} from '../types';

// Output.
export type DeprecatedSetReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string
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
        : TAccountResource
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

export function getDeprecatedSetReservationListInstructionDataEncoder(): Encoder<DeprecatedSetReservationListInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<DeprecatedSetReservationListInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['reservations', getArrayEncoder(getReservationEncoder())],
        ['totalReservationSpots', getOptionEncoder(getU64Encoder())],
        ['offset', getU64Encoder()],
        ['totalSpotOffset', getU64Encoder()],
      ],
      { description: 'DeprecatedSetReservationListInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 5,
      } as DeprecatedSetReservationListInstructionData)
  ) as Encoder<DeprecatedSetReservationListInstructionDataArgs>;
}

export function getDeprecatedSetReservationListInstructionDataDecoder(): Decoder<DeprecatedSetReservationListInstructionData> {
  return getStructDecoder<DeprecatedSetReservationListInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['reservations', getArrayDecoder(getReservationDecoder())],
      ['totalReservationSpots', getOptionDecoder(getU64Decoder())],
      ['offset', getU64Decoder()],
      ['totalSpotOffset', getU64Decoder()],
    ],
    { description: 'DeprecatedSetReservationListInstructionData' }
  ) as Decoder<DeprecatedSetReservationListInstructionData>;
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

export function deprecatedSetReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountMasterEdition extends string | IAccountMeta<string> = string,
  TAccountReservationList extends string | IAccountMeta<string> = string,
  TAccountResource extends string | IAccountMeta<string> = string
>(
  accounts: {
    masterEdition: TAccountMasterEdition extends string
      ? Base58EncodedAddress<TAccountMasterEdition>
      : TAccountMasterEdition;
    reservationList: TAccountReservationList extends string
      ? Base58EncodedAddress<TAccountReservationList>
      : TAccountReservationList;
    resource: TAccountResource extends string
      ? Base58EncodedAddress<TAccountResource>
      : TAccountResource;
  },
  args: DeprecatedSetReservationListInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.masterEdition, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.reservationList, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.resource, AccountRole.READONLY_SIGNER),
    ],
    data: getDeprecatedSetReservationListInstructionDataEncoder().encode(args),
    programAddress,
  } as DeprecatedSetReservationListInstruction<
    TProgram,
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >;
}

// Input.
export type DeprecatedSetReservationListInput<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string
> = {
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: Base58EncodedAddress<TAccountMasterEdition>;
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: Base58EncodedAddress<TAccountReservationList>;
  /** The resource you tied the reservation list too */
  resource: Signer<TAccountResource>;
  reservations: DeprecatedSetReservationListInstructionDataArgs['reservations'];
  totalReservationSpots: DeprecatedSetReservationListInstructionDataArgs['totalReservationSpots'];
  offset: DeprecatedSetReservationListInstructionDataArgs['offset'];
  totalSpotOffset: DeprecatedSetReservationListInstructionDataArgs['totalSpotOffset'];
};

export async function deprecatedSetReservationList<
  TReturn,
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'> &
    CustomGeneratedInstruction<
      DeprecatedSetReservationListInstruction<
        TProgram,
        TAccountMasterEdition,
        TAccountReservationList,
        TAccountResource
      >,
      TReturn
    >,
  input: DeprecatedSetReservationListInput<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >
): Promise<TReturn>;
export async function deprecatedSetReservationList<
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  context: Pick<Context, 'getProgramAddress'>,
  input: DeprecatedSetReservationListInput<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >
): Promise<
  WrappedInstruction<
    DeprecatedSetReservationListInstruction<
      TProgram,
      TAccountMasterEdition,
      TAccountReservationList,
      TAccountResource
    >
  >
>;
export async function deprecatedSetReservationList<
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
): Promise<
  WrappedInstruction<
    DeprecatedSetReservationListInstruction<
      TProgram,
      TAccountMasterEdition,
      TAccountReservationList,
      TAccountResource
    >
  >
>;
export async function deprecatedSetReservationList<
  TReturn,
  TAccountMasterEdition extends string,
  TAccountReservationList extends string,
  TAccountResource extends string,
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
>(
  rawContext:
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>)
    | DeprecatedSetReservationListInput<
        TAccountMasterEdition,
        TAccountReservationList,
        TAccountResource
      >,
  rawInput?: DeprecatedSetReservationListInput<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >
): Promise<TReturn | WrappedInstruction<IInstruction>> {
  // Resolve context and input arguments.
  const context = (rawInput === undefined ? {} : rawInput) as
    | Pick<Context, 'getProgramAddress'>
    | (Pick<Context, 'getProgramAddress'> &
        CustomGeneratedInstruction<IInstruction, TReturn>);
  const input = (
    rawInput === undefined ? rawContext : rawInput
  ) as DeprecatedSetReservationListInput<
    TAccountMasterEdition,
    TAccountReservationList,
    TAccountResource
  >;

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
    typeof deprecatedSetReservationListInstruction<
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
    instruction: deprecatedSetReservationListInstruction(
      accountMetas as Record<keyof AccountMetas, IAccountMeta>,
      args as DeprecatedSetReservationListInstructionDataArgs,
      programAddress
    ),
    signers,
    bytesCreatedOnChain: 0,
  };
}
