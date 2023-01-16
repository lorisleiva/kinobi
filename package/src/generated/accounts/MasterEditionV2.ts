/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { TmKey, getTmKeySerializer } from '../types';
import {
  Account,
  Context,
  Option,
  Pda,
  PublicKey,
  RpcAccount,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  getProgramAddressWithFallback,
  mapSerializer,
  utf8,
} from '@lorisleiva/js-core';

export type MasterEditionV2 = Account<MasterEditionV2AccountData>;

export type MasterEditionV2AccountData = {
  key: TmKey;
  supply: bigint;
  maxSupply: Option<bigint>;
};

export type MasterEditionV2AccountArgs = {
  supply: number | bigint;
  maxSupply: Option<number | bigint>;
};

export async function fetchMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<MasterEditionV2> {
  const maybeAccount = await context.rpc.getAccount(address);
  assertAccountExists(maybeAccount, 'MasterEditionV2');
  return deserializeMasterEditionV2(context, maybeAccount);
}

export async function safeFetchMasterEditionV2(
  context: Pick<Context, 'rpc' | 'serializer'>,
  address: PublicKey
): Promise<MasterEditionV2 | null> {
  const maybeAccount = await context.rpc.getAccount(address);
  return maybeAccount.exists
    ? deserializeMasterEditionV2(context, maybeAccount)
    : null;
}

export function deserializeMasterEditionV2(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): MasterEditionV2 {
  return deserializeAccount(
    rawAccount,
    getMasterEditionV2AccountDataSerializer(context)
  );
}

export function getMasterEditionV2AccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MasterEditionV2AccountArgs, MasterEditionV2AccountData> {
  const s = context.serializer;
  return mapSerializer<
    MasterEditionV2AccountArgs,
    MasterEditionV2AccountData,
    MasterEditionV2AccountData
  >(
    s.struct<MasterEditionV2AccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['supply', s.u64],
        ['maxSupply', s.option(s.u64)],
      ],
      'MasterEditionV2'
    ),
    (value) => ({ key: 6, ...value } as MasterEditionV2AccountData)
  ) as Serializer<MasterEditionV2AccountArgs, MasterEditionV2AccountData>;
}

export function findMasterEditionV2Pda(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const s = context.serializer;
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return context.eddsa.findPda(programId, [
    utf8.serialize('metadata'),
    programId.bytes,
    s.publicKey.serialize(seeds.mint),
    utf8.serialize('edition'),
  ]);
}
