//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct CreateMasterEditionV3 {
      /// Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']

        pub edition: Pubkey,
        /// Metadata mint

        pub mint: Pubkey,
        /// Update authority

        pub update_authority: Pubkey,
        /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY

        pub mint_authority: Pubkey,
        /// payer

        pub payer: Pubkey,
        /// Metadata account

        pub metadata: Pubkey,
        /// Token program

        pub token_program: Pubkey,
        /// System program

        pub system_program: Pubkey,
        /// Rent info

        pub rent: Option<Pubkey>,
  }

                  
impl CreateMasterEditionV3 {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
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
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.rent.unwrap_or(crate::ID),
            false
          ),
              ],
      data,
    }
  }
}

/// Instruction builder.
pub struct CreateMasterEditionV3Builder {
  edition: Option<Pubkey>,
    mint: Option<Pubkey>,
    update_authority: Option<Pubkey>,
    mint_authority: Option<Pubkey>,
    payer: Option<Pubkey>,
    metadata: Option<Pubkey>,
    token_program: Option<Pubkey>,
    system_program: Option<Pubkey>,
    rent: Option<Pubkey>,
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
      pub fn update_authority(&mut self, update_authority: solana_program::pubkey::Pubkey) -> &mut Self {
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
    accounts.instruction()
  }
}

