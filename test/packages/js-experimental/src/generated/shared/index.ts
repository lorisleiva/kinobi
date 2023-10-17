/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import { AccountRole, IAccountMeta, IInstruction } from '@solana/instructions';
import { Ed25519Signature } from '@solana/keys';
import { Transaction } from '@solana/transactions';

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
};
