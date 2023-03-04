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
  PublicKey,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  publicKey,
} from '@metaplex-foundation/umi';
import {
  CreateReservationListInstructionDataArgs,
  getCreateReservationListInstructionDataSerializer,
} from '../../hooked';

// Accounts.
export type CreateReservationListInstructionAccounts = {
  /** PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key] */
  reservationList: PublicKey;
  /** Payer */
  payer?: Signer;
  /** Update authority */
  updateAuthority: Signer;
  /**  Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: PublicKey;
  /** A resource you wish to tie the reservation list to. This is so your later visitors who come to redeem can derive your reservation list PDA with something they can easily get at. You choose what this should be. */
  resource: PublicKey;
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
};

// Instruction.
export function createReservationList(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  accounts: CreateReservationListInstructionAccounts,
  args: CreateReservationListInstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const reservationListAccount = accounts.reservationList;
  const payerAccount = accounts.payer ?? context.payer;
  const updateAuthorityAccount = accounts.updateAuthority;
  const masterEditionAccount = accounts.masterEdition;
  const resourceAccount = accounts.resource;
  const metadataAccount = accounts.metadata;
  const systemProgramAccount = accounts.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const rentAccount =
    accounts.rent ?? publicKey('SysvarRent111111111111111111111111111111111');

  // Reservation List.
  keys.push({
    pubkey: reservationListAccount,
    isSigner: false,
    isWritable: isWritable(reservationListAccount, true),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, false),
  });

  // Update Authority.
  signers.push(updateAuthorityAccount);
  keys.push({
    pubkey: updateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // Master Edition.
  keys.push({
    pubkey: masterEditionAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionAccount, false),
  });

  // Resource.
  keys.push({
    pubkey: resourceAccount,
    isSigner: false,
    isWritable: isWritable(resourceAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Rent.
  keys.push({
    pubkey: rentAccount,
    isSigner: false,
    isWritable: isWritable(rentAccount, false),
  });

  // Data.
  const data =
    getCreateReservationListInstructionDataSerializer(context).serialize(args);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
