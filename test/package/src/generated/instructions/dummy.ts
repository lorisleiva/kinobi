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
import { findDelegateRecordPda } from '../accounts';
import { PickPartial, addObjectProperty, isWritable } from '../shared';
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

export function getDummyInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<DummyInstructionDataArgs, DummyInstructionData> {
  const s = context.serializer;
  return mapSerializer<DummyInstructionDataArgs, any, DummyInstructionData>(
    s.struct<DummyInstructionData>(
      [['discriminator', s.array(s.u8(), { size: 8 })]],
      { description: 'DummyInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [167, 117, 211, 79, 251, 254, 47, 135],
    })
  ) as Serializer<DummyInstructionDataArgs, DummyInstructionData>;
}

// Extra Args.
export type DummyInstructionExtraArgs = { identityArg: PublicKey };

// Args.
export type DummyInstructionArgs = PickPartial<
  DummyInstructionExtraArgs,
  'identityArg'
>;

// Instruction.
export function dummy(
  context: Pick<
    Context,
    'serializer' | 'programs' | 'eddsa' | 'identity' | 'payer'
  >,
  input: DummyInstructionAccounts & DummyInstructionArgs
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
  addObjectProperty(resolvingAccounts, 'mint', input.mint ?? programId);
  addObjectProperty(
    resolvingAccounts,
    'edition',
    input.edition ?? resolvingAccounts.mint
  );
  addObjectProperty(
    resolvingAccounts,
    'mintAuthority',
    input.mintAuthority ?? input.updateAuthority
  );
  addObjectProperty(resolvingAccounts, 'payer', input.payer ?? context.payer);
  addObjectProperty(resolvingAccounts, 'bar', input.bar ?? programId);
  addObjectProperty(
    resolvingAccounts,
    'foo',
    input.foo ?? resolvingAccounts.bar
  );
  addObjectProperty(
    resolvingAccounts,
    'delegateRecord',
    input.delegateRecord ??
      findDelegateRecordPda(context, { role: DelegateRole.Collection })
  );
  addObjectProperty(
    resolvingArgs,
    'identityArg',
    input.identityArg ?? context.identity.publicKey
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Edition (optional).
  if (resolvedAccounts.edition) {
    if (isSigner(resolvedAccounts.edition)) {
      signers.push(resolvedAccounts.edition);
    }
    keys.push({
      pubkey: publicKey(resolvedAccounts.edition),
      isSigner: isSigner(resolvedAccounts.edition),
      isWritable: isWritable(resolvedAccounts.edition, true),
    });
  }

  // Mint.
  keys.push({
    pubkey: publicKey(resolvedAccounts.mint),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.mint, true),
  });

  // Update Authority.
  signers.push(resolvedAccounts.updateAuthority);
  keys.push({
    pubkey: resolvedAccounts.updateAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.updateAuthority, false),
  });

  // Mint Authority.
  signers.push(resolvedAccounts.mintAuthority);
  keys.push({
    pubkey: resolvedAccounts.mintAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.mintAuthority, true),
  });

  // Payer.
  signers.push(resolvedAccounts.payer);
  keys.push({
    pubkey: resolvedAccounts.payer.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.payer, true),
  });

  // Foo.
  if (isSigner(resolvedAccounts.foo)) {
    signers.push(resolvedAccounts.foo);
  }
  keys.push({
    pubkey: publicKey(resolvedAccounts.foo),
    isSigner: isSigner(resolvedAccounts.foo),
    isWritable: isWritable(resolvedAccounts.foo, true),
  });

  // Bar.
  if (isSigner(resolvedAccounts.bar)) {
    signers.push(resolvedAccounts.bar);
  }
  keys.push({
    pubkey: publicKey(resolvedAccounts.bar),
    isSigner: isSigner(resolvedAccounts.bar),
    isWritable: isWritable(resolvedAccounts.bar, false),
  });

  // Delegate Record.
  keys.push({
    pubkey: publicKey(resolvedAccounts.delegateRecord),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.delegateRecord, true),
  });

  // Data.
  const data = getDummyInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
