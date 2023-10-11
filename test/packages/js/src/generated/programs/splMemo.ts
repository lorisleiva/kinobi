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
} from '@metaplex-foundation/umi';
import { getSplMemoErrorFromCode, getSplMemoErrorFromName } from '../errors';

export const SPL_MEMO_PROGRAM_ID =
  'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo' as PublicKey<'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'>;

export function createSplMemoProgram(): Program {
  return {
    name: 'splMemo',
    publicKey: SPL_MEMO_PROGRAM_ID,
    getErrorFromCode(code: number, cause?: Error) {
      return getSplMemoErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getSplMemoErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}

export function getSplMemoProgram<T extends Program = Program>(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): T {
  return context.programs.get<T>('splMemo', clusterFilter);
}

export function getSplMemoProgramId(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): PublicKey {
  return context.programs.getPublicKey(
    'splMemo',
    SPL_MEMO_PROGRAM_ID,
    clusterFilter
  );
}
