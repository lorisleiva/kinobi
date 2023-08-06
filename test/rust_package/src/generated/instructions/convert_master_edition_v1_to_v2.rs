//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct ConvertMasterEditionV1ToV2 {
      /// Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])

        pub master_edition: Pubkey,
        /// One time authorization mint

        pub one_time_auth: Pubkey,
        /// Printing mint

        pub printing_mint: Pubkey,
  }

      
impl ConvertMasterEditionV1ToV2 {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
        solana_program::instruction::Instruction {
      program_id: crate::programs::mpl_token_metadata::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.master_edition,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.one_time_auth,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.printing_mint,
            false
          ),
              ],
      data,
    }
  }
}

/// Instruction builder.
pub struct ConvertMasterEditionV1ToV2Builder {
  master_edition: Option<Pubkey>,
    one_time_auth: Option<Pubkey>,
    printing_mint: Option<Pubkey>,
  }

impl ConvertMasterEditionV1ToV2Builder {
      pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
      self.master_edition = Some(master_edition);
      
      self
    }
      pub fn one_time_auth(&mut self, one_time_auth: solana_program::pubkey::Pubkey) -> &mut Self {
      self.one_time_auth = Some(one_time_auth);
      
      self
    }
      pub fn printing_mint(&mut self, printing_mint: solana_program::pubkey::Pubkey) -> &mut Self {
      self.printing_mint = Some(printing_mint);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = ConvertMasterEditionV1ToV2 {
                  master_edition: self.master_edition.expect("master_edition is not set"),
                            one_time_auth: self.one_time_auth.expect("one_time_auth is not set"),
                            printing_mint: self.printing_mint.expect("printing_mint is not set"),
                      };
    accounts.instruction()
  }
}

