/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  isSigner,
  Pda,
  publicKey,
  PublicKey,
  Signer,
  isPda,
} from '@metaplex-foundation/umi';
import { IAccountMeta, AccountRole } from '@solana/instructions';

/**
 * Transforms the given object such that the given keys are optional.
 * @internal
 */
export type PickPartial<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

/**
 * Asserts that the given value is not null or undefined.
 * @internal
 */
export function expectSome<T>(value: T | null | undefined): T {
  if (value == null) {
    throw new Error('Expected a value but received null or undefined.');
  }
  return value;
}

/**
 * Asserts that the given value is a PublicKey.
 * @internal
 */
export function expectPublicKey(
  value: PublicKey | Pda | Signer | null | undefined
): PublicKey {
  if (!value) {
    throw new Error('Expected a PublicKey.');
  }
  return publicKey(value, false);
}

/**
 * Asserts that the given value is a PDA.
 * @internal
 */
export function expectPda(
  value: PublicKey | Pda | Signer | null | undefined
): Pda {
  if (!value || !Array.isArray(value) || !isPda(value)) {
    throw new Error('Expected a PDA.');
  }
  return value;
}

/**
 * Defines an instruction account to resolve.
 * @internal
 */
export type ResolvedAccount<T = PublicKey | Pda | Signer | null> = {
  isWritable: boolean;
  value: T;
};

/**
 * Defines a set of instruction account to resolve.
 * @internal
 */
export type ResolvedAccounts = Record<string, ResolvedAccount>;

/**
 * Defines a set of instruction account to resolve with their indices.
 * @internal
 */
export type ResolvedAccountsWithIndices = Record<
  string,
  ResolvedAccount & { index: number }
>;

/**
 * Get account metas and signers from resolved accounts.
 * @internal
 */
export function getAccountMetasAndSigners(
  accounts: ResolvedAccount[],
  optionalAccountStrategy: 'omitted' | 'programId',
  programId: PublicKey
): [AccountMeta[], Signer[]] {
  const keys: AccountMeta[] = [];
  const signers: Signer[] = [];

  accounts.forEach((account) => {
    if (!account.value) {
      if (optionalAccountStrategy === 'omitted') return;
      keys.push({ pubkey: programId, isSigner: false, isWritable: false });
      return;
    }

    if (isSigner(account.value)) {
      signers.push(account.value);
    }
    keys.push({
      pubkey: publicKey(account.value, false),
      isSigner: isSigner(account.value),
      isWritable: account.isWritable,
    });
  });

  return [keys, signers];
}

/**
 * Add an account meta with a default role if only an address is provided.
 * @internal
 */
export function accountMetaWithDefault<
  TAccount extends string | IAccountMeta<string>,
  TRole extends AccountRole
>(account: TAccount, role: TRole) {
  return (
    typeof account === 'string' ? { address: account, role } : account
  ) as TAccount extends string
    ? { address: Base58EncodedAddress<TAccount>; role: TRole }
    : TAccount;
}
