//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct SignMetadata {
      /// Metadata (pda of ['metadata', program id, mint id])

        pub metadata: Pubkey,
        /// Creator

        pub creator: Pubkey,
  }

    
impl SignMetadata {
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
            self.creator,
            true
          ),
              ],
      data,
    }
  }
}

/// Instruction builder.
pub struct SignMetadataBuilder {
  metadata: Option<Pubkey>,
    creator: Option<Pubkey>,
  }

impl SignMetadataBuilder {
      pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
      self.metadata = Some(metadata);
      
      self
    }
      pub fn creator(&mut self, creator: solana_program::pubkey::Pubkey) -> &mut Self {
      self.creator = Some(creator);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = SignMetadata {
                  metadata: self.metadata.expect("metadata is not set"),
                            creator: self.creator.expect("creator is not set"),
                      };
    accounts.instruction()
  }
}

