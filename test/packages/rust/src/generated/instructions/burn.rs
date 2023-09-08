//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::BurnArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct Burn {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Asset owner
    pub owner: solana_program::pubkey::Pubkey,
    /// Mint of token asset
    pub mint: solana_program::pubkey::Pubkey,
    /// Token account to close
    pub token_account: solana_program::pubkey::Pubkey,
    /// MasterEdition of the asset
    pub master_edition_account: solana_program::pubkey::Pubkey,
    /// SPL Token Program
    pub spl_token_program: solana_program::pubkey::Pubkey,
    /// Metadata of the Collection
    pub collection_metadata: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
}

impl Burn {
    pub fn instruction(
        &self,
        args: BurnInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: BurnInstructionArgs,
        remaining_accounts: &[super::InstructionAccount],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(9 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.owner, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.master_edition_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_token_program,
            false,
        ));
        if let Some(collection_metadata) = self.collection_metadata {
            accounts.push(solana_program::instruction::AccountMeta::new(
                collection_metadata,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules_program,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = BurnInstructionData::new().try_to_vec().unwrap();
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
struct BurnInstructionData {
    discriminator: u8,
}

impl BurnInstructionData {
    fn new() -> Self {
        Self { discriminator: 44 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct BurnInstructionArgs {
    pub burn_args: BurnArgs,
}

/// Instruction builder.
#[derive(Default)]
pub struct BurnBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    owner: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    master_edition_account: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    collection_metadata: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    burn_args: Option<BurnArgs>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl BurnBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Asset owner
    #[inline(always)]
    pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner = Some(owner);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Token account to close
    #[inline(always)]
    pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_account = Some(token_account);
        self
    }
    /// MasterEdition of the asset
    #[inline(always)]
    pub fn master_edition_account(
        &mut self,
        master_edition_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_edition_account = Some(master_edition_account);
        self
    }
    /// `[optional account, default to 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA']`
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    /// `[optional account]`
    /// Metadata of the Collection
    #[inline(always)]
    pub fn collection_metadata(
        &mut self,
        collection_metadata: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.collection_metadata = collection_metadata;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.authorization_rules = authorization_rules;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules Program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    ) -> &mut Self {
        self.authorization_rules_program = authorization_rules_program;
        self
    }
    #[inline(always)]
    pub fn burn_args(&mut self, burn_args: BurnArgs) -> &mut Self {
        self.burn_args = Some(burn_args);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(&mut self, account: super::InstructionAccount) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(&mut self, accounts: &[super::InstructionAccount]) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = Burn {
            metadata: self.metadata.expect("metadata is not set"),
            owner: self.owner.expect("owner is not set"),
            mint: self.mint.expect("mint is not set"),
            token_account: self.token_account.expect("token_account is not set"),
            master_edition_account: self
                .master_edition_account
                .expect("master_edition_account is not set"),
            spl_token_program: self.spl_token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            collection_metadata: self.collection_metadata,
            authorization_rules: self.authorization_rules,
            authorization_rules_program: self.authorization_rules_program,
        };
        let args = BurnInstructionArgs {
            burn_args: self.burn_args.clone().expect("burn_args is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `burn` CPI accounts.
pub struct BurnCpiAccounts<'a, 'b> {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Asset owner
    pub owner: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of token asset
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token account to close
    pub token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// MasterEdition of the asset
    pub master_edition_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// SPL Token Program
    pub spl_token_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata of the Collection
    pub collection_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

/// `burn` CPI instruction.
pub struct BurnCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Asset owner
    pub owner: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of token asset
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Token account to close
    pub token_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// MasterEdition of the asset
    pub master_edition_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// SPL Token Program
    pub spl_token_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata of the Collection
    pub collection_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// Token Authorization Rules Program
    pub authorization_rules_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: BurnInstructionArgs,
}

impl<'a, 'b> BurnCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: BurnCpiAccounts<'a, 'b>,
        args: BurnInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            metadata: accounts.metadata,
            owner: accounts.owner,
            mint: accounts.mint,
            token_account: accounts.token_account,
            master_edition_account: accounts.master_edition_account,
            spl_token_program: accounts.spl_token_program,
            collection_metadata: accounts.collection_metadata,
            authorization_rules: accounts.authorization_rules,
            authorization_rules_program: accounts.authorization_rules_program,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[super::InstructionAccountInfo<'a, '_>],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[super::InstructionAccountInfo<'a, '_>],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(9 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.owner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.master_edition_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_token_program.key,
            false,
        ));
        if let Some(collection_metadata) = self.collection_metadata {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *collection_metadata.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules) = self.authorization_rules {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *authorization_rules_program.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_TOKEN_METADATA_ID,
                false,
            ));
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        let mut data = BurnInstructionData::new().try_to_vec().unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(9 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.owner.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.token_account.clone());
        account_infos.push(self.master_edition_account.clone());
        account_infos.push(self.spl_token_program.clone());
        if let Some(collection_metadata) = self.collection_metadata {
            account_infos.push(collection_metadata.clone());
        }
        if let Some(authorization_rules) = self.authorization_rules {
            account_infos.push(authorization_rules.clone());
        }
        if let Some(authorization_rules_program) = self.authorization_rules_program {
            account_infos.push(authorization_rules_program.clone());
        }
        remaining_accounts.iter().for_each(|remaining_account| {
            account_infos.push(remaining_account.account_info().clone())
        });

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `burn` CPI instruction builder.
pub struct BurnCpiBuilder<'a, 'b> {
    instruction: Box<BurnCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> BurnCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(BurnCpiBuilderInstruction {
            __program: program,
            metadata: None,
            owner: None,
            mint: None,
            token_account: None,
            master_edition_account: None,
            spl_token_program: None,
            collection_metadata: None,
            authorization_rules: None,
            authorization_rules_program: None,
            burn_args: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Asset owner
    #[inline(always)]
    pub fn owner(&mut self, owner: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.owner = Some(owner);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Token account to close
    #[inline(always)]
    pub fn token_account(
        &mut self,
        token_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account = Some(token_account);
        self
    }
    /// MasterEdition of the asset
    #[inline(always)]
    pub fn master_edition_account(
        &mut self,
        master_edition_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition_account = Some(master_edition_account);
        self
    }
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_token_program = Some(spl_token_program);
        self
    }
    /// `[optional account]`
    /// Metadata of the Collection
    #[inline(always)]
    pub fn collection_metadata(
        &mut self,
        collection_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.collection_metadata = collection_metadata;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules account
    #[inline(always)]
    pub fn authorization_rules(
        &mut self,
        authorization_rules: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.authorization_rules = authorization_rules;
        self
    }
    /// `[optional account]`
    /// Token Authorization Rules Program
    #[inline(always)]
    pub fn authorization_rules_program(
        &mut self,
        authorization_rules_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.authorization_rules_program = authorization_rules_program;
        self
    }
    #[inline(always)]
    pub fn burn_args(&mut self, burn_args: BurnArgs) -> &mut Self {
        self.instruction.burn_args = Some(burn_args);
        self
    }
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: super::InstructionAccountInfo<'a, 'b>,
    ) -> &mut Self {
        self.instruction.__remaining_accounts.push(account);
        self
    }
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[super::InstructionAccountInfo<'a, 'b>],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = BurnInstructionArgs {
            burn_args: self
                .instruction
                .burn_args
                .clone()
                .expect("burn_args is not set"),
        };
        let instruction = BurnCpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            owner: self.instruction.owner.expect("owner is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            token_account: self
                .instruction
                .token_account
                .expect("token_account is not set"),

            master_edition_account: self
                .instruction
                .master_edition_account
                .expect("master_edition_account is not set"),

            spl_token_program: self
                .instruction
                .spl_token_program
                .expect("spl_token_program is not set"),

            collection_metadata: self.instruction.collection_metadata,

            authorization_rules: self.instruction.authorization_rules,

            authorization_rules_program: self.instruction.authorization_rules_program,
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct BurnCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    owner: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    token_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    master_edition_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    collection_metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    authorization_rules: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    authorization_rules_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    burn_args: Option<BurnArgs>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a, 'b>>,
}
