/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Serializer,
  string,
  struct,
} from '@metaplex-foundation/umi/serializers';

/** Config line struct for storing asset (NFT) data pre-mint. */
export type ConfigLine = {
  /** Name of the asset. */
  name: string;
  /** URI to JSON metadata. */
  uri: string;
};

export type ConfigLineArgs = ConfigLine;

/** @deprecated Use `getConfigLineSerializer()` without any argument instead. */
export function getConfigLineSerializer(
  _context: object
): Serializer<ConfigLineArgs, ConfigLine>;
export function getConfigLineSerializer(): Serializer<
  ConfigLineArgs,
  ConfigLine
>;
export function getConfigLineSerializer(
  _context: object = {}
): Serializer<ConfigLineArgs, ConfigLine> {
  return struct<ConfigLine>(
    [
      ['name', string()],
      ['uri', string()],
    ],
    { description: 'ConfigLine' }
  ) as Serializer<ConfigLineArgs, ConfigLine>;
}
