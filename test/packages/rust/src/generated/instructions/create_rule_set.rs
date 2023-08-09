//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::TaCreateArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateRuleSet {
    /// Payer and creator of the RuleSet
    pub payer: solana_program::pubkey::Pubkey,
    /// The PDA account where the RuleSet is stored
    pub rule_set_pda: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
}

impl CreateRuleSet {
    pub fn instruction(
        &self,
        args: CreateRuleSetInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_AUTH_RULES_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.payer, true),
                solana_program::instruction::AccountMeta::new(self.rule_set_pda, false),
                solana_program::instruction::AccountMeta::new_readonly(self.system_program, false),
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateRuleSetInstructionArgs {
    discriminator: u8,
    pub create_args: TaCreateArgs,
    pub rule_set_bump: u8,
}

impl CreateRuleSetInstructionArgs {
    pub fn new(create_args: TaCreateArgs, rule_set_bump: u8) -> Self {
        Self {
            discriminator: 0,
            create_args,
            rule_set_bump,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct CreateRuleSetBuilder {
    payer: Option<solana_program::pubkey::Pubkey>,
    rule_set_pda: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    create_args: Option<TaCreateArgs>,
    rule_set_bump: Option<u8>,
}

impl CreateRuleSetBuilder {
    pub fn new() -> Self {
        Self::default()
    }
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
    pub fn create_args(&mut self, create_args: TaCreateArgs) -> &mut Self {
        self.create_args = Some(create_args);
        self
    }
    pub fn rule_set_bump(&mut self, rule_set_bump: u8) -> &mut Self {
        self.rule_set_bump = Some(rule_set_bump);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateRuleSet {
            payer: self.payer.expect("payer is not set"),

            rule_set_pda: self.rule_set_pda.expect("rule_set_pda is not set"),

            system_program: self.system_program.expect("system_program is not set"),
        };
        let args = CreateRuleSetInstructionArgs::new(
            self.create_args.expect("create_args is not set"),
            self.rule_set_bump.expect("rule_set_bump is not set"),
        );
        accounts.instruction(args)
    }
}

pub mod cpi {
    use super::*;

    /// `create_rule_set` CPI instruction.
    pub struct CreateRuleSet<'a> {
        pub program: &'a solana_program::account_info::AccountInfo<'a>,
        /// Payer and creator of the RuleSet
        pub payer: &'a solana_program::account_info::AccountInfo<'a>,
        /// The PDA account where the RuleSet is stored
        pub rule_set_pda: &'a solana_program::account_info::AccountInfo<'a>,
        /// System program
        pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
        pub args: CreateRuleSetInstructionArgs,
    }

    impl<'a> CreateRuleSet<'a> {
        pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
            self.invoke_signed(&[])
        }
        #[allow(clippy::vec_init_then_push)]
        pub fn invoke_signed(
            &self,
            signers_seeds: &[&[&[u8]]],
        ) -> solana_program::entrypoint::ProgramResult {
            let instruction = solana_program::instruction::Instruction {
                program_id: crate::MPL_TOKEN_AUTH_RULES_ID,
                accounts: vec![
                    solana_program::instruction::AccountMeta::new(*self.payer.key, true),
                    solana_program::instruction::AccountMeta::new(*self.rule_set_pda.key, false),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.system_program.key,
                        false,
                    ),
                ],
                data: self.args.try_to_vec().unwrap(),
            };
            let mut account_infos = Vec::with_capacity(3 + 1);
            account_infos.push(self.program.clone());
            account_infos.push(self.payer.clone());
            account_infos.push(self.rule_set_pda.clone());
            account_infos.push(self.system_program.clone());

            if signers_seeds.is_empty() {
                solana_program::program::invoke(&instruction, &account_infos)
            } else {
                solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
            }
        }
    }

    /// `create_rule_set` CPI instruction builder.
    pub struct CreateRuleSetBuilder<'a> {
        program: &'a solana_program::account_info::AccountInfo<'a>,
        payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        rule_set_pda: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        create_args: Option<TaCreateArgs>,
        rule_set_bump: Option<u8>,
    }

    impl<'a> CreateRuleSetBuilder<'a> {
        pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
            Self {
                program,
                payer: None,
                rule_set_pda: None,
                system_program: None,
                create_args: None,
                rule_set_bump: None,
            }
        }
        pub fn payer(
            &'a mut self,
            payer: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.payer = Some(payer);
            self
        }
        pub fn rule_set_pda(
            &'a mut self,
            rule_set_pda: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.rule_set_pda = Some(rule_set_pda);
            self
        }
        pub fn system_program(
            &'a mut self,
            system_program: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.system_program = Some(system_program);
            self
        }
        pub fn create_args(&'a mut self, create_args: TaCreateArgs) -> &mut Self {
            self.create_args = Some(create_args);
            self
        }
        pub fn rule_set_bump(&'a mut self, rule_set_bump: u8) -> &mut Self {
            self.rule_set_bump = Some(rule_set_bump);
            self
        }
        pub fn build(&'a self) -> CreateRuleSet {
            CreateRuleSet {
                program: self.program,

                payer: self.payer.expect("payer is not set"),

                rule_set_pda: self.rule_set_pda.expect("rule_set_pda is not set"),

                system_program: self.system_program.expect("system_program is not set"),
                args: CreateRuleSetInstructionArgs::new(
                    self.create_args.expect("create_args is not set"),
                    self.rule_set_bump.expect("rule_set_bump is not set"),
                ),
            }
        }
    }
}
