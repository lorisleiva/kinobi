/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { containsBytes, getU64Encoder, getU8Encoder } from '@solana/codecs';
import { Program, ProgramWithErrors } from '@solana/programs';
import {
  MplTokenAuthRulesProgramError,
  MplTokenAuthRulesProgramErrorCode,
  getMplTokenAuthRulesProgramErrorFromCode,
} from '../errors';
import {
  ParsedCreateFrequencyRuleInstruction,
  ParsedCreateRuleSetInstruction,
  ParsedValidateInstruction,
} from '../instructions';
import { TaKey } from '../types';

export const MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS =
  'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'>;

export type MplTokenAuthRulesProgram =
  Program<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'> &
    ProgramWithErrors<
      MplTokenAuthRulesProgramErrorCode,
      MplTokenAuthRulesProgramError
    >;

export function getMplTokenAuthRulesProgram(): MplTokenAuthRulesProgram {
  return {
    name: 'mplTokenAuthRules',
    address: MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
    getErrorFromCode(code: MplTokenAuthRulesProgramErrorCode, cause?: Error) {
      return getMplTokenAuthRulesProgramErrorFromCode(code, cause);
    },
  };
}

export enum MplTokenAuthRulesAccount {
  FrequencyAccount,
}

export function identifyMplTokenAuthRulesAccount(
  account: { data: Uint8Array } | Uint8Array
): MplTokenAuthRulesAccount {
  const data = account instanceof Uint8Array ? account : account.data;
  if (containsBytes(data, getU64Encoder().encode(TaKey.Frequency), 0)) {
    return MplTokenAuthRulesAccount.FrequencyAccount;
  }
  throw new Error(
    'The provided account could not be identified as a mplTokenAuthRules account.'
  );
}

export enum MplTokenAuthRulesInstruction {
  CreateRuleSet,
  Validate,
  CreateFrequencyRule,
}

export function identifyMplTokenAuthRulesInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): MplTokenAuthRulesInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (containsBytes(data, getU8Encoder().encode(0), 0)) {
    return MplTokenAuthRulesInstruction.CreateRuleSet;
  }
  if (containsBytes(data, getU8Encoder().encode(1), 0)) {
    return MplTokenAuthRulesInstruction.Validate;
  }
  if (containsBytes(data, getU8Encoder().encode(2), 0)) {
    return MplTokenAuthRulesInstruction.CreateFrequencyRule;
  }
  throw new Error(
    'The provided instruction could not be identified as a mplTokenAuthRules instruction.'
  );
}

export type ParsedMplTokenAuthRulesInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
> =
  | ({
      instructionType: MplTokenAuthRulesInstruction.CreateRuleSet;
    } & ParsedCreateRuleSetInstruction<TProgram>)
  | ({
      instructionType: MplTokenAuthRulesInstruction.Validate;
    } & ParsedValidateInstruction<TProgram>)
  | ({
      instructionType: MplTokenAuthRulesInstruction.CreateFrequencyRule;
    } & ParsedCreateFrequencyRuleInstruction<TProgram>);
