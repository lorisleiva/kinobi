//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::AssetData;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateV2 {
    /// Metadata account key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition']
    pub master_edition: Option<solana_program::pubkey::Pubkey>,
    /// Mint of token asset
    pub mint: (solana_program::pubkey::Pubkey, bool),
    /// Mint authority
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// update authority info
    pub update_authority: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// SPL Token program
    pub spl_token_program: solana_program::pubkey::Pubkey,
}

impl CreateV2 {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: CreateV2InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(9);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        if let Some(master_edition) = self.master_edition {
            accounts.push(solana_program::instruction::AccountMeta::new(
                master_edition,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.mint.0,
            self.mint.1,
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
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.sysvar_instructions,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_token_program,
            false,
        ));

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateV2InstructionArgs {
    discriminator: u8,
    create_v2_discriminator: u8,
    pub asset_data: AssetData,
    pub max_supply: Option<u64>,
}

impl CreateV2InstructionArgs {
    pub fn new(asset_data: AssetData, max_supply: Option<u64>) -> Self {
        Self {
            discriminator: 41,
            create_v2_discriminator: 1,
            asset_data,
            max_supply,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct CreateV2Builder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<(solana_program::pubkey::Pubkey, bool)>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    asset_data: Option<AssetData>,
    max_supply: Option<u64>,
}

impl CreateV2Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Metadata account key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition']
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey, as_signer: bool) -> &mut Self {
        self.mint = Some((mint, as_signer));
        self
    }
    /// Mint authority
    #[inline(always)]
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// update authority info
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    /// System program
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
    /// SPL Token program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    #[inline(always)]
    pub fn asset_data(&mut self, asset_data: AssetData) -> &mut Self {
        self.asset_data = Some(asset_data);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn max_supply(&mut self, max_supply: u64) -> &mut Self {
        self.max_supply = Some(max_supply);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateV2 {
            metadata: self.metadata.expect("metadata is not set"),
            master_edition: self.master_edition,
            mint: self.mint.expect("mint is not set"),
            mint_authority: self.mint_authority.expect("mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            sysvar_instructions: self.sysvar_instructions.unwrap_or(solana_program::pubkey!(
                "Sysvar1nstructions1111111111111111111111111"
            )),
            spl_token_program: self.spl_token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
        };
        let args = CreateV2InstructionArgs::new(
            self.asset_data.clone().expect("asset_data is not set"),
            self.max_supply.clone(),
        );

        accounts.instruction(args)
    }
}

/// `create_v2` CPI instruction.
pub struct CreateV2Cpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account key (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition']
    pub master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// Mint of token asset
    pub mint: (&'a solana_program::account_info::AccountInfo<'a>, bool),
    /// Mint authority
    pub mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// update authority info
    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Instructions sysvar account
    pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Token program
    pub spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: CreateV2InstructionArgs,
}

impl<'a> CreateV2Cpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(9);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        if let Some(master_edition) = self.master_edition {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *master_edition.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.mint.0.key,
            self.mint.1,
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
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.sysvar_instructions.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_token_program.key,
            false,
        ));

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: self.__args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(9 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        if let Some(master_edition) = self.master_edition {
            account_infos.push(master_edition.clone());
        }
        account_infos.push(self.mint.0.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.sysvar_instructions.clone());
        account_infos.push(self.spl_token_program.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `create_v2` CPI instruction builder.
pub struct CreateV2CpiBuilder<'a> {
    instruction: Box<CreateV2CpiBuilderInstruction<'a>>,
}

impl<'a> CreateV2CpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateV2CpiBuilderInstruction {
            __program: program,
            metadata: None,
            master_edition: None,
            mint: None,
            mint_authority: None,
            payer: None,
            update_authority: None,
            system_program: None,
            sysvar_instructions: None,
            spl_token_program: None,
            asset_data: None,
            max_supply: None,
        });
        Self { instruction }
    }
    /// Metadata account key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// `[optional account]`
    /// Unallocated edition account with address as pda of ['metadata', program id, mint, 'edition']
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(
        &mut self,
        mint: &'a solana_program::account_info::AccountInfo<'a>,
        as_signer: bool,
    ) -> &mut Self {
        self.instruction.mint = Some((mint, as_signer));
        self
    }
    /// Mint authority
    #[inline(always)]
    pub fn mint_authority(
        &mut self,
        mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// update authority info
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    /// System program
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
    /// SPL Token program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_token_program = Some(spl_token_program);
        self
    }
    #[inline(always)]
    pub fn asset_data(&mut self, asset_data: AssetData) -> &mut Self {
        self.instruction.asset_data = Some(asset_data);
        self
    }
    /// `[optional argument]`
    #[inline(always)]
    pub fn max_supply(&mut self, max_supply: u64) -> &mut Self {
        self.instruction.max_supply = Some(max_supply);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> CreateV2Cpi<'a> {
        let args = CreateV2InstructionArgs::new(
            self.instruction
                .asset_data
                .clone()
                .expect("asset_data is not set"),
            self.instruction.max_supply.clone(),
        );

        CreateV2Cpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            master_edition: self.instruction.master_edition,

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

            sysvar_instructions: self
                .instruction
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            spl_token_program: self
                .instruction
                .spl_token_program
                .expect("spl_token_program is not set"),
            __args: args,
        }
    }
}

struct CreateV2CpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<(&'a solana_program::account_info::AccountInfo<'a>, bool)>,
    mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    asset_data: Option<AssetData>,
    max_supply: Option<u64>,
}
