/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AuthorityType,
  AuthorizationData,
  AuthorizationDataArgs,
  Collection,
  CollectionDetails,
  CollectionDetailsArgs,
  Data,
  DelegateState,
  ProgrammableConfig,
  TokenStandard,
  Uses,
  UsesArgs,
  getAuthorityTypeSerializer,
  getAuthorizationDataSerializer,
  getCollectionDetailsSerializer,
  getCollectionSerializer,
  getDataSerializer,
  getDelegateStateSerializer,
  getProgrammableConfigSerializer,
  getTokenStandardSerializer,
  getUsesSerializer,
} from '.';
import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Option,
  PublicKey,
  Serializer,
} from '@lorisleiva/js-core';

export type UpdateArgs = {
  __kind: 'V1';
  authorization_data: Option<AuthorizationData>;
  new_update_authority: Option<PublicKey>;
  data: Option<Data>;
  primary_sale_happened: Option<boolean>;
  is_mutable: Option<boolean>;
  token_standard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<Uses>;
  collection_details: Option<CollectionDetails>;
  programmable_config: Option<ProgrammableConfig>;
  delegate_state: Option<DelegateState>;
  authority_type: AuthorityType;
};
export type UpdateArgsArgs = {
  __kind: 'V1';
  authorization_data: Option<AuthorizationDataArgs>;
  new_update_authority: Option<PublicKey>;
  data: Option<Data>;
  primary_sale_happened: Option<boolean>;
  is_mutable: Option<boolean>;
  token_standard: Option<TokenStandard>;
  collection: Option<Collection>;
  uses: Option<UsesArgs>;
  collection_details: Option<CollectionDetailsArgs>;
  programmable_config: Option<ProgrammableConfig>;
  delegate_state: Option<DelegateState>;
  authority_type: AuthorityType;
};

export function getUpdateArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<UpdateArgsArgs, UpdateArgs> {
  const s = context.serializer;
  return s.dataEnum<UpdateArgs>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<UpdateArgs, 'V1'>>(
          [
            [
              'authorization_data',
              s.option(getAuthorizationDataSerializer(context)),
            ],
            ['new_update_authority', s.option(s.publicKey)],
            ['data', s.option(getDataSerializer(context))],
            ['primary_sale_happened', s.option(s.bool)],
            ['is_mutable', s.option(s.bool)],
            ['token_standard', s.option(getTokenStandardSerializer(context))],
            ['collection', s.option(getCollectionSerializer(context))],
            ['uses', s.option(getUsesSerializer(context))],
            [
              'collection_details',
              s.option(getCollectionDetailsSerializer(context)),
            ],
            [
              'programmable_config',
              s.option(getProgrammableConfigSerializer(context)),
            ],
            ['delegate_state', s.option(getDelegateStateSerializer(context))],
            ['authority_type', getAuthorityTypeSerializer(context)],
          ],
          'V1'
        ),
      ],
    ],
    'UpdateArgs'
  ) as Serializer<UpdateArgsArgs, UpdateArgs>;
}

// Data Enum Helpers.
export function updateArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<UpdateArgs, 'V1'>
): GetDataEnumKind<UpdateArgs, 'V1'>;
export function updateArgs<K extends UpdateArgs['__kind']>(
  kind: K,
  data?: any
): UpdateArgs & { __kind: K } {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isUpdateArgs<K extends UpdateArgs['__kind']>(
  kind: K,
  value: UpdateArgs
): value is UpdateArgs & { __kind: K } {
  return value.__kind === kind;
}
