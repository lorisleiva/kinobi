//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::{ pubkey::Pubkey };


pub struct CmCreator {
/// Pubkey address
pub address: Pubkey,
/// Whether the creator is verified or not
pub verified: bool,
pub percentage_share: u8,
}