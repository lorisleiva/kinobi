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
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';
import {
  MintPrintingTokensViaTokenArgs,
  MintPrintingTokensViaTokenArgsArgs,
  getMintPrintingTokensViaTokenArgsSerializer,
} from '../types';

// Accounts.
export type DeprecatedMintPrintingTokensInstructionAccounts = {
  /** Destination account */
  destination: PublicKey;
  /** Printing mint */
  printingMint: PublicKey;
  /** Update authority */
  updateAuthority: Signer;
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: PublicKey;
  /** Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition']) */
  masterEdition: PublicKey;
  /** Token program */
  tokenProgram?: PublicKey;
  /** Rent */
  rent?: PublicKey;
};

// Arguments.
export type DeprecatedMintPrintingTokensInstructionData = {
  discriminator: number;
  mintPrintingTokensViaTokenArgs: MintPrintingTokensViaTokenArgs;
};

export type DeprecatedMintPrintingTokensInstructionArgs = {
  mintPrintingTokensViaTokenArgs: MintPrintingTokensViaTokenArgsArgs;
};

export function getDeprecatedMintPrintingTokensInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedMintPrintingTokensInstructionArgs,
  DeprecatedMintPrintingTokensInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedMintPrintingTokensInstructionArgs,
    DeprecatedMintPrintingTokensInstructionData,
    DeprecatedMintPrintingTokensInstructionData
  >(
    s.struct<DeprecatedMintPrintingTokensInstructionData>(
      [
        ['discriminator', s.u8],
        [
          'mintPrintingTokensViaTokenArgs',
          getMintPrintingTokensViaTokenArgsSerializer(context),
        ],
      ],
      'DeprecatedMintPrintingTokensInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: 9,
        ...value,
      } as DeprecatedMintPrintingTokensInstructionData)
  ) as Serializer<
    DeprecatedMintPrintingTokensInstructionArgs,
    DeprecatedMintPrintingTokensInstructionData
  >;
}

// Instruction.
export function deprecatedMintPrintingTokens(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: DeprecatedMintPrintingTokensInstructionAccounts &
    DeprecatedMintPrintingTokensInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Destination.
  keys.push({ pubkey: input.destination, isSigner: false, isWritable: true });

  // Printing Mint.
  keys.push({ pubkey: input.printingMint, isSigner: false, isWritable: true });

  // Update Authority.
  signers.push(input.updateAuthority);
  keys.push({
    pubkey: input.updateAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Metadata.
  keys.push({ pubkey: input.metadata, isSigner: false, isWritable: false });

  // Master Edition.
  keys.push({
    pubkey: input.masterEdition,
    isSigner: false,
    isWritable: false,
  });

  // Token Program.
  if (input.tokenProgram) {
    keys.push({
      pubkey: input.tokenProgram,
      isSigner: false,
      isWritable: false,
    });
  } else {
    keys.push({
      pubkey: getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
      isSigner: false,
      isWritable: false,
    });
  }

  // Rent.
  if (input.rent) {
    keys.push({ pubkey: input.rent, isSigner: false, isWritable: false });
  } else {
    keys.push({
      pubkey: context.eddsa.createPublicKey(
        'SysvarRent111111111111111111111111111111111'
      ),
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getDeprecatedMintPrintingTokensInstructionDataSerializer(context).serialize(
      input
    );

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
