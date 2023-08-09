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
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import { findDelegateRecordPda } from '../accounts';
import { PickPartial, addAccountMeta, addObjectProperty } from '../shared';
import { DelegateRole } from '../types';

// Accounts.
export type DummyInstructionAccounts = {
  edition?: Signer;
  mint?: PublicKey | Pda;
  updateAuthority: Signer;
  mintAuthority?: Signer;
  payer?: Signer;
  foo?: PublicKey | Pda;
  bar?: Signer;
  delegateRecord?: PublicKey | Pda;
};

// Data.
export type DummyInstructionData = { discriminator: Array<number> };

export type DummyInstructionDataArgs = {};

/** @deprecated Use `getDummyInstructionDataSerializer()` without any argument instead. */
export function getDummyInstructionDataSerializer(
  _context: object
): Serializer<DummyInstructionDataArgs, DummyInstructionData>;
export function getDummyInstructionDataSerializer(): Serializer<
  DummyInstructionDataArgs,
  DummyInstructionData
>;
export function getDummyInstructionDataSerializer(
  _context: object = {}
): Serializer<DummyInstructionDataArgs, DummyInstructionData> {
  return mapSerializer<DummyInstructionDataArgs, any, DummyInstructionData>(
    struct<DummyInstructionData>(
      [['discriminator', array(u8(), { size: 8 })]],
      { description: 'DummyInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [167, 117, 211, 79, 251, 254, 47, 135],
    })
  ) as Serializer<DummyInstructionDataArgs, DummyInstructionData>;
}

// Extra Args.
export type DummyInstructionExtraArgs = {
  identityArg: PublicKey;
  proof: Array<PublicKey>;
};

// Args.
export type DummyInstructionArgs = PickPartial<
  DummyInstructionExtraArgs,
  'identityArg' | 'proof'
>;

// Instruction.
export function dummy(
  context: Pick<Context, 'programs' | 'eddsa' | 'identity' | 'payer'>,
  input: DummyInstructionAccounts & DummyInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplCandyMachineCore',
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    updateAuthority: [input.updateAuthority, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'mint',
    input.mint ? ([input.mint, true] as const) : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'edition',
    input.edition
      ? ([input.edition, true] as const)
      : ([resolvedAccounts.mint[0], true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'mintAuthority',
    input.mintAuthority
      ? ([input.mintAuthority, true] as const)
      : ([input.updateAuthority, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'bar',
    input.bar ? ([input.bar, false] as const) : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'foo',
    input.foo
      ? ([input.foo, true] as const)
      : ([resolvedAccounts.bar[0], true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'delegateRecord',
    input.delegateRecord
      ? ([input.delegateRecord, true] as const)
      : ([
          findDelegateRecordPda(context, { role: DelegateRole.Collection }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvingArgs,
    'identityArg',
    input.identityArg ?? context.identity.publicKey
  );
  addObjectProperty(resolvingArgs, 'proof', input.proof ?? []);
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.edition, true);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.updateAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.mintAuthority, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.foo, false);
  addAccountMeta(keys, signers, resolvedAccounts.bar, false);
  addAccountMeta(keys, signers, resolvedAccounts.delegateRecord, false);

  // Remaining Accounts.
  const remainingAccounts = resolvedArgs.proof.map(
    (address) => [address, false] as const
  );
  remainingAccounts.forEach((remainingAccount) =>
    addAccountMeta(keys, signers, remainingAccount, false)
  );

  // Data.
  const data = getDummyInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}