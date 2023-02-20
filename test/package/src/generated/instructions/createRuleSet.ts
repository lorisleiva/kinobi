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
} from '@metaplex-foundation/umi-core';
import { TaCreateArgs, getTaCreateArgsSerializer } from '../types';

// Accounts.
export type CreateRuleSetInstructionAccounts = {
  /** Payer and creator of the RuleSet */
  payer?: Signer;
  /** The PDA account where the RuleSet is stored */
  ruleSetPda: PublicKey;
  /** System program */
  systemProgram?: PublicKey;
};

// Arguments.
export type CreateRuleSetInstructionData = {
  discriminator: number;
  createArgs: TaCreateArgs;
};

export type CreateRuleSetInstructionArgs = { createArgs: TaCreateArgs };

export function getCreateRuleSetInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CreateRuleSetInstructionArgs, CreateRuleSetInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    CreateRuleSetInstructionArgs,
    CreateRuleSetInstructionData,
    CreateRuleSetInstructionData
  >(
    s.struct<CreateRuleSetInstructionData>(
      [
        ['discriminator', s.u8()],
        ['createArgs', getTaCreateArgsSerializer(context)],
      ],
      'CreateRuleSetInstructionArgs'
    ),
    (value) => ({ ...value, discriminator: 0 } as CreateRuleSetInstructionData)
  ) as Serializer<CreateRuleSetInstructionArgs, CreateRuleSetInstructionData>;
}

// Instruction.
export function createRuleSet(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: CreateRuleSetInstructionAccounts & CreateRuleSetInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey =
    context.programs.get('mplTokenAuthRules').publicKey;

  // Resolved accounts.
  const payerAccount = input.payer ?? context.payer;
  const ruleSetPdaAccount = input.ruleSetPda;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').publicKey,
    isWritable: false,
  };

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Rule Set Pda.
  keys.push({
    pubkey: ruleSetPdaAccount,
    isSigner: false,
    isWritable: isWritable(ruleSetPdaAccount, true),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Data.
  const data =
    getCreateRuleSetInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
