/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
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
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import {
  getU16Decoder,
  getU16Encoder,
  getU8Decoder,
  getU8Encoder,
} from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Account,
  Context,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
} from 'some-magical-place';
import { Pda, gpaBuilder } from 'umi';
import { publicKey as publicKeySerializer } from 'umiSerializers';
import {
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  DelegateState,
  DelegateStateArgs,
  ProgrammableConfig,
  ProgrammableConfigArgs,
  TmKey,
  TmKeyArgs,
  TokenStandard,
  TokenStandardArgs,
  Uses,
  UsesArgs,
  getCollectionDecoder,
  getCollectionDetailsDecoder,
  getCollectionDetailsEncoder,
  getCollectionEncoder,
  getCreatorDecoder,
  getCreatorEncoder,
  getDelegateStateDecoder,
  getDelegateStateEncoder,
  getProgrammableConfigDecoder,
  getProgrammableConfigEncoder,
  getTmKeyDecoder,
  getTmKeyEncoder,
  getTokenStandardDecoder,
  getTokenStandardEncoder,
  getUsesDecoder,
  getUsesEncoder,
} from '../types';

export type Metadata = Account<MetadataAccountData>;

export type MetadataAccountData = {
  key: TmKey;
  updateAuthority: Base58EncodedAddress;
  mint: Base58EncodedAddress;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<Creator>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collectionDetails: Option<CollectionDetails>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
};

export type MetadataAccountDataArgs = {
  updateAuthority: Base58EncodedAddress;
  mint: Base58EncodedAddress;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: OptionOrNullable<Array<CreatorArgs>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: OptionOrNullable<number>;
  tokenStandard: OptionOrNullable<TokenStandardArgs>;
  collection: OptionOrNullable<CollectionArgs>;
  uses: OptionOrNullable<UsesArgs>;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
  programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
  delegateState: OptionOrNullable<DelegateStateArgs>;
};

export function getMetadataAccountDataEncoder(): Encoder<MetadataAccountDataArgs> {
  return mapEncoder(
    getStructEncoder<MetadataAccountData>(
      [
        ['key', getTmKeyEncoder()],
        ['updateAuthority', getAddressEncoder()],
        ['mint', getAddressEncoder()],
        ['name', getStringEncoder()],
        ['symbol', getStringEncoder()],
        ['uri', getStringEncoder()],
        ['sellerFeeBasisPoints', getU16Encoder()],
        ['creators', getOptionEncoder(getArrayEncoder(getCreatorEncoder()))],
        ['primarySaleHappened', getBooleanEncoder()],
        ['isMutable', getBooleanEncoder()],
        ['editionNonce', getOptionEncoder(getU8Encoder())],
        ['tokenStandard', getOptionEncoder(getTokenStandardEncoder())],
        ['collection', getOptionEncoder(getCollectionEncoder())],
        ['uses', getOptionEncoder(getUsesEncoder())],
        ['collectionDetails', getOptionEncoder(getCollectionDetailsEncoder())],
        [
          'programmableConfig',
          getOptionEncoder(getProgrammableConfigEncoder()),
        ],
        ['delegateState', getOptionEncoder(getDelegateStateEncoder())],
      ],
      { description: 'MetadataAccountData' }
    ),
    (value) => ({ ...value, key: TmKey.MetadataV1 } as MetadataAccountData)
  ) as Encoder<MetadataAccountDataArgs>;
}

export function getMetadataAccountDataDecoder(): Decoder<MetadataAccountData> {
  return getStructDecoder<MetadataAccountData>(
    [
      ['key', getTmKeyDecoder()],
      ['updateAuthority', getAddressDecoder()],
      ['mint', getAddressDecoder()],
      ['name', getStringDecoder()],
      ['symbol', getStringDecoder()],
      ['uri', getStringDecoder()],
      ['sellerFeeBasisPoints', getU16Decoder()],
      ['creators', getOptionDecoder(getArrayDecoder(getCreatorDecoder()))],
      ['primarySaleHappened', getBooleanDecoder()],
      ['isMutable', getBooleanDecoder()],
      ['editionNonce', getOptionDecoder(getU8Decoder())],
      ['tokenStandard', getOptionDecoder(getTokenStandardDecoder())],
      ['collection', getOptionDecoder(getCollectionDecoder())],
      ['uses', getOptionDecoder(getUsesDecoder())],
      ['collectionDetails', getOptionDecoder(getCollectionDetailsDecoder())],
      ['programmableConfig', getOptionDecoder(getProgrammableConfigDecoder())],
      ['delegateState', getOptionDecoder(getDelegateStateDecoder())],
    ],
    { description: 'MetadataAccountData' }
  ) as Decoder<MetadataAccountData>;
}

export function getMetadataAccountDataCodec(): Codec<
  MetadataAccountDataArgs,
  MetadataAccountData
> {
  return combineCodec(
    getMetadataAccountDataEncoder(),
    getMetadataAccountDataDecoder()
  );
}

export function deserializeMetadata(rawAccount: RpcAccount): Metadata {
  return deserializeAccount(rawAccount, getMetadataAccountDataEncoder());
}

export async function fetchMetadata(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress,
  options?: RpcGetAccountOptions
): Promise<Metadata> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  assertAccountExists(maybeAccount, 'Metadata');
  return deserializeMetadata(maybeAccount);
}

export async function safeFetchMetadata(
  context: Pick<Context, 'rpc'>,
  address: Base58EncodedAddress,
  options?: RpcGetAccountOptions
): Promise<Metadata | null> {
  const maybeAccount = await context.rpc.getAccount(address, options);
  return maybeAccount.exists ? deserializeMetadata(maybeAccount) : null;
}

export async function fetchAllMetadata(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<Metadata[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'Metadata');
    return deserializeMetadata(maybeAccount);
  });
}

export async function safeFetchAllMetadata(
  context: Pick<Context, 'rpc'>,
  addresses: Array<Base58EncodedAddress>,
  options?: RpcGetAccountsOptions
): Promise<Metadata[]> {
  const maybeAccounts = await context.rpc.getAccounts(addresses, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => deserializeMetadata(maybeAccount as RpcAccount));
}
