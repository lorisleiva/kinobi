/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsSerializer,
} from '../types';

// Accounts.
export type DeprecatedCreateMasterEditionInstructionAccounts = {
  /** Unallocated edition V1 account with address as pda of ['metadata', program id, mint, 'edition'] */
  edition: PublicKey | Pda;
  /** Metadata mint */
  mint: PublicKey | Pda;
  /** Printing mint - A mint you control that can mint tokens that can be exchanged for limited editions of your master edition via the MintNewEditionFromMasterEditionViaToken endpoint */
  printingMint: PublicKey | Pda;
  /** One time authorization printing mint - A mint you control that prints tokens that gives the bearer permission to mint any number of tokens from the printing mint one time via an endpoint with the token-metadata program for your metadata. Also burns the token. */
  oneTimePrintingAuthorizationMint: PublicKey | Pda;
  /** Current Update authority key */
  updateAuthority: Signer;
  /** Printing mint authority - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY. */
  printingMintAuthority: Signer;
  /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  mintAuthority: Signer;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** payer */
  payer?: Signer;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
  /** One time authorization printing mint authority - must be provided if using max supply. THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY. */
  oneTimePrintingAuthorizationMintAuthority: Signer;
};

// Data.
export type DeprecatedCreateMasterEditionInstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};

export type DeprecatedCreateMasterEditionInstructionDataArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

export function getDeprecatedCreateMasterEditionInstructionDataSerializer(): Serializer<
  DeprecatedCreateMasterEditionInstructionDataArgs,
  DeprecatedCreateMasterEditionInstructionData
> {
  return mapSerializer<
    DeprecatedCreateMasterEditionInstructionDataArgs,
    any,
    DeprecatedCreateMasterEditionInstructionData
  >(
    struct<DeprecatedCreateMasterEditionInstructionData>(
      [
        ['discriminator', u8()],
        ['createMasterEditionArgs', getCreateMasterEditionArgsSerializer()],
      ],
      { description: 'DeprecatedCreateMasterEditionInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 2 })
  ) as Serializer<
    DeprecatedCreateMasterEditionInstructionDataArgs,
    DeprecatedCreateMasterEditionInstructionData
  >;
}

// Args.
export type DeprecatedCreateMasterEditionInstructionArgs =
  DeprecatedCreateMasterEditionInstructionDataArgs;

// Instruction.
export function deprecatedCreateMasterEdition(
  context: Pick<Context, 'payer' | 'programs'>,
  input: DeprecatedCreateMasterEditionInstructionAccounts &
    DeprecatedCreateMasterEditionInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Accounts.
  const resolvedAccounts = {
    edition: {
      index: 0,
      isWritable: true as boolean,
      value: input.edition ?? null,
    },
    mint: { index: 1, isWritable: true as boolean, value: input.mint ?? null },
    printingMint: {
      index: 2,
      isWritable: true as boolean,
      value: input.printingMint ?? null,
    },
    oneTimePrintingAuthorizationMint: {
      index: 3,
      isWritable: true as boolean,
      value: input.oneTimePrintingAuthorizationMint ?? null,
    },
    updateAuthority: {
      index: 4,
      isWritable: false as boolean,
      value: input.updateAuthority ?? null,
    },
    printingMintAuthority: {
      index: 5,
      isWritable: false as boolean,
      value: input.printingMintAuthority ?? null,
    },
    mintAuthority: {
      index: 6,
      isWritable: false as boolean,
      value: input.mintAuthority ?? null,
    },
    metadata: {
      index: 7,
      isWritable: false as boolean,
      value: input.metadata ?? null,
    },
    payer: {
      index: 8,
      isWritable: false as boolean,
      value: input.payer ?? null,
    },
    tokenProgram: {
      index: 9,
      isWritable: false as boolean,
      value: input.tokenProgram ?? null,
    },
    systemProgram: {
      index: 10,
      isWritable: false as boolean,
      value: input.systemProgram ?? null,
    },
    rent: {
      index: 11,
      isWritable: false as boolean,
      value: input.rent ?? null,
    },
    oneTimePrintingAuthorizationMintAuthority: {
      index: 12,
      isWritable: false as boolean,
      value: input.oneTimePrintingAuthorizationMintAuthority ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: DeprecatedCreateMasterEditionInstructionArgs = {
    ...input,
  };

  // Default values.
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }
  if (!resolvedAccounts.tokenProgram.value) {
    resolvedAccounts.tokenProgram.value = publicKey(
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
  }
  if (!resolvedAccounts.systemProgram.value) {
    resolvedAccounts.systemProgram.value = publicKey(
      '11111111111111111111111111111111'
    );
  }
  if (!resolvedAccounts.rent.value) {
    resolvedAccounts.rent.value = publicKey(
      'SysvarRent111111111111111111111111111111111'
    );
  }

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data =
    getDeprecatedCreateMasterEditionInstructionDataSerializer().serialize(
      resolvedArgs as DeprecatedCreateMasterEditionInstructionDataArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
