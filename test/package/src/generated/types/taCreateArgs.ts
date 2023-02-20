/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi-core';

export type TaCreateArgs = {
  ruleSetName: string;
  serializedRuleSet: Uint8Array;
};

export function getTaCreateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TaCreateArgs> {
  const s = context.serializer;
  return s.struct<TaCreateArgs>(
    [
      ['ruleSetName', s.string()],
      ['serializedRuleSet', s.bytes()],
    ],
    'TaCreateArgs'
  );
}
