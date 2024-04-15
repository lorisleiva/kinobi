import type { IdlType } from './IdlType';

export type IdlInstruction = {
  name: string;
  accounts: (IdlInstructionAccount | IdlInstructionNestedAccounts)[];
  args: IdlInstructionArg[];
  defaultOptionalAccounts?: boolean;
  legacyOptionalAccountsStrategy?: boolean;
  discriminant?: IdlInstructionDiscriminant;
  docs?: string[];
};

export type IdlInstructionAccount = {
  name: string;
  isMut: boolean;
  isSigner: boolean;
  isOptionalSigner?: boolean;
  isOptional?: boolean;
  optional?: boolean;
  docs?: string[];
  desc?: string;
};

export type IdlInstructionNestedAccounts = {
  name: string;
  accounts: (IdlInstructionAccount | IdlInstructionNestedAccounts)[];
};

export type IdlInstructionArg = {
  name: string;
  type: IdlType;
  docs?: string[];
};

export type IdlInstructionDiscriminant = {
  type: IdlType;
  value: number;
};
