//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::{ BorshDeserialize, BorshSerialize };


#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, PartialEq)]
pub struct FrequencyAccount {
/// Test with only one line.
pub key: u64,
/// Test with multiple lines
/// and this is the second line.
pub last_update: i64,
pub period: i64,
}
