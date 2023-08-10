//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct SetAndVerifySizedCollectionItem {
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Collection Update authority
    pub collection_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// Update Authority of Collection NFT and NFT
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Mint of the Collection
    pub collection_mint: solana_program::pubkey::Pubkey,
    /// Metadata Account of the Collection
    pub collection: solana_program::pubkey::Pubkey,
    /// MasterEdition2 Account of the Collection Token
    pub collection_master_edition_account: solana_program::pubkey::Pubkey,
    /// Collection Authority Record PDA
    pub collection_authority_record: Option<solana_program::pubkey::Pubkey>,
}

impl SetAndVerifySizedCollectionItem {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = SetAndVerifySizedCollectionItemInstructionArgs::new();
        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.metadata, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.collection_authority,
                    true,
                ),
                solana_program::instruction::AccountMeta::new(self.payer, true),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.update_authority,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(self.collection_mint, false),
                solana_program::instruction::AccountMeta::new(self.collection, false),
                solana_program::instruction::AccountMeta::new(
                    self.collection_master_edition_account,
                    false,
                ),
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
struct SetAndVerifySizedCollectionItemInstructionArgs {
    discriminator: u8,
}

impl SetAndVerifySizedCollectionItemInstructionArgs {
    pub fn new() -> Self {
        Self { discriminator: 32 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct SetAndVerifySizedCollectionItemBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    collection_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    collection_mint: Option<solana_program::pubkey::Pubkey>,
    collection: Option<solana_program::pubkey::Pubkey>,
    collection_master_edition_account: Option<solana_program::pubkey::Pubkey>,
    collection_authority_record: Option<solana_program::pubkey::Pubkey>,
}

impl SetAndVerifySizedCollectionItemBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn collection_authority(
        &mut self,
        collection_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority = Some(collection_authority);
        self
    }
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    pub fn collection_mint(
        &mut self,
        collection_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_mint = Some(collection_mint);
        self
    }
    pub fn collection(&mut self, collection: solana_program::pubkey::Pubkey) -> &mut Self {
        self.collection = Some(collection);
        self
    }
    pub fn collection_master_edition_account(
        &mut self,
        collection_master_edition_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_master_edition_account = Some(collection_master_edition_account);
        self
    }
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority_record = Some(collection_authority_record);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = SetAndVerifySizedCollectionItem {
            metadata: self.metadata.expect("metadata is not set"),

            collection_authority: self
                .collection_authority
                .expect("collection_authority is not set"),

            payer: self.payer.expect("payer is not set"),

            update_authority: self.update_authority.expect("update_authority is not set"),

            collection_mint: self.collection_mint.expect("collection_mint is not set"),

            collection: self.collection.expect("collection is not set"),

            collection_master_edition_account: self
                .collection_master_edition_account
                .expect("collection_master_edition_account is not set"),

            collection_authority_record: self.collection_authority_record,
        };
        accounts.instruction()
    }
}

/// `set_and_verify_sized_collection_item` CPI instruction.
pub struct SetAndVerifySizedCollectionItemCpi<'a> {
    pub program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Collection Update authority
    pub collection_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// Update Authority of Collection NFT and NFT
    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of the Collection
    pub collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata Account of the Collection
    pub collection: &'a solana_program::account_info::AccountInfo<'a>,
    /// MasterEdition2 Account of the Collection Token
    pub collection_master_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// Collection Authority Record PDA
    pub collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}

impl<'a> SetAndVerifySizedCollectionItemCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = SetAndVerifySizedCollectionItemInstructionArgs::new();
        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(*self.metadata.key, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.collection_authority.key,
                    true,
                ),
                solana_program::instruction::AccountMeta::new(*self.payer.key, true),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.update_authority.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.collection_mint.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new(*self.collection.key, false),
                solana_program::instruction::AccountMeta::new(
                    *self.collection_master_edition_account.key,
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
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(8 + 1);
        account_infos.push(self.program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.collection_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.collection_mint.clone());
        account_infos.push(self.collection.clone());
        account_infos.push(self.collection_master_edition_account.clone());
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

/// `set_and_verify_sized_collection_item` CPI instruction builder.
pub struct SetAndVerifySizedCollectionItemCpiBuilder<'a> {
    instruction: Box<SetAndVerifySizedCollectionItemCpiBuilderInstruction<'a>>,
}

impl<'a> SetAndVerifySizedCollectionItemCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SetAndVerifySizedCollectionItemCpiBuilderInstruction {
            program,
            metadata: None,
            collection_authority: None,
            payer: None,
            update_authority: None,
            collection_mint: None,
            collection: None,
            collection_master_edition_account: None,
            collection_authority_record: None,
        });
        Self { instruction }
    }
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    pub fn collection_authority(
        &mut self,
        collection_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_authority = Some(collection_authority);
        self
    }
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    pub fn collection_mint(
        &mut self,
        collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_mint = Some(collection_mint);
        self
    }
    pub fn collection(
        &mut self,
        collection: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection = Some(collection);
        self
    }
    pub fn collection_master_edition_account(
        &mut self,
        collection_master_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_master_edition_account =
            Some(collection_master_edition_account);
        self
    }
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_authority_record = Some(collection_authority_record);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> SetAndVerifySizedCollectionItemCpi<'a> {
        SetAndVerifySizedCollectionItemCpi {
            program: self.instruction.program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            collection_authority: self
                .instruction
                .collection_authority
                .expect("collection_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            collection_mint: self
                .instruction
                .collection_mint
                .expect("collection_mint is not set"),

            collection: self.instruction.collection.expect("collection is not set"),

            collection_master_edition_account: self
                .instruction
                .collection_master_edition_account
                .expect("collection_master_edition_account is not set"),

            collection_authority_record: self.instruction.collection_authority_record,
        }
    }
}

struct SetAndVerifySizedCollectionItemCpiBuilderInstruction<'a> {
    program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_master_edition_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
