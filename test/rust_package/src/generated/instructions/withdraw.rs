//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!



/// Accounts.
pub struct Withdraw {
        pub candy_machine: Pubkey;
          pub authority: Pubkey;
  }

    
impl struct Withdraw {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
    solana_program::instruction::Instruction {
      program_id: crate::ID,
      accounts: vec![
                                                  solana_program::instruction::AccountMeta::new(
            self.candy_machine,
            false
          ),
                                                  solana_program::instruction::AccountMeta::new(
            self.authority,
            true
          ),
              ],
      data: Withdraw.try_to_vec().unwrap(),
    }
  }
}

/// Instruction builder.
#[derive(Default)]
pub struct WithdrawBuilder {
  candy_machine: Option<Pubkey>;
    authority: Option<Pubkey>;
  }

impl WithdrawBuilder {
  pub fn new() -> Self {
    Self::default()
  }
      pub fn candy_machine(&mut self, candy_machine: solana_program::pubkey::Pubkey) -> &mut Self {
      self.candy_machine = Some(candy_machine);
      
      self
    }
      pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
      self.authority = Some(authority);
      
      self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Withdraw {
                  candy_machine: self.candy_machine,
                            authority: self.authority,
                      };
    accounts.instruction()
  }
}

