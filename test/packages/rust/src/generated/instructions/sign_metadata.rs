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
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = SignMetadataInstructionArgs::new();

        let mut accounts = Vec::with_capacity(2);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.creator,
            true,
        ));

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct SignMetadataInstructionArgs {
    discriminator: u8,
}

impl SignMetadataInstructionArgs {
    pub fn new() -> Self {
        Self { discriminator: 7 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct SignMetadataBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    creator: Option<solana_program::pubkey::Pubkey>,
}

impl SignMetadataBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn creator(&mut self, creator: solana_program::pubkey::Pubkey) -> &mut Self {
        self.creator = Some(creator);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = SignMetadata {
            metadata: self.metadata.expect("metadata is not set"),
            creator: self.creator.expect("creator is not set"),
        };

        accounts.instruction()
    }
}

/// `sign_metadata` CPI instruction.
pub struct SignMetadataCpi<'a> {
    /// The program to invoke.
    pub program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Creator
    pub creator: &'a solana_program::account_info::AccountInfo<'a>,
}

impl<'a> SignMetadataCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = SignMetadataInstructionArgs::new();

        let mut accounts = Vec::with_capacity(2);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.creator.key,
            true,
        ));

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(2 + 1);
        account_infos.push(self.program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.creator.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `sign_metadata` CPI instruction builder.
pub struct SignMetadataCpiBuilder<'a> {
    instruction: Box<SignMetadataCpiBuilderInstruction<'a>>,
}

impl<'a> SignMetadataCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SignMetadataCpiBuilderInstruction {
            program,
            metadata: None,
            creator: None,
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
    pub fn creator(
        &mut self,
        creator: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.creator = Some(creator);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> SignMetadataCpi<'a> {
        SignMetadataCpi {
            program: self.instruction.program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            creator: self.instruction.creator.expect("creator is not set"),
        }
    }
}

struct SignMetadataCpiBuilderInstruction<'a> {
    program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    creator: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
