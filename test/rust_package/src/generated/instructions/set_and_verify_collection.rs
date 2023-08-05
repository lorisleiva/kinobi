//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!



/// Accounts.
pub struct SetAndVerifyCollection {
      /// Metadata account

        pub metadata: Pubkey;
        /// Collection Update authority

        pub collection_authority: Pubkey;
        /// Payer

        pub payer: Pubkey;
        /// Update Authority of Collection NFT and NFT

        pub update_authority: Pubkey;
        /// Mint of the Collection

        pub collection_mint: Pubkey;
        /// Metadata Account of the Collection

        pub collection: Pubkey;
        /// MasterEdition2 Account of the Collection Token

        pub collection_master_edition_account: Pubkey;
        /// Collection Authority Record PDA

        pub collection_authority_record: Option<Pubkey>;
  }

                
impl struct SetAndVerifyCollection {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
    solana_program::instruction::Instruction {
      program_id: crate::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.metadata,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.collection_authority,
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
            self.collection_mint,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.collection,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.collection_master_edition_account,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.collection_authority_record.unwrap_or(crate::ID),
            false
          ),
              ],
      data: SetAndVerifyCollection.try_to_vec().unwrap(),
    }
  }
}

/// Instruction builder.
#[derive(Default)]
pub struct SetAndVerifyCollectionBuilder {
  metadata: Option<Pubkey>;
    collection_authority: Option<Pubkey>;
    payer: Option<Pubkey>;
    update_authority: Option<Pubkey>;
    collection_mint: Option<Pubkey>;
    collection: Option<Pubkey>;
    collection_master_edition_account: Option<Pubkey>;
    collection_authority_record: Option<Pubkey>;
  }

impl SetAndVerifyCollectionBuilder {
  pub fn new() -> Self {
    Self::default()
  }
      pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
      self.metadata = Some(metadata);
      
      self
    }
      pub fn collection_authority(&mut self, collection_authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.collection_authority = Some(collection_authority);
      
      self
    }
      pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
      self.payer = Some(payer);
      
      self
    }
      pub fn update_authority(&mut self, update_authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.update_authority = Some(update_authority);
      
      self
    }
      pub fn collection_mint(&mut self, collection_mint: solana_program::pubkey::Pubkey) -> &mut Self {
      self.collection_mint = Some(collection_mint);
      
      self
    }
      pub fn collection(&mut self, collection: solana_program::pubkey::Pubkey) -> &mut Self {
      self.collection = Some(collection);
      
      self
    }
      pub fn collection_master_edition_account(&mut self, collection_master_edition_account: solana_program::pubkey::Pubkey) -> &mut Self {
      self.collection_master_edition_account = Some(collection_master_edition_account);
      
      self
    }
      pub fn collection_authority_record(&mut self, collection_authority_record: solana_program::pubkey::Pubkey) -> &mut Self {
      self.collection_authority_record = Some(collection_authority_record);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = SetAndVerifyCollection {
                  metadata: self.metadata,
                            collection_authority: self.collection_authority,
                            payer: self.payer,
                            update_authority: self.update_authority,
                            collection_mint: self.collection_mint,
                            collection: self.collection,
                            collection_master_edition_account: self.collection_master_edition_account,
                            collection_authority_record: self.collection_authority_record.expect("collection_authority_record is not set"),
                      };
    accounts.instruction()
  }
}

