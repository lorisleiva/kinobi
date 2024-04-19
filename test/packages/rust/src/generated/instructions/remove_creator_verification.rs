//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct RemoveCreatorVerification {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Creator
    pub creator: solana_program::pubkey::Pubkey,
}

impl RemoveCreatorVerification {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(2 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.creator,
            true,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let data = RemoveCreatorVerificationInstructionData::new()
            .try_to_vec()
            .unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct RemoveCreatorVerificationInstructionData {
    discriminator: u8,
}

impl RemoveCreatorVerificationInstructionData {
    pub fn new() -> Self {
        Self { discriminator: 28 }
    }
}

/// Instruction builder for `RemoveCreatorVerification`.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[signer]` creator
#[derive(Default)]
pub struct RemoveCreatorVerificationBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    creator: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl RemoveCreatorVerificationBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Creator
    #[inline(always)]
    pub fn creator(&mut self, creator: solana_program::pubkey::Pubkey) -> &mut Self {
        self.creator = Some(creator);
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
        let accounts = RemoveCreatorVerification {
            metadata: self.metadata.expect("metadata is not set"),
            creator: self.creator.expect("creator is not set"),
        };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `remove_creator_verification` CPI accounts.
pub struct RemoveCreatorVerificationCpiAccounts<'a, 'b> {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Creator
    pub creator: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `remove_creator_verification` CPI instruction.
pub struct RemoveCreatorVerificationCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Creator
    pub creator: &'b solana_program::account_info::AccountInfo<'a>,
}

impl<'a, 'b> RemoveCreatorVerificationCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: RemoveCreatorVerificationCpiAccounts<'a, 'b>,
    ) -> Self {
        Self {
            __program: program,
            metadata: accounts.metadata,
            creator: accounts.creator,
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
            *self.creator.key,
            true,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let data = RemoveCreatorVerificationInstructionData::new()
            .try_to_vec()
            .unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(2 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.creator.clone());
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

/// Instruction builder for `RemoveCreatorVerification` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[signer]` creator
pub struct RemoveCreatorVerificationCpiBuilder<'a, 'b> {
    instruction: Box<RemoveCreatorVerificationCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> RemoveCreatorVerificationCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(RemoveCreatorVerificationCpiBuilderInstruction {
            __program: program,
            metadata: None,
            creator: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Creator
    #[inline(always)]
    pub fn creator(
        &mut self,
        creator: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.creator = Some(creator);
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
        let instruction = RemoveCreatorVerificationCpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            creator: self.instruction.creator.expect("creator is not set"),
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct RemoveCreatorVerificationCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    creator: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
