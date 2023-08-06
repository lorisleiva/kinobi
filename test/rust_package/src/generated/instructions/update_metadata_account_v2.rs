//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct UpdateMetadataAccountV2 {
      /// Metadata account

        pub metadata: Pubkey,
        /// Update authority key

        pub update_authority: Pubkey,
  }

    
impl UpdateMetadataAccountV2 {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
        solana_program::instruction::Instruction {
      program_id: crate::programs::mpl_token_metadata::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.metadata,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            true
          ),
              ],
      data,
    }
  }
}

/// Instruction builder.
pub struct UpdateMetadataAccountV2Builder {
  metadata: Option<Pubkey>,
    update_authority: Option<Pubkey>,
  }

impl UpdateMetadataAccountV2Builder {
      pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
      self.metadata = Some(metadata);
      
      self
    }
      pub fn update_authority(&mut self, update_authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.update_authority = Some(update_authority);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = UpdateMetadataAccountV2 {
                  metadata: self.metadata.expect("metadata is not set"),
                            update_authority: self.update_authority.expect("update_authority is not set"),
                      };
    accounts.instruction()
  }
}

