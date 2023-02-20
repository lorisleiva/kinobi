/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, publicKey } from '@metaplex-foundation/umi-core';
import {
  getMplCandyMachineCoreErrorFromCode,
  getMplCandyMachineCoreErrorFromName,
} from '../errors';

export function getMplCandyMachineCoreProgram(): Program {
  return {
    name: 'mplCandyMachineCore',
    publicKey: publicKey('CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'),
    getErrorFromCode(code: number, cause?: Error) {
      return getMplCandyMachineCoreErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getMplCandyMachineCoreErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}