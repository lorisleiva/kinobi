/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  isProgramDerivedAddress,
  getProgramDerivedAddress as web3JsGetProgramDerivedAddress,
  ProgramDerivedAddress,
} from '@solana/addresses';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  upgradeRoleToSigner,
} from '@solana/instructions';
import { Ed25519Signature } from '@solana/keys';
import { Transaction } from '@solana/transactions';

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
    | Base58EncodedAddress<T>
    | ProgramDerivedAddress<T>
    | Signer<T>
    | null
    | undefined
): Base58EncodedAddress<T> {
  if (!value) {
    throw new Error('Expected a Base58EncodedAddress.');
  }
  if ('address' in value) {
    return value.address;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value as Base58EncodedAddress<T>;
}

/**
 * Asserts that the given value is a PDA.
 * @internal
 */
export function expectProgramDerivedAddress<T extends string = string>(
  value:
    | Base58EncodedAddress<T>
    | ProgramDerivedAddress<T>
    | Signer<T>
    | null
    | undefined
): ProgramDerivedAddress<T> {
  if (!value || !Array.isArray(value) || !isProgramDerivedAddress(value)) {
    throw new Error('Expected a ProgramDerivedAddress.');
  }
  return value;
}

/**
 * Asserts that the given value is a Signer.
 * @internal
 */
export function expectSigner<T extends string = string>(
  value:
    | Base58EncodedAddress<T>
    | ProgramDerivedAddress<T>
    | Signer<T>
    | null
    | undefined
): Signer<T> {
  if (!isSigner(value)) {
    throw new Error('Expected a Signer.');
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
    | Base58EncodedAddress<T>
    | ProgramDerivedAddress<T>
    | Signer<T>
    | null =
    | Base58EncodedAddress<T>
    | ProgramDerivedAddress<T>
    | Signer<T>
    | null
> = {
  isWritable: boolean;
  value: U;
};

/**
 * Add an account meta with a default role if only an address is provided.
 * @internal
 */
export function accountMetaWithDefault<
  TAccount extends string | IAccountMeta<string>,
  TRole extends AccountRole
>(account: TAccount | undefined, role: TRole) {
  if (account === undefined) return undefined;
  return (
    typeof account === 'string' ? { address: account, role } : account
  ) as TAccount extends string
    ? { address: Base58EncodedAddress<TAccount>; role: TRole }
    : TAccount;
}

/**
 * Get account metas and signers from resolved accounts.
 * @internal
 */
export function getAccountMetasAndSigners(
  accounts: Record<string, ResolvedAccount>,
  optionalAccountStrategy: 'omitted' | 'programId',
  programAddress: Base58EncodedAddress
): [Record<string, IAccountMeta>, Signer[]] {
  const accountMetas: Record<string, IAccountMeta> = {};
  const signers: Signer[] = [];

  Object.keys(accounts).forEach((key) => {
    const account = accounts[key] as ResolvedAccount;
    if (!account.value) {
      if (optionalAccountStrategy === 'omitted') return;
      accountMetas[key] = {
        address: programAddress,
        role: AccountRole.READONLY,
      };
      return;
    }

    if (isSigner(account.value)) {
      signers.push(account.value);
    }
    const writableRole = account.isWritable
      ? AccountRole.WRITABLE
      : AccountRole.READONLY;
    accountMetas[key] = {
      address: expectAddress(account.value),
      role: isSigner(account.value)
        ? upgradeRoleToSigner(writableRole)
        : writableRole,
    };
  });

  return [accountMetas, signers];
}

export type WrappedInstruction<TInstruction extends IInstruction> = {
  instruction: TInstruction;
  signers: Signer[];
  bytesCreatedOnChain: number;
};

export type Signer<TAddress extends string = string> =
  | TransactionSigner<TAddress>
  | TransactionSenderSigner<TAddress>;

export type TransactionSigner<TAddress extends string = string> = {
  address: Base58EncodedAddress<TAddress>;
  signTransaction: <T extends Transaction = Transaction>(
    transactions: T[]
  ) => Promise<T[]>;
};

export type TransactionSenderSigner<TAddress extends string = string> = {
  address: Base58EncodedAddress<TAddress>;
  signAndSendTransaction: (
    transactions: Transaction[]
  ) => Promise<Ed25519Signature[]>;
};

export function isSigner<TAddress extends string = string>(
  value:
    | Base58EncodedAddress<TAddress>
    | ProgramDerivedAddress<TAddress>
    | Signer<TAddress>
    | unknown
): value is Signer<TAddress> {
  return (
    !!value &&
    typeof value === 'object' &&
    'address' in value &&
    ('signTransaction' in value || 'signAndSendTransaction' in value)
  );
}

export type CustomGeneratedInstruction<
  TInstruction extends IInstruction,
  TReturn
> = {
  getGeneratedInstruction: (
    wrappedInstruction: WrappedInstruction<TInstruction>
  ) => TReturn;
};

export type Context = {
  getProgramAddress?: (program: {
    name: string;
    address: Base58EncodedAddress;
  }) => Promise<Base58EncodedAddress>;
  getProgramDerivedAddress?: (
    programAddress: Base58EncodedAddress,
    seeds: Uint8Array[]
  ) => Promise<ProgramDerivedAddress>;
};

export async function getProgramAddress<TAddress extends string = string>(
  context: Pick<Context, 'getProgramAddress'>,
  name: string,
  address: TAddress
): Promise<Base58EncodedAddress<TAddress>> {
  return context.getProgramAddress
    ? await context.getProgramAddress({
        name,
        address: address as Base58EncodedAddress<TAddress>,
      })
    : (address as Base58EncodedAddress<TAddress>);
}

export async function getProgramDerivedAddress(
  context: Pick<Context, 'getProgramDerivedAddress'>,
  programAddress: string,
  seeds: Uint8Array[]
): Promise<ProgramDerivedAddress> {
  return context.getProgramDerivedAddress
    ? await context.getProgramDerivedAddress(
        programAddress as Base58EncodedAddress,
        seeds
      )
    : await web3JsGetProgramDerivedAddress({
        programAddress: programAddress as Base58EncodedAddress,
        seeds,
      });
}
