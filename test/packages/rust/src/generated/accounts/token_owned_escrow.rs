//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::EscrowAuthority;
use crate::generated::types::TmKey;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
pub struct TokenOwnedEscrow {
    pub key: TmKey,
    pub base_token: Pubkey,
    pub authority: EscrowAuthority,
    pub bump: u8,
}
