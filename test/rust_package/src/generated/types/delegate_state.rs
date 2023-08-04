//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!
use borsh::{ BorshDeserialize, BorshSerialize };
use crate::generated::types::{ DelegateRole };
use solana_program::{ pubkey::Pubkey };


#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, PartialEq)]
pub struct DelegateState {
pub role: DelegateRole,
pub delegate: Pubkey,
pub has_data: bool,
}
