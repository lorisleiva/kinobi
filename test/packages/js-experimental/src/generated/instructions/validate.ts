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
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import { getStringDecoder, getStringEncoder } from '@solana/codecs-strings';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { Signer, accountMetaWithDefault } from '../shared';
import {
  Operation,
  OperationArgs,
  Payload,
  PayloadArgs,
  getOperationDecoder,
  getOperationEncoder,
  getPayloadDecoder,
  getPayloadEncoder,
} from '../types';

// Output.
export type ValidateInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSet extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountOptRuleSigner1 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner2 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner3 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner4 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner5 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner1 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner2 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner3 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner4 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner5 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer>
        : TAccountPayer,
      TAccountRuleSet extends string
        ? WritableAccount<TAccountRuleSet>
        : TAccountRuleSet,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...(TAccountOptRuleSigner1 extends undefined
        ? []
        : [
            TAccountOptRuleSigner1 extends string
              ? ReadonlyAccount<TAccountOptRuleSigner1>
              : TAccountOptRuleSigner1
          ]),
      ...(TAccountOptRuleSigner2 extends undefined
        ? []
        : [
            TAccountOptRuleSigner2 extends string
              ? ReadonlySignerAccount<TAccountOptRuleSigner2>
              : TAccountOptRuleSigner2
          ]),
      ...(TAccountOptRuleSigner3 extends undefined
        ? []
        : [
            TAccountOptRuleSigner3 extends string
              ? ReadonlySignerAccount<TAccountOptRuleSigner3>
              : TAccountOptRuleSigner3
          ]),
      ...(TAccountOptRuleSigner4 extends undefined
        ? []
        : [
            TAccountOptRuleSigner4 extends string
              ? ReadonlySignerAccount<TAccountOptRuleSigner4>
              : TAccountOptRuleSigner4
          ]),
      ...(TAccountOptRuleSigner5 extends undefined
        ? []
        : [
            TAccountOptRuleSigner5 extends string
              ? ReadonlySignerAccount<TAccountOptRuleSigner5>
              : TAccountOptRuleSigner5
          ]),
      ...(TAccountOptRuleNonsigner1 extends undefined
        ? []
        : [
            TAccountOptRuleNonsigner1 extends string
              ? ReadonlyAccount<TAccountOptRuleNonsigner1>
              : TAccountOptRuleNonsigner1
          ]),
      ...(TAccountOptRuleNonsigner2 extends undefined
        ? []
        : [
            TAccountOptRuleNonsigner2 extends string
              ? ReadonlyAccount<TAccountOptRuleNonsigner2>
              : TAccountOptRuleNonsigner2
          ]),
      ...(TAccountOptRuleNonsigner3 extends undefined
        ? []
        : [
            TAccountOptRuleNonsigner3 extends string
              ? ReadonlyAccount<TAccountOptRuleNonsigner3>
              : TAccountOptRuleNonsigner3
          ]),
      ...(TAccountOptRuleNonsigner4 extends undefined
        ? []
        : [
            TAccountOptRuleNonsigner4 extends string
              ? ReadonlyAccount<TAccountOptRuleNonsigner4>
              : TAccountOptRuleNonsigner4
          ]),
      ...(TAccountOptRuleNonsigner5 extends undefined
        ? []
        : [
            TAccountOptRuleNonsigner5 extends string
              ? ReadonlyAccount<TAccountOptRuleNonsigner5>
              : TAccountOptRuleNonsigner5
          ])
    ]
  >;

export type ValidateInstructionData = {
  discriminator: number;
  ruleSetName: string;
  operation: Operation;
  payload: Payload;
};

export type ValidateInstructionDataArgs = {
  ruleSetName: string;
  operation: OperationArgs;
  payload: PayloadArgs;
};

export function getValidateInstructionDataEncoder(): Encoder<ValidateInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder<ValidateInstructionData>(
      [
        ['discriminator', getU8Encoder()],
        ['ruleSetName', getStringEncoder()],
        ['operation', getOperationEncoder()],
        ['payload', getPayloadEncoder()],
      ],
      { description: 'ValidateInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 1 } as ValidateInstructionData)
  ) as Encoder<ValidateInstructionDataArgs>;
}

export function getValidateInstructionDataDecoder(): Decoder<ValidateInstructionData> {
  return getStructDecoder<ValidateInstructionData>(
    [
      ['discriminator', getU8Decoder()],
      ['ruleSetName', getStringDecoder()],
      ['operation', getOperationDecoder()],
      ['payload', getPayloadDecoder()],
    ],
    { description: 'ValidateInstructionData' }
  ) as Decoder<ValidateInstructionData>;
}

export function getValidateInstructionDataCodec(): Codec<
  ValidateInstructionDataArgs,
  ValidateInstructionData
> {
  return combineCodec(
    getValidateInstructionDataEncoder(),
    getValidateInstructionDataDecoder()
  );
}

export function validateInstruction<
  TProgram extends string = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg',
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountRuleSet extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TAccountOptRuleSigner1 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner2 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner3 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner4 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleSigner5 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner1 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner2 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner3 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner4 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined,
  TAccountOptRuleNonsigner5 extends
    | string
    | IAccountMeta<string>
    | undefined = undefined
