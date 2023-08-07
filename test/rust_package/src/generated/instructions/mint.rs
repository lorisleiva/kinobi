//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::{BorshDeserialize, BorshSerialize};

/// Accounts.
pub struct Mint {
    /// Token account
    pub token: solana_program::pubkey::Pubkey,
    /// Metadata account key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Master Edition account
    pub master_edition: Option<solana_program::pubkey::Pubkey>,
    /// Mint of token asset
    pub mint: solana_program::pubkey::Pubkey,
    /// Payer
    pub payer: solana_program::pubkey::Pubkey,
    /// (Mint or Update) authority
    pub authority: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
    /// SPL Token program
    pub spl_token_program: solana_program::pubkey::Pubkey,
    /// SPL Associated Token Account program
    pub spl_ata_program: solana_program::pubkey::Pubkey,
    /// Token Authorization Rules program
    pub authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    /// Token Authorization Rules account
    pub authorization_rules: Option<solana_program::pubkey::Pubkey>,
}

impl Mint {
    pub fn instruction(
        &self,
        args: MintInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::programs::mpl_token_metadata::ID,
            accounts: vec![
                                          solana_program::instruction::AccountMeta::new(
              self.token,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.metadata,
              false
            ),
                                                                if let Some(master_edition) = self.master_edition {
              solana_program::instruction::AccountMeta::new_readonly(
                master_edition,
                false,
              ),
            } else {
              solana_program::instruction::AccountMeta::new_readonly(
                crate::programs::mpl_token_metadata::ID,
                false,
              ),
            },
                                                                solana_program::instruction::AccountMeta::new(
              self.mint,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new(
              self.payer,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.authority,
              true
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.system_program,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.sysvar_instructions,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.spl_token_program,
              false
            ),
                                                                solana_program::instruction::AccountMeta::new_readonly(
              self.spl_ata_program,
              false
            ),
                                                                if let Some(authorization_rules_program) = self.authorization_rules_program {
              solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules_program,
                false,
              ),
            } else {
              solana_program::instruction::AccountMeta::new_readonly(
                crate::programs::mpl_token_metadata::ID,
                false,
              ),
            },
                                                                if let Some(authorization_rules) = self.authorization_rules {
              solana_program::instruction::AccountMeta::new_readonly(
                authorization_rules,
                false,
              ),
            } else {
              solana_program::instruction::AccountMeta::new_readonly(
                crate::programs::mpl_token_metadata::ID,
                false,
              ),
            },
                                  ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

/// Instruction builder.
pub struct MintBuilder {
    token: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    master_edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    authority: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    spl_ata_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules_program: Option<solana_program::pubkey::Pubkey>,
    authorization_rules: Option<solana_program::pubkey::Pubkey>,
    mint_args: Option<MintArgs>,
}

impl MintBuilder {
    pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token = Some(token);
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
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority = Some(authority);
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
    pub fn spl_ata_program(
        &mut self,
        spl_ata_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_ata_program = Some(spl_ata_program);
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
    pub fn mint_args(&mut self, mint_args: MintArgs) -> &mut Self {
        self.mint_args = Some(mint_args);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = Mint {
            token: self.token.expect("token is not set"),

            metadata: self.metadata.expect("metadata is not set"),

            master_edition: self.master_edition,

            mint: self.mint.expect("mint is not set"),

            payer: self.payer.expect("payer is not set"),

            authority: self.authority.expect("authority is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            sysvar_instructions: self
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),

            spl_token_program: self
                .spl_token_program
                .expect("spl_token_program is not set"),

            spl_ata_program: self.spl_ata_program.expect("spl_ata_program is not set"),

            authorization_rules_program: self.authorization_rules_program,

            authorization_rules: self.authorization_rules,
        };
        let args = MintInstructionArgs::new(self.mint_args.expect("mint_args is not set"));
        accounts.instruction(args)
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MintInstructionArgs {
    discriminator: u8,
    pub mint_args: MintArgs,
}

impl MintInstructionArgs {
    pub fn new(mint_args: MintArgs) -> Self {
        Self {
            discriminator: 42,
            mint_args,
        }
    }
}
