/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  CreateReservationListInstructionDataArgs,
  getCreateReservationListInstructionDataSerializer,
} from '../../hooked';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type CreateReservationListInstructionAccounts = {
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: PublicKey | Pda;
  /** Payer */
  payer?: Signer;
  /** Update authority */
  updateAuthority: Signer;
  /**  Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: PublicKey | Pda;
  /** A resource you wish to tie the reservation list to. This is so your later visitors who come to redeem can derive your reservation list PDA with something they can easily get at. You choose what this should be. */
  resource: PublicKey | Pda;
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Args.
export type CreateReservationListInstructionArgs =
  CreateReservationListInstructionDataArgs;

// Instruction.
export function createReservationList(
  context: Pick<Context, 'programs' | 'payer'>,
  accounts: CreateReservationListInstructionAccounts,
  args: CreateReservationListInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    reservationList: [accounts.reservationList, true] as const,
    updateAuthority: [accounts.updateAuthority, false] as const,
    masterEdition: [accounts.masterEdition, false] as const,
    resource: [accounts.resource, false] as const,
    metadata: [accounts.metadata, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'payer',
    accounts.payer
      ? ([accounts.payer, false] as const)
      : ([context.payer, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    accounts.systemProgram
      ? ([accounts.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'rent',
    accounts.rent
      ? ([accounts.rent, false] as const)
      : ([
          publicKey('SysvarRent111111111111111111111111111111111'),
          false,
        ] as const)
  );
  const resolvedArgs = { ...args, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.reservationList, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.updateAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.resource, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.rent, false);

  // Data.
  const data =
    getCreateReservationListInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
