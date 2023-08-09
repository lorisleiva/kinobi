//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::{BorshDeserialize, BorshSerialize};

/// Accounts.
pub struct ApproveUseAuthority {
    /// Use Authority Record PDA
    pub use_authority_record: solana_program::pubkey::Pubkey,
    /// Owner
    pub owner: solana_program::pubkey::Pubkey,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// A Use Authority
    pub user: solana_program::pubkey::Pubkey,
    /// Owned Token Account Of Mint
    pub owner_token_account: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Mint of Metadata
    pub mint: solana_program::pubkey::Pubkey,
    /// Program As Signer (Burner)
    pub burner: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: Option<solana_program::pubkey::Pubkey>,
}

impl ApproveUseAuthority {
    pub fn instruction(
        &self,
        args: ApproveUseAuthorityInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.use_authority_record, false),
                solana_program::instruction::AccountMeta::new(self.owner, true),
                solana_program::instruction::AccountMeta::new(self.payer, true),
                solana_program::instruction::AccountMeta::new_readonly(self.user, false),
                solana_program::instruction::AccountMeta::new(self.owner_token_account, false),
                solana_program::instruction::AccountMeta::new_readonly(self.metadata, false),
                solana_program::instruction::AccountMeta::new_readonly(self.mint, false),
                solana_program::instruction::AccountMeta::new_readonly(self.burner, false),
                solana_program::instruction::AccountMeta::new_readonly(self.token_program, false),
                solana_program::instruction::AccountMeta::new_readonly(self.system_program, false),
                if let Some(rent) = self.rent {
                    solana_program::instruction::AccountMeta::new_readonly(rent, false)
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
pub struct ApproveUseAuthorityInstructionArgs {
    discriminator: u8,
    pub number_of_uses: u64,
}

impl ApproveUseAuthorityInstructionArgs {
    pub fn new(number_of_uses: u64) -> Self {
        Self {
            discriminator: 20,
            number_of_uses,
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct ApproveUseAuthorityBuilder {
    use_authority_record: Option<solana_program::pubkey::Pubkey>,
    owner: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    user: Option<solana_program::pubkey::Pubkey>,
    owner_token_account: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    burner: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    number_of_uses: Option<u64>,
}

impl ApproveUseAuthorityBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn use_authority_record(
        &mut self,
        use_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.use_authority_record = Some(use_authority_record);
        self
    }
    pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner = Some(owner);
        self
    }
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    pub fn user(&mut self, user: solana_program::pubkey::Pubkey) -> &mut Self {
        self.user = Some(user);
        self
    }
    pub fn owner_token_account(
        &mut self,
        owner_token_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.owner_token_account = Some(owner_token_account);
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
    pub fn burner(&mut self, burner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.burner = Some(burner);
        self
    }
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
        self.rent = Some(rent);
        self
    }
    pub fn number_of_uses(&mut self, number_of_uses: u64) -> &mut Self {
        self.number_of_uses = Some(number_of_uses);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = ApproveUseAuthority {
            use_authority_record: self
                .use_authority_record
                .expect("use_authority_record is not set"),

            owner: self.owner.expect("owner is not set"),

            payer: self.payer.expect("payer is not set"),

            user: self.user.expect("user is not set"),

            owner_token_account: self
                .owner_token_account
                .expect("owner_token_account is not set"),

            metadata: self.metadata.expect("metadata is not set"),

            mint: self.mint.expect("mint is not set"),

            burner: self.burner.expect("burner is not set"),

            token_program: self.token_program.expect("token_program is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            rent: self.rent,
        };
        let args = ApproveUseAuthorityInstructionArgs::new(
            self.number_of_uses.expect("number_of_uses is not set"),
        );
        accounts.instruction(args)
    }
}

pub mod cpi {
    use super::*;

    /// `approve_use_authority` CPI instruction.
    pub struct ApproveUseAuthority<'a> {
        pub program: &'a solana_program::account_info::AccountInfo<'a>,
        /// Use Authority Record PDA
        pub use_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
        /// Owner
        pub owner: &'a solana_program::account_info::AccountInfo<'a>,
        /// Payer
        pub payer: &'a solana_program::account_info::AccountInfo<'a>,
        /// A Use Authority
        pub user: &'a solana_program::account_info::AccountInfo<'a>,
        /// Owned Token Account Of Mint
        pub owner_token_account: &'a solana_program::account_info::AccountInfo<'a>,
        /// Metadata account
        pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
        /// Mint of Metadata
        pub mint: &'a solana_program::account_info::AccountInfo<'a>,
        /// Program As Signer (Burner)
        pub burner: &'a solana_program::account_info::AccountInfo<'a>,
        /// Token program
        pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
        /// System program
        pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
        /// Rent info
        pub rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        pub args: ApproveUseAuthorityInstructionArgs,
    }

    impl<'a> ApproveUseAuthority<'a> {
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
                    solana_program::instruction::AccountMeta::new(
                        *self.use_authority_record.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new(*self.owner.key, true),
                    solana_program::instruction::AccountMeta::new(*self.payer.key, true),
                    solana_program::instruction::AccountMeta::new_readonly(*self.user.key, false),
                    solana_program::instruction::AccountMeta::new(
                        *self.owner_token_account.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.metadata.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new_readonly(*self.mint.key, false),
                    solana_program::instruction::AccountMeta::new_readonly(*self.burner.key, false),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.token_program.key,
                        false,
                    ),
                    solana_program::instruction::AccountMeta::new_readonly(
                        *self.system_program.key,
                        false,
                    ),
                    if let Some(rent) = self.rent {
                        solana_program::instruction::AccountMeta::new_readonly(*rent.key, false)
                    } else {
                        solana_program::instruction::AccountMeta::new_readonly(
                            crate::MPL_TOKEN_METADATA_ID,
                            false,
                        )
                    },
                ],
                data: self.args.try_to_vec().unwrap(),
            };
            let mut account_infos = Vec::with_capacity(11 + 1);
            account_infos.push(self.program.clone());
            account_infos.push(self.use_authority_record.clone());
            account_infos.push(self.owner.clone());
            account_infos.push(self.payer.clone());
            account_infos.push(self.user.clone());
            account_infos.push(self.owner_token_account.clone());
            account_infos.push(self.metadata.clone());
            account_infos.push(self.mint.clone());
            account_infos.push(self.burner.clone());
            account_infos.push(self.token_program.clone());
            account_infos.push(self.system_program.clone());
            if let Some(rent) = self.rent {
                account_infos.push(rent.clone());
            }

            if signers_seeds.is_empty() {
                solana_program::program::invoke(&instruction, &account_infos)
            } else {
                solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
            }
        }
    }

    /// `approve_use_authority` CPI instruction builder.
    pub struct ApproveUseAuthorityBuilder<'a> {
        program: &'a solana_program::account_info::AccountInfo<'a>,
        use_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        user: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        owner_token_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        burner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
        number_of_uses: Option<u64>,
    }

