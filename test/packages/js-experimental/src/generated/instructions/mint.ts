/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Base58EncodedAddress, address } from '@solana/addresses';
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
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from 'umi';
import { Serializer } from 'umiSerializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  MintArgs,
  MintArgsArgs,
  getMintArgsDecoder,
  getMintArgsEncoder,
} from '../types';

// Output.
export type MintInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string
> = IInstruction<TProgram> &
  IInstructionWithData<MintInstructionData> &
  IInstructionWithAccounts<
    [
      WritableAccount<TAccountToken>,
      ReadonlyAccount<TAccountMetadata>,
      ReadonlyAccount<TAccountMasterEdition>,
      WritableAccount<TAccountMint>,
      WritableSignerAccount<TAccountPayer>,
      ReadonlySignerAccount<TAccountAuthority>,
      ReadonlyAccount<TAccountSystemProgram>,
      ReadonlyAccount<TAccountSysvarInstructions>,
      ReadonlyAccount<TAccountSplTokenProgram>,
      ReadonlyAccount<TAccountSplAtaProgram>,
      ReadonlyAccount<TAccountAuthorizationRulesProgram>,
      ReadonlyAccount<TAccountAuthorizationRules>
    ]
  >;

export type MintInstructionData = { discriminator: number; mintArgs: MintArgs };

export type MintInstructionDataArgs = { mintArgs: MintArgsArgs };

export function getMintInstructionDataEncoder(): Encoder<MintInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<MintInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['mintArgs', getMintArgsEncoder()],
      ],
      { description: 'MintInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 42 } as MintInstructionData)
  ) as Encoder<MintInstructionDataArgs>;
}

export function getMintInstructionDataDecoder(): Decoder<MintInstructionData> {
  return getStructDecoder<MintInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['mintArgs', getMintArgsDecoder()],
    ],
    { description: 'MintInstructionData' }
  ) as Decoder<MintInstructionData>;
}

export function getMintInstructionDataCodec(): Codec<
  MintInstructionDataArgs,
  MintInstructionData
> {
  return combineCodec(
    getMintInstructionDataEncoder(),
    getMintInstructionDataDecoder()
  );
}

export function mintInstruction<
  TProgram extends string = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountToken extends string = string,
  TAccountMetadata extends string = string,
  TAccountMasterEdition extends string = string,
  TAccountMint extends string = string,
  TAccountPayer extends string = string,
  TAccountAuthority extends string = string,
  TAccountSystemProgram extends string = '11111111111111111111111111111111',
  TAccountSysvarInstructions extends string = 'Sysvar1nstructions1111111111111111111111111',
  TAccountSplTokenProgram extends string = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TAccountSplAtaProgram extends string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountAuthorizationRules extends string = string
>(
  accounts: {
    token: Base58EncodedAddress<TAccountToken>;
    metadata: Base58EncodedAddress<TAccountMetadata>;
    masterEdition: Base58EncodedAddress<TAccountMasterEdition>;
    mint: Base58EncodedAddress<TAccountMint>;
    payer: Base58EncodedAddress<TAccountPayer>;
    authority: Base58EncodedAddress<TAccountAuthority>;
    systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
    sysvarInstructions: Base58EncodedAddress<TAccountSysvarInstructions>;
    splTokenProgram: Base58EncodedAddress<TAccountSplTokenProgram>;
    splAtaProgram: Base58EncodedAddress<TAccountSplAtaProgram>;
    authorizationRulesProgram: Base58EncodedAddress<TAccountAuthorizationRulesProgram>;
    authorizationRules: Base58EncodedAddress<TAccountAuthorizationRules>;
  },
  args: MintInstructionDataArgs,
  programId: Base58EncodedAddress<TProgram> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Base58EncodedAddress<TProgram>
): MintInstruction<
  TProgram,
  TAccountToken,
  TAccountMetadata,
  TAccountMasterEdition,
  TAccountMint,
  TAccountPayer,
  TAccountAuthority,
  TAccountSystemProgram,
  TAccountSysvarInstructions,
  TAccountSplTokenProgram,
  TAccountSplAtaProgram,
  TAccountAuthorizationRulesProgram,
  TAccountAuthorizationRules
> {
  // ...
}
