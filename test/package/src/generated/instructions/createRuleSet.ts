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
import { PickPartial, addObjectProperty, isWritable } from '../shared';
import {
  TaCreateArgs,
  TaCreateArgsArgs,
  getTaCreateArgsSerializer,
} from '../types';

// Accounts.
export type CreateRuleSetInstructionAccounts = {
  /** Payer and creator of the RuleSet */
  payer?: Signer;
  /** The PDA account where the RuleSet is stored */
  ruleSetPda: Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
};

// Data.
export type CreateRuleSetInstructionData = {
  discriminator: number;
  createArgs: TaCreateArgs;
  ruleSetBump: number;
};

export type CreateRuleSetInstructionDataArgs = {
  createArgs: TaCreateArgsArgs;
  ruleSetBump: number;
};

export function getCreateRuleSetInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CreateRuleSetInstructionDataArgs, CreateRuleSetInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    CreateRuleSetInstructionDataArgs,
    any,
    CreateRuleSetInstructionData
  >(
    s.struct<CreateRuleSetInstructionData>(
      [
        ['discriminator', s.u8()],
        ['createArgs', getTaCreateArgsSerializer(context)],
        ['ruleSetBump', s.u8()],
      ],
      { description: 'CreateRuleSetInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 0 })
  ) as Serializer<
    CreateRuleSetInstructionDataArgs,
    CreateRuleSetInstructionData
  >;
}

// Args.
export type CreateRuleSetInstructionArgs = PickPartial<
  CreateRuleSetInstructionDataArgs,
  'ruleSetBump'
>;

// Instruction.
export function createRuleSet(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: CreateRuleSetInstructionAccounts & CreateRuleSetInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = {
    ...context.programs.getPublicKey(
      'mplTokenAuthRules',
      'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'
    ),
    isWritable: false,
  };

  // Resolved inputs.
  const resolvingAccounts = {};
  const resolvingArgs = {};
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
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
  addObjectProperty(
    resolvingArgs,
    'ruleSetBump',
    input.ruleSetBump ?? input.ruleSetPda.bump
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // Rule Set Pda.
  keys.push({
    pubkey: publicKey(resolvedAccounts.ruleSetPda),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.ruleSetPda, true),
  });

  // System Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.systemProgram),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Data.
  const data =
    getCreateRuleSetInstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
