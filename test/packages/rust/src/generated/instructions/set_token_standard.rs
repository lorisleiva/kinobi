//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct SetTokenStandard {
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Metadata update authority
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Mint account
    pub mint: solana_program::pubkey::Pubkey,
    /// Edition account
    pub edition: Option<solana_program::pubkey::Pubkey>,
}

impl SetTokenStandard {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = SetTokenStandardInstructionArgs::new();
        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.metadata, false),
                solana_program::instruction::AccountMeta::new(self.update_authority, true),
                solana_program::instruction::AccountMeta::new_readonly(self.mint, false),
                if let Some(edition) = self.edition {
                    solana_program::instruction::AccountMeta::new_readonly(edition, false)
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
struct SetTokenStandardInstructionArgs {
    discriminator: u8,
}

impl SetTokenStandardInstructionArgs {
    pub fn new() -> Self {
        Self { discriminator: 35 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct SetTokenStandardBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
}

impl SetTokenStandardBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = SetTokenStandard {
            metadata: self.metadata.expect("metadata is not set"),

            update_authority: self.update_authority.expect("update_authority is not set"),

            mint: self.mint.expect("mint is not set"),

            edition: self.edition,
        };
        accounts.instruction()
    }
}

/// `set_token_standard` CPI instruction.
pub struct SetTokenStandardCpi<'a> {
    pub program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata update authority
    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint account
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition account
    pub edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}

impl<'a> SetTokenStandardCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = SetTokenStandardInstructionArgs::new();
        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(*self.metadata.key, false),
                solana_program::instruction::AccountMeta::new(*self.update_authority.key, true),
                solana_program::instruction::AccountMeta::new_readonly(*self.mint.key, false),
                if let Some(edition) = self.edition {
                    solana_program::instruction::AccountMeta::new_readonly(*edition.key, false)
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
            ],
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(4 + 1);
        account_infos.push(self.program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.mint.clone());
        if let Some(edition) = self.edition {
            account_infos.push(edition.clone());
        }

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `set_token_standard` CPI instruction builder.
pub struct SetTokenStandardCpiBuilder<'a> {
    instruction: Box<SetTokenStandardCpiBuilderInstruction<'a>>,
}

impl<'a> SetTokenStandardCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(SetTokenStandardCpiBuilderInstruction {
            program,
            metadata: None,
            update_authority: None,
            mint: None,
            edition: None,
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
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    pub fn edition(
        &mut self,
        edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> SetTokenStandardCpi<'a> {
        SetTokenStandardCpi {
            program: self.instruction.program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            edition: self.instruction.edition,
        }
    }
}

struct SetTokenStandardCpiBuilderInstruction<'a> {
    program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
