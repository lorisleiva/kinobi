//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::{BorshDeserialize, BorshSerialize};

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
    pub fn instruction(
        &self,
        args: CreateV2InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::programs::mpl_token_metadata::ID,
            accounts: vec![
                                          solana_program::instruction::AccountMeta::new(
              self.metadata,
              false
            ),
                                                                if let Some(master_edition) = self.master_edition {
              solana_program::instruction::AccountMeta::new(
                master_edition,
                false,
              ),
            } else {
              solana_program::instruction::AccountMeta::new(
                crate::programs::mpl_token_metadata::ID,
                false,
              ),
            },
                                                                solana_program::instruction::AccountMeta::new(
              self.mint.0,
              self.mint.1,
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.mint_authority,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new(
              self.payer,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.update_authority,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.system_program,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.sysvar_instructions,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.spl_token_program,
              false
            ),
                                  ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

/// Instruction builder.
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
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey, as_signer: bool) -> &mut Self {
        self.mint = Some((mint, as_signer));
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
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    pub fn asset_data(&mut self, asset_data: AssetData) -> &mut Self {
        self.asset_data = Some(asset_data);
        self
    }
    pub fn max_supply(&mut self, max_supply: u64) -> &mut Self {
        self.max_supply = Some(max_supply);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateV2 {
            metadata: self.metadata.expect("metadata is not set"),

            master_edition: self.master_edition,

            mint: self.mint.expect("mint is not set"),

            mint_authority: self.mint_authority.expect("mint_authority is not set"),

            payer: self.payer.expect("payer is not set"),

            update_authority: self.update_authority.expect("update_authority is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            sysvar_instructions: self
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            spl_token_program: self
                .spl_token_program
                .expect("spl_token_program is not set"),
        };
        let args = CreateV2InstructionArgs::new(
            self.asset_data.expect("asset_data is not set"),
            self.max_supply,
        );
        accounts.instruction(args)
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
