//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::Creator;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

/// Accounts.
pub struct UpdateMetadataAccount {
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Update authority key
    pub update_authority: solana_program::pubkey::Pubkey,
}

impl UpdateMetadataAccount {
    pub fn instruction(
        &self,
        args: UpdateMetadataAccountInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: UpdateMetadataAccountInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(2 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            true,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = UpdateMetadataAccountInstructionData::new()
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
struct UpdateMetadataAccountInstructionData {
    discriminator: u8,
}

impl UpdateMetadataAccountInstructionData {
    fn new() -> Self {
        Self { discriminator: 1 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct UpdateMetadataAccountInstructionArgs {
    pub data: Option<UpdateMetadataAccountInstructionDataData>,
    pub update_authority_arg: Option<Pubkey>,
    pub primary_sale_happened: Option<bool>,
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct UpdateMetadataAccountInstructionDataData {
    pub name: String,
    pub symbol: String,
    pub uri: String,
    pub seller_fee_basis_points: u16,
    pub creators: Option<Vec<Creator>>,
}

/// Instruction builder for `UpdateMetadataAccount`.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[signer]` update_authority
#[derive(Clone, Debug, Default)]
pub struct UpdateMetadataAccountBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    data: Option<UpdateMetadataAccountInstructionDataData>,
    update_authority_arg: Option<Pubkey>,
    primary_sale_happened: Option<bool>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl UpdateMetadataAccountBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Update authority key
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn data(&mut self, data: UpdateMetadataAccountInstructionDataData) -> &mut Self {
        self.data = Some(data);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn update_authority_arg(&mut self, update_authority_arg: Pubkey) -> &mut Self {
        self.update_authority_arg = Some(update_authority_arg);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn primary_sale_happened(&mut self, primary_sale_happened: bool) -> &mut Self {
        self.primary_sale_happened = Some(primary_sale_happened);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = UpdateMetadataAccount {
            metadata: self.metadata.expect("metadata is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
        };
        let args = UpdateMetadataAccountInstructionArgs {
            data: self.data.clone(),
            update_authority_arg: self.update_authority_arg.clone(),
            primary_sale_happened: self.primary_sale_happened.clone(),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `update_metadata_account` CPI accounts.
pub struct UpdateMetadataAccountCpiAccounts<'a, 'b> {
    /// Metadata account
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Update authority key
    pub update_authority: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `update_metadata_account` CPI instruction.
pub struct UpdateMetadataAccountCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Update authority key
    pub update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: UpdateMetadataAccountInstructionArgs,
}

impl<'a, 'b> UpdateMetadataAccountCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: UpdateMetadataAccountCpiAccounts<'a, 'b>,
        args: UpdateMetadataAccountInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            metadata: accounts.metadata,
            update_authority: accounts.update_authority,
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
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
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
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(2 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
            true,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = UpdateMetadataAccountInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(2 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.update_authority.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `UpdateMetadataAccount` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[signer]` update_authority
#[derive(Clone, Debug)]
pub struct UpdateMetadataAccountCpiBuilder<'a, 'b> {
    instruction: Box<UpdateMetadataAccountCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> UpdateMetadataAccountCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(UpdateMetadataAccountCpiBuilderInstruction {
            __program: program,
            metadata: None,
            update_authority: None,
            data: None,
            update_authority_arg: None,
            primary_sale_happened: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Update authority key
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn data(&mut self, data: UpdateMetadataAccountInstructionDataData) -> &mut Self {
        self.instruction.data = Some(data);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn update_authority_arg(&mut self, update_authority_arg: Pubkey) -> &mut Self {
        self.instruction.update_authority_arg = Some(update_authority_arg);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn primary_sale_happened(&mut self, primary_sale_happened: bool) -> &mut Self {
        self.instruction.primary_sale_happened = Some(primary_sale_happened);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
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
        let args = UpdateMetadataAccountInstructionArgs {
            data: self.instruction.data.clone(),
            update_authority_arg: self.instruction.update_authority_arg.clone(),
            primary_sale_happened: self.instruction.primary_sale_happened.clone(),
        };
        let instruction = UpdateMetadataAccountCpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct UpdateMetadataAccountCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    data: Option<UpdateMetadataAccountInstructionDataData>,
    update_authority_arg: Option<Pubkey>,
    primary_sale_happened: Option<bool>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
