/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi-core';

export type LeafInfo = { leaf: Uint8Array; proof: Array<Array<number>> };

export function getLeafInfoSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<LeafInfo> {
  const s = context.serializer;
  return s.struct<LeafInfo>(
    [
      ['leaf', s.bytes()],
      ['proof', s.array(s.array(s.u8(), { size: 32 }))],
    ],
    'LeafInfo'
  );
}
