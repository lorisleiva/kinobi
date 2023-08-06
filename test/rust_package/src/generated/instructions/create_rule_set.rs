//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct CreateRuleSet {
      /// Payer and creator of the RuleSet

        pub payer: Pubkey,
        /// The PDA account where the RuleSet is stored

        pub rule_set_pda: Pubkey,
        /// System program

        pub system_program: Pubkey,
  }

      
impl CreateRuleSet {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
        solana_program::instruction::Instruction {
      program_id: crate::programs::mpl_token_auth_rules::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.payer,
            true
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.rule_set_pda,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false
          ),
              ],
      data,
    }
  }
}

/// Instruction builder.
pub struct CreateRuleSetBuilder {
  payer: Option<Pubkey>,
    rule_set_pda: Option<Pubkey>,
    system_program: Option<Pubkey>,
  }

impl CreateRuleSetBuilder {
      pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
      self.payer = Some(payer);
      
      self
    }
      pub fn rule_set_pda(&mut self, rule_set_pda: solana_program::pubkey::Pubkey) -> &mut Self {
      self.rule_set_pda = Some(rule_set_pda);
      
      self
    }
      pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
      self.system_program = Some(system_program);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateRuleSet {
                  payer: self.payer.expect("payer is not set"),
                            rule_set_pda: self.rule_set_pda.expect("rule_set_pda is not set"),
                            system_program: self.system_program.expect("system_program is not set"),
                      };
    accounts.instruction()
  }
}