>(
  accounts: {
    payer: TAccountPayer extends string
      ? Base58EncodedAddress<TAccountPayer>
      : TAccountPayer;
    ruleSet: TAccountRuleSet extends string
      ? Base58EncodedAddress<TAccountRuleSet>
      : TAccountRuleSet;
    systemProgram?: TAccountSystemProgram extends string
      ? Base58EncodedAddress<TAccountSystemProgram>
      : TAccountSystemProgram;
    optRuleSigner1?: TAccountOptRuleSigner1 extends string
      ? Base58EncodedAddress<TAccountOptRuleSigner1>
      : TAccountOptRuleSigner1;
    optRuleSigner2?: TAccountOptRuleSigner2 extends string
      ? Base58EncodedAddress<TAccountOptRuleSigner2>
      : TAccountOptRuleSigner2;
    optRuleSigner3?: TAccountOptRuleSigner3 extends string
      ? Base58EncodedAddress<TAccountOptRuleSigner3>
      : TAccountOptRuleSigner3;
    optRuleSigner4?: TAccountOptRuleSigner4 extends string
      ? Base58EncodedAddress<TAccountOptRuleSigner4>
      : TAccountOptRuleSigner4;
    optRuleSigner5?: TAccountOptRuleSigner5 extends string
      ? Base58EncodedAddress<TAccountOptRuleSigner5>
      : TAccountOptRuleSigner5;
    optRuleNonsigner1?: TAccountOptRuleNonsigner1 extends string
      ? Base58EncodedAddress<TAccountOptRuleNonsigner1>
      : TAccountOptRuleNonsigner1;
    optRuleNonsigner2?: TAccountOptRuleNonsigner2 extends string
      ? Base58EncodedAddress<TAccountOptRuleNonsigner2>
      : TAccountOptRuleNonsigner2;
    optRuleNonsigner3?: TAccountOptRuleNonsigner3 extends string
      ? Base58EncodedAddress<TAccountOptRuleNonsigner3>
      : TAccountOptRuleNonsigner3;
    optRuleNonsigner4?: TAccountOptRuleNonsigner4 extends string
      ? Base58EncodedAddress<TAccountOptRuleNonsigner4>
      : TAccountOptRuleNonsigner4;
    optRuleNonsigner5?: TAccountOptRuleNonsigner5 extends string
      ? Base58EncodedAddress<TAccountOptRuleNonsigner5>
      : TAccountOptRuleNonsigner5;
  },
  args: ValidateInstructionDataArgs,
  programAddress: Base58EncodedAddress<TProgram> = 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg' as Base58EncodedAddress<TProgram>
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.payer, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.ruleSet, AccountRole.WRITABLE),
      accountMetaWithDefault(
        accounts.systemProgram ?? {
          address:
            '11111111111111111111111111111111' as Base58EncodedAddress<'11111111111111111111111111111111'>,
          role: AccountRole.READONLY,
        },
        AccountRole.READONLY
      ),
      accountMetaWithDefault(accounts.optRuleSigner1, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.optRuleSigner2,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.optRuleSigner3,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.optRuleSigner4,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(
        accounts.optRuleSigner5,
        AccountRole.READONLY_SIGNER
      ),
      accountMetaWithDefault(accounts.optRuleNonsigner1, AccountRole.READONLY),
      accountMetaWithDefault(accounts.optRuleNonsigner2, AccountRole.READONLY),
      accountMetaWithDefault(accounts.optRuleNonsigner3, AccountRole.READONLY),
      accountMetaWithDefault(accounts.optRuleNonsigner4, AccountRole.READONLY),
      accountMetaWithDefault(accounts.optRuleNonsigner5, AccountRole.READONLY),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    data: getValidateInstructionDataEncoder().encode(args),
    programAddress,
  } as ValidateInstruction<
    TProgram,
    TAccountPayer,
    TAccountRuleSet,
    TAccountSystemProgram,
    TAccountOptRuleSigner1,
    TAccountOptRuleSigner2,
    TAccountOptRuleSigner3,
    TAccountOptRuleSigner4,
    TAccountOptRuleSigner5,
    TAccountOptRuleNonsigner1,
    TAccountOptRuleNonsigner2,
    TAccountOptRuleNonsigner3,
    TAccountOptRuleNonsigner4,
    TAccountOptRuleNonsigner5
  >;
}

// Input.
export type ValidateInput<
  TAccountPayer extends string,
  TAccountRuleSet extends string,
  TAccountSystemProgram extends string,
  TAccountOptRuleSigner1 extends string,
  TAccountOptRuleSigner2 extends string,
  TAccountOptRuleSigner3 extends string,
  TAccountOptRuleSigner4 extends string,
  TAccountOptRuleSigner5 extends string,
  TAccountOptRuleNonsigner1 extends string,
  TAccountOptRuleNonsigner2 extends string,
  TAccountOptRuleNonsigner3 extends string,
  TAccountOptRuleNonsigner4 extends string,
  TAccountOptRuleNonsigner5 extends string
> = {
  payer: Signer<TAccountPayer>;
  ruleSet: Base58EncodedAddress<TAccountRuleSet>;
  systemProgram: Base58EncodedAddress<TAccountSystemProgram>;
  optRuleSigner1:
    | Base58EncodedAddress<TAccountOptRuleSigner1>
    | Signer<TAccountOptRuleSigner1>;
  optRuleSigner2: Signer<TAccountOptRuleSigner2>;
  optRuleSigner3: Signer<TAccountOptRuleSigner3>;
  optRuleSigner4: Signer<TAccountOptRuleSigner4>;
  optRuleSigner5: Signer<TAccountOptRuleSigner5>;
  optRuleNonsigner1: Base58EncodedAddress<TAccountOptRuleNonsigner1>;
  optRuleNonsigner2: Base58EncodedAddress<TAccountOptRuleNonsigner2>;
  optRuleNonsigner3: Base58EncodedAddress<TAccountOptRuleNonsigner3>;
  optRuleNonsigner4: Base58EncodedAddress<TAccountOptRuleNonsigner4>;
  optRuleNonsigner5: Base58EncodedAddress<TAccountOptRuleNonsigner5>;
};
