//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::CandyMachineData;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct UpdateCandyMachine {
    pub candy_machine: solana_program::pubkey::Pubkey,

    pub authority: solana_program::pubkey::Pubkey,
}

impl UpdateCandyMachine {
    pub fn instruction(
        &self,
        args: UpdateCandyMachineInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.candy_machine, false),
                solana_program::instruction::AccountMeta::new_readonly(self.authority, true),
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct UpdateCandyMachineInstructionArgs {
    discriminator: [u8; 8],
    pub data: CandyMachineData,
}

impl UpdateCandyMachineInstructionArgs {
    pub fn new(data: CandyMachineData) -> Self {
        Self {
            discriminator: [219, 200, 88, 176, 158, 63, 253, 127],
            data,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct UpdateCandyMachineBuilder {
    candy_machine: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    data: Option<CandyMachineData>,
}

impl UpdateCandyMachineBuilder {
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
    pub fn data(&mut self, data: CandyMachineData) -> &mut Self {
        self.data = Some(data);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = UpdateCandyMachine {
            candy_machine: self.candy_machine.expect("candy_machine is not set"),

            authority: self.authority.expect("authority is not set"),
        };
        let args = UpdateCandyMachineInstructionArgs::new(self.data.expect("data is not set"));
        accounts.instruction(args)
    }
}

pub mod cpi {
    use super::*;

    /// `update_candy_machine` CPI instruction.
    pub struct UpdateCandyMachine<'a> {
        pub program: &'a solana_program::account_info::AccountInfo<'a>,

        pub candy_machine: &'a solana_program::account_info::AccountInfo<'a>,

        pub authority: &'a solana_program::account_info::AccountInfo<'a>,
        pub args: UpdateCandyMachineInstructionArgs,
    }

    impl<'a> UpdateCandyMachine<'a> {
        pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
            self.invoke_signed(&[])
        }
        #[allow(clippy::vec_init_then_push)]
        pub fn invoke_signed(
            &self,
            signers_seeds: &[&[&[u8]]],
        ) -> solana_program::entrypoint::ProgramResult {
            let instruction = solana_program::instruction::Instruction {
                program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
                accounts: vec![
                    solana_program::instruction::AccountMeta::new(*self.candy_machine.key, false),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.authority.key,
                        true,
                    ),
                ],
                data: self.args.try_to_vec().unwrap(),
            };
            let mut account_infos = Vec::with_capacity(2 + 1);
            account_infos.push(self.program.clone());
            account_infos.push(self.candy_machine.clone());
            account_infos.push(self.authority.clone());

            if signers_seeds.is_empty() {
                solana_program::program::invoke(&instruction, &account_infos)
            } else {
                solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
            }
        }
    }

    /// `update_candy_machine` CPI instruction builder.
    pub struct UpdateCandyMachineBuilder<'a> {
        program: &'a solana_program::account_info::AccountInfo<'a>,
        candy_machine: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        data: Option<CandyMachineData>,
    }

    impl<'a> UpdateCandyMachineBuilder<'a> {
        pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
            Self {
                program,
                candy_machine: None,
                authority: None,
                data: None,
            }
        }
        pub fn candy_machine(
            &'a mut self,
            candy_machine: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.candy_machine = Some(candy_machine);
            self
        }
        pub fn authority(
            &'a mut self,
            authority: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.authority = Some(authority);
            self
        }
        pub fn data(&'a mut self, data: CandyMachineData) -> &mut Self {
            self.data = Some(data);
            self
        }
        pub fn build(&'a self) -> UpdateCandyMachine {
            UpdateCandyMachine {
                program: self.program,

                candy_machine: self.candy_machine.expect("candy_machine is not set"),

                authority: self.authority.expect("authority is not set"),
                args: UpdateCandyMachineInstructionArgs::new(self.data.expect("data is not set")),
            }
        }
    }
}
