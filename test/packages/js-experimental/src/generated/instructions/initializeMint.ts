/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Base58EncodedAddress,
  address,
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
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
} from '@solana/instructions';
import {
  Option,
  OptionOrNullable,
  getOptionDecoder,
  getOptionEncoder,
} from '@solana/options';
import {
  Context,
  Pda,
  PublicKey,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  accountMetaWithDefault,
  getAccountMetasAndSigners,
} from '../shared';

// Output.
export type InitializeMintInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMint extends string
        ? WritableAccount<TAccountMint>
        : TAccountMint,
      TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent
    ]
  >;

export type InitializeMintInstructionData = {
  discriminator: number;
  decimals: number;
  mintAuthority: Base58EncodedAddress;
  freezeAuthority: Option<Base58EncodedAddress>;
};

export type InitializeMintInstructionDataArgs = {
  decimals: number;
  mintAuthority: Base58EncodedAddress;
  freezeAuthority: OptionOrNullable<Base58EncodedAddress>;
};

export function getInitializeMintInstructionDataEncoder(): Encoder<InitializeMintInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<InitializeMintInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['decimals', getU8Encoder()],
        ['mintAuthority', getAddressEncoder()],
        ['freezeAuthority', getOptionEncoder(getAddressEncoder())],
      ],
      { description: 'InitializeMintInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 0 } as InitializeMintInstructionData)
  ) as Encoder<InitializeMintInstructionDataArgs>;
}

export function getInitializeMintInstructionDataDecoder(): Decoder<InitializeMintInstructionData> {
  return getStructDecoder<InitializeMintInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['decimals', getU8Decoder()],
      ['mintAuthority', getAddressDecoder()],
      ['freezeAuthority', getOptionDecoder(getAddressDecoder())],
    ],
    { description: 'InitializeMintInstructionData' }
  ) as Decoder<InitializeMintInstructionData>;
}

export function getInitializeMintInstructionDataCodec(): Codec<
  InitializeMintInstructionDataArgs,
  InitializeMintInstructionData
> {
  return combineCodec(
    getInitializeMintInstructionDataEncoder(),
    getInitializeMintInstructionDataDecoder()
  );
}

export function initializeMintInstruction<
  TProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111'
>(
  accounts: {
    mint: TAccountMint extends string
      ? Base58EncodedAddress<TAccountMint>
      : TAccountMint;
    rent: TAccountRent extends string
      ? Base58EncodedAddress<TAccountRent>
      : TAccountRent;
  },
  args: InitializeMintInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Base58EncodedAddress<TProgram>
): InitializeMintInstruction<TProgram, TAccountMint, TAccountRent> {
  return {
    accounts: [
      accountMetaWithDefault(accounts.mint, AccountRole.WRITABLE),
      accountMetaWithDefault(accounts.rent, AccountRole.READONLY),
    ],
    data: getInitializeMintInstructionDataEncoder().encode(args),
    programAddress,
  };
}
