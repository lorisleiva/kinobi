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
  isSigner,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { addObjectProperty, isWritable } from '../shared';
import {
  Operation,
  OperationArgs,
  Payload,
  PayloadArgs,
  getOperationSerializer,
  getPayloadSerializer,
} from '../types';

// Accounts.
export type ValidateInstructionAccounts = {
  /** Payer and creator of the RuleSet */
  payer?: Signer;
  /** The PDA account where the RuleSet is stored */
  ruleSet: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  optRuleSigner1?: PublicKey | Pda | Signer;
  /** Optional rule validation signer 2 */
  optRuleSigner2?: Signer;
  /** Optional rule validation signer 3 */
  optRuleSigner3?: Signer;
  /** Optional rule validation signer 4 */
  optRuleSigner4?: Signer;
  /** Optional rule validation signer 5 */
  optRuleSigner5?: Signer;
  /** Optional rule validation non-signer 1 */
  optRuleNonsigner1?: PublicKey | Pda;
  /** Optional rule validation non-signer 2 */
  optRuleNonsigner2?: PublicKey | Pda;
  /** Optional rule validation non-signer 3 */
  optRuleNonsigner3?: PublicKey | Pda;
  /** Optional rule validation non-signer 4 */
  optRuleNonsigner4?: PublicKey | Pda;
  /** Optional rule validation non-signer 5 */
  optRuleNonsigner5?: PublicKey | Pda;
};

// Data.
export type ValidateInstructionData = {
  discriminator: number;
  ruleSetName: string;
  operation: Operation;
  payload: Payload;
};

export type ValidateInstructionDataArgs = {
  ruleSetName: string;
  operation: OperationArgs;
  payload: PayloadArgs;
};

export function getValidateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ValidateInstructionDataArgs, ValidateInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    ValidateInstructionDataArgs,
    any,
    ValidateInstructionData
  >(
    s.struct<ValidateInstructionData>(
      [
        ['discriminator', s.u8()],
        ['ruleSetName', s.string()],
        ['operation', getOperationSerializer(context)],
        ['payload', getPayloadSerializer(context)],
      ],
      { description: 'ValidateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 1 })
  ) as Serializer<ValidateInstructionDataArgs, ValidateInstructionData>;
}

// Args.
export type ValidateInstructionArgs = ValidateInstructionDataArgs;

// Instruction.
export function validate(
  context: Pick<Context, 'serializer' | 'programs' | 'payer'>,
  input: ValidateInstructionAccounts & ValidateInstructionArgs
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
  const resolvedAccounts = { ...input, ...resolvingAccounts };
  const resolvedArgs = { ...input, ...resolvingArgs };

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // Rule Set.
  keys.push({
    pubkey: publicKey(resolvedAccounts.ruleSet),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.ruleSet, true),
  });

  // System Program.
  keys.push({
    pubkey: publicKey(resolvedAccounts.systemProgram),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.systemProgram, false),
  });

  // Opt Rule Signer1 (optional).
  if (resolvedAccounts.optRuleSigner1) {
    if (isSigner(resolvedAccounts.optRuleSigner1)) {
      signers.push(resolvedAccounts.optRuleSigner1);
    }
    keys.push({
      pubkey: publicKey(resolvedAccounts.optRuleSigner1),
      isSigner: isSigner(resolvedAccounts.optRuleSigner1),
      isWritable: isWritable(resolvedAccounts.optRuleSigner1, false),
    });
  }

  // Opt Rule Signer2 (optional).
  if (resolvedAccounts.optRuleSigner2) {
    signers.push(resolvedAccounts.optRuleSigner2);
    keys.push({
      pubkey: resolvedAccounts.optRuleSigner2.publicKey,
      isSigner: true,
      isWritable: isWritable(resolvedAccounts.optRuleSigner2, false),
    });
  }

  // Opt Rule Signer3 (optional).
  if (resolvedAccounts.optRuleSigner3) {
    signers.push(resolvedAccounts.optRuleSigner3);
    keys.push({
      pubkey: resolvedAccounts.optRuleSigner3.publicKey,
      isSigner: true,
      isWritable: isWritable(resolvedAccounts.optRuleSigner3, false),
    });
  }

  // Opt Rule Signer4 (optional).
  if (resolvedAccounts.optRuleSigner4) {
    signers.push(resolvedAccounts.optRuleSigner4);
    keys.push({
      pubkey: resolvedAccounts.optRuleSigner4.publicKey,
      isSigner: true,
      isWritable: isWritable(resolvedAccounts.optRuleSigner4, false),
    });
  }

  // Opt Rule Signer5 (optional).
  if (resolvedAccounts.optRuleSigner5) {
    signers.push(resolvedAccounts.optRuleSigner5);
    keys.push({
      pubkey: resolvedAccounts.optRuleSigner5.publicKey,
      isSigner: true,
      isWritable: isWritable(resolvedAccounts.optRuleSigner5, false),
    });
  }

  // Opt Rule Nonsigner1 (optional).
  if (resolvedAccounts.optRuleNonsigner1) {
    keys.push({
      pubkey: publicKey(resolvedAccounts.optRuleNonsigner1),
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.optRuleNonsigner1, false),
    });
  }

  // Opt Rule Nonsigner2 (optional).
  if (resolvedAccounts.optRuleNonsigner2) {
    keys.push({
      pubkey: publicKey(resolvedAccounts.optRuleNonsigner2),
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.optRuleNonsigner2, false),
    });
  }

  // Opt Rule Nonsigner3 (optional).
  if (resolvedAccounts.optRuleNonsigner3) {
    keys.push({
      pubkey: publicKey(resolvedAccounts.optRuleNonsigner3),
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.optRuleNonsigner3, false),
    });
  }

  // Opt Rule Nonsigner4 (optional).
  if (resolvedAccounts.optRuleNonsigner4) {
    keys.push({
      pubkey: publicKey(resolvedAccounts.optRuleNonsigner4),
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.optRuleNonsigner4, false),
    });
  }

  // Opt Rule Nonsigner5 (optional).
  if (resolvedAccounts.optRuleNonsigner5) {
    keys.push({
      pubkey: publicKey(resolvedAccounts.optRuleNonsigner5),
      isSigner: false,
      isWritable: isWritable(resolvedAccounts.optRuleNonsigner5, false),
    });
  }

  // Data.
  const data =
    getValidateInstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
