//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::Pubkey;

#[derive(Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
#[cfg_attr(
    not(feature = "anchor"),
    derive(borsh::BorshSerialize, borsh::BorshDeserialize)
)]
#[cfg_attr(
    feature = "anchor",
    derive(anchor_lang::AnchorSerialize, anchor_lang::AnchorDeserialize)
)]
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
