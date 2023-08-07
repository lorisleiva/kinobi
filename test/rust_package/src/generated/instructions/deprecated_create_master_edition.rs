//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::{BorshDeserialize, BorshSerialize};

/// Accounts.
pub struct DeprecatedCreateMasterEdition {
    /// Unallocated edition V1 account with address as pda of ['metadata', program id, mint, 'edition']
    pub edition: solana_program::pubkey::Pubkey,
    /// Metadata mint
    pub mint: solana_program::pubkey::Pubkey,
    /// Printing mint - A mint you control that can mint tokens that can be exchanged for limited editions of your master edition via the MintNewEditionFromMasterEditionViaToken endpoint
    pub printing_mint: solana_program::pubkey::Pubkey,
    /// One time authorization printing mint - A mint you control that prints tokens that gives the bearer permission to mint any number of tokens from the printing mint one time via an endpoint with the token-metadata program for your metadata. Also burns the token.
    pub one_time_printing_authorization_mint: solana_program::pubkey::Pubkey,
    /// Current Update authority key
    pub update_authority: solana_program::pubkey::Pubkey,
    /// Printing mint authority - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY.
    pub printing_mint_authority: solana_program::pubkey::Pubkey,
    /// Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
    pub mint_authority: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// payer
    pub payer: solana_program::pubkey::Pubkey,
    /// Token program
    pub token_program: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Rent info
    pub rent: solana_program::pubkey::Pubkey,
    /// One time authorization printing mint authority - must be provided if using max supply. THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY.
    pub one_time_printing_authorization_mint_authority: solana_program::pubkey::Pubkey,
}

impl DeprecatedCreateMasterEdition {
    pub fn instruction(
        &self,
        args: DeprecatedCreateMasterEditionInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::programs::mpl_token_metadata::ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.edition, false),
                solana_program::instruction::AccountMeta::new(self.mint, false),
                solana_program::instruction::AccountMeta::new(self.printing_mint, false),
                solana_program::instruction::AccountMeta::new(
                    self.one_time_printing_authorization_mint,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(self.update_authority, true),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.printing_mint_authority,
                    true,
                ),
                solana_program::instruction::AccountMeta::new_readonly(self.mint_authority, true),
                solana_program::instruction::AccountMeta::new_readonly(self.metadata, false),
                solana_program::instruction::AccountMeta::new_readonly(self.payer, true),
                solana_program::instruction::AccountMeta::new_readonly(self.token_program, false),
                solana_program::instruction::AccountMeta::new_readonly(self.system_program, false),
                solana_program::instruction::AccountMeta::new_readonly(self.rent, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.one_time_printing_authorization_mint_authority,
                    true,
                ),
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

/// Instruction builder.
pub struct DeprecatedCreateMasterEditionBuilder {
    edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    printing_mint: Option<solana_program::pubkey::Pubkey>,
    one_time_printing_authorization_mint: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    printing_mint_authority: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    rent: Option<solana_program::pubkey::Pubkey>,
    one_time_printing_authorization_mint_authority: Option<solana_program::pubkey::Pubkey>,
    create_master_edition_args: Option<CreateMasterEditionArgs>,
}

impl DeprecatedCreateMasterEditionBuilder {
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    pub fn printing_mint(&mut self, printing_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.printing_mint = Some(printing_mint);
        self
    }
    pub fn one_time_printing_authorization_mint(
        &mut self,
        one_time_printing_authorization_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.one_time_printing_authorization_mint = Some(one_time_printing_authorization_mint);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    pub fn printing_mint_authority(
        &mut self,
        printing_mint_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.printing_mint_authority = Some(printing_mint_authority);
        self
    }
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
        self
    }
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
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
    pub fn one_time_printing_authorization_mint_authority(
        &mut self,
        one_time_printing_authorization_mint_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.one_time_printing_authorization_mint_authority =
            Some(one_time_printing_authorization_mint_authority);
        self
    }
    pub fn create_master_edition_args(
        &mut self,
        create_master_edition_args: CreateMasterEditionArgs,
    ) -> &mut Self {
        self.create_master_edition_args = Some(create_master_edition_args);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = DeprecatedCreateMasterEdition {
            edition: self.edition.expect("edition is not set"),

            mint: self.mint.expect("mint is not set"),

            printing_mint: self.printing_mint.expect("printing_mint is not set"),

            one_time_printing_authorization_mint: self
                .one_time_printing_authorization_mint
                .expect("one_time_printing_authorization_mint is not set"),

            update_authority: self.update_authority.expect("update_authority is not set"),

            printing_mint_authority: self
                .printing_mint_authority
                .expect("printing_mint_authority is not set"),

            mint_authority: self.mint_authority.expect("mint_authority is not set"),

            metadata: self.metadata.expect("metadata is not set"),

            payer: self.payer.expect("payer is not set"),

            token_program: self.token_program.expect("token_program is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            rent: self.rent.expect("rent is not set"),

            one_time_printing_authorization_mint_authority: self
                .one_time_printing_authorization_mint_authority
                .expect("one_time_printing_authorization_mint_authority is not set"),
        };
        let args = DeprecatedCreateMasterEditionInstructionArgs::new(
            self.create_master_edition_args
                .expect("create_master_edition_args is not set"),
        );
        accounts.instruction(args)
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct DeprecatedCreateMasterEditionInstructionArgs {
    discriminator: u8,
    pub create_master_edition_args: CreateMasterEditionArgs,
}

impl DeprecatedCreateMasterEditionInstructionArgs {
    pub fn new(create_master_edition_args: CreateMasterEditionArgs) -> Self {
        Self {
            discriminator: 2,
            create_master_edition_args,
        }
    }
}
