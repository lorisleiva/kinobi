/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  ClusterFilter,
  Context,
  Program,
  PublicKey,
  publicKey,
} from '@metaplex-foundation/umi';
import {
  getMplTokenAuthRulesErrorFromCode,
  getMplTokenAuthRulesErrorFromName,
} from '../errors';

export const MPL_TOKEN_AUTH_RULES_PROGRAM_ID = publicKey(
  'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  false
);

export function createMplTokenAuthRulesProgram(): Program {
  return {
    name: 'mplTokenAuthRules',
    publicKey: MPL_TOKEN_AUTH_RULES_PROGRAM_ID,
    getErrorFromCode(code: number, cause?: Error) {
      return getMplTokenAuthRulesErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getMplTokenAuthRulesErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}

export function getMplTokenAuthRulesProgram<T extends Program = Program>(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): T {
  return context.programs.get<T>('mplTokenAuthRules', clusterFilter);
}

export function getMplTokenAuthRulesProgramId(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): PublicKey {
  return context.programs.getPublicKey(
    'mplTokenAuthRules',
    MPL_TOKEN_AUTH_RULES_PROGRAM_ID,
    clusterFilter
  );
}
