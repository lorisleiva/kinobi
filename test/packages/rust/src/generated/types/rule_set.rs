//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

#[cfg(feature = "anchor")]
use anchor_lang::prelude::{AnchorDeserialize, AnchorSerialize};
#[cfg(not(feature = "anchor"))]
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(not(feature = "anchor"), derive(BorshSerialize, BorshDeserialize))]
#[cfg_attr(feature = "anchor", derive(AnchorSerialize, AnchorDeserialize))]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum RuleSet {
    None,
    #[cfg_attr(
        feature = "serde",
        serde(with = "serde_with::As::<serde_with::DisplayFromStr>")
    )]
    Single(Pubkey),
    #[cfg_attr(
        feature = "serde",
        serde(with = "serde_with::As::<Vec<serde_with::DisplayFromStr>>")
    )]
    ProgramAllowList(Vec<Pubkey>),
    #[cfg_attr(
        feature = "serde",
        serde(with = "serde_with::As::<Vec<serde_with::DisplayFromStr>>")
    )]
    ProgramDenyList(Vec<Pubkey>),
}
