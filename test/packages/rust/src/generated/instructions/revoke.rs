//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::RevokeArgs;
use borsh::{BorshDeserialize, BorshSerialize};

/// Accounts.
pub struct Revoke {
    /// Delegate account key (pda of [mint id, delegate role, user id, authority id])
    pub delegate_record: solana_program::pubkey::Pubkey,
    /// Owner of the delegated account
    pub delegate: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Master Edition account
    pub master_edition: Option<solana_program::pubkey::Pubkey>,
    /// Mint of metadata
    pub mint: solana_program::pubkey::Pubkey,
    /// Owned Token Account of mint
    pub token: Option<solana_program::pubkey::Pubkey>,
    /// Authority to approve the delegation
    pub authority: solana_program::pubkey::Pubkey,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// System Program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// SPL Token Program
    pub spl_token_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
}

impl Revoke {
    pub fn instruction(
        &self,
        args: RevokeInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.delegate_record, false),
                solana_program::instruction::AccountMeta::new_readonly(self.delegate, false),
                solana_program::instruction::AccountMeta::new(self.metadata, false),
                if let Some(master_edition) = self.master_edition {
                    solana_program::instruction::AccountMeta::new_readonly(master_edition, false)
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
                solana_program::instruction::AccountMeta::new_readonly(self.mint, false),
                if let Some(token) = self.token {
                    solana_program::instruction::AccountMeta::new(token, false)
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
                solana_program::instruction::AccountMeta::new_readonly(self.authority, true),
                solana_program::instruction::AccountMeta::new(self.payer, true),
                solana_program::instruction::AccountMeta::new_readonly(self.system_program, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.sysvar_instructions,
                    false,
                ),
                if let Some(spl_token_program) = self.spl_token_program {
                    solana_program::instruction::AccountMeta::new_readonly(spl_token_program, false)
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
                if let Some(authorization_rules_program) = self.authorization_rules_program {
                    solana_program::instruction::AccountMeta::new_readonly(
                        authorization_rules_program,
                        false,
                    )
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
                if let Some(authorization_rules) = self.authorization_rules {
                    solana_program::instruction::AccountMeta::new_readonly(
                        authorization_rules,
                        false,
                    )
                } else {
                    solana_program::instruction::AccountMeta::new_readonly(
                        crate::MPL_TOKEN_METADATA_ID,
                        false,
                    )
                },
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct RevokeInstructionArgs {
    discriminator: u8,
    pub revoke_args: RevokeArgs,
}

impl RevokeInstructionArgs {
    pub fn new(revoke_args: RevokeArgs) -> Self {
        Self {
            discriminator: 49,
            revoke_args,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct RevokeBuilder {
    delegate_record: Option<solana_program::pubkey::Pubkey>,
    delegate: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    token: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    revoke_args: Option<RevokeArgs>,
}

impl RevokeBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn delegate_record(
        &mut self,
        delegate_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.delegate_record = Some(delegate_record);
        self
    }
    pub fn delegate(&mut self, delegate: solana_program::pubkey::Pubkey) -> &mut Self {
        self.delegate = Some(delegate);
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
    pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token = Some(token);
        self
    }
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
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
    pub fn sysvar_instructions(
        &mut self,
        sysvar_instructions: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.sysvar_instructions = Some(sysvar_instructions);
        self
    }
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.authorization_rules_program = Some(authorization_rules_program);
        self
    }
    pub fn authorization_rules(
        &mut self,
        authorization_rules: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.authorization_rules = Some(authorization_rules);
        self
    }
    pub fn revoke_args(&mut self, revoke_args: RevokeArgs) -> &mut Self {
        self.revoke_args = Some(revoke_args);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Revoke {
            delegate_record: self.delegate_record.expect("delegate_record is not set"),

            delegate: self.delegate.expect("delegate is not set"),

            metadata: self.metadata.expect("metadata is not set"),

            master_edition: self.master_edition,

            mint: self.mint.expect("mint is not set"),

            token: self.token,

            authority: self.authority.expect("authority is not set"),

            payer: self.payer.expect("payer is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            sysvar_instructions: self
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            spl_token_program: self.spl_token_program,

            authorization_rules_program: self.authorization_rules_program,

            authorization_rules: self.authorization_rules,
        };
        let args = RevokeInstructionArgs::new(self.revoke_args.expect("revoke_args is not set"));
        accounts.instruction(args)
    }
}

pub mod cpi {
    use super::*;

    /// `revoke` CPI instruction.
    pub struct Revoke<'a> {
        pub program: &'a solana_program::account_info::AccountInfo<'a>,
        /// Delegate account key (pda of [mint id, delegate role, user id, authority id])
        pub delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
        /// Owner of the delegated account
        pub delegate: &'a solana_program::account_info::AccountInfo<'a>,
        /// Metadata account
        pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
        /// Master Edition account
        pub master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        /// Mint of metadata
        pub mint: &'a solana_program::account_info::AccountInfo<'a>,
        /// Owned Token Account of mint
        pub token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        /// Authority to approve the delegation
        pub authority: &'a solana_program::account_info::AccountInfo<'a>,
        /// Payer
        pub payer: &'a solana_program::account_info::AccountInfo<'a>,
        /// System Program
        pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
        /// Instructions sysvar account
        pub sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
        /// SPL Token Program
        pub spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        /// Token Authorization Rules Program
        pub authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        /// Token Authorization Rules account
        pub authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        pub args: RevokeInstructionArgs,
    }

    impl<'a> Revoke<'a> {
        pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
            self.invoke_signed(&[])
        }
        #[allow(clippy::vec_init_then_push)]
        pub fn invoke_signed(
            &self,
            signers_seeds: &[&[&[u8]]],
        ) -> solana_program::entrypoint::ProgramResult {
            let instruction = solana_program::instruction::Instruction {
                program_id: crate::MPL_TOKEN_METADATA_ID,
                accounts: vec![
                    solana_program::instruction::AccountMeta::new(*self.delegate_record.key, false),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.delegate.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new(*self.metadata.key, false),
                    if let Some(master_edition) = self.master_edition {
                        solana_program::instruction::AccountMeta::new_readonly(
                            *master_edition.key,
                            false,
                        )
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                    solana_program::instruction::AccountMeta::new_readonly(*self.mint.key, false),
                    if let Some(token) = self.token {
                        solana_program::instruction::AccountMeta::new(*token.key, false)
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.authority.key,
                        true,
                    ),
                    solana_program::instruction::AccountMeta::new(*self.payer.key, true),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.system_program.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.sysvar_instructions.key,
                        false,
                    ),
                    if let Some(spl_token_program) = self.spl_token_program {
                        solana_program::instruction::AccountMeta::new_readonly(
                            *spl_token_program.key,
                            false,
                        )
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                    if let Some(authorization_rules_program) = self.authorization_rules_program {
                        solana_program::instruction::AccountMeta::new_readonly(
                            *authorization_rules_program.key,
                            false,
                        )
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                    if let Some(authorization_rules) = self.authorization_rules {
                        solana_program::instruction::AccountMeta::new_readonly(
                            *authorization_rules.key,
                            false,
                        )
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                ],
                data: self.args.try_to_vec().unwrap(),
            };
            let mut account_infos = Vec::with_capacity(13 + 1);
            account_infos.push(self.program.clone());
            account_infos.push(self.delegate_record.clone());
            account_infos.push(self.delegate.clone());
            account_infos.push(self.metadata.clone());
            if let Some(master_edition) = self.master_edition {
                account_infos.push(master_edition.clone());
            }
            account_infos.push(self.mint.clone());
            if let Some(token) = self.token {
                account_infos.push(token.clone());
            }
            account_infos.push(self.authority.clone());
            account_infos.push(self.payer.clone());
            account_infos.push(self.system_program.clone());
            account_infos.push(self.sysvar_instructions.clone());
            if let Some(spl_token_program) = self.spl_token_program {
                account_infos.push(spl_token_program.clone());
            }
            if let Some(authorization_rules_program) = self.authorization_rules_program {
                account_infos.push(authorization_rules_program.clone());
            }
            if let Some(authorization_rules) = self.authorization_rules {
                account_infos.push(authorization_rules.clone());
            }

            if signers_seeds.is_empty() {
                solana_program::program::invoke(&instruction, &account_infos)
            } else {
                solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
            }
        }
    }

    /// `revoke` CPI instruction builder.
    pub struct RevokeBuilder<'a> {
        program: &'a solana_program::account_info::AccountInfo<'a>,
        delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        delegate: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        sysvar_instructions: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        authorization_rules_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        authorization_rules: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        revoke_args: Option<RevokeArgs>,
    }

    impl<'a> RevokeBuilder<'a> {
        pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
            Self {
                program,
                delegate_record: None,
                delegate: None,
                metadata: None,
                master_edition: None,
                mint: None,
                token: None,
                authority: None,
                payer: None,
                system_program: None,
                sysvar_instructions: None,
                spl_token_program: None,
                authorization_rules_program: None,
                authorization_rules: None,
                revoke_args: None,
            }
        }
        pub fn delegate_record(
            &'a mut self,
            delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.delegate_record = Some(delegate_record);
            self
        }
        pub fn delegate(
            &'a mut self,
            delegate: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.delegate = Some(delegate);
            self
        }
        pub fn metadata(
            &'a mut self,
            metadata: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.metadata = Some(metadata);
            self
        }
        pub fn master_edition(
            &'a mut self,
            master_edition: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.master_edition = Some(master_edition);
            self
        }
        pub fn mint(
            &'a mut self,
            mint: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.mint = Some(mint);
            self
        }
        pub fn token(
            &'a mut self,
            token: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.token = Some(token);
            self
        }
        pub fn authority(
            &'a mut self,
            authority: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.authority = Some(authority);
            self
        }
        pub fn payer(
            &'a mut self,
            payer: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.payer = Some(payer);
            self
        }
        pub fn system_program(
            &'a mut self,
            system_program: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.system_program = Some(system_program);
            self
        }
        pub fn sysvar_instructions(
            &'a mut self,
            sysvar_instructions: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.sysvar_instructions = Some(sysvar_instructions);
            self
        }
        pub fn spl_token_program(
            &'a mut self,
            spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.spl_token_program = Some(spl_token_program);
            self
        }
        pub fn authorization_rules_program(
            &'a mut self,
            authorization_rules_program: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.authorization_rules_program = Some(authorization_rules_program);
            self
        }
        pub fn authorization_rules(
            &'a mut self,
            authorization_rules: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.authorization_rules = Some(authorization_rules);
            self
        }
        pub fn revoke_args(&'a mut self, revoke_args: RevokeArgs) -> &mut Self {
            self.revoke_args = Some(revoke_args);
            self
        }
        pub fn build(&'a self) -> Revoke {
            Revoke {
                program: self.program,

                delegate_record: self.delegate_record.expect("delegate_record is not set"),

                delegate: self.delegate.expect("delegate is not set"),

                metadata: self.metadata.expect("metadata is not set"),

                master_edition: self.master_edition,

                mint: self.mint.expect("mint is not set"),

                token: self.token,

                authority: self.authority.expect("authority is not set"),

                payer: self.payer.expect("payer is not set"),

                system_program: self.system_program.expect("system_program is not set"),

                sysvar_instructions: self
                    .sysvar_instructions
                    .expect("sysvar_instructions is not set"),

                spl_token_program: self.spl_token_program,

                authorization_rules_program: self.authorization_rules_program,

                authorization_rules: self.authorization_rules,
                args: RevokeInstructionArgs::new(self.revoke_args.expect("revoke_args is not set")),
            }
        }
    }
}