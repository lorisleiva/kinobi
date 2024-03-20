/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import { ResolvedAccount, getAccountMetasWithSigners } from '../shared';
import {
  CandyMachineData,
  CandyMachineDataArgs,
  getCandyMachineDataDecoder,
  getCandyMachineDataEncoder,
} from '../types';

export type InitializeInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountCandyMachine extends string | IAccountMeta<string> = string,
  TAccountAuthorityPda extends string | IAccountMeta<string> = string,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountCollectionMetadata extends string | IAccountMeta<string> = string,
  TAccountCollectionMint extends string | IAccountMeta<string> = string,
  TAccountCollectionMasterEdition extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionUpdateAuthority extends
    | string
    | IAccountMeta<string> = string,
  TAccountCollectionAuthorityRecord extends
    | string
    | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = '11111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountCandyMachine extends string
        ? WritableAccount<TAccountCandyMachine>
        : TAccountCandyMachine,
      TAccountAuthorityPda extends string
        ? WritableAccount<TAccountAuthorityPda>
        : TAccountAuthorityPda,
      TAccountAuthority extends string
        ? ReadonlyAccount<TAccountAuthority>
        : TAccountAuthority,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountCollectionMetadata extends string
        ? ReadonlyAccount<TAccountCollectionMetadata>
        : TAccountCollectionMetadata,
      TAccountCollectionMint extends string
        ? ReadonlyAccount<TAccountCollectionMint>
        : TAccountCollectionMint,
      TAccountCollectionMasterEdition extends string
        ? ReadonlyAccount<TAccountCollectionMasterEdition>
        : TAccountCollectionMasterEdition,
      TAccountCollectionUpdateAuthority extends string
        ? WritableSignerAccount<TAccountCollectionUpdateAuthority> &
            IAccountSignerMeta<TAccountCollectionUpdateAuthority>
        : TAccountCollectionUpdateAuthority,
      TAccountCollectionAuthorityRecord extends string
        ? WritableAccount<TAccountCollectionAuthorityRecord>
        : TAccountCollectionAuthorityRecord,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type InitializeInstructionData = {
  discriminator: Array<number>;
  data: CandyMachineData;
};

export type InitializeInstructionDataArgs = { data: CandyMachineDataArgs };

export function getInitializeInstructionDataEncoder(): Encoder<InitializeInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getArrayEncoder(getU8Encoder(), { size: 8 })],
      ['data', getCandyMachineDataEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
    })
  );
}

export function getInitializeInstructionDataDecoder(): Decoder<InitializeInstructionData> {
  return getStructDecoder([
    ['discriminator', getArrayDecoder(getU8Decoder(), { size: 8 })],
    ['data', getCandyMachineDataDecoder()],
  ]);
}

export function getInitializeInstructionDataCodec(): Codec<
  InitializeInstructionDataArgs,
  InitializeInstructionData
> {
  return combineCodec(
    getInitializeInstructionDataEncoder(),
    getInitializeInstructionDataDecoder()
  );
}

export type InitializeInput<
  TAccountCandyMachine extends string = string,
  TAccountAuthorityPda extends string = string,
  TAccountAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountCollectionMetadata extends string = string,
  TAccountCollectionMint extends string = string,
  TAccountCollectionMasterEdition extends string = string,
  TAccountCollectionUpdateAuthority extends string = string,
  TAccountCollectionAuthorityRecord extends string = string,
  TAccountTokenMetadataProgram extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  candyMachine: Address<TAccountCandyMachine>;
  authorityPda: Address<TAccountAuthorityPda>;
  authority: Address<TAccountAuthority>;
  payer: TransactionSigner<TAccountPayer>;
  collectionMetadata: Address<TAccountCollectionMetadata>;
  collectionMint: Address<TAccountCollectionMint>;
  collectionMasterEdition: Address<TAccountCollectionMasterEdition>;
  collectionUpdateAuthority: TransactionSigner<TAccountCollectionUpdateAuthority>;
  collectionAuthorityRecord: Address<TAccountCollectionAuthorityRecord>;
  tokenMetadataProgram?: Address<TAccountTokenMetadataProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  data: InitializeInstructionDataArgs['data'];
};

