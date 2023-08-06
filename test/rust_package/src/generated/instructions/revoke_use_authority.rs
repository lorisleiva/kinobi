//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct RevokeUseAuthority {
      /// Use Authority Record PDA

        pub use_authority_record: Pubkey,
        /// Owner

        pub owner: Pubkey,
        /// A Use Authority

        pub user: Pubkey,
        /// Owned Token Account Of Mint

        pub owner_token_account: Pubkey,
        /// Mint of Metadata

        pub mint: Pubkey,
        /// Metadata account

        pub metadata: Pubkey,
        /// Token program

        pub token_program: Pubkey,
        /// System program

        pub system_program: Pubkey,
        /// Rent info

        pub rent: Option<Pubkey>,
  }

                  
impl RevokeUseAuthority {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
        solana_program::instruction::Instruction {
      program_id: crate::programs::mpl_token_metadata::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.use_authority_record,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.owner,
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.user,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.owner_token_account,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.mint,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
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
pub struct RevokeUseAuthorityBuilder {
  use_authority_record: Option<Pubkey>,
    owner: Option<Pubkey>,
    user: Option<Pubkey>,
    owner_token_account: Option<Pubkey>,
    mint: Option<Pubkey>,
    metadata: Option<Pubkey>,
    token_program: Option<Pubkey>,
    system_program: Option<Pubkey>,
    rent: Option<Pubkey>,
  }

impl RevokeUseAuthorityBuilder {
      pub fn use_authority_record(&mut self, use_authority_record: solana_program::pubkey::Pubkey) -> &mut Self {
      self.use_authority_record = Some(use_authority_record);
      
      self
    }
      pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
      self.owner = Some(owner);
      
      self
    }
      pub fn user(&mut self, user: solana_program::pubkey::Pubkey) -> &mut Self {
      self.user = Some(user);
      
      self
    }
      pub fn owner_token_account(&mut self, owner_token_account: solana_program::pubkey::Pubkey) -> &mut Self {
      self.owner_token_account = Some(owner_token_account);
      
      self
    }
      pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
      self.mint = Some(mint);
      
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
        let accounts = RevokeUseAuthority {
                  use_authority_record: self.use_authority_record.expect("use_authority_record is not set"),
                            owner: self.owner.expect("owner is not set"),
                            user: self.user.expect("user is not set"),
                            owner_token_account: self.owner_token_account.expect("owner_token_account is not set"),
                            mint: self.mint.expect("mint is not set"),
                            metadata: self.metadata.expect("metadata is not set"),
                            token_program: self.token_program.expect("token_program is not set"),
                            system_program: self.system_program.expect("system_program is not set"),
                            rent: self.rent,
                      };
    accounts.instruction()
  }
}

