//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

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
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccount>>,
}

impl ApproveUseAuthority {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: ApproveUseAuthorityInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(
            11 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.use_authority_record,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.owner, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.user, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.owner_token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.burner,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false,
        ));
        if let Some(rent) = self.rent {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                rent, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts
                .iter()
                .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        }
        let mut data = ApproveUseAuthorityInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct ApproveUseAuthorityInstructionData {
    discriminator: u8,
}

impl ApproveUseAuthorityInstructionData {
    fn new() -> Self {
        Self { discriminator: 20 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct ApproveUseAuthorityInstructionArgs {
    pub number_of_uses: u64,
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
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl ApproveUseAuthorityBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Use Authority Record PDA
    #[inline(always)]
    pub fn use_authority_record(
        &mut self,
        use_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.use_authority_record = Some(use_authority_record);
        self
    }
    /// Owner
    #[inline(always)]
    pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner = Some(owner);
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// A Use Authority
    #[inline(always)]
    pub fn user(&mut self, user: solana_program::pubkey::Pubkey) -> &mut Self {
        self.user = Some(user);
        self
    }
    /// Owned Token Account Of Mint
    #[inline(always)]
    pub fn owner_token_account(
        &mut self,
        owner_token_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.owner_token_account = Some(owner_token_account);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Mint of Metadata
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Program As Signer (Burner)
    #[inline(always)]
    pub fn burner(&mut self, burner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.burner = Some(burner);
        self
    }
    /// Token program
    #[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_program = Some(token_program);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account]`
    /// Rent info
    #[inline(always)]
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
        self.rent = Some(rent);
        self
    }
    #[inline(always)]
    pub fn number_of_uses(&mut self, number_of_uses: u64) -> &mut Self {
        self.number_of_uses = Some(number_of_uses);
        self
    }
    #[inline(always)]
    pub fn remaining_account(&mut self, account: super::InstructionAccount) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn remaining_accounts(&mut self, accounts: &[super::InstructionAccount]) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
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
            token_program: self.token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            rent: self.rent,
            __remaining_accounts: if self.__remaining_accounts.is_empty() {
                None
            } else {
                Some(self.__remaining_accounts.clone())
            },
        };
        let args = ApproveUseAuthorityInstructionArgs {
            number_of_uses: self
                .number_of_uses
                .clone()
                .expect("number_of_uses is not set"),
        };

        accounts.instruction(args)
    }
}

/// `approve_use_authority` CPI instruction.
pub struct ApproveUseAuthorityCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
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
    /// The arguments for the instruction.
    pub __args: ApproveUseAuthorityInstructionArgs,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccountInfo<'a>>>,
}

impl<'a> ApproveUseAuthorityCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(
            11 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.use_authority_record.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.owner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.user.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.owner_token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.burner.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false,
        ));
        if let Some(rent) = self.rent {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *rent.key, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts
                .iter()
                .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        }
        let mut data = ApproveUseAuthorityInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(
            11 + 1
                + if let Some(remaining_accounts) = &self.__remaining_accounts {
                    remaining_accounts.len()
                } else {
                    0
                },
        );
        account_infos.push(self.__program.clone());
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
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts.iter().for_each(|remaining_account| {
                account_infos.push(remaining_account.account_info().clone())
            });
        }

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `approve_use_authority` CPI instruction builder.
pub struct ApproveUseAuthorityCpiBuilder<'a> {
    instruction: Box<ApproveUseAuthorityCpiBuilderInstruction<'a>>,
}

impl<'a> ApproveUseAuthorityCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(ApproveUseAuthorityCpiBuilderInstruction {
            __program: program,
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
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Use Authority Record PDA
    #[inline(always)]
    pub fn use_authority_record(
        &mut self,
        use_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.use_authority_record = Some(use_authority_record);
        self
    }
    /// Owner
    #[inline(always)]
    pub fn owner(&mut self, owner: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.owner = Some(owner);
        self
    }
    /// Payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// A Use Authority
    #[inline(always)]
    pub fn user(&mut self, user: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.user = Some(user);
        self
    }
    /// Owned Token Account Of Mint
    #[inline(always)]
    pub fn owner_token_account(
        &mut self,
        owner_token_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.owner_token_account = Some(owner_token_account);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Mint of Metadata
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Program As Signer (Burner)
    #[inline(always)]
    pub fn burner(
        &mut self,
        burner: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.burner = Some(burner);
        self
    }
    /// Token program
    #[inline(always)]
    pub fn token_program(
        &mut self,
        token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// `[optional account]`
    /// Rent info
    #[inline(always)]
    pub fn rent(&mut self, rent: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.rent = Some(rent);
        self
    }
    #[inline(always)]
    pub fn number_of_uses(&mut self, number_of_uses: u64) -> &mut Self {
        self.instruction.number_of_uses = Some(number_of_uses);
        self
    }
    #[inline(always)]
    pub fn remaining_account(&mut self, account: super::InstructionAccountInfo<'a>) -> &mut Self {
        self.instruction.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn remaining_accounts(
        &mut self,
        accounts: &[super::InstructionAccountInfo<'a>],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> ApproveUseAuthorityCpi<'a> {
        let args = ApproveUseAuthorityInstructionArgs {
            number_of_uses: self
                .instruction
                .number_of_uses
                .clone()
                .expect("number_of_uses is not set"),
        };

        ApproveUseAuthorityCpi {
            __program: self.instruction.__program,

            use_authority_record: self
                .instruction
                .use_authority_record
                .expect("use_authority_record is not set"),

            owner: self.instruction.owner.expect("owner is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            user: self.instruction.user.expect("user is not set"),

            owner_token_account: self
                .instruction
                .owner_token_account
                .expect("owner_token_account is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            burner: self.instruction.burner.expect("burner is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            rent: self.instruction.rent,
            __args: args,
            __remaining_accounts: if self.instruction.__remaining_accounts.is_empty() {
                None
            } else {
                Some(self.instruction.__remaining_accounts.clone())
            },
        }
    }
}

struct ApproveUseAuthorityCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
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
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
