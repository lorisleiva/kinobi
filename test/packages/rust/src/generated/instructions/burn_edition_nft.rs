//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct BurnEditionNft {
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// NFT owner
    pub owner: solana_program::pubkey::Pubkey,
    /// Mint of the print edition NFT
    pub print_edition_mint: solana_program::pubkey::Pubkey,
    /// Mint of the original/master NFT
    pub master_edition_mint: solana_program::pubkey::Pubkey,
    /// Token account the print edition NFT is in
    pub print_edition_token_account: solana_program::pubkey::Pubkey,
    /// Token account the Master Edition NFT is in
    pub master_edition_token_account: solana_program::pubkey::Pubkey,
    /// MasterEdition2 of the original NFT
    pub master_edition_account: solana_program::pubkey::Pubkey,
    /// Print Edition account of the NFT
    pub print_edition_account: solana_program::pubkey::Pubkey,
    /// Edition Marker PDA of the NFT
    pub edition_marker_account: solana_program::pubkey::Pubkey,
    /// SPL Token Program
    pub spl_token_program: solana_program::pubkey::Pubkey,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccount>>,
}

impl BurnEditionNft {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(
            10 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.owner, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.print_edition_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.master_edition_mint,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.print_edition_token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.master_edition_token_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.master_edition_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.print_edition_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.edition_marker_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_token_program,
            false,
        ));
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts
                .iter()
                .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        }
        let data = BurnEditionNftInstructionData::new().try_to_vec().unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct BurnEditionNftInstructionData {
    discriminator: u8,
}

impl BurnEditionNftInstructionData {
    fn new() -> Self {
        Self { discriminator: 37 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct BurnEditionNftBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    owner: Option<solana_program::pubkey::Pubkey>,
    print_edition_mint: Option<solana_program::pubkey::Pubkey>,
    master_edition_mint: Option<solana_program::pubkey::Pubkey>,
    print_edition_token_account: Option<solana_program::pubkey::Pubkey>,
    master_edition_token_account: Option<solana_program::pubkey::Pubkey>,
    master_edition_account: Option<solana_program::pubkey::Pubkey>,
    print_edition_account: Option<solana_program::pubkey::Pubkey>,
    edition_marker_account: Option<solana_program::pubkey::Pubkey>,
    spl_token_program: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl BurnEditionNftBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(&mut self, metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.metadata = Some(metadata);
        self
    }
    /// NFT owner
    #[inline(always)]
    pub fn owner(&mut self, owner: solana_program::pubkey::Pubkey) -> &mut Self {
        self.owner = Some(owner);
        self
    }
    /// Mint of the print edition NFT
    #[inline(always)]
    pub fn print_edition_mint(
        &mut self,
        print_edition_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.print_edition_mint = Some(print_edition_mint);
        self
    }
    /// Mint of the original/master NFT
    #[inline(always)]
    pub fn master_edition_mint(
        &mut self,
        master_edition_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_edition_mint = Some(master_edition_mint);
        self
    }
    /// Token account the print edition NFT is in
    #[inline(always)]
    pub fn print_edition_token_account(
        &mut self,
        print_edition_token_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.print_edition_token_account = Some(print_edition_token_account);
        self
    }
    /// Token account the Master Edition NFT is in
    #[inline(always)]
    pub fn master_edition_token_account(
        &mut self,
        master_edition_token_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_edition_token_account = Some(master_edition_token_account);
        self
    }
    /// MasterEdition2 of the original NFT
    #[inline(always)]
    pub fn master_edition_account(
        &mut self,
        master_edition_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.master_edition_account = Some(master_edition_account);
        self
    }
    /// Print Edition account of the NFT
    #[inline(always)]
    pub fn print_edition_account(
        &mut self,
        print_edition_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.print_edition_account = Some(print_edition_account);
        self
    }
    /// Edition Marker PDA of the NFT
    #[inline(always)]
    pub fn edition_marker_account(
        &mut self,
        edition_marker_account: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.edition_marker_account = Some(edition_marker_account);
        self
    }
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_token_program = Some(spl_token_program);
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
        let accounts = BurnEditionNft {
            metadata: self.metadata.expect("metadata is not set"),
            owner: self.owner.expect("owner is not set"),
            print_edition_mint: self
                .print_edition_mint
                .expect("print_edition_mint is not set"),
            master_edition_mint: self
                .master_edition_mint
                .expect("master_edition_mint is not set"),
            print_edition_token_account: self
                .print_edition_token_account
                .expect("print_edition_token_account is not set"),
            master_edition_token_account: self
                .master_edition_token_account
                .expect("master_edition_token_account is not set"),
            master_edition_account: self
                .master_edition_account
                .expect("master_edition_account is not set"),
            print_edition_account: self
                .print_edition_account
                .expect("print_edition_account is not set"),
            edition_marker_account: self
                .edition_marker_account
                .expect("edition_marker_account is not set"),
            spl_token_program: self.spl_token_program.unwrap_or(solana_program::pubkey!(
                "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            )),
            __remaining_accounts: if self.__remaining_accounts.is_empty() {
                None
            } else {
                Some(self.__remaining_accounts.clone())
            },
        };

        accounts.instruction()
    }
}

/// `burn_edition_nft` CPI instruction.
pub struct BurnEditionNftCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// NFT owner
    pub owner: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of the print edition NFT
    pub print_edition_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Mint of the original/master NFT
    pub master_edition_mint: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account the print edition NFT is in
    pub print_edition_token_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// Token account the Master Edition NFT is in
    pub master_edition_token_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// MasterEdition2 of the original NFT
    pub master_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// Print Edition account of the NFT
    pub print_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// Edition Marker PDA of the NFT
    pub edition_marker_account: &'a solana_program::account_info::AccountInfo<'a>,
    /// SPL Token Program
    pub spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccountInfo<'a>>>,
}

impl<'a> BurnEditionNftCpi<'a> {
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
            10 + if let Some(remaining_accounts) = &self.__remaining_accounts {
                remaining_accounts.len()
            } else {
                0
            },
        );
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.owner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.print_edition_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.master_edition_mint.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.print_edition_token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.master_edition_token_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.master_edition_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.print_edition_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.edition_marker_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_token_program.key,
            false,
        ));
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts
                .iter()
                .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        }
        let data = BurnEditionNftInstructionData::new().try_to_vec().unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(10 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.owner.clone());
        account_infos.push(self.print_edition_mint.clone());
        account_infos.push(self.master_edition_mint.clone());
        account_infos.push(self.print_edition_token_account.clone());
        account_infos.push(self.master_edition_token_account.clone());
        account_infos.push(self.master_edition_account.clone());
        account_infos.push(self.print_edition_account.clone());
        account_infos.push(self.edition_marker_account.clone());
        account_infos.push(self.spl_token_program.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `burn_edition_nft` CPI instruction builder.
pub struct BurnEditionNftCpiBuilder<'a> {
    instruction: Box<BurnEditionNftCpiBuilderInstruction<'a>>,
}

