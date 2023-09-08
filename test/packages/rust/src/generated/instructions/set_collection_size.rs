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
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: SetCollectionSizeInstructionArgs,
        remaining_accounts: &[super::InstructionAccount],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(4 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.collection_metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.collection_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.collection_mint,
            false,
        ));
        if let Some(collection_authority_record) = self.collection_authority_record {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                collection_authority_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = SetCollectionSizeInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct SetCollectionSizeInstructionData {
    discriminator: u8,
}

impl SetCollectionSizeInstructionData {
    fn new() -> Self {
        Self { discriminator: 34 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct SetCollectionSizeInstructionArgs {
    pub set_collection_size_args: SetCollectionSizeArgs,
}

/// Instruction builder.
#[derive(Default)]
pub struct SetCollectionSizeBuilder {
    collection_metadata: Option<solana_program::pubkey::Pubkey>,
    collection_authority: Option<solana_program::pubkey::Pubkey>,
    collection_mint: Option<solana_program::pubkey::Pubkey>,
    collection_authority_record: Option<solana_program::pubkey::Pubkey>,
    set_collection_size_args: Option<SetCollectionSizeArgs>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl SetCollectionSizeBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Collection Metadata account
    #[inline(always)]
    pub fn collection_metadata(
        &mut self,
        collection_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_metadata = Some(collection_metadata);
        self
    }
    /// Collection Update authority
    #[inline(always)]
    pub fn collection_authority(
        &mut self,
        collection_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority = Some(collection_authority);
        self
    }
    /// Mint of the Collection
    #[inline(always)]
    pub fn collection_mint(
        &mut self,
        collection_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_mint = Some(collection_mint);
        self
    }
    /// `[optional account]`
    /// Collection Authority Record PDA
    #[inline(always)]
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.collection_authority_record = collection_authority_record;
        self
    }
    #[inline(always)]
    pub fn set_collection_size_args(
        &mut self,
        set_collection_size_args: SetCollectionSizeArgs,
    ) -> &mut Self {
        self.set_collection_size_args = Some(set_collection_size_args);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(&mut self, account: super::InstructionAccount) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(&mut self, accounts: &[super::InstructionAccount]) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
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
        let args = SetCollectionSizeInstructionArgs {
            set_collection_size_args: self
                .set_collection_size_args
                .clone()
                .expect("set_collection_size_args is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `set_collection_size` CPI accounts.
pub struct SetCollectionSizeCpiAccounts<'a, 'b> {
    /// Collection Metadata account
    pub collection_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Collection Update authority
    pub collection_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of the Collection
    pub collection_mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Collection Authority Record PDA
    pub collection_authority_record: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

/// `set_collection_size` CPI instruction.
pub struct SetCollectionSizeCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Collection Metadata account
    pub collection_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Collection Update authority
    pub collection_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of the Collection
    pub collection_mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Collection Authority Record PDA
    pub collection_authority_record: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: SetCollectionSizeInstructionArgs,
}

impl<'a, 'b> SetCollectionSizeCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: SetCollectionSizeCpiAccounts<'a, 'b>,
        args: SetCollectionSizeInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            collection_metadata: accounts.collection_metadata,
            collection_authority: accounts.collection_authority,
            collection_mint: accounts.collection_mint,
            collection_authority_record: accounts.collection_authority_record,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[super::InstructionAccountInfo<'a, '_>],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[super::InstructionAccountInfo<'a, '_>],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(4 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.collection_metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.collection_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.collection_mint.key,
            false,
        ));
        if let Some(collection_authority_record) = self.collection_authority_record {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *collection_authority_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = SetCollectionSizeInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(4 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.collection_metadata.clone());
        account_infos.push(self.collection_authority.clone());
        account_infos.push(self.collection_mint.clone());
        if let Some(collection_authority_record) = self.collection_authority_record {
            account_infos.push(collection_authority_record.clone());
        }
        remaining_accounts.iter().for_each(|remaining_account| {
            account_infos.push(remaining_account.account_info().clone())
        });

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `set_collection_size` CPI instruction builder.
pub struct SetCollectionSizeCpiBuilder<'a, 'b> {
    instruction: Box<SetCollectionSizeCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> SetCollectionSizeCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SetCollectionSizeCpiBuilderInstruction {
            __program: program,
            collection_metadata: None,
            collection_authority: None,
            collection_mint: None,
            collection_authority_record: None,
            set_collection_size_args: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Collection Metadata account
    #[inline(always)]
    pub fn collection_metadata(
        &mut self,
        collection_metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_metadata = Some(collection_metadata);
        self
    }
    /// Collection Update authority
    #[inline(always)]
    pub fn collection_authority(
        &mut self,
        collection_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_authority = Some(collection_authority);
        self
    }
    /// Mint of the Collection
    #[inline(always)]
    pub fn collection_mint(
        &mut self,
        collection_mint: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_mint = Some(collection_mint);
        self
    }
    /// `[optional account]`
    /// Collection Authority Record PDA
    #[inline(always)]
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.collection_authority_record = collection_authority_record;
        self
    }
    #[inline(always)]
    pub fn set_collection_size_args(
        &mut self,
        set_collection_size_args: SetCollectionSizeArgs,
    ) -> &mut Self {
        self.instruction.set_collection_size_args = Some(set_collection_size_args);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: super::InstructionAccountInfo<'a, 'b>,
    ) -> &mut Self {
        self.instruction.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[super::InstructionAccountInfo<'a, 'b>],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = SetCollectionSizeInstructionArgs {
            set_collection_size_args: self
                .instruction
                .set_collection_size_args
                .clone()
                .expect("set_collection_size_args is not set"),
        };
        let instruction = SetCollectionSizeCpi {
            __program: self.instruction.__program,

            collection_metadata: self
                .instruction
                .collection_metadata
                .expect("collection_metadata is not set"),

            collection_authority: self
                .instruction
                .collection_authority
                .expect("collection_authority is not set"),

            collection_mint: self
                .instruction
                .collection_mint
                .expect("collection_mint is not set"),

            collection_authority_record: self.instruction.collection_authority_record,
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct SetCollectionSizeCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    collection_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    collection_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    collection_mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    collection_authority_record: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    set_collection_size_args: Option<SetCollectionSizeArgs>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a, 'b>>,
}
