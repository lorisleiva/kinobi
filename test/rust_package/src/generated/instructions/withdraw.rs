//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use solana_program::pubkey::{ Pubkey };

/// Accounts.
pub struct Withdraw {
        pub candy_machine: Pubkey,
          pub authority: Pubkey,
  }

    
impl Withdraw {
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let data = Vec::new();
        solana_program::instruction::Instruction {
      program_id: crate::programs::mpl_candy_machine_core::ID,
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
      data,
    }
  }
}

/// Instruction builder.
pub struct WithdrawBuilder {
  candy_machine: Option<Pubkey>,
    authority: Option<Pubkey>,
  }

impl WithdrawBuilder {
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
                  candy_machine: self.candy_machine.expect("candy_machine is not set"),
                            authority: self.authority.expect("authority is not set"),
                      };
    accounts.instruction()
  }
}

