//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!



/// Accounts.
pub struct CreateEscrowAccount {
      /// Escrow account

        pub escrow: Pubkey;
        /// Metadata account

        pub metadata: Pubkey;
        /// Mint account

        pub mint: Pubkey;
        /// Token account of the token

        pub token_account: Pubkey;
        /// Edition account

        pub edition: Pubkey;
        /// Wallet paying for the transaction and new account

        pub payer: Pubkey;
        /// System program

        pub system_program: Pubkey;
        /// Instructions sysvar account

        pub sysvar_instructions: Pubkey;
        /// Authority/creator of the escrow account

        pub authority: Option<Pubkey>;
  }

                  
impl struct CreateEscrowAccount {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
    solana_program::instruction::Instruction {
      program_id: crate::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.escrow,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.metadata,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.mint,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.token_account,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.edition,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.payer,
            true
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
            self.authority.unwrap_or(crate::ID),
            true
          ),
              ],
      data: CreateEscrowAccount.try_to_vec().unwrap(),
    }
  }
}

/// Instruction builder.
#[derive(Default)]
pub struct CreateEscrowAccountBuilder {
  escrow: Option<Pubkey>;
    metadata: Option<Pubkey>;
    mint: Option<Pubkey>;
    token_account: Option<Pubkey>;
    edition: Option<Pubkey>;
    payer: Option<Pubkey>;
    system_program: Option<Pubkey>;
    sysvar_instructions: Option<Pubkey>;
    authority: Option<Pubkey>;
  }

impl CreateEscrowAccountBuilder {
  pub fn new() -> Self {
    Self::default()
  }
      pub fn escrow(&mut self, escrow: solana_program::pubkey::Pubkey) -> &mut Self {
      self.escrow = Some(escrow);
      
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
      pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
      self.token_account = Some(token_account);
      
      self
    }
      pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
      self.edition = Some(edition);
      
      self
    }
      pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
      self.payer = Some(payer);
      
      self
    }
      pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
      self.system_program = Some(system_program);
      
      self
    }
      pub fn sysvar_instructions(&mut self, sysvar_instructions: solana_program::pubkey::Pubkey) -> &mut Self {
      self.sysvar_instructions = Some(sysvar_instructions);
      
      self
    }
      pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.authority = Some(authority);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateEscrowAccount {
                  escrow: self.escrow,
                            metadata: self.metadata,
                            mint: self.mint,
                            token_account: self.token_account,
                            edition: self.edition,
                            payer: self.payer,
                            system_program: self.system_program,
                            sysvar_instructions: self.sysvar_instructions,
                            authority: self.authority.expect("authority is not set"),
                      };
    accounts.instruction()
  }
}

