/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  Account,
  Context,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
} from 'some-magical-place';
import { TmKey, TmKeyArgs, getTmKeyDecoder, getTmKeyEncoder } from '../types';

export type EditionMarker = Account<EditionMarkerAccountData>;

export type EditionMarkerAccountData = { key: TmKey; ledger: Array<number> };

export type EditionMarkerAccountDataArgs = { ledger: Array<number> };

export function getEditionMarkerAccountDataEncoder(): Encoder<EditionMarkerAccountDataArgs> {
  return mapEncoder(
    getStructEncoder<EditionMarkerAccountData>(
      [
        ['key', getTmKeyEncoder()],
        ['ledger', getArrayEncoder(getU8Encoder(), { size: 31 })],
      ],
      { description: 'EditionMarkerAccountData' }
    ),
    (value) =>
      ({ ...value, key: TmKey.EditionMarker } as EditionMarkerAccountData)
  ) as Encoder<EditionMarkerAccountDataArgs>;
}

export function getEditionMarkerAccountDataDecoder(): Decoder<EditionMarkerAccountData> {
  return getStructDecoder<EditionMarkerAccountData>(
    [
      ['key', getTmKeyDecoder()],
      ['ledger', getArrayDecoder(getU8Decoder(), { size: 31 })],
    ],
    { description: 'EditionMarkerAccountData' }
  ) as Decoder<EditionMarkerAccountData>;
}

export function getEditionMarkerAccountDataCodec(): Codec<
  EditionMarkerAccountDataArgs,
  EditionMarkerAccountData
> {
  return combineCodec(
    getEditionMarkerAccountDataEncoder(),
    getEditionMarkerAccountDataDecoder()
  );
}

export function deserializeEditionMarker(
  rawAccount: RpcAccount
): EditionMarker {
  return deserializeAccount(rawAccount, getEditionMarkerAccountDataEncoder());
}

export async function fetchEditionMarker(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress,
  options?: RpcGetAccountOptions
): Promise<EditionMarker> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  assertAccountExists(maybeAccount, 'EditionMarker');
  return deserializeEditionMarker(maybeAccount);
}

export async function safeFetchEditionMarker(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress,
  options?: RpcGetAccountOptions
): Promise<EditionMarker | null> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  return maybeAccount.exists ? deserializeEditionMarker(maybeAccount) : null;
}

export async function fetchAllEditionMarker(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<EditionMarker[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'EditionMarker');
    return deserializeEditionMarker(maybeAccount);
  });
}

export async function safeFetchAllEditionMarker(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<EditionMarker[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeEditionMarker(maybeAccount as RpcAccount)
    );
}

export function getEditionMarkerGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );
  return gpaBuilder(context, programId)
    .registerFields<{ key: TmKeyArgs; ledger: Array<number> }>({
      key: [0, getTmKeyEncoder()],
      ledger: [1, getArrayEncoder(getU8Encoder(), { size: 31 })],
    })
    .deserializeUsing<EditionMarker>((account) =>
      deserializeEditionMarker(account)
    )
    .whereField('key', TmKey.EditionMarker);
}

export function getEditionMarkerSize(): number {
  return 32;
}
