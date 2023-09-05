//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::MintNewEditionFromMasterEditionViaTokenArgs;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct MintNewEditionFromMasterEditionViaToken {
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub new_metadata: solana_program::pubkey::Pubkey,
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    pub new_edition: solana_program::pubkey::Pubkey,
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: solana_program::pubkey::Pubkey,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub new_mint: solana_program::pubkey::Pubkey,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    pub edition_mark_pda: solana_program::pubkey::Pubkey,
    /// Mint authority of new mint
    pub new_mint_authority: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// owner of token account containing master token (#8)
    pub token_account_owner: solana_program::pubkey::Pubkey,
    /// token account containing token from master metadata mint
    pub token_account: solana_program::pubkey::Pubkey,
    /// Update authority info for new metadata
    pub new_metadata_update_authority: solana_program::pubkey::Pubkey,
    /// Master record metadata account
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

impl MintNewEditionFromMasterEditionViaToken {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(
        &self,
        args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(
            14 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.master_edition,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.new_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.edition_mark_pda,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_account_owner,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.new_metadata_update_authority,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
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
        let mut data = MintNewEditionFromMasterEditionViaTokenInstructionData::new()
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
struct MintNewEditionFromMasterEditionViaTokenInstructionData {
    discriminator: u8,
}

impl MintNewEditionFromMasterEditionViaTokenInstructionData {
    fn new() -> Self {
        Self { discriminator: 11 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MintNewEditionFromMasterEditionViaTokenInstructionArgs {
    pub mint_new_edition_from_master_edition_via_token_args:
        MintNewEditionFromMasterEditionViaTokenArgs,
}

/// Instruction builder.
#[derive(Default)]
pub struct MintNewEditionFromMasterEditionViaTokenBuilder {
    new_metadata: Option<solana_program::pubkey::Pubkey>,
    new_edition: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    new_mint: Option<solana_program::pubkey::Pubkey>,
    edition_mark_pda: Option<solana_program::pubkey::Pubkey>,
    new_mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    token_account_owner: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    new_metadata_update_authority: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    mint_new_edition_from_master_edition_via_token_args:
        Option<MintNewEditionFromMasterEditionViaTokenArgs>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl MintNewEditionFromMasterEditionViaTokenBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// New Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn new_metadata(&mut self, new_metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_metadata = Some(new_metadata);
        self
    }
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn new_edition(&mut self, new_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_edition = Some(new_edition);
        self
    }
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn new_mint(&mut self, new_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.new_mint = Some(new_mint);
        self
    }
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    #[inline(always)]
    pub fn edition_mark_pda(
        &mut self,
        edition_mark_pda: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.edition_mark_pda = Some(edition_mark_pda);
        self
    }
    /// Mint authority of new mint
    #[inline(always)]
    pub fn new_mint_authority(
        &mut self,
        new_mint_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_mint_authority = Some(new_mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    /// owner of token account containing master token (#8)
    #[inline(always)]
    pub fn token_account_owner(
        &mut self,
        token_account_owner: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.token_account_owner = Some(token_account_owner);
        self
    }
    /// token account containing token from master metadata mint
    #[inline(always)]
    pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_account = Some(token_account);
        self
    }
    /// Update authority info for new metadata
    #[inline(always)]
    pub fn new_metadata_update_authority(
        &mut self,
        new_metadata_update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.new_metadata_update_authority = Some(new_metadata_update_authority);
        self
    }
    /// Master record metadata account
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
    pub fn mint_new_edition_from_master_edition_via_token_args(
        &mut self,
        mint_new_edition_from_master_edition_via_token_args: MintNewEditionFromMasterEditionViaTokenArgs,
    ) -> &mut Self {
        self.mint_new_edition_from_master_edition_via_token_args =
            Some(mint_new_edition_from_master_edition_via_token_args);
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
        let accounts = MintNewEditionFromMasterEditionViaToken {
            new_metadata: self.new_metadata.expect("new_metadata is not set"),
            new_edition: self.new_edition.expect("new_edition is not set"),
            master_edition: self.master_edition.expect("master_edition is not set"),
            new_mint: self.new_mint.expect("new_mint is not set"),
            edition_mark_pda: self.edition_mark_pda.expect("edition_mark_pda is not set"),
            new_mint_authority: self
                .new_mint_authority
                .expect("new_mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            token_account_owner: self
                .token_account_owner
                .expect("token_account_owner is not set"),
            token_account: self.token_account.expect("token_account is not set"),
            new_metadata_update_authority: self
                .new_metadata_update_authority
                .expect("new_metadata_update_authority is not set"),
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
        let args = MintNewEditionFromMasterEditionViaTokenInstructionArgs {
            mint_new_edition_from_master_edition_via_token_args: self
                .mint_new_edition_from_master_edition_via_token_args
                .clone()
                .expect("mint_new_edition_from_master_edition_via_token_args is not set"),
        };

        accounts.instruction(args)
    }
}

/// `mint_new_edition_from_master_edition_via_token` CPI instruction.
pub struct MintNewEditionFromMasterEditionViaTokenCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// New Metadata key (pda of ['metadata', program id, mint id])
    pub new_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    pub new_edition: &'a solana_program::account_info::AccountInfo<'a>,
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    pub master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub new_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    pub edition_mark_pda: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint authority of new mint
    pub new_mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// payer
    pub payer: &'a solana_program::account_info::AccountInfo<'a>,
    /// owner of token account containing master token (#8)
    pub token_account_owner: &'a solana_program::account_info::AccountInfo<'a>,
    /// token account containing token from master metadata mint
    pub token_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// Update authority info for new metadata
    pub new_metadata_update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    /// Master record metadata account
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token program
    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// System program
    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Rent info
    pub rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    /// The arguments for the instruction.
    pub __args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccountInfo<'a>>>,
}

impl<'a> MintNewEditionFromMasterEditionViaTokenCpi<'a> {
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
            14 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.master_edition.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.new_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.edition_mark_pda.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_account_owner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.new_metadata_update_authority.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
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
        let mut data = MintNewEditionFromMasterEditionViaTokenInstructionData::new()
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
            14 + 1
                + if let Some(remaining_accounts) = &self.__remaining_accounts {
                    remaining_accounts.len()
                } else {
                    0
                },
        );
        account_infos.push(self.__program.clone());
        account_infos.push(self.new_metadata.clone());
        account_infos.push(self.new_edition.clone());
        account_infos.push(self.master_edition.clone());
        account_infos.push(self.new_mint.clone());
        account_infos.push(self.edition_mark_pda.clone());
        account_infos.push(self.new_mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.token_account_owner.clone());
        account_infos.push(self.token_account.clone());
        account_infos.push(self.new_metadata_update_authority.clone());
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

/// `mint_new_edition_from_master_edition_via_token` CPI instruction builder.
pub struct MintNewEditionFromMasterEditionViaTokenCpiBuilder<'a> {
    instruction: Box<MintNewEditionFromMasterEditionViaTokenCpiBuilderInstruction<'a>>,
}

impl<'a> MintNewEditionFromMasterEditionViaTokenCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(
            MintNewEditionFromMasterEditionViaTokenCpiBuilderInstruction {
                __program: program,
                new_metadata: None,
                new_edition: None,
                master_edition: None,
                new_mint: None,
                edition_mark_pda: None,
                new_mint_authority: None,
                payer: None,
                token_account_owner: None,
                token_account: None,
                new_metadata_update_authority: None,
                metadata: None,
                token_program: None,
                system_program: None,
                rent: None,
                mint_new_edition_from_master_edition_via_token_args: None,
                __remaining_accounts: Vec::new(),
            },
        );
        Self { instruction }
    }
    /// New Metadata key (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn new_metadata(
        &mut self,
        new_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_metadata = Some(new_metadata);
        self
    }
    /// New Edition (pda of ['metadata', program id, mint id, 'edition'])
    #[inline(always)]
    pub fn new_edition(
        &mut self,
        new_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_edition = Some(new_edition);
        self
    }
    /// Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
    #[inline(always)]
    pub fn master_edition(
        &mut self,
        master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition = Some(master_edition);
        self
    }
    /// Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    #[inline(always)]
    pub fn new_mint(
        &mut self,
        new_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_mint = Some(new_mint);
        self
    }
    /// Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
    #[inline(always)]
    pub fn edition_mark_pda(
        &mut self,
        edition_mark_pda: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition_mark_pda = Some(edition_mark_pda);
        self
    }
    /// Mint authority of new mint
    #[inline(always)]
    pub fn new_mint_authority(
        &mut self,
        new_mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_mint_authority = Some(new_mint_authority);
        self
    }
    /// payer
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    /// owner of token account containing master token (#8)
    #[inline(always)]
    pub fn token_account_owner(
        &mut self,
        token_account_owner: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account_owner = Some(token_account_owner);
        self
    }
    /// token account containing token from master metadata mint
    #[inline(always)]
    pub fn token_account(
        &mut self,
        token_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account = Some(token_account);
        self
    }
    /// Update authority info for new metadata
    #[inline(always)]
    pub fn new_metadata_update_authority(
        &mut self,
        new_metadata_update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.new_metadata_update_authority = Some(new_metadata_update_authority);
        self
    }
    /// Master record metadata account
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
    pub fn mint_new_edition_from_master_edition_via_token_args(
        &mut self,
        mint_new_edition_from_master_edition_via_token_args: MintNewEditionFromMasterEditionViaTokenArgs,
    ) -> &mut Self {
        self.instruction
            .mint_new_edition_from_master_edition_via_token_args =
            Some(mint_new_edition_from_master_edition_via_token_args);
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
    pub fn build(&self) -> MintNewEditionFromMasterEditionViaTokenCpi<'a> {
        let args = MintNewEditionFromMasterEditionViaTokenInstructionArgs {
            mint_new_edition_from_master_edition_via_token_args: self
                .instruction
                .mint_new_edition_from_master_edition_via_token_args
                .clone()
                .expect("mint_new_edition_from_master_edition_via_token_args is not set"),
        };

        MintNewEditionFromMasterEditionViaTokenCpi {
            __program: self.instruction.__program,

            new_metadata: self
                .instruction
                .new_metadata
                .expect("new_metadata is not set"),

            new_edition: self
                .instruction
                .new_edition
                .expect("new_edition is not set"),

            master_edition: self
                .instruction
                .master_edition
                .expect("master_edition is not set"),

            new_mint: self.instruction.new_mint.expect("new_mint is not set"),

            edition_mark_pda: self
                .instruction
                .edition_mark_pda
                .expect("edition_mark_pda is not set"),

            new_mint_authority: self
                .instruction
                .new_mint_authority
                .expect("new_mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            token_account_owner: self
                .instruction
                .token_account_owner
                .expect("token_account_owner is not set"),

            token_account: self
                .instruction
                .token_account
                .expect("token_account is not set"),

            new_metadata_update_authority: self
                .instruction
                .new_metadata_update_authority
                .expect("new_metadata_update_authority is not set"),

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

struct MintNewEditionFromMasterEditionViaTokenCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    new_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    edition_mark_pda: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_account_owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    new_metadata_update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    rent: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_new_edition_from_master_edition_via_token_args:
        Option<MintNewEditionFromMasterEditionViaTokenArgs>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
