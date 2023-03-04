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
  checkForIsWritableOverride as isWritable,
  mapSerializer,
  publicKey,
} from '@metaplex-foundation/umi';
import {
  CreateMasterEditionArgs,
  CreateMasterEditionArgsArgs,
  getCreateMasterEditionArgsSerializer,
} from '../types';

// Accounts.
export type DeprecatedCreateMasterEditionInstructionAccounts = {
  /** Unallocated edition V1 account with address as pda of ['metadata', program id, mint, 'edition'] */
  edition: PublicKey;
  /** Metadata mint */
  mint: PublicKey;
  /** Printing mint - A mint you control that can mint tokens that can be exchanged for limited editions of your master edition via the MintNewEditionFromMasterEditionViaToken endpoint */
  printingMint: PublicKey;
  /** One time authorization printing mint - A mint you control that prints tokens that gives the bearer permission to mint any number of tokens from the printing mint one time via an endpoint with the token-metadata program for your metadata. Also burns the token. */
  oneTimePrintingAuthorizationMint: PublicKey;
  /** Current Update authority key */
  updateAuthority: Signer;
  /** Printing mint authority - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY. */
  printingMintAuthority: Signer;
  /** Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
  mintAuthority: Signer;
  /** Metadata account */
  metadata: PublicKey;
  /** payer */
  payer?: Signer;
  /** Token program */
  tokenProgram?: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
  /** Rent info */
  rent?: PublicKey;
  /** One time authorization printing mint authority - must be provided if using max supply. THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY. */
  oneTimePrintingAuthorizationMintAuthority: Signer;
};

// Arguments.
export type DeprecatedCreateMasterEditionInstructionData = {
  discriminator: number;
  createMasterEditionArgs: CreateMasterEditionArgs;
};

export type DeprecatedCreateMasterEditionInstructionDataArgs = {
  createMasterEditionArgs: CreateMasterEditionArgsArgs;
};

export function getDeprecatedCreateMasterEditionInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  DeprecatedCreateMasterEditionInstructionDataArgs,
  DeprecatedCreateMasterEditionInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    DeprecatedCreateMasterEditionInstructionDataArgs,
    DeprecatedCreateMasterEditionInstructionData,
    DeprecatedCreateMasterEditionInstructionData
  >(
    s.struct<DeprecatedCreateMasterEditionInstructionData>(
      [
        ['discriminator', s.u8()],
        [
          'createMasterEditionArgs',
          getCreateMasterEditionArgsSerializer(context),
        ],
      ],
      { description: 'DeprecatedCreateMasterEditionInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 2,
      } as DeprecatedCreateMasterEditionInstructionData)
  ) as Serializer<
    DeprecatedCreateMasterEditionInstructionDataArgs,
    DeprecatedCreateMasterEditionInstructionData
  >;
}

// Instruction.
export function deprecatedCreateMasterEdition(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: DeprecatedCreateMasterEditionInstructionAccounts &
    DeprecatedCreateMasterEditionInstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const editionAccount = input.edition;
  const mintAccount = input.mint;
  const printingMintAccount = input.printingMint;
  const oneTimePrintingAuthorizationMintAccount =
    input.oneTimePrintingAuthorizationMint;
  const updateAuthorityAccount = input.updateAuthority;
  const printingMintAuthorityAccount = input.printingMintAuthority;
  const mintAuthorityAccount = input.mintAuthority;
  const metadataAccount = input.metadata;
  const payerAccount = input.payer ?? context.payer;
  const tokenProgramAccount = input.tokenProgram ?? {
    ...context.programs.getPublicKey(
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ),
    isWritable: false,
  };
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const rentAccount =
    input.rent ?? publicKey('SysvarRent111111111111111111111111111111111');
  const oneTimePrintingAuthorizationMintAuthorityAccount =
    input.oneTimePrintingAuthorizationMintAuthority;

  // Edition.
  keys.push({
    pubkey: editionAccount,
    isSigner: false,
    isWritable: isWritable(editionAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, true),
  });

  // Printing Mint.
  keys.push({
    pubkey: printingMintAccount,
    isSigner: false,
    isWritable: isWritable(printingMintAccount, true),
  });

  // One Time Printing Authorization Mint.
  keys.push({
    pubkey: oneTimePrintingAuthorizationMintAccount,
    isSigner: false,
    isWritable: isWritable(oneTimePrintingAuthorizationMintAccount, true),
  });

  // Update Authority.
  signers.push(updateAuthorityAccount);
  keys.push({
    pubkey: updateAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(updateAuthorityAccount, false),
  });

  // Printing Mint Authority.
  signers.push(printingMintAuthorityAccount);
  keys.push({
    pubkey: printingMintAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(printingMintAuthorityAccount, false),
  });

  // Mint Authority.
  signers.push(mintAuthorityAccount);
  keys.push({
    pubkey: mintAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(mintAuthorityAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
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

  // One Time Printing Authorization Mint Authority.
  signers.push(oneTimePrintingAuthorizationMintAuthorityAccount);
  keys.push({
    pubkey: oneTimePrintingAuthorizationMintAuthorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(
      oneTimePrintingAuthorizationMintAuthorityAccount,
      false
    ),
  });

  // Data.
  const data =
    getDeprecatedCreateMasterEditionInstructionDataSerializer(
      context
    ).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
