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
  OptionOrNullable,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  bool,
  option,
  publicKey as publicKeySerializer,
  struct,
  u32,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';

export type Mint = Account<MintAccountData>;

export type MintAccountData = {
  mintAuthority: Option<PublicKey>;
  supply: bigint;
  decimals: number;
  isInitialized: boolean;
  freezeAuthority: Option<PublicKey>;
};

export type MintAccountDataArgs = {
  mintAuthority: OptionOrNullable<PublicKey>;
  supply: number | bigint;
  decimals: number;
  isInitialized: boolean;
  freezeAuthority: OptionOrNullable<PublicKey>;
};

export function getMintAccountDataSerializer(): Serializer<
  MintAccountDataArgs,
  MintAccountData
> {
  return struct<MintAccountData>(
    [
      [
        'mintAuthority',
        option(publicKeySerializer(), { prefix: u32(), fixed: true }),
      ],
      ['supply', u64()],
      ['decimals', u8()],
      ['isInitialized', bool()],
      [
        'freezeAuthority',
        option(publicKeySerializer(), { prefix: u32(), fixed: true }),
      ],
    ],
    { description: 'MintAccountData' }
  ) as Serializer<MintAccountDataArgs, MintAccountData>;
}

export function deserializeMint(rawAccount: RpcAccount): Mint {
  return deserializeAccount(rawAccount, getMintAccountDataSerializer());
}

export async function fetchMint(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<Mint> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'Mint');
  return deserializeMint(maybeAccount);
}

export async function safeFetchMint(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<Mint | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists ? deserializeMint(maybeAccount) : null;
}

export async function fetchAllMint(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<Mint[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'Mint');
    return deserializeMint(maybeAccount);
  });
}

export async function safeFetchAllMint(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<Mint[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) => deserializeMint(maybeAccount as RpcAccount));
}

export function getMintGpaBuilder(context: Pick<Context, 'rpc' | 'programs'>) {
  const programId = context.programs.getPublicKey(
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      mintAuthority: OptionOrNullable<PublicKey>;
      supply: number | bigint;
      decimals: number;
      isInitialized: boolean;
      freezeAuthority: OptionOrNullable<PublicKey>;
    }>({
      mintAuthority: [
        0,
        option(publicKeySerializer(), { prefix: u32(), fixed: true }),
      ],
      supply: [36, u64()],
      decimals: [44, u8()],
      isInitialized: [45, bool()],
      freezeAuthority: [
        46,
        option(publicKeySerializer(), { prefix: u32(), fixed: true }),
      ],
    })
    .deserializeUsing<Mint>((account) => deserializeMint(account));
}

export function getMintSize(): number {
  return 82;
}