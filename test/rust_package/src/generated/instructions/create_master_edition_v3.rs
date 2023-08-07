//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

/// Accounts.
pub struct CreateMasterEditionV3 {
    /// Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']
    pub edition: solana_program::pubkey::Pubkey,
    /// Metadata mint
    pub mint: solana_program::pubkey::Pubkey,
    /// Update authority
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: Option<solana_program::pubkey::Pubkey>,
}

impl CreateMasterEditionV3 {
    pub fn instruction(
        &self,
        args: CreateMasterEditionV3InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::programs::mpl_token_metadata::ID,
            accounts: vec![
                                          solana_program::instruction::AccountMeta::new(
              self.edition,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new(
              self.mint,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.update_authority,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.mint_authority,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new(
              self.payer,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new(
              self.metadata,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.token_program,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.system_program,
              false
            ),
                                                                if let Some(rent) = self.rent {
              solana_program::instruction::AccountMeta::new_readonly(
                rent,
                false,
              ),
            } else {
              solana_program::instruction::AccountMeta::new_readonly(
                crate::programs::mpl_token_metadata::ID,
                false,
              ),
            },
                                  ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

/// Instruction builder.
pub struct CreateMasterEditionV3Builder {
    edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    create_master_edition_args: Option<CreateMasterEditionArgs>,
}

impl CreateMasterEditionV3Builder {
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
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
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
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
    pub fn create_master_edition_args(
        &mut self,
        create_master_edition_args: CreateMasterEditionArgs,
    ) -> &mut Self {
        self.create_master_edition_args = Some(create_master_edition_args);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateMasterEditionV3 {
            edition: self.edition.expect("edition is not set"),

            mint: self.mint.expect("mint is not set"),

            update_authority: self.update_authority.expect("update_authority is not set"),

            mint_authority: self.mint_authority.expect("mint_authority is not set"),

            payer: self.payer.expect("payer is not set"),

            metadata: self.metadata.expect("metadata is not set"),

            token_program: self.token_program.expect("token_program is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            rent: self.rent,
        };
        let args = CreateMasterEditionV3InstructionArgs::new(
            self.create_master_edition_args
                .expect("create_master_edition_args is not set"),
        );
        accounts.instruction(args)
    }
}

pub struct CreateMasterEditionV3InstructionArgs {
    discriminator: u8,
    pub create_master_edition_args: CreateMasterEditionArgs,
}

impl CreateMasterEditionV3InstructionArgs {
    pub fn new(create_master_edition_args: CreateMasterEditionArgs) -> Self {
        Self {
            discriminator: 17,
            create_master_edition_args,
        }
    }
}
