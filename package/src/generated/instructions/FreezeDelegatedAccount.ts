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

// Accounts.
export type FreezeDelegatedAccountInstructionAccounts = {
  /** Delegate */
  delegate: Signer;
  /** Token account to freeze */
  tokenAccount: PublicKey;
  /** Edition */
  edition: PublicKey;
  /** Token mint */
  mint: PublicKey;
  /** Token Program */
  tokenProgram?: PublicKey;
};

// Arguments.
export type FreezeDelegatedAccountInstructionData = { discriminator: number };

export type FreezeDelegatedAccountInstructionArgs = {};

export function getFreezeDelegatedAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  FreezeDelegatedAccountInstructionArgs,
  FreezeDelegatedAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    FreezeDelegatedAccountInstructionArgs,
    FreezeDelegatedAccountInstructionData,
    FreezeDelegatedAccountInstructionData
  >(
    s.struct<FreezeDelegatedAccountInstructionData>(
      [['discriminator', s.u8]],
      'FreezeDelegatedAccountInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 26, ...value } as FreezeDelegatedAccountInstructionData)
  ) as Serializer<
    FreezeDelegatedAccountInstructionArgs,
    FreezeDelegatedAccountInstructionData
  >;
}

// Instruction.
export function freezeDelegatedAccount(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: FreezeDelegatedAccountInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Delegate.
  signers.push(input.delegate);
  keys.push({
    pubkey: input.delegate.publicKey,
    isSigner: true,
    isWritable: true,
  });

  // Token Account.
  keys.push({ pubkey: input.tokenAccount, isSigner: false, isWritable: true });

  // Edition.
  keys.push({ pubkey: input.edition, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

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

  // Data.
  const data = getFreezeDelegatedAccountInstructionDataSerializer(
    context
  ).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