    impl<'a> ApproveUseAuthorityBuilder<'a> {
        pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
            Self {
                program,
                use_authority_record: None,
                owner: None,
                payer: None,
                user: None,
                owner_token_account: None,
                metadata: None,
                mint: None,
                burner: None,
                token_program: None,
                system_program: None,
                rent: None,
                number_of_uses: None,
            }
        }
        pub fn use_authority_record(
            &'a mut self,
            use_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.use_authority_record = Some(use_authority_record);
            self
        }
        pub fn owner(
            &'a mut self,
            owner: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.owner = Some(owner);
            self
        }
        pub fn payer(
            &'a mut self,
            payer: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.payer = Some(payer);
            self
        }
        pub fn user(
            &'a mut self,
            user: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.user = Some(user);
            self
        }
        pub fn owner_token_account(
            &'a mut self,
            owner_token_account: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.owner_token_account = Some(owner_token_account);
            self
        }
        pub fn metadata(
            &'a mut self,
            metadata: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.metadata = Some(metadata);
            self
        }
        pub fn mint(
            &'a mut self,
            mint: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.mint = Some(mint);
            self
        }
        pub fn burner(
            &'a mut self,
            burner: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.burner = Some(burner);
            self
        }
        pub fn token_program(
            &'a mut self,
            token_program: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.token_program = Some(token_program);
            self
        }
        pub fn system_program(
            &'a mut self,
            system_program: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.system_program = Some(system_program);
            self
        }
        pub fn rent(
            &'a mut self,
            rent: &'a solana_program::account_info::AccountInfo<'a>,
        ) -> &mut Self {
            self.rent = Some(rent);
            self
        }
        pub fn number_of_uses(&'a mut self, number_of_uses: u64) -> &mut Self {
            self.number_of_uses = Some(number_of_uses);
            self
        }
        pub fn build(&'a self) -> ApproveUseAuthority {
            ApproveUseAuthority {
                program: self.program,

                use_authority_record: self
                    .use_authority_record
                    .expect("use_authority_record is not set"),

                owner: self.owner.expect("owner is not set"),

                payer: self.payer.expect("payer is not set"),

                user: self.user.expect("user is not set"),

                owner_token_account: self
                    .owner_token_account
                    .expect("owner_token_account is not set"),

                metadata: self.metadata.expect("metadata is not set"),

                mint: self.mint.expect("mint is not set"),

                burner: self.burner.expect("burner is not set"),

                token_program: self.token_program.expect("token_program is not set"),

                system_program: self.system_program.expect("system_program is not set"),

                rent: self.rent,
                args: ApproveUseAuthorityInstructionArgs::new(
                    self.number_of_uses.expect("number_of_uses is not set"),
                ),
            }
        }
    }
}