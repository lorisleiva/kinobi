/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  isProgramDerivedAddress,
  ProgramDerivedAddress,
} from '@solana/addresses';
import { ReadonlyUint8Array } from '@solana/codecs';
import {
  AccountRole,
  IAccountMeta,
  upgradeRoleToSigner,
} from '@solana/instructions';
import {
  IAccountSignerMeta,
  isTransactionSigner as web3JsIsTransactionSigner,
  TransactionSigner,
} from '@solana/signers';

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
export function expectAddress<T extends string = string>(
  value:
    | Address<T>
    | ProgramDerivedAddress<T>
    | TransactionSigner<T>
    | null
    | undefined
): Address<T> {
  if (!value) {
    throw new Error('Expected a Address.');
  }
  if (typeof value === 'object' && 'address' in value) {
    return value.address;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value as Address<T>;
}

/**
 * Asserts that the given value is a PDA.
 * @internal
 */
export function expectProgramDerivedAddress<T extends string = string>(
  value:
    | Address<T>
    | ProgramDerivedAddress<T>
    | TransactionSigner<T>
    | null
    | undefined
): ProgramDerivedAddress<T> {
  if (!value || !Array.isArray(value) || !isProgramDerivedAddress(value)) {
    throw new Error('Expected a ProgramDerivedAddress.');
  }
  return value;
}

/**
 * Asserts that the given value is a TransactionSigner.
 * @internal
 */
export function expectTransactionSigner<T extends string = string>(
  value:
    | Address<T>
    | ProgramDerivedAddress<T>
    | TransactionSigner<T>
    | null
    | undefined
): TransactionSigner<T> {
  if (!value || !isTransactionSigner(value)) {
    throw new Error('Expected a TransactionSigner.');
  }
  return value;
}

/**
 * Defines an instruction account to resolve.
 * @internal
 */
export type ResolvedAccount<
  T extends string = string,
  U extends
    | Address<T>
    | ProgramDerivedAddress<T>
    | TransactionSigner<T>
    | null =
    | Address<T>
    | ProgramDerivedAddress<T>
    | TransactionSigner<T>
    | null,
> = {
  isWritable: boolean;
  value: U;
};

/**
 * Defines an instruction that stores additional bytes on-chain.
 * @internal
 */
export type IInstructionWithByteDelta = {
  byteDelta: number;
};

/**
 * Get account metas and signers from resolved accounts.
 * @internal
 */
export function getAccountMetaFactory(
  programAddress: Address,
  optionalAccountStrategy: 'omitted' | 'programId'
) {
  return (
    account: ResolvedAccount
  ): IAccountMeta | IAccountSignerMeta | undefined => {
    if (!account.value) {
      if (optionalAccountStrategy === 'omitted') return;
      return Object.freeze({
        address: programAddress,
        role: AccountRole.READONLY,
      });
    }

    const writableRole = account.isWritable
      ? AccountRole.WRITABLE
      : AccountRole.READONLY;
    return Object.freeze({
      address: expectAddress(account.value),
      role: isTransactionSigner(account.value)
        ? upgradeRoleToSigner(writableRole)
        : writableRole,
      ...(isTransactionSigner(account.value) ? { signer: account.value } : {}),
    });
  };
}

export function isTransactionSigner<TAddress extends string = string>(
  value:
    | Address<TAddress>
    | ProgramDerivedAddress<TAddress>
    | TransactionSigner<TAddress>
): value is TransactionSigner<TAddress> {
  return (
    !!value &&
    typeof value === 'object' &&
    'address' in value &&
    web3JsIsTransactionSigner(value)
  );
}

export function memcmp(
  data: ReadonlyUint8Array,
  bytes: ReadonlyUint8Array,
  offset: number
) {
  const slice = data.slice(offset, offset + bytes.length);
  if (slice.length !== bytes.length) return false;
  return bytes.every((b, i) => b === slice[i]);
}