export function getInitializeInstruction<
  TAccountCandyMachine extends string,
  TAccountAuthorityPda extends string,
  TAccountAuthority extends string,
  TAccountPayer extends string,
  TAccountCollectionMetadata extends string,
  TAccountCollectionMint extends string,
  TAccountCollectionMasterEdition extends string,
  TAccountCollectionUpdateAuthority extends string,
  TAccountCollectionAuthorityRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountSystemProgram extends string,
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
>(
  input: InitializeInput<
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountAuthority,
    TAccountPayer,
    TAccountCollectionMetadata,
    TAccountCollectionMint,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >
): InitializeInstruction<
  TProgram,
  TAccountCandyMachine,
  TAccountAuthorityPda,
  TAccountAuthority,
  TAccountPayer,
  TAccountCollectionMetadata,
  TAccountCollectionMint,
  TAccountCollectionMasterEdition,
  TAccountCollectionUpdateAuthority,
  TAccountCollectionAuthorityRecord,
  TAccountTokenMetadataProgram,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress =
    'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR' as Address<'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR'>;

  // Original accounts.
  type AccountKeys =
    | 'candyMachine'
    | 'authorityPda'
    | 'authority'
    | 'payer'
    | 'collectionMetadata'
    | 'collectionMint'
    | 'collectionMasterEdition'
    | 'collectionUpdateAuthority'
    | 'collectionAuthorityRecord'
    | 'tokenMetadataProgram'
    | 'systemProgram';
  const accounts: Record<AccountKeys, ResolvedAccount> = {
    candyMachine: { value: input.candyMachine ?? null, isWritable: true },
    authorityPda: { value: input.authorityPda ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: false },
    collectionMetadata: {
      value: input.collectionMetadata ?? null,
      isWritable: false,
    },
    collectionMint: { value: input.collectionMint ?? null, isWritable: false },
    collectionMasterEdition: {
      value: input.collectionMasterEdition ?? null,
      isWritable: false,
    },
    collectionUpdateAuthority: {
      value: input.collectionUpdateAuthority ?? null,
      isWritable: true,
    },
    collectionAuthorityRecord: {
      value: input.collectionAuthorityRecord ?? null,
      isWritable: true,
    },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value =
      'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s' as Address<'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'>;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;
  }

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = {
    accounts: [
      accountMetas.candyMachine,
      accountMetas.authorityPda,
      accountMetas.authority,
      accountMetas.payer,
      accountMetas.collectionMetadata,
      accountMetas.collectionMint,
      accountMetas.collectionMasterEdition,
      accountMetas.collectionUpdateAuthority,
      accountMetas.collectionAuthorityRecord,
      accountMetas.tokenMetadataProgram,
      accountMetas.systemProgram,
    ],
    programAddress,
    data: getInitializeInstructionDataEncoder().encode(args),
  } as InitializeInstruction<
    TProgram,
    TAccountCandyMachine,
    TAccountAuthorityPda,
    TAccountAuthority,
    TAccountPayer,
    TAccountCollectionMetadata,
    TAccountCollectionMint,
    TAccountCollectionMasterEdition,
    TAccountCollectionUpdateAuthority,
    TAccountCollectionAuthorityRecord,
    TAccountTokenMetadataProgram,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedInitializeInstruction<
  TProgram extends string = 'CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    candyMachine: TAccountMetas[0];
    authorityPda: TAccountMetas[1];
    authority: TAccountMetas[2];
    payer: TAccountMetas[3];
    collectionMetadata: TAccountMetas[4];
    collectionMint: TAccountMetas[5];
    collectionMasterEdition: TAccountMetas[6];
    collectionUpdateAuthority: TAccountMetas[7];
    collectionAuthorityRecord: TAccountMetas[8];
    tokenMetadataProgram: TAccountMetas[9];
    systemProgram: TAccountMetas[10];
  };
  data: InitializeInstructionData;
};

export function parseInitializeInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 11) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      candyMachine: getNextAccount(),
      authorityPda: getNextAccount(),
      authority: getNextAccount(),
      payer: getNextAccount(),
      collectionMetadata: getNextAccount(),
      collectionMint: getNextAccount(),
      collectionMasterEdition: getNextAccount(),
      collectionUpdateAuthority: getNextAccount(),
      collectionAuthorityRecord: getNextAccount(),
      tokenMetadataProgram: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getInitializeInstructionDataDecoder().decode(instruction.data),
  };
}
