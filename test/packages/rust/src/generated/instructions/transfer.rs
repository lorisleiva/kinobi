//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::TransferArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct Transfer {
    /// Transfer authority (token or delegate owner)
    pub authority: solana_program::pubkey::Pubkey,
    /// Delegate record PDA
    pub delegate_record: Option<solana_program::pubkey::Pubkey>,
    /// Token account
    pub token: solana_program::pubkey::Pubkey,
    /// Token account owner
    pub token_owner: solana_program::pubkey::Pubkey,
    /// Destination token account
    pub destination: solana_program::pubkey::Pubkey,
    /// Destination token account owner
    pub destination_owner: solana_program::pubkey::Pubkey,
    /// Mint of token asset
    pub mint: solana_program::pubkey::Pubkey,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Master Edition of token asset
    pub master_edition: Option<solana_program::pubkey::Pubkey>,
    /// SPL Token Program
    pub spl_token_program: solana_program::pubkey::Pubkey,
    /// SPL Associated Token Account program
    pub spl_ata_program: solana_program::pubkey::Pubkey,
    /// System Program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
}

impl Transfer {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: TransferInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(15);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.authority,
            true,
        ));
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                delegate_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.token, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_owner,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.destination,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.destination_owner,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        if let Some(master_edition) = self.master_edition {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                master_edition,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_ata_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.sysvar_instructions,
            false,
        ));
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules_program,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct TransferInstructionArgs {
    discriminator: u8,
    pub transfer_args: TransferArgs,
}

impl TransferInstructionArgs {
    pub fn new(transfer_args: TransferArgs) -> Self {
        Self {
            discriminator: 46,
            transfer_args,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct TransferBuilder {
    authority: Option<solana_program::pubkey::Pubkey>,
    delegate_record: Option<solana_program::pubkey::Pubkey>,
    token: Option<solana_program::pubkey::Pubkey>,
    token_owner: Option<solana_program::pubkey::Pubkey>,
    destination: Option<solana_program::pubkey::Pubkey>,
    destination_owner: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    spl_ata_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    transfer_args: Option<TransferArgs>,
}

impl TransferBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Transfer authority (token or delegate owner)
    #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Delegate record PDA
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.delegate_record = Some(delegate_record);
        self
    }
    /// Token account
    #[inline(always)]
    pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token = Some(token);
        self
    }
    /// Token account owner
    #[inline(always)]
    pub fn token_owner(&mut self, token_owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_owner = Some(token_owner);
        self
    }
    /// Destination token account
    #[inline(always)]
    pub fn destination(&mut self, destination: solana_program::pubkey::Pubkey) -> &mut Self {
        self.destination = Some(destination);
        self
    }
    /// Destination token account owner
    #[inline(always)]
    pub fn destination_owner(
        &mut self,
        destination_owner: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.destination_owner = Some(destination_owner);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Master Edition of token asset
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    /// SPL Associated Token Account program
    #[inline(always)]
    pub fn spl_ata_program(
        &mut self,
        spl_ata_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_ata_program = Some(spl_ata_program);
        self
    }
    /// System Program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules Program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.authorization_rules_program = Some(authorization_rules_program);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.authorization_rules = Some(authorization_rules);
        self
    }
    #[inline(always)]
    pub fn transfer_args(&mut self, transfer_args: TransferArgs) -> &mut Self {
        self.transfer_args = Some(transfer_args);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Transfer {
            authority: self.authority.expect("authority is not set"),
            delegate_record: self.delegate_record,
            token: self.token.expect("token is not set"),
            token_owner: self.token_owner.expect("token_owner is not set"),
            destination: self.destination.expect("destination is not set"),
            destination_owner: self
                .destination_owner
                .expect("destination_owner is not set"),
            mint: self.mint.expect("mint is not set"),
            metadata: self.metadata.expect("metadata is not set"),
            master_edition: self.master_edition,
            spl_token_program: self.spl_token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            spl_ata_program: self.spl_ata_program.unwrap_or(solana_program::pubkey!(
                "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
            )),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            authorization_rules_program: self.authorization_rules_program,
            authorization_rules: self.authorization_rules,
        };
        let args = TransferInstructionArgs::new(
            self.transfer_args
                .clone()
                .expect("transfer_args is not set"),
        );

        accounts.instruction(args)
    }
}

/// `transfer` CPI instruction.
pub struct TransferCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Transfer authority (token or delegate owner)
    pub authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Delegate record PDA
    pub delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token account
    pub token: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account owner
    pub token_owner: &'a solana_program::account_info::AccountInfo<'a>,
    /// Destination token account
    pub destination: &'a solana_program::account_info::AccountInfo<'a>,
    /// Destination token account owner
    pub destination_owner: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of token asset
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Master Edition of token asset
    pub master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// SPL Token Program
    pub spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Associated Token Account program
    pub spl_ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// System Program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: TransferInstructionArgs,
}

