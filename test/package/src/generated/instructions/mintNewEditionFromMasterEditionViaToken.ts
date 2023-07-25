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
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { addAccountMeta, addObjectProperty } from '../shared';
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  MintNewEditionFromMasterEditionViaTokenArgsArgs,
  getMintNewEditionFromMasterEditionViaTokenArgsSerializer,
} from '../types';

// Accounts.
export type MintNewEditionFromMasterEditionViaTokenInstructionAccounts = {
  /** New Metadata key (pda of ['metadata', program id, mint id]) */
  newMetadata: PublicKey | Pda;
  /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
  newEdition: PublicKey | Pda;
  /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: PublicKey | Pda;
  /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  newMint: PublicKey | Pda;
  /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
  editionMarkPda: PublicKey | Pda;
  /** Mint authority of new mint */
  newMintAuthority: Signer;
  /** payer */
  payer?: Signer;
  /** owner of token account containing master token (#8) */
  tokenAccountOwner: Signer;
  /** token account containing token from master metadata mint */
  tokenAccount: PublicKey | Pda;
  /** Update authority info for new metadata */
  newMetadataUpdateAuthority: PublicKey | Pda;
  /** Master record metadata account */
  metadata: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type MintNewEditionFromMasterEditionViaTokenInstructionData = {
  discriminator: number;
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};

export type MintNewEditionFromMasterEditionViaTokenInstructionDataArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};

/** @deprecated Use `getMintNewEditionFromMasterEditionViaTokenInstructionDataSerializer()` without any argument instead. */
export function getMintNewEditionFromMasterEditionViaTokenInstructionDataSerializer(
  _context: object
): Serializer<
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  MintNewEditionFromMasterEditionViaTokenInstructionData
>;
export function getMintNewEditionFromMasterEditionViaTokenInstructionDataSerializer(): Serializer<
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  MintNewEditionFromMasterEditionViaTokenInstructionData
>;
export function getMintNewEditionFromMasterEditionViaTokenInstructionDataSerializer(
  _context: object = {}
): Serializer<
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
  MintNewEditionFromMasterEditionViaTokenInstructionData
> {
  return mapSerializer<
    MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
    any,
    MintNewEditionFromMasterEditionViaTokenInstructionData
  >(
    struct<MintNewEditionFromMasterEditionViaTokenInstructionData>(
      [
        ['discriminator', u8()],
        [
          'mintNewEditionFromMasterEditionViaTokenArgs',
          getMintNewEditionFromMasterEditionViaTokenArgsSerializer(),
        ],
      ],
      { description: 'MintNewEditionFromMasterEditionViaTokenInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 11 })
  ) as Serializer<
    MintNewEditionFromMasterEditionViaTokenInstructionDataArgs,
    MintNewEditionFromMasterEditionViaTokenInstructionData
  >;
}

// Args.
export type MintNewEditionFromMasterEditionViaTokenInstructionArgs =
  MintNewEditionFromMasterEditionViaTokenInstructionDataArgs;

// Instruction.
export function mintNewEditionFromMasterEditionViaToken(
  context: Pick<Context, 'programs' | 'payer'>,
  input: MintNewEditionFromMasterEditionViaTokenInstructionAccounts &
    MintNewEditionFromMasterEditionViaTokenInstructionArgs
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
    newMetadata: [input.newMetadata, true] as const,
    newEdition: [input.newEdition, true] as const,
    masterEdition: [input.masterEdition, true] as const,
    newMint: [input.newMint, true] as const,
    editionMarkPda: [input.editionMarkPda, true] as const,
    newMintAuthority: [input.newMintAuthority, false] as const,
    tokenAccountOwner: [input.tokenAccountOwner, false] as const,
    tokenAccount: [input.tokenAccount, false] as const,
    newMetadataUpdateAuthority: [
      input.newMetadataUpdateAuthority,
      false,
    ] as const,
    metadata: [input.metadata, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenProgram',
    input.tokenProgram
      ? ([input.tokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
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
    input.rent ? ([input.rent, false] as const) : ([programId, false] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.newMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.newEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.newMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.editionMarkPda, false);
  addAccountMeta(keys, signers, resolvedAccounts.newMintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenAccountOwner, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenAccount, false);
  addAccountMeta(
    keys,
    signers,
    resolvedAccounts.newMetadataUpdateAuthority,
    false
  );
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.rent, false);

  // Data.
  const data =
    getMintNewEditionFromMasterEditionViaTokenInstructionDataSerializer().serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
