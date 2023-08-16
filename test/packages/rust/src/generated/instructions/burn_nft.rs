//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct BurnNft {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// NFT owner
    pub owner: solana_program::pubkey::Pubkey,
    /// Mint of the NFT
    pub mint: solana_program::pubkey::Pubkey,
    /// Token account to close
    pub token_account: solana_program::pubkey::Pubkey,
    /// MasterEdition2 of the NFT
    pub master_edition_account: solana_program::pubkey::Pubkey,
    /// SPL Token Program
    pub spl_token_program: solana_program::pubkey::Pubkey,
    /// Metadata of the Collection
    pub collection_metadata: Option<solana_program::pubkey::Pubkey>,
}

impl BurnNft {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = BurnNftInstructionArgs::new();

        let mut accounts = Vec::with_capacity(7);
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

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct BurnNftInstructionArgs {
    discriminator: u8,
}

impl BurnNftInstructionArgs {
    pub fn new() -> Self {
        Self { discriminator: 29 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct BurnNftBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    owner: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    token_account: Option<solana_program::pubkey::Pubkey>,
    master_edition_account: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    collection_metadata: Option<solana_program::pubkey::Pubkey>,
}

impl BurnNftBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner = Some(owner);
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
    pub fn master_edition_account(
        &mut self,
        master_edition_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_edition_account = Some(master_edition_account);
        self
    }
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
        self
    }
    pub fn collection_metadata(
        &mut self,
        collection_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_metadata = Some(collection_metadata);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = BurnNft {
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
        };

        accounts.instruction()
    }
}

/// `burn_nft` CPI instruction.
pub struct BurnNftCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// NFT owner
    pub owner: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of the NFT
    pub mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account to close
    pub token_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// MasterEdition2 of the NFT
    pub master_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Token Program
    pub spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata of the Collection
    pub collection_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}

impl<'a> BurnNftCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = BurnNftInstructionArgs::new();

        let mut accounts = Vec::with_capacity(7);
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

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(7 + 1);
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

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `burn_nft` CPI instruction builder.
pub struct BurnNftCpiBuilder<'a> {
    instruction: Box<BurnNftCpiBuilderInstruction<'a>>,
}

impl<'a> BurnNftCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(BurnNftCpiBuilderInstruction {
            __program: program,
            metadata: None,
            owner: None,
            mint: None,
            token_account: None,
            master_edition_account: None,
            spl_token_program: None,
            collection_metadata: None,
        });
        Self { instruction }
    }
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    pub fn owner(&mut self, owner: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.owner = Some(owner);
        self
    }
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    pub fn token_account(
        &mut self,
        token_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_account = Some(token_account);
        self
    }
    pub fn master_edition_account(
        &mut self,
        master_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition_account = Some(master_edition_account);
        self
    }
    pub fn spl_token_program(
        &mut self,
        spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_token_program = Some(spl_token_program);
        self
    }
    pub fn collection_metadata(
        &mut self,
        collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_metadata = Some(collection_metadata);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> BurnNftCpi<'a> {
        BurnNftCpi {
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
        }
    }
}

struct BurnNftCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
