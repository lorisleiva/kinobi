//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::DataV2;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct CreateMetadataAccountV2 {
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Mint of token asset
    pub mint: solana_program::pubkey::Pubkey,
    /// Mint authority
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// update authority info
    pub update_authority: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: Option<solana_program::pubkey::Pubkey>,
}

impl CreateMetadataAccountV2 {
    pub fn instruction(
        &self,
        args: CreateMetadataAccountV2InstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: CreateMetadataAccountV2InstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(7 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
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
        accounts.extend_from_slice(remaining_accounts);
        let mut data = CreateMetadataAccountV2InstructionData::new()
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
pub struct CreateMetadataAccountV2InstructionData {
    discriminator: u8,
}

impl CreateMetadataAccountV2InstructionData {
    pub fn new() -> Self {
        Self { discriminator: 16 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct CreateMetadataAccountV2InstructionArgs {
    pub data: DataV2,
    pub is_mutable: bool,
}

/// Instruction builder for `CreateMetadataAccountV2`.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[]` mint
///   2. `[signer]` mint_authority
///   3. `[writable, signer]` payer
///   4. `[]` update_authority
///   5. `[optional]` system_program (default to `11111111111111111111111111111111`)
///   6. `[optional]` rent
#[derive(Default)]
pub struct CreateMetadataAccountV2Builder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    data: Option<DataV2>,
    is_mutable: Option<bool>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CreateMetadataAccountV2Builder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    /// Mint authority
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
    /// update authority info
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    /// `[optional account, default to '11111111111111111111111111111111']`
    /// System program
    #[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
        self.system_program = Some(system_program);
        self
    }
    /// `[optional account]`
    /// Rent info
    #[inline(always)]
    pub fn rent(&mut self, rent: Option<solana_program::pubkey::Pubkey>) -> &mut Self {
        self.rent = rent;
        self
    }
    #[inline(always)]
    pub fn data(&mut self, data: DataV2) -> &mut Self {
        self.data = Some(data);
        self
    }
    #[inline(always)]
    pub fn is_mutable(&mut self, is_mutable: bool) -> &mut Self {
        self.is_mutable = Some(is_mutable);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = CreateMetadataAccountV2 {
            metadata: self.metadata.expect("metadata is not set"),
            mint: self.mint.expect("mint is not set"),
            mint_authority: self.mint_authority.expect("mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            update_authority: self.update_authority.expect("update_authority is not set"),
            system_program: self
                .system_program
                .unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
            rent: self.rent,
        };
        let args = CreateMetadataAccountV2InstructionArgs {
            data: self.data.clone().expect("data is not set"),
            is_mutable: self.is_mutable.clone().expect("is_mutable is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `create_metadata_account_v2` CPI accounts.
pub struct CreateMetadataAccountV2CpiAccounts<'a, 'b> {
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of token asset
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint authority
    pub mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// update authority info
    pub update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
}

/// `create_metadata_account_v2` CPI instruction.
pub struct CreateMetadataAccountV2Cpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint of token asset
    pub mint: &'b solana_program::account_info::AccountInfo<'a>,
    /// Mint authority
    pub mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'b solana_program::account_info::AccountInfo<'a>,
    /// update authority info
    pub update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: CreateMetadataAccountV2InstructionArgs,
}

impl<'a, 'b> CreateMetadataAccountV2Cpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: CreateMetadataAccountV2CpiAccounts<'a, 'b>,
        args: CreateMetadataAccountV2InstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            metadata: accounts.metadata,
            mint: accounts.mint,
            mint_authority: accounts.mint_authority,
            payer: accounts.payer,
            update_authority: accounts.update_authority,
            system_program: accounts.system_program,
            rent: accounts.rent,
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
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
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
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(7 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
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
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = CreateMetadataAccountV2InstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(7 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.mint.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.system_program.clone());
        if let Some(rent) = self.rent {
            account_infos.push(rent.clone());
        }
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `CreateMetadataAccountV2` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` metadata
///   1. `[]` mint
///   2. `[signer]` mint_authority
///   3. `[writable, signer]` payer
///   4. `[]` update_authority
///   5. `[]` system_program
///   6. `[optional]` rent
pub struct CreateMetadataAccountV2CpiBuilder<'a, 'b> {
    instruction: Box<CreateMetadataAccountV2CpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CreateMetadataAccountV2CpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(CreateMetadataAccountV2CpiBuilderInstruction {
            __program: program,
            metadata: None,
            mint: None,
            mint_authority: None,
            payer: None,
            update_authority: None,
            system_program: None,
            rent: None,
            data: None,
            is_mutable: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// Mint of token asset
    #[inline(always)]
    pub fn mint(&mut self, mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    /// Mint authority
    #[inline(always)]
    pub fn mint_authority(
        &mut self,
        mint_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// update authority info
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    /// System program
    #[inline(always)]
    pub fn system_program(
        &mut self,
        system_program: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    /// `[optional account]`
    /// Rent info
    #[inline(always)]
    pub fn rent(
        &mut self,
        rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    ) -> &mut Self {
        self.instruction.rent = rent;
        self
    }
    #[inline(always)]
    pub fn data(&mut self, data: DataV2) -> &mut Self {
        self.instruction.data = Some(data);
        self
    }
    #[inline(always)]
    pub fn is_mutable(&mut self, is_mutable: bool) -> &mut Self {
        self.instruction.is_mutable = Some(is_mutable);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
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
        let args = CreateMetadataAccountV2InstructionArgs {
            data: self.instruction.data.clone().expect("data is not set"),
            is_mutable: self
                .instruction
                .is_mutable
                .clone()
                .expect("is_mutable is not set"),
        };
        let instruction = CreateMetadataAccountV2Cpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            mint: self.instruction.mint.expect("mint is not set"),

            mint_authority: self
                .instruction
                .mint_authority
                .expect("mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            rent: self.instruction.rent,
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct CreateMetadataAccountV2CpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    data: Option<DataV2>,
    is_mutable: Option<bool>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
