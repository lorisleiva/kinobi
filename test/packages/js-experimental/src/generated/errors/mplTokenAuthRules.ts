/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

export const enum MplTokenAuthRulesProgramErrorCode {
  /** NumericalOverflow: Numerical Overflow */
  NUMERICAL_OVERFLOW = 0x0, // 0
  /** DataTypeMismatch: Data type mismatch */
  DATA_TYPE_MISMATCH = 0x1, // 1
  /** IncorrectOwner: Incorrect account owner */
  INCORRECT_OWNER = 0x2, // 2
  /** PayloadVecIndexError: Could not index into PayloadVec */
  PAYLOAD_VEC_INDEX_ERROR = 0x3, // 3
  /** DerivedKeyInvalid: Derived key invalid */
  DERIVED_KEY_INVALID = 0x4, // 4
  /** AdditionalSignerCheckFailed: Additional Signer check failed */
  ADDITIONAL_SIGNER_CHECK_FAILED = 0x5, // 5
  /** PubkeyMatchCheckFailed: Pubkey Match check failed */
  PUBKEY_MATCH_CHECK_FAILED = 0x6, // 6
  /** DerivedKeyMatchCheckFailed: Derived Key Match check failed */
  DERIVED_KEY_MATCH_CHECK_FAILED = 0x7, // 7
  /** ProgramOwnedCheckFailed: Program Owned check failed */
  PROGRAM_OWNED_CHECK_FAILED = 0x8, // 8
  /** AmountCheckFailed: Amount checked failed */
  AMOUNT_CHECK_FAILED = 0x9, // 9
  /** FrequencyCheckFailed: Frequency check failed */
  FREQUENCY_CHECK_FAILED = 0xa, // 10
  /** PubkeyTreeMatchCheckFailed: Pubkey Tree Match check failed */
  PUBKEY_TREE_MATCH_CHECK_FAILED = 0xb, // 11
  /** PayerIsNotSigner: Payer is not a signer */
  PAYER_IS_NOT_SIGNER = 0xc, // 12
  /** NotImplemented */
  NOT_IMPLEMENTED = 0xd, // 13
  /** BorshSerializationError: Borsh Serialization Error */
  BORSH_SERIALIZATION_ERROR = 0xe, // 14
}

export class MplTokenAuthRulesProgramError extends Error {
  override readonly name = 'MplTokenAuthRulesProgramError';

  readonly code: MplTokenAuthRulesProgramErrorCode;

  readonly cause: Error | undefined;

  constructor(
    code: MplTokenAuthRulesProgramErrorCode,
    name: string,
    message: string,
    cause?: Error
  ) {
    super(`${name} (${code}): ${message}`);
    this.code = code;
    this.cause = cause;
  }
}

let mplTokenAuthRulesProgramErrorCodeMap:
  | Record<MplTokenAuthRulesProgramErrorCode, [string, string]>
  | undefined;
if (__DEV__) {
  mplTokenAuthRulesProgramErrorCodeMap = {
    [MplTokenAuthRulesProgramErrorCode.NUMERICAL_OVERFLOW]: [
      'NumericalOverflow',
      `Numerical Overflow`,
    ],
    [MplTokenAuthRulesProgramErrorCode.DATA_TYPE_MISMATCH]: [
      'DataTypeMismatch',
      `Data type mismatch`,
    ],
    [MplTokenAuthRulesProgramErrorCode.INCORRECT_OWNER]: [
      'IncorrectOwner',
      `Incorrect account owner`,
    ],
    [MplTokenAuthRulesProgramErrorCode.PAYLOAD_VEC_INDEX_ERROR]: [
      'PayloadVecIndexError',
      `Could not index into PayloadVec`,
    ],
    [MplTokenAuthRulesProgramErrorCode.DERIVED_KEY_INVALID]: [
      'DerivedKeyInvalid',
      `Derived key invalid`,
    ],
    [MplTokenAuthRulesProgramErrorCode.ADDITIONAL_SIGNER_CHECK_FAILED]: [
      'AdditionalSignerCheckFailed',
      `Additional Signer check failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.PUBKEY_MATCH_CHECK_FAILED]: [
      'PubkeyMatchCheckFailed',
      `Pubkey Match check failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.DERIVED_KEY_MATCH_CHECK_FAILED]: [
      'DerivedKeyMatchCheckFailed',
      `Derived Key Match check failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.PROGRAM_OWNED_CHECK_FAILED]: [
      'ProgramOwnedCheckFailed',
      `Program Owned check failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.AMOUNT_CHECK_FAILED]: [
      'AmountCheckFailed',
      `Amount checked failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.FREQUENCY_CHECK_FAILED]: [
      'FrequencyCheckFailed',
      `Frequency check failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.PUBKEY_TREE_MATCH_CHECK_FAILED]: [
      'PubkeyTreeMatchCheckFailed',
      `Pubkey Tree Match check failed`,
    ],
    [MplTokenAuthRulesProgramErrorCode.PAYER_IS_NOT_SIGNER]: [
      'PayerIsNotSigner',
      `Payer is not a signer`,
    ],
    [MplTokenAuthRulesProgramErrorCode.NOT_IMPLEMENTED]: ['NotImplemented', ``],
    [MplTokenAuthRulesProgramErrorCode.BORSH_SERIALIZATION_ERROR]: [
      'BorshSerializationError',
      `Borsh Serialization Error`,
    ],
  };
}

export function getMplTokenAuthRulesProgramErrorFromCode(
  code: MplTokenAuthRulesProgramErrorCode,
  cause?: Error
): MplTokenAuthRulesProgramError {
  if (__DEV__) {
    return new MplTokenAuthRulesProgramError(
      code,
      ...(
        mplTokenAuthRulesProgramErrorCodeMap as Record<
          MplTokenAuthRulesProgramErrorCode,
          [string, string]
        >
      )[code],
      cause
    );
  }

  return new MplTokenAuthRulesProgramError(
    code,
    'Unknown',
    'Error message not available in production bundles. Compile with __DEV__ set to true to see more information.',
    cause
  );
}