impl<'a> BurnEditionNftCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(BurnEditionNftCpiBuilderInstruction {
            __program: program,
            metadata: None,
            owner: None,
            print_edition_mint: None,
            master_edition_mint: None,
            print_edition_token_account: None,
            master_edition_token_account: None,
            master_edition_account: None,
            print_edition_account: None,
            edition_marker_account: None,
            spl_token_program: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Metadata (pda of ['metadata', program id, mint id])
    #[inline(always)]
    pub fn metadata(
        &mut self,
        metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.metadata = Some(metadata);
        self
    }
    /// NFT owner
    #[inline(always)]
    pub fn owner(&mut self, owner: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.owner = Some(owner);
        self
    }
    /// Mint of the print edition NFT
    #[inline(always)]
    pub fn print_edition_mint(
        &mut self,
        print_edition_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.print_edition_mint = Some(print_edition_mint);
        self
    }
    /// Mint of the original/master NFT
    #[inline(always)]
    pub fn master_edition_mint(
        &mut self,
        master_edition_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition_mint = Some(master_edition_mint);
        self
    }
    /// Token account the print edition NFT is in
    #[inline(always)]
    pub fn print_edition_token_account(
        &mut self,
        print_edition_token_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.print_edition_token_account = Some(print_edition_token_account);
        self
    }
    /// Token account the Master Edition NFT is in
    #[inline(always)]
    pub fn master_edition_token_account(
        &mut self,
        master_edition_token_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition_token_account = Some(master_edition_token_account);
        self
    }
    /// MasterEdition2 of the original NFT
    #[inline(always)]
    pub fn master_edition_account(
        &mut self,
        master_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.master_edition_account = Some(master_edition_account);
        self
    }
    /// Print Edition account of the NFT
    #[inline(always)]
    pub fn print_edition_account(
        &mut self,
        print_edition_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.print_edition_account = Some(print_edition_account);
        self
    }
    /// Edition Marker PDA of the NFT
    #[inline(always)]
    pub fn edition_marker_account(
        &mut self,
        edition_marker_account: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition_marker_account = Some(edition_marker_account);
        self
    }
    /// SPL Token Program
    #[inline(always)]
    pub fn spl_token_program(
        &mut self,
        spl_token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_token_program = Some(spl_token_program);
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
    pub fn build(&self) -> BurnEditionNftCpi<'a> {
        BurnEditionNftCpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            owner: self.instruction.owner.expect("owner is not set"),

            print_edition_mint: self
                .instruction
                .print_edition_mint
                .expect("print_edition_mint is not set"),

            master_edition_mint: self
                .instruction
                .master_edition_mint
                .expect("master_edition_mint is not set"),

            print_edition_token_account: self
                .instruction
                .print_edition_token_account
                .expect("print_edition_token_account is not set"),

            master_edition_token_account: self
                .instruction
                .master_edition_token_account
                .expect("master_edition_token_account is not set"),

            master_edition_account: self
                .instruction
                .master_edition_account
                .expect("master_edition_account is not set"),

            print_edition_account: self
                .instruction
                .print_edition_account
                .expect("print_edition_account is not set"),

            edition_marker_account: self
                .instruction
                .edition_marker_account
                .expect("edition_marker_account is not set"),

            spl_token_program: self
                .instruction
                .spl_token_program
                .expect("spl_token_program is not set"),
            __remaining_accounts: if self.instruction.__remaining_accounts.is_empty() {
                None
            } else {
                Some(self.instruction.__remaining_accounts.clone())
            },
        }
    }
}

struct BurnEditionNftCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    print_edition_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    print_edition_token_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition_token_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    master_edition_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    print_edition_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    edition_marker_account: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    spl_token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
