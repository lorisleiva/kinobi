/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@metaplex-foundation/umi-core';
import {
  Collection,
  CollectionArgs,
  CollectionDetails,
  CollectionDetailsArgs,
  Creator,
  CreatorArgs,
  DelegateState,
  ProgrammableConfig,
  TmKey,
  TokenStandard,
  Uses,
  UsesArgs,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getCreatorSerializer,
  getDelegateStateSerializer,
  getProgrammableConfigSerializer,
  getTmKeySerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
} from '../types';

export type Metadata = Account<MetadataAccountData>;

export type MetadataAccountData = {
  key: TmKey;
  updateAuthority: PublicKey;
  mint: PublicKey;
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

export type MetadataAccountArgs = {
  updateAuthority: PublicKey;
  mint: PublicKey;
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<Array<CreatorArgs>>;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: Option<number>;
  tokenStandard: Option<TokenStandard>;
  collection: Option<CollectionArgs>;
  uses: Option<UsesArgs>;
  collectionDetails: Option<CollectionDetailsArgs>;
  programmableConfig: Option<ProgrammableConfig>;
  delegateState: Option<DelegateState>;
};

export async function fetchMetadata(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<Metadata> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'Metadata');
  return deserializeMetadata(context, maybeAccount);
}

export async function safeFetchMetadata(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<Metadata | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeMetadata(context, maybeAccount)
    : null;
}

export async function fetchAllMetadata(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<Metadata[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'Metadata');
    return deserializeMetadata(context, maybeAccount);
  });
}

export async function safeFetchAllMetadata(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<Metadata[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeMetadata(context, maybeAccount as RpcAccount)
    );
}

export function getMetadataGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.get('mplTokenMetadata').publicKey;
  return gpaBuilder(context, programId)
    .registerFields<{
      key: TmKey;
      updateAuthority: PublicKey;
      mint: PublicKey;
      name: string;
      symbol: string;
      uri: string;
      sellerFeeBasisPoints: number;
      creators: Option<Array<CreatorArgs>>;
      primarySaleHappened: boolean;
      isMutable: boolean;
      editionNonce: Option<number>;
      tokenStandard: Option<TokenStandard>;
      collection: Option<CollectionArgs>;
      uses: Option<UsesArgs>;
      collectionDetails: Option<CollectionDetailsArgs>;
      programmableConfig: Option<ProgrammableConfig>;
      delegateState: Option<DelegateState>;
    }>([
      ['key', getTmKeySerializer(context)],
      ['updateAuthority', s.publicKey()],
      ['mint', s.publicKey()],
      ['name', s.string()],
      ['symbol', s.string()],
      ['uri', s.string()],
      ['sellerFeeBasisPoints', s.u16()],
      ['creators', s.option(s.array(getCreatorSerializer(context)))],
      ['primarySaleHappened', s.bool()],
      ['isMutable', s.bool()],
      ['editionNonce', s.option(s.u8())],
      ['tokenStandard', s.option(getTokenStandardSerializer(context))],
      ['collection', s.option(getCollectionSerializer(context))],
      ['uses', s.option(getUsesSerializer(context))],
      ['collectionDetails', s.option(getCollectionDetailsSerializer(context))],
      [
        'programmableConfig',
        s.option(getProgrammableConfigSerializer(context)),
      ],
      ['delegateState', s.option(getDelegateStateSerializer(context))],
    ])
    .deserializeUsing<Metadata>((account) =>
      deserializeMetadata(context, account)
    )
    .whereField('key', TmKey.MetadataV1);
}

export function deserializeMetadata(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): Metadata {
  return deserializeAccount(
    rawAccount,
    getMetadataAccountDataSerializer(context)
  );
}

export function getMetadataAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MetadataAccountArgs, MetadataAccountData> {
  const s = context.serializer;
  return mapSerializer<
    MetadataAccountArgs,
    MetadataAccountData,
    MetadataAccountData
  >(
    s.struct<MetadataAccountData>(
      [
        ['key', getTmKeySerializer(context)],
        ['updateAuthority', s.publicKey()],
        ['mint', s.publicKey()],
        ['name', s.string()],
        ['symbol', s.string()],
        ['uri', s.string()],
        ['sellerFeeBasisPoints', s.u16()],
        ['creators', s.option(s.array(getCreatorSerializer(context)))],
        ['primarySaleHappened', s.bool()],
        ['isMutable', s.bool()],
        ['editionNonce', s.option(s.u8())],
        ['tokenStandard', s.option(getTokenStandardSerializer(context))],
        ['collection', s.option(getCollectionSerializer(context))],
        ['uses', s.option(getUsesSerializer(context))],
        [
          'collectionDetails',
          s.option(getCollectionDetailsSerializer(context)),
        ],
        [
          'programmableConfig',
          s.option(getProgrammableConfigSerializer(context)),
        ],
        ['delegateState', s.option(getDelegateStateSerializer(context))],
      ],
      'Metadata'
    ),
    (value) => ({ ...value, key: TmKey.MetadataV1 } as MetadataAccountData)
  ) as Serializer<MetadataAccountArgs, MetadataAccountData>;
}

export function getMetadataSize(
  context: Pick<Context, 'serializer'>
): number | null {
  return getMetadataAccountDataSerializer(context).fixedSize;
}

export function findMetadataPda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>,
  seeds: {
    /** The address of the mint account */
    mint: PublicKey;
  }
): Pda {
  const s = context.serializer;
  const programId: PublicKey =
    context.programs.get('mplTokenMetadata').publicKey;
  return context.eddsa.findPda(programId, [
    s.variableString().serialize('metadata'),
    programId.bytes,
    s.publicKey().serialize(seeds.mint),
  ]);
}
