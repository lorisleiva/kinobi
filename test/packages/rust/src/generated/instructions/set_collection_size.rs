//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::SetCollectionSizeArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct SetCollectionSize {
    /// Collection Metadata account
    pub collection_metadata: solana_program::pubkey::Pubkey,
    /// Collection Update authority
    pub collection_authority: solana_program::pubkey::Pubkey,
    /// Mint of the Collection
    pub collection_mint: solana_program::pubkey::Pubkey,
    /// Collection Authority Record PDA
    pub collection_authority_record: Option<solana_program::pubkey::Pubkey>,
}

impl SetCollectionSize {
    pub fn instruction(
        &self,
        args: SetCollectionSizeInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.collection_metadata, false),
                solana_program::instruction::AccountMeta::new(self.collection_authority, true),
                solana_program::instruction::AccountMeta::new_readonly(self.collection_mint, false),
                if let Some(collection_authority_record) = self.collection_authority_record {
                    solana_program::instruction::AccountMeta::new_readonly(
                        collection_authority_record,
                        false,
                    )
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct SetCollectionSizeInstructionArgs {
    discriminator: u8,
    pub set_collection_size_args: SetCollectionSizeArgs,
}

impl SetCollectionSizeInstructionArgs {
    pub fn new(set_collection_size_args: SetCollectionSizeArgs) -> Self {
        Self {
            discriminator: 34,
            set_collection_size_args,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct SetCollectionSizeBuilder {
    collection_metadata: Option<solana_program::pubkey::Pubkey>,
    collection_authority: Option<solana_program::pubkey::Pubkey>,
    collection_mint: Option<solana_program::pubkey::Pubkey>,
    collection_authority_record: Option<solana_program::pubkey::Pubkey>,
    set_collection_size_args: Option<SetCollectionSizeArgs>,
}

impl SetCollectionSizeBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn collection_metadata(
        &mut self,
        collection_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_metadata = Some(collection_metadata);
        self
    }
    pub fn collection_authority(
        &mut self,
        collection_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority = Some(collection_authority);
        self
    }
    pub fn collection_mint(
        &mut self,
        collection_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_mint = Some(collection_mint);
        self
    }
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority_record = Some(collection_authority_record);
        self
    }
    pub fn set_collection_size_args(
        &mut self,
        set_collection_size_args: SetCollectionSizeArgs,
    ) -> &mut Self {
        self.set_collection_size_args = Some(set_collection_size_args);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = SetCollectionSize {
            collection_metadata: self
                .collection_metadata
                .expect("collection_metadata is not set"),

            collection_authority: self
                .collection_authority
                .expect("collection_authority is not set"),

            collection_mint: self.collection_mint.expect("collection_mint is not set"),

            collection_authority_record: self.collection_authority_record,
        };
        let args = SetCollectionSizeInstructionArgs::new(
            self.set_collection_size_args
                .expect("set_collection_size_args is not set"),
        );
        accounts.instruction(args)
    }
}

pub mod cpi {
    use super::*;

    /// `set_collection_size` CPI instruction.
    pub struct SetCollectionSize<'a> {
        pub program: &'a solana_program::account_info::AccountInfo<'a>,
        /// Collection Metadata account
        pub collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,
        /// Collection Update authority
        pub collection_authority: &'a solana_program::account_info::AccountInfo<'a>,
        /// Mint of the Collection
        pub collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
        /// Collection Authority Record PDA
        pub collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        pub args: SetCollectionSizeInstructionArgs,
    }

    impl<'a> SetCollectionSize<'a> {
        pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
            self.invoke_signed(&[])
        }
        #[allow(clippy::vec_init_then_push)]
        pub fn invoke_signed(
            &self,
            signers_seeds: &[&[&[u8]]],
        ) -> solana_program::entrypoint::ProgramResult {
            let instruction = solana_program::instruction::Instruction {
                program_id: crate::MPL_TOKEN_METADATA_ID,
                accounts: vec![
                    solana_program::instruction::AccountMeta::new(
                        *self.collection_metadata.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new(
                        *self.collection_authority.key,
                        true,
                    ),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.collection_mint.key,
                        false,
                    ),
                    if let Some(collection_authority_record) = self.collection_authority_record {
                        solana_program::instruction::AccountMeta::new_readonly(
                            *collection_authority_record.key,
                            false,
                        )
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                ],
                data: self.args.try_to_vec().unwrap(),
            };
            let mut account_infos = Vec::with_capacity(4 + 1);
            account_infos.push(self.program.clone());
            account_infos.push(self.collection_metadata.clone());
            account_infos.push(self.collection_authority.clone());
            account_infos.push(self.collection_mint.clone());
            if let Some(collection_authority_record) = self.collection_authority_record {
                account_infos.push(collection_authority_record.clone());
            }

            if signers_seeds.is_empty() {
                solana_program::program::invoke(&instruction, &account_infos)
            } else {
                solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
            }
        }
    }

    /// `set_collection_size` CPI instruction builder.
    pub struct SetCollectionSizeBuilder<'a> {
        program: &'a solana_program::account_info::AccountInfo<'a>,
        collection_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        collection_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        collection_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        set_collection_size_args: Option<SetCollectionSizeArgs>,
    }

    impl<'a> SetCollectionSizeBuilder<'a> {
        pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
            Self {
                program,
                collection_metadata: None,
                collection_authority: None,
                collection_mint: None,
                collection_authority_record: None,
                set_collection_size_args: None,
            }
        }
        pub fn collection_metadata(
            &'a mut self,
            collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.collection_metadata = Some(collection_metadata);
            self
        }
        pub fn collection_authority(
            &'a mut self,
            collection_authority: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.collection_authority = Some(collection_authority);
            self
        }
        pub fn collection_mint(
            &'a mut self,
            collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.collection_mint = Some(collection_mint);
            self
        }
        pub fn collection_authority_record(
            &'a mut self,
            collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.collection_authority_record = Some(collection_authority_record);
            self
        }
        pub fn set_collection_size_args(
            &'a mut self,
            set_collection_size_args: SetCollectionSizeArgs,
        ) -> &mut Self {
            self.set_collection_size_args = Some(set_collection_size_args);
            self
        }
        pub fn build(&'a self) -> SetCollectionSize {
            SetCollectionSize {
                program: self.program,

                collection_metadata: self
                    .collection_metadata
                    .expect("collection_metadata is not set"),

                collection_authority: self
                    .collection_authority
                    .expect("collection_authority is not set"),

                collection_mint: self.collection_mint.expect("collection_mint is not set"),

                collection_authority_record: self.collection_authority_record,
                args: SetCollectionSizeInstructionArgs::new(
                    self.set_collection_size_args
                        .expect("set_collection_size_args is not set"),
                ),
            }
        }
    }
}
