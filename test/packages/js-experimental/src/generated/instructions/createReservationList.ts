/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress, address } from '@solana/addresses';
import {
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import {
  CreateReservationListInstructionDataArgs,
  getCreateReservationListInstructionDataDecoder,
  getCreateReservationListInstructionDataEncoder,
} from '../../hooked';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type CreateReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountReservationList extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountResource extends string = string,
  TAccountMetadata extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<CreateReservationListInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountReservationList>,
      ReadonlySignerAccount<TAccountPayer>,
      ReadonlySignerAccount<TAccountUpdateAuthority>,
      ReadonlyAccount<TAccountMasterEdition>,
      ReadonlyAccount<TAccountResource>,
      ReadonlyAccount<TAccountMetadata>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountRent>
    ]
  >;

export function createReservationListInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountReservationList extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountResource extends string = string,
  TAccountMetadata extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountRent extends string = 'SysvarRent111111111111111111111111111111111'
>(
  accounts: {
    reservationList: Base58EncodedAddress<TAccountReservationList>;
    payer: Base58EncodedAddress<TAccountPayer>;
    updateAuthority: Base58EncodedAddress<TAccountUpdateAuthority>;
    masterEdition: Base58EncodedAddress<TAccountMasterEdition>;
    resource: Base58EncodedAddress<TAccountResource>;
    metadata: Base58EncodedAddress<TAccountMetadata>;
    systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
    rent: Base58EncodedAddress<TAccountRent>;
  },
  args: CreateReservationListInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): CreateReservationListInstruction<
  TProgram,
  TAccountReservationList,
  TAccountPayer,
  TAccountUpdateAuthority,
  TAccountMasterEdition,
  TAccountResource,
  TAccountMetadata,
  TAccountSystemProgram,
  TAccountRent
> {
  // ...
}
