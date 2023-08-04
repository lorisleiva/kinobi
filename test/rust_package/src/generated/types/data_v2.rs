//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!
use borsh::{ BorshDeserialize, BorshSerialize };
use crate::generated::types::{ Collection, Creator, Uses };


#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, PartialEq)]
pub struct DataV2 {
pub name: String,
pub symbol: String,
pub uri: String,
pub seller_fee_basis_points: u16,
pub creators: Option<Vec<Creator>>,
pub collection: Option<Collection>,
pub uses: Option<Uses>,
}
