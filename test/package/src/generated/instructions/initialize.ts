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
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';
import {
  CandyMachineData,
  CandyMachineDataArgs,
  getCandyMachineDataSerializer,
} from '../types';

// Accounts.
export type InitializeInstructionAccounts = {
  candyMachine: PublicKey | Pda;
  authorityPda: PublicKey | Pda;
  authority?: PublicKey | Pda;
  payer?: Signer;
  collectionMetadata: PublicKey | Pda;
  collectionMint: PublicKey | Pda;
  collectionMasterEdition: PublicKey | Pda;
  collectionUpdateAuthority: Signer;
  collectionAuthorityRecord: PublicKey | Pda;
  tokenMetadataProgram?: PublicKey | Pda;
  systemProgram?: PublicKey | Pda;
};

// Data.
export type InitializeInstructionData = {
  discriminator: Array<number>;
  data: CandyMachineData;
};

export type InitializeInstructionDataArgs = { data: CandyMachineDataArgs };

export function getInitializeInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<InitializeInstructionDataArgs, InitializeInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    InitializeInstructionDataArgs,
    any,
    InitializeInstructionData
  >(
    s.struct<InitializeInstructionData>(
      [
        ['discriminator', s.array(s.u8(), { size: 8 })],
        ['data', getCandyMachineDataSerializer(context)],
      ],
      { description: 'InitializeInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
    })
  ) as Serializer<InitializeInstructionDataArgs, InitializeInstructionData>;
}

// Args.
export type InitializeInstructionArgs = InitializeInstructionDataArgs;

// Instruction.
export function initialize(
  context: Pick<Context, 'serializer' | 'programs' | 'identity' | 'payer'>,
  input: InitializeInstructionAccounts & InitializeInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplCandyMachineCore',
      'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  const resolvingArgs = {};
  addObjectProperty(
    resolvingAccounts,
    'authority',
    input.authority ?? context.identity.publicKey
  );
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(
    resolvingAccounts,
    'tokenMetadataProgram',
    input.tokenMetadataProgram ?? {
      ...context.programs.getPublicKey(
        'mplTokenMetadata',
        'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      ),
      isWritable: false,
    }
  );
  addObjectProperty(
    resolvingAccounts,
    'systemProgram',
    input.systemProgram ?? {
      ...context.programs.getPublicKey(
        'splSystem',
        '11111111111111111111111111111111'
      ),
      isWritable: false,
    }
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // Candy Machine.
  keys.push({
    pubkey: publicKey(resolvedAccounts.candyMachine, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.candyMachine, true),
  });

  // Authority Pda.
  keys.push({
    pubkey: publicKey(resolvedAccounts.authorityPda, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authorityPda, true),
  });

  // Authority.
  keys.push({
    pubkey: publicKey(resolvedAccounts.authority, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.authority, false),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, false),
  });

  // Collection Metadata.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionMetadata, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMetadata, false),
  });

  // Collection Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionMint, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMint, false),
  });

  // Collection Master Edition.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionMasterEdition, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionMasterEdition, false),
  });

  // Collection Update Authority.
  signers.push(resolvedAccounts.collectionUpdateAuthority);
  keys.push({
    pubkey: resolvedAccounts.collectionUpdateAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.collectionUpdateAuthority, true),
  });

  // Collection Authority Record.
  keys.push({
    pubkey: publicKey(resolvedAccounts.collectionAuthorityRecord, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.collectionAuthorityRecord, true),
  });

  // Token Metadata Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.tokenMetadataProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.tokenMetadataProgram, false),
  });

  // System Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.systemProgram, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Data.
  const data =
    getInitializeInstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
