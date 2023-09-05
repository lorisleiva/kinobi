//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::CreateMasterEditionArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateMasterEditionV3 {
    /// Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']
    pub edition: solana_program::pubkey::Pubkey,
    /// Metadata mint
    pub mint: solana_program::pubkey::Pubkey,
    /// Update authority
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: Option<solana_program::pubkey::Pubkey>,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccount>>,
}

impl CreateMasterEditionV3 {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: CreateMasterEditionV3InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(
            9 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
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
        let mut data = CreateMasterEditionV3InstructionData::new()
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
struct CreateMasterEditionV3InstructionData {
    discriminator: u8,
}

impl CreateMasterEditionV3InstructionData {
    fn new() -> Self {
        Self { discriminator: 17 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateMasterEditionV3InstructionArgs {
    pub create_master_edition_args: CreateMasterEditionArgs,
}

/// Instruction builder.
#[derive(Default)]
pub struct CreateMasterEditionV3Builder {
    edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    create_master_edition_args: Option<CreateMasterEditionArgs>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl CreateMasterEditionV3Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']
    #[inline(always)]
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    /// Metadata mint
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Update authority
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// Metadata account
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
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
    pub fn create_master_edition_args(
        &mut self,
        create_master_edition_args: CreateMasterEditionArgs,
    ) -> &mut Self {
        self.create_master_edition_args = Some(create_master_edition_args);
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
        let accounts = CreateMasterEditionV3 {
            edition: self.edition.expect("edition is not set"),
            mint: self.mint.expect("mint is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
            mint_authority: self.mint_authority.expect("mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            metadata: self.metadata.expect("metadata is not set"),
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
        let args = CreateMasterEditionV3InstructionArgs {
            create_master_edition_args: self
                .create_master_edition_args
                .clone()
                .expect("create_master_edition_args is not set"),
        };

        accounts.instruction(args)
    }
}

/// `create_master_edition_v3` CPI instruction.
pub struct CreateMasterEditionV3Cpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']
    pub edition: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata mint
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Update authority
    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: CreateMasterEditionV3InstructionArgs,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccountInfo<'a>>>,
}

impl<'a> CreateMasterEditionV3Cpi<'a> {
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
            9 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
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
        let mut data = CreateMasterEditionV3InstructionData::new()
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
            9 + 1
                + if let Some(remaining_accounts) = &self.__remaining_accounts {
                    remaining_accounts.len()
                } else {
                    0
                },
        );
        account_infos.push(self.__program.clone());
        account_infos.push(self.edition.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.metadata.clone());
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

/// `create_master_edition_v3` CPI instruction builder.
pub struct CreateMasterEditionV3CpiBuilder<'a> {
    instruction: Box<CreateMasterEditionV3CpiBuilderInstruction<'a>>,
}

impl<'a> CreateMasterEditionV3CpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateMasterEditionV3CpiBuilderInstruction {
            __program: program,
            edition: None,
            mint: None,
            update_authority: None,
            mint_authority: None,
            payer: None,
            metadata: None,
            token_program: None,
            system_program: None,
            rent: None,
            create_master_edition_args: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']
    #[inline(always)]
    pub fn edition(
        &mut self,
        edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    /// Metadata mint
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Update authority
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn mint_authority(
        &mut self,
        mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
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
    pub fn create_master_edition_args(
        &mut self,
        create_master_edition_args: CreateMasterEditionArgs,
    ) -> &mut Self {
        self.instruction.create_master_edition_args = Some(create_master_edition_args);
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
    pub fn build(&self) -> CreateMasterEditionV3Cpi<'a> {
        let args = CreateMasterEditionV3InstructionArgs {
            create_master_edition_args: self
                .instruction
                .create_master_edition_args
                .clone()
                .expect("create_master_edition_args is not set"),
        };

        CreateMasterEditionV3Cpi {
            __program: self.instruction.__program,

            edition: self.instruction.edition.expect("edition is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            mint_authority: self
                .instruction
                .mint_authority
                .expect("mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            metadata: self.instruction.metadata.expect("metadata is not set"),

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

struct CreateMasterEditionV3CpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    create_master_edition_args: Option<CreateMasterEditionArgs>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
