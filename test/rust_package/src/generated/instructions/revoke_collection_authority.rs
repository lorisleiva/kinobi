//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!



/// Accounts.
pub struct RevokeCollectionAuthority {
      /// Collection Authority Record PDA

        pub collection_authority_record: Pubkey;
        /// Delegated Collection Authority

        pub delegate_authority: Pubkey;
        /// Update Authority, or Delegated Authority, of Collection NFT

        pub revoke_authority: Pubkey;
        /// Metadata account

        pub metadata: Pubkey;
        /// Mint of Metadata

        pub mint: Pubkey;
  }

          
impl struct RevokeCollectionAuthority {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
    solana_program::instruction::Instruction {
      program_id: crate::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.collection_authority_record,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.delegate_authority,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.revoke_authority,
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.metadata,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.mint,
            false
          ),
              ],
      data: RevokeCollectionAuthority.try_to_vec().unwrap(),
    }
  }
}

/// Instruction builder.
#[derive(Default)]
pub struct RevokeCollectionAuthorityBuilder {
  collection_authority_record: Option<Pubkey>;
    delegate_authority: Option<Pubkey>;
    revoke_authority: Option<Pubkey>;
    metadata: Option<Pubkey>;
    mint: Option<Pubkey>;
  }

impl RevokeCollectionAuthorityBuilder {
  pub fn new() -> Self {
    Self::default()
  }
      pub fn collection_authority_record(&mut self, collection_authority_record: solana_program::pubkey::Pubkey) -> &mut Self {
      self.collection_authority_record = Some(collection_authority_record);
      
      self
    }
      pub fn delegate_authority(&mut self, delegate_authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.delegate_authority = Some(delegate_authority);
      
      self
    }
      pub fn revoke_authority(&mut self, revoke_authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.revoke_authority = Some(revoke_authority);
      
      self
    }
      pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
      self.metadata = Some(metadata);
      
      self
    }
      pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
      self.mint = Some(mint);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = RevokeCollectionAuthority {
                  collection_authority_record: self.collection_authority_record,
                            delegate_authority: self.delegate_authority,
                            revoke_authority: self.revoke_authority,
                            metadata: self.metadata,
                            mint: self.mint,
                      };
    accounts.instruction()
  }
}

