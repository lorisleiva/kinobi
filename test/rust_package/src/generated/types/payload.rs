//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!
use crate::generated::types::{PayloadKey, PayloadType};
use borsh::{BorshDeserialize, BorshSerialize};
use std::collections::HashMap;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, PartialEq)]
pub struct Payload {
    pub map: HashMap<PayloadKey, PayloadType>,
}
