//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct Mint {
      /// Token account

        pub token: Pubkey,
        /// Metadata account key (pda of ['metadata', program id, mint id])

        pub metadata: Pubkey,
        /// Master Edition account

        pub master_edition: Option<Pubkey>,
        /// Mint of token asset

        pub mint: Pubkey,
        /// Payer

        pub payer: Pubkey,
        /// (Mint or Update) authority

        pub authority: Pubkey,
        /// System program

        pub system_program: Pubkey,
        /// Instructions sysvar account

        pub sysvar_instructions: Pubkey,
        /// SPL Token program

        pub spl_token_program: Pubkey,
        /// SPL Associated Token Account program

        pub spl_ata_program: Pubkey,
        /// Token Authorization Rules program

        pub authorization_rules_program: Option<Pubkey>,
        /// Token Authorization Rules account

        pub authorization_rules: Option<Pubkey>,
  }

                        
impl Mint {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
        solana_program::instruction::Instruction {
      program_id: crate::programs::mpl_token_metadata::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.token,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.metadata,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.master_edition.unwrap_or(crate::ID),
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.mint,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.payer,
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.authority,
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
            self.spl_token_program,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.spl_ata_program,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.authorization_rules_program.unwrap_or(crate::ID),
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.authorization_rules.unwrap_or(crate::ID),
            false
          ),
              ],
      data,
    }
  }
}

/// Instruction builder.
pub struct MintBuilder {
  token: Option<Pubkey>,
    metadata: Option<Pubkey>,
    master_edition: Option<Pubkey>,
    mint: Option<Pubkey>,
    payer: Option<Pubkey>,
    authority: Option<Pubkey>,
    system_program: Option<Pubkey>,
    sysvar_instructions: Option<Pubkey>,
    spl_token_program: Option<Pubkey>,
    spl_ata_program: Option<Pubkey>,
    authorization_rules_program: Option<Pubkey>,
    authorization_rules: Option<Pubkey>,
  }

impl MintBuilder {
      pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
      self.token = Some(token);
      
      self
    }
      pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
      self.metadata = Some(metadata);
      
      self
    }
      pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
      self.master_edition = Some(master_edition);
      
      self
    }
      pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
      self.mint = Some(mint);
      
      self
    }
      pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
      self.payer = Some(payer);
      
      self
    }
      pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.authority = Some(authority);
      
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
      pub fn spl_token_program(&mut self, spl_token_program: solana_program::pubkey::Pubkey) -> &mut Self {
      self.spl_token_program = Some(spl_token_program);
      
      self
    }
      pub fn spl_ata_program(&mut self, spl_ata_program: solana_program::pubkey::Pubkey) -> &mut Self {
      self.spl_ata_program = Some(spl_ata_program);
      
      self
    }
      pub fn authorization_rules_program(&mut self, authorization_rules_program: solana_program::pubkey::Pubkey) -> &mut Self {
      self.authorization_rules_program = Some(authorization_rules_program);
      
      self
    }
      pub fn authorization_rules(&mut self, authorization_rules: solana_program::pubkey::Pubkey) -> &mut Self {
      self.authorization_rules = Some(authorization_rules);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Mint {
                  token: self.token.expect("token is not set"),
                            metadata: self.metadata.expect("metadata is not set"),
                            master_edition: self.master_edition,
                            mint: self.mint.expect("mint is not set"),
                            payer: self.payer.expect("payer is not set"),
                            authority: self.authority.expect("authority is not set"),
                            system_program: self.system_program.expect("system_program is not set"),
                            sysvar_instructions: self.sysvar_instructions.expect("sysvar_instructions is not set"),
                            spl_token_program: self.spl_token_program.expect("spl_token_program is not set"),
                            spl_ata_program: self.spl_ata_program.expect("spl_ata_program is not set"),
                            authorization_rules_program: self.authorization_rules_program,
                            authorization_rules: self.authorization_rules,
                      };
    accounts.instruction()
  }
}

