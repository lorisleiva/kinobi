//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

/// Accounts.
pub struct CloseEscrowAccount {
    /// Escrow account
    pub escrow: solana_program::pubkey::Pubkey,
    /// Metadata account
    pub metadata: solana_program::pubkey::Pubkey,
    /// Mint account
    pub mint: solana_program::pubkey::Pubkey,
    /// Token account
    pub token_account: solana_program::pubkey::Pubkey,
    /// Edition account
    pub edition: solana_program::pubkey::Pubkey,
    /// Wallet paying for the transaction and new account
    pub payer: solana_program::pubkey::Pubkey,
    /// System program
    pub system_program: solana_program::pubkey::Pubkey,
    /// Instructions sysvar account
    pub sysvar_instructions: solana_program::pubkey::Pubkey,
}

impl CloseEscrowAccount {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = CloseEscrowAccountInstructionArgs::new();
        solana_program::instruction::Instruction {
            program_id: crate::programs::mpl_token_metadata::ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.escrow, false),
                solana_program::instruction::AccountMeta::new(self.metadata, false),
                solana_program::instruction::AccountMeta::new_readonly(self.mint, false),
                solana_program::instruction::AccountMeta::new_readonly(self.token_account, false),
                solana_program::instruction::AccountMeta::new_readonly(self.edition, false),
                solana_program::instruction::AccountMeta::new(self.payer, true),
                solana_program::instruction::AccountMeta::new_readonly(self.system_program, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.sysvar_instructions,
                    false,
                ),
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

/// Instruction builder.
pub struct CloseEscrowAccountBuilder {
    escrow: Option<solana_program::pubkey::Pubkey>,
    metadata: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    edition: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    sysvar_instructions: Option<solana_program::pubkey::Pubkey>,
}

impl CloseEscrowAccountBuilder {
    pub fn escrow(&mut self, escrow: solana_program::pubkey::Pubkey) -> &mut Self {
        self.escrow = Some(escrow);
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
    pub fn token_account(&mut self, token_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token_account = Some(token_account);
        self
    }
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
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
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = CloseEscrowAccount {
            escrow: self.escrow.expect("escrow is not set"),

            metadata: self.metadata.expect("metadata is not set"),

            mint: self.mint.expect("mint is not set"),

            token_account: self.token_account.expect("token_account is not set"),

            edition: self.edition.expect("edition is not set"),

            payer: self.payer.expect("payer is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            sysvar_instructions: self
                .sysvar_instructions
                .expect("sysvar_instructions is not set"),
        };
        accounts.instruction()
    }
}

struct CloseEscrowAccountInstructionArgs {
    discriminator: u8,
}

impl CloseEscrowAccountInstructionArgs {
    pub fn new() -> Self {
        Self { discriminator: 39 }
    }
}
