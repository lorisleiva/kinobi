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
import { addObjectProperty, isWritable } from '../shared';

// Accounts.
export type SetMintAuthorityInstructionAccounts = {
  candyMachine: PublicKey | Pda;
  authority?: Signer;
  mintAuthority: Signer;
};

// Data.
export type SetMintAuthorityInstructionData = { discriminator: Array<number> };

export type SetMintAuthorityInstructionDataArgs = {};

export function getSetMintAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  SetMintAuthorityInstructionDataArgs,
  SetMintAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    SetMintAuthorityInstructionDataArgs,
    any,
    SetMintAuthorityInstructionData
  >(
    s.struct<SetMintAuthorityInstructionData>(
      [['discriminator', s.array(s.u8(), { size: 8 })]],
      { description: 'SetMintAuthorityInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: [67, 127, 155, 187, 100, 174, 103, 121],
    })
  ) as Serializer<
    SetMintAuthorityInstructionDataArgs,
    SetMintAuthorityInstructionData
  >;
}

// Instruction.
export function setMintAuthority(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: SetMintAuthorityInstructionAccounts
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
  addObjectProperty(
    resolvingAccounts,
    'authority',
    input.authority ?? context.identity
  );
  const resolvedAccounts = { ...input, ...resolvingAccounts };

  // Candy Machine.
  keys.push({
    pubkey: publicKey(resolvedAccounts.candyMachine, false),
    isSigner: false,
    isWritable: isWritable(resolvedAccounts.candyMachine, true),
  });

  // Authority.
  signers.push(resolvedAccounts.authority);
  keys.push({
    pubkey: resolvedAccounts.authority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.authority, false),
  });

  // Mint Authority.
  signers.push(resolvedAccounts.mintAuthority);
  keys.push({
    pubkey: resolvedAccounts.mintAuthority.publicKey,
    isSigner: true,
    isWritable: isWritable(resolvedAccounts.mintAuthority, false),
  });

  // Data.
  const data = getSetMintAuthorityInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
