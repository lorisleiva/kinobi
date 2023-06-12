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
import { isWritable } from '../shared';

// Accounts.
export type ConvertMasterEditionV1ToV2InstructionAccounts = {
  /** Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
  masterEdition: PublicKey | Pda;
  /** One time authorization mint */
  oneTimeAuth: PublicKey | Pda;
  /** Printing mint */
  printingMint: PublicKey | Pda;
};

// Data.
export type ConvertMasterEditionV1ToV2InstructionData = {
  discriminator: number;
};

export type ConvertMasterEditionV1ToV2InstructionDataArgs = {};

export function getConvertMasterEditionV1ToV2InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ConvertMasterEditionV1ToV2InstructionDataArgs,
  ConvertMasterEditionV1ToV2InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ConvertMasterEditionV1ToV2InstructionDataArgs,
    any,
    ConvertMasterEditionV1ToV2InstructionData
  >(
    s.struct<ConvertMasterEditionV1ToV2InstructionData>(
      [['discriminator', s.u8()]],
      { description: 'ConvertMasterEditionV1ToV2InstructionData' }
    ),
    (value) => ({ ...value, discriminator: 12 })
  ) as Serializer<
    ConvertMasterEditionV1ToV2InstructionDataArgs,
    ConvertMasterEditionV1ToV2InstructionData
  >;
}

// Instruction.
export function convertMasterEditionV1ToV2(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: ConvertMasterEditionV1ToV2InstructionAccounts
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplTokenMetadata',
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Master Edition.
  keys.push({
    pubkey: publicKey(resolvedAccounts.masterEdition, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.masterEdition, true),
  });

  // One Time Auth.
  keys.push({
    pubkey: publicKey(resolvedAccounts.oneTimeAuth, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.oneTimeAuth, true),
  });

  // Printing Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.printingMint, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.printingMint, true),
  });

  // Data.
  const data = getConvertMasterEditionV1ToV2InstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