impl<'a> TransferCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(15);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.authority.key,
            true,
        ));
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *delegate_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.token.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_owner.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.destination.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.destination_owner.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        if let Some(master_edition) = self.master_edition {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *master_edition.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_ata_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.sysvar_instructions.key,
            false,
        ));
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules_program.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: self.__args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(15 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.authority.clone());
        if let Some(delegate_record) = self.delegate_record {
            account_infos.push(delegate_record.clone());
        }
        account_infos.push(self.token.clone());
        account_infos.push(self.token_owner.clone());
        account_infos.push(self.destination.clone());
        account_infos.push(self.destination_owner.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.metadata.clone());
        if let Some(master_edition) = self.master_edition {
            account_infos.push(master_edition.clone());
        }
        account_infos.push(self.spl_token_program.clone());
        account_infos.push(self.spl_ata_program.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            account_infos.push(authorization_rules_program.clone());
        }
        if let Some(authorization_rules) = self.authorization_rules {
            account_infos.push(authorization_rules.clone());
        }

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `transfer` CPI instruction builder.
pub struct TransferCpiBuilder<'a> {
    instruction: Box<TransferCpiBuilderInstruction<'a>>,
}

impl<'a> TransferCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(TransferCpiBuilderInstruction {
            __program: program,
            authority: None,
            delegate_record: None,
            token: None,
            token_owner: None,
            destination: None,
            destination_owner: None,
            mint: None,
            metadata: None,
            master_edition: None,
            spl_token_program: None,
            spl_ata_program: None,
            system_program: None,
            sysvar_instructions: None,
            authorization_rules_program: None,
            authorization_rules: None,
            transfer_args: None,
        });
        Self { instruction }
    }
    /// Transfer authority (token or delegate owner)
    #[inline(always)]
    pub fn authority(
        &mut self,
        authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority = Some(authority);
        self
    }
    /// `[optional account]`
    /// Delegate record PDA
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.delegate_record = Some(delegate_record);
        self
    }
    /// Token account
    #[inline(always)]
    pub fn token(&mut self, token: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.token = Some(token);
        self
    }
    /// Token account owner
    #[inline(always)]
    pub fn token_owner(
        &mut self,
        token_owner: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_owner = Some(token_owner);
        self
    }
    /// Destination token account
    #[inline(always)]
    pub fn destination(
        &mut self,
        destination: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.destination = Some(destination);
        self
    }
    /// Destination token account owner
    #[inline(always)]
    pub fn destination_owner(
        &mut self,
        destination_owner: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.destination_owner = Some(destination_owner);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Master Edition of token asset
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
        self
    }
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_token_program = Some(spl_token_program);
        self
    }
    /// SPL Associated Token Account program
    #[inline(always)]
    pub fn spl_ata_program(
        &mut self,
        spl_ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_ata_program = Some(spl_ata_program);
        self
    }
    /// System Program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// Instructions sysvar account
    #[inline(always)]
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules Program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authorization_rules_program = Some(authorization_rules_program);
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authorization_rules = Some(authorization_rules);
        self
    }
    #[inline(always)]
    pub fn transfer_args(&mut self, transfer_args: TransferArgs) -> &mut Self {
        self.instruction.transfer_args = Some(transfer_args);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> TransferCpi<'a> {
        let args = TransferInstructionArgs::new(
            self.instruction
                .transfer_args
                .clone()
                .expect("transfer_args is not set"),
        );

        TransferCpi {
            __program: self.instruction.__program,

            authority: self.instruction.authority.expect("authority is not set"),

            delegate_record: self.instruction.delegate_record,

            token: self.instruction.token.expect("token is not set"),

            token_owner: self
                .instruction
                .token_owner
                .expect("token_owner is not set"),

            destination: self
                .instruction
                .destination
                .expect("destination is not set"),

            destination_owner: self
                .instruction
                .destination_owner
                .expect("destination_owner is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            master_edition: self.instruction.master_edition,

            spl_token_program: self
                .instruction
                .spl_token_program
                .expect("spl_token_program is not set"),

            spl_ata_program: self
                .instruction
                .spl_ata_program
                .expect("spl_ata_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            authorization_rules_program: self.instruction.authorization_rules_program,

            authorization_rules: self.instruction.authorization_rules,
            __args: args,
        }
    }
}

struct TransferCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    destination: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    destination_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_ata_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    transfer_args: Option<TransferArgs>,
}
