//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!



/// Accounts.
pub struct Validate {
      /// Payer and creator of the RuleSet

        pub payer: Pubkey;
        /// The PDA account where the RuleSet is stored

        pub rule_set: Pubkey;
        /// System program

        pub system_program: Pubkey;
          pub opt_rule_signer1: Option<Pubkey>;
        /// Optional rule validation signer 2

        pub opt_rule_signer2: Option<Pubkey>;
        /// Optional rule validation signer 3

        pub opt_rule_signer3: Option<Pubkey>;
        /// Optional rule validation signer 4

        pub opt_rule_signer4: Option<Pubkey>;
        /// Optional rule validation signer 5

        pub opt_rule_signer5: Option<Pubkey>;
        /// Optional rule validation non-signer 1

        pub opt_rule_nonsigner1: Option<Pubkey>;
        /// Optional rule validation non-signer 2

        pub opt_rule_nonsigner2: Option<Pubkey>;
        /// Optional rule validation non-signer 3

        pub opt_rule_nonsigner3: Option<Pubkey>;
        /// Optional rule validation non-signer 4

        pub opt_rule_nonsigner4: Option<Pubkey>;
        /// Optional rule validation non-signer 5

        pub opt_rule_nonsigner5: Option<Pubkey>;
  }

                                
impl struct Validate {
  pub fn instruction(&self, opt_rule_signer1_as_signer: bool) -> solana_program::instruction::Instruction {
    solana_program::instruction::Instruction {
      program_id: crate::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.payer,
            true
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.rule_set,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_signer1.unwrap_or(crate::ID),
            opt_rule_signer1_as_signer
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_signer2.unwrap_or(crate::ID),
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_signer3.unwrap_or(crate::ID),
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_signer4.unwrap_or(crate::ID),
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_signer5.unwrap_or(crate::ID),
            true
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_nonsigner1.unwrap_or(crate::ID),
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_nonsigner2.unwrap_or(crate::ID),
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_nonsigner3.unwrap_or(crate::ID),
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_nonsigner4.unwrap_or(crate::ID),
            false
          ),
                                                  solana_program::instruction::AccountMeta::new_readonly(
            self.opt_rule_nonsigner5.unwrap_or(crate::ID),
            false
          ),
              ],
      data: Validate.try_to_vec().unwrap(),
    }
  }
}

/// Instruction builder.
#[derive(Default)]
pub struct ValidateBuilder {
  payer: Option<Pubkey>;
    rule_set: Option<Pubkey>;
    system_program: Option<Pubkey>;
    opt_rule_signer1: Option<Pubkey>;
    opt_rule_signer1_as_signer: bool;
    opt_rule_signer2: Option<Pubkey>;
    opt_rule_signer3: Option<Pubkey>;
    opt_rule_signer4: Option<Pubkey>;
    opt_rule_signer5: Option<Pubkey>;
    opt_rule_nonsigner1: Option<Pubkey>;
    opt_rule_nonsigner2: Option<Pubkey>;
    opt_rule_nonsigner3: Option<Pubkey>;
    opt_rule_nonsigner4: Option<Pubkey>;
    opt_rule_nonsigner5: Option<Pubkey>;
  }

impl ValidateBuilder {
  pub fn new() -> Self {
    Self::default()
  }
      pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
      self.payer = Some(payer);
      
      self
    }
      pub fn rule_set(&mut self, rule_set: solana_program::pubkey::Pubkey) -> &mut Self {
      self.rule_set = Some(rule_set);
      
      self
    }
      pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
      self.system_program = Some(system_program);
      
      self
    }
      pub fn opt_rule_signer1(&mut self, opt_rule_signer1: solana_program::pubkey::Pubkey, as_signer: bool) -> &mut Self {
      self.opt_rule_signer1 = Some(opt_rule_signer1);
      self.opt_rule_signer1_as_signer = as_signer;
      self
    }
      pub fn opt_rule_signer2(&mut self, opt_rule_signer2: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_signer2 = Some(opt_rule_signer2);
      
      self
    }
      pub fn opt_rule_signer3(&mut self, opt_rule_signer3: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_signer3 = Some(opt_rule_signer3);
      
      self
    }
      pub fn opt_rule_signer4(&mut self, opt_rule_signer4: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_signer4 = Some(opt_rule_signer4);
      
      self
    }
      pub fn opt_rule_signer5(&mut self, opt_rule_signer5: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_signer5 = Some(opt_rule_signer5);
      
      self
    }
      pub fn opt_rule_nonsigner1(&mut self, opt_rule_nonsigner1: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_nonsigner1 = Some(opt_rule_nonsigner1);
      
      self
    }
      pub fn opt_rule_nonsigner2(&mut self, opt_rule_nonsigner2: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_nonsigner2 = Some(opt_rule_nonsigner2);
      
      self
    }
      pub fn opt_rule_nonsigner3(&mut self, opt_rule_nonsigner3: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_nonsigner3 = Some(opt_rule_nonsigner3);
      
      self
    }
      pub fn opt_rule_nonsigner4(&mut self, opt_rule_nonsigner4: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_nonsigner4 = Some(opt_rule_nonsigner4);
      
      self
    }
      pub fn opt_rule_nonsigner5(&mut self, opt_rule_nonsigner5: solana_program::pubkey::Pubkey) -> &mut Self {
      self.opt_rule_nonsigner5 = Some(opt_rule_nonsigner5);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Validate {
                  payer: self.payer,
                            rule_set: self.rule_set,
                            system_program: self.system_program,
                            opt_rule_signer1: self.opt_rule_signer1.expect("opt_rule_signer1 is not set"),
                                                  opt_rule_signer2: self.opt_rule_signer2.expect("opt_rule_signer2 is not set"),
                            opt_rule_signer3: self.opt_rule_signer3.expect("opt_rule_signer3 is not set"),
                            opt_rule_signer4: self.opt_rule_signer4.expect("opt_rule_signer4 is not set"),
                            opt_rule_signer5: self.opt_rule_signer5.expect("opt_rule_signer5 is not set"),
                            opt_rule_nonsigner1: self.opt_rule_nonsigner1.expect("opt_rule_nonsigner1 is not set"),
                            opt_rule_nonsigner2: self.opt_rule_nonsigner2.expect("opt_rule_nonsigner2 is not set"),
                            opt_rule_nonsigner3: self.opt_rule_nonsigner3.expect("opt_rule_nonsigner3 is not set"),
                            opt_rule_nonsigner4: self.opt_rule_nonsigner4.expect("opt_rule_nonsigner4 is not set"),
                            opt_rule_nonsigner5: self.opt_rule_nonsigner5.expect("opt_rule_nonsigner5 is not set"),
                      };
    accounts.instruction(self.opt_rule_signer1_as_signer)
  }
}

