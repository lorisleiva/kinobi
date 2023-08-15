//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::DataV2;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateMetadataAccountV2 {
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Mint of token asset
    pub mint: solana_program::pubkey::Pubkey,
    /// Mint authority
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// update authority info
    pub update_authority: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: Option<solana_program::pubkey::Pubkey>,
}

impl CreateMetadataAccountV2 {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: CreateMetadataAccountV2InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(7);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        if let Some(rent) = self.rent {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                rent, false,
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
pub struct CreateMetadataAccountV2InstructionArgs {
    discriminator: u8,
    pub data: DataV2,
    pub is_mutable: bool,
}

impl CreateMetadataAccountV2InstructionArgs {
    pub fn new(data: DataV2, is_mutable: bool) -> Self {
        Self {
            discriminator: 16,
            data,
            is_mutable,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct CreateMetadataAccountV2Builder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    data: Option<DataV2>,
    is_mutable: Option<bool>,
}

impl CreateMetadataAccountV2Builder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
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
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
        self.rent = Some(rent);
        self
    }
    pub fn data(&mut self, data: DataV2) -> &mut Self {
        self.data = Some(data);
        self
    }
    pub fn is_mutable(&mut self, is_mutable: bool) -> &mut Self {
        self.is_mutable = Some(is_mutable);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateMetadataAccountV2 {
            metadata: self.metadata.expect("metadata is not set"),
            mint: self.mint.expect("mint is not set"),
            mint_authority: self.mint_authority.expect("mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            rent: self.rent,
        };
        let args = CreateMetadataAccountV2InstructionArgs::new(
            self.data.clone().expect("data is not set"),
            self.is_mutable.clone().expect("is_mutable is not set"),
        );

        accounts.instruction(args)
    }
}

/// `create_metadata_account_v2` CPI instruction.
pub struct CreateMetadataAccountV2Cpi<'a> {
    /// The program to invoke.
    pub program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of token asset
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint authority
    pub mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// update authority info
    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub args: CreateMetadataAccountV2InstructionArgs,
}

impl<'a> CreateMetadataAccountV2Cpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(7);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        if let Some(rent) = self.rent {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *rent.key, false,
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
            data: self.args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(7 + 1);
        account_infos.push(self.program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.system_program.clone());
        if let Some(rent) = self.rent {
            account_infos.push(rent.clone());
        }

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `create_metadata_account_v2` CPI instruction builder.
pub struct CreateMetadataAccountV2CpiBuilder<'a> {
    instruction: Box<CreateMetadataAccountV2CpiBuilderInstruction<'a>>,
}

impl<'a> CreateMetadataAccountV2CpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateMetadataAccountV2CpiBuilderInstruction {
            program,
            metadata: None,
            mint: None,
            mint_authority: None,
            payer: None,
            update_authority: None,
            system_program: None,
            rent: None,
            data: None,
            is_mutable: None,
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
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    pub fn mint_authority(
        &mut self,
        mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
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
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    pub fn rent(&mut self, rent: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.rent = Some(rent);
        self
    }
    pub fn data(&mut self, data: DataV2) -> &mut Self {
        self.instruction.data = Some(data);
        self
    }
    pub fn is_mutable(&mut self, is_mutable: bool) -> &mut Self {
        self.instruction.is_mutable = Some(is_mutable);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> CreateMetadataAccountV2Cpi<'a> {
        let args = CreateMetadataAccountV2InstructionArgs::new(
            self.instruction.data.clone().expect("data is not set"),
            self.instruction
                .is_mutable
                .clone()
                .expect("is_mutable is not set"),
        );

        CreateMetadataAccountV2Cpi {
            program: self.instruction.program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            mint_authority: self
                .instruction
                .mint_authority
                .expect("mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            rent: self.instruction.rent,
            args,
        }
    }
}

struct CreateMetadataAccountV2CpiBuilderInstruction<'a> {
    program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    data: Option<DataV2>,
    is_mutable: Option<bool>,
}
