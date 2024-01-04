/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import { getU64Encoder } from '@solana/codecs-numbers';
import {
  MplTokenAuthRulesProgramError,
  MplTokenAuthRulesProgramErrorCode,
  getMplTokenAuthRulesProgramErrorFromCode,
} from '../errors';
import { Program, ProgramWithErrors, memcmp } from '../shared';
import { TaKey } from '../types';

export const MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS =
  'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Address<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'>;

export type MplTokenAuthRulesProgram =
  Program<'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg'> &
    ProgramWithErrors<
      MplTokenAuthRulesProgramErrorCode,
      MplTokenAuthRulesProgramError
    >;

export function createMplTokenAuthRulesProgram(): MplTokenAuthRulesProgram {
  return {
    name: 'mplTokenAuthRules',
    address: MPL_TOKEN_AUTH_RULES_PROGRAM_ADDRESS,
    getErrorFromCode(code: MplTokenAuthRulesProgramErrorCode, cause?: Error) {
      return getMplTokenAuthRulesProgramErrorFromCode(code, cause);
    },
  };
}

export enum MplTokenAuthRulesAccount {
  FREQUENCY_ACCOUNT,
}

export function identifyMplTokenAuthRulesAccount(
  account: { data: Uint8Array } | Uint8Array
): MplTokenAuthRulesAccount {
  const data = account instanceof Uint8Array ? account : account.data;
  if (memcmp(data, getU64Encoder().encode(TaKey.Frequency), 0)) {
    return MplTokenAuthRulesAccount.FREQUENCY_ACCOUNT;
  }
  throw new Error(
    'The provided account could not be identified as a mplTokenAuthRules account.'
  );
}
