//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::TmKey;
#[cfg(feature = "anchor")]
use anchor_lang::prelude::{AnchorDeserialize, AnchorSerialize};
#[cfg(not(feature = "anchor"))]
use borsh::{BorshDeserialize, BorshSerialize};
#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};
use solana_program::pubkey::Pubkey;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[cfg_attr(not(feature = "anchor"), derive(BorshSerialize, BorshDeserialize))]
#[cfg_attr(feature = "anchor", derive(AnchorSerialize, AnchorDeserialize))]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct MasterEditionV2 {
    pub key: TmKey,
    pub supply: u64,
    pub max_supply: Option<u64>,
}

impl MasterEditionV2 {
    pub const LEN: usize = 282;

    /// Prefix values used to generate a PDA for this account.
    ///
    /// Values are positional and appear in the following order:
    ///
    ///   0. `MasterEditionV2::PREFIX.0`
    ///   1. `crate::MPL_TOKEN_METADATA_ID`
    ///   2. mint (`Pubkey`)
    ///   3. `MasterEditionV2::PREFIX.1`
    pub const PREFIX: (&'static [u8], &'static [u8]) =
        ("metadata".as_bytes(), "edition".as_bytes());

    pub fn create_pda(
        mint: Pubkey,
        bump: u8,
    ) -> Result<solana_program::pubkey::Pubkey, solana_program::pubkey::PubkeyError> {
        solana_program::pubkey::Pubkey::create_program_address(
            &[
                "metadata".as_bytes(),
                crate::MPL_TOKEN_METADATA_ID.as_ref(),
                mint.as_ref(),
                "edition".as_bytes(),
                &[bump],
            ],
            &crate::MPL_TOKEN_METADATA_ID,
        )
    }

    pub fn find_pda(mint: &Pubkey) -> (solana_program::pubkey::Pubkey, u8) {
        solana_program::pubkey::Pubkey::find_program_address(
            &[
                "metadata".as_bytes(),
                crate::MPL_TOKEN_METADATA_ID.as_ref(),
                mint.as_ref(),
                "edition".as_bytes(),
            ],
            &crate::MPL_TOKEN_METADATA_ID,
        )
    }

    #[inline(always)]
    pub fn from_bytes(data: &[u8]) -> Result<Self, std::io::Error> {
        let mut data = data;
        Self::deserialize(&mut data)
    }
}

impl<'a> TryFrom<&solana_program::account_info::AccountInfo<'a>> for MasterEditionV2 {
    type Error = std::io::Error;

    fn try_from(
        account_info: &solana_program::account_info::AccountInfo<'a>,
    ) -> Result<Self, Self::Error> {
        let mut data: &[u8] = &(*account_info.data).borrow();
        Self::deserialize(&mut data)
    }
}
