//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct SignMetadata {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Creator
    pub creator: solana_program::pubkey::Pubkey,
}

impl SignMetadata {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(&[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        remaining_accounts: &[super::InstructionAccount],
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
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let data = SignMetadataInstructionData::new().try_to_vec().unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct SignMetadataInstructionData {
    discriminator: u8,
}

impl SignMetadataInstructionData {
    fn new() -> Self {
        Self { discriminator: 7 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct SignMetadataBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    creator: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl SignMetadataBuilder {
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
        let accounts = SignMetadata {
            metadata: self.metadata.expect("metadata is not set"),
            creator: self.creator.expect("creator is not set"),
        };

        accounts.instruction_with_remaining_accounts(&self.__remaining_accounts)
    }
}

/// `sign_metadata` CPI accounts.
pub struct SignMetadataCpiAccounts<'a, 'b> {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Creator
    pub creator: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `sign_metadata` CPI instruction.
pub struct SignMetadataCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Creator
    pub creator: &'b solana_program::account_info::AccountInfo<'a>,
}

impl<'a, 'b> SignMetadataCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: SignMetadataCpiAccounts<'a, 'b>,
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
        let mut accounts = Vec::with_capacity(2 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.creator.key,
            true,
        ));
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let data = SignMetadataInstructionData::new().try_to_vec().unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(2 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.creator.clone());
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

/// `sign_metadata` CPI instruction builder.
pub struct SignMetadataCpiBuilder<'a, 'b> {
    instruction: Box<SignMetadataCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> SignMetadataCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SignMetadataCpiBuilderInstruction {
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
        let instruction = SignMetadataCpi {
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

struct SignMetadataCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    creator: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a, 'b>>,
}
