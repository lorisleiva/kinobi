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
  DelegateArgs,
  DelegateArgsArgs,
  getDelegateArgsSerializer,
} from '../types';

// Accounts.
export type DelegateInstructionAccounts = {
  /** Delegate account key (pda of [mint id, delegate role, user id, authority id]) */
  delegateRecord: PublicKey;
  /** Owner of the delegated account */
  delegate: PublicKey;
  /** Metadata account */
  metadata: PublicKey;
  /** Master Edition account */
  masterEdition?: PublicKey;
  /** Mint of metadata */
  mint: PublicKey;
  /** Owned Token Account of mint */
  token?: PublicKey;
  /** Authority to approve the delegation */
  authority?: Signer;
  /** Payer */
  payer?: Signer;
  /** System Program */
  systemProgram?: PublicKey;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey;
  /** SPL Token Program */
  splTokenProgram?: PublicKey;
  /** Token Authorization Rules Program */
  authorizationRulesProgram?: PublicKey;
  /** Token Authorization Rules account */
  authorizationRules?: PublicKey;
};

// Arguments.
export type DelegateInstructionData = {
  discriminator: number;
  delegateArgs: DelegateArgs;
};

export type DelegateInstructionDataArgs = { delegateArgs: DelegateArgsArgs };

export function getDelegateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<DelegateInstructionDataArgs, DelegateInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    DelegateInstructionDataArgs,
    DelegateInstructionData,
    DelegateInstructionData
  >(
    s.struct<DelegateInstructionData>(
      [
        ['discriminator', s.u8()],
        ['delegateArgs', getDelegateArgsSerializer(context)],
      ],
      { description: 'DelegateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 48 } as DelegateInstructionData)
  ) as Serializer<DelegateInstructionDataArgs, DelegateInstructionData>;
}

// Instruction.
export function delegate(
  context: Pick<Context, 'serializer' | 'programs' | 'identity' | 'payer'>,
  input: DelegateInstructionAccounts & DelegateInstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved accounts.
  const delegateRecordAccount = input.delegateRecord;
  const delegateAccount = input.delegate;
  const metadataAccount = input.metadata;
  const masterEditionAccount = input.masterEdition ?? {
    ...programId,
    isWritable: false,
  };
  const mintAccount = input.mint;
  const tokenAccount = input.token ?? { ...programId, isWritable: false };
  const authorityAccount = input.authority ?? context.identity;
  const payerAccount = input.payer ?? context.payer;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const sysvarInstructionsAccount =
    input.sysvarInstructions ??
    publicKey('Sysvar1nstructions1111111111111111111111111');
  const splTokenProgramAccount = input.splTokenProgram ?? {
    ...programId,
    isWritable: false,
  };
  const authorizationRulesProgramAccount = input.authorizationRulesProgram ?? {
    ...programId,
    isWritable: false,
  };
  const authorizationRulesAccount = input.authorizationRules ?? {
    ...programId,
    isWritable: false,
  };

  // Delegate Record.
  keys.push({
    pubkey: delegateRecordAccount,
    isSigner: false,
    isWritable: isWritable(delegateRecordAccount, true),
  });

  // Delegate.
  keys.push({
    pubkey: delegateAccount,
    isSigner: false,
    isWritable: isWritable(delegateAccount, false),
  });

  // Metadata.
  keys.push({
    pubkey: metadataAccount,
    isSigner: false,
    isWritable: isWritable(metadataAccount, true),
  });

  // Master Edition.
  keys.push({
    pubkey: masterEditionAccount,
    isSigner: false,
    isWritable: isWritable(masterEditionAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Token.
  keys.push({
    pubkey: tokenAccount,
    isSigner: false,
    isWritable: isWritable(tokenAccount, true),
  });

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Sysvar Instructions.
  keys.push({
    pubkey: sysvarInstructionsAccount,
    isSigner: false,
    isWritable: isWritable(sysvarInstructionsAccount, false),
  });

  // Spl Token Program.
  keys.push({
    pubkey: splTokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(splTokenProgramAccount, false),
  });

  // Authorization Rules Program.
  keys.push({
    pubkey: authorizationRulesProgramAccount,
    isSigner: false,
    isWritable: isWritable(authorizationRulesProgramAccount, false),
  });

  // Authorization Rules.
  keys.push({
    pubkey: authorizationRulesAccount,
    isSigner: false,
    isWritable: isWritable(authorizationRulesAccount, false),
  });

  // Data.
  const data = getDelegateInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
