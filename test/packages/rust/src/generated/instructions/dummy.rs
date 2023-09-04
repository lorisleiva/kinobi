//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct Dummy {
    pub edition: solana_program::pubkey::Pubkey,

    pub mint: Option<solana_program::pubkey::Pubkey>,

    pub update_authority: solana_program::pubkey::Pubkey,

    pub mint_authority: solana_program::pubkey::Pubkey,

    pub payer: solana_program::pubkey::Pubkey,

    pub foo: solana_program::pubkey::Pubkey,

    pub bar: Option<solana_program::pubkey::Pubkey>,

    pub delegate: Option<solana_program::pubkey::Pubkey>,

    pub delegate_record: Option<solana_program::pubkey::Pubkey>,

    pub token_or_ata_program: solana_program::pubkey::Pubkey,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccount>>,
}

impl Dummy {
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
            self.edition,
            true,
        ));
        if let Some(mint) = self.mint {
            accounts.push(solana_program::instruction::AccountMeta::new(mint, false));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.update_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.mint_authority,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.payer, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.foo, false,
        ));
        if let Some(bar) = self.bar {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                bar, true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        if let Some(delegate) = self.delegate {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                delegate, true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                delegate_record,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_or_ata_program,
            false,
        ));
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts
                .iter()
                .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        }
        let data = DummyInstructionData::new().try_to_vec().unwrap();

        solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
struct DummyInstructionData {
    discriminator: [u8; 8],
}

impl DummyInstructionData {
    fn new() -> Self {
        Self {
            discriminator: [167, 117, 211, 79, 251, 254, 47, 135],
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct DummyBuilder {
    edition: Option<solana_program::pubkey::Pubkey>,
    mint: Option<solana_program::pubkey::Pubkey>,
    update_authority: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    foo: Option<solana_program::pubkey::Pubkey>,
    bar: Option<solana_program::pubkey::Pubkey>,
    delegate: Option<solana_program::pubkey::Pubkey>,
    delegate_record: Option<solana_program::pubkey::Pubkey>,
    token_or_ata_program: Option<solana_program::pubkey::Pubkey>,
    __remaining_accounts: Vec<super::InstructionAccount>,
}

impl DummyBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    #[inline(always)]
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn foo(&mut self, foo: solana_program::pubkey::Pubkey) -> &mut Self {
        self.foo = Some(foo);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn bar(&mut self, bar: solana_program::pubkey::Pubkey) -> &mut Self {
        self.bar = Some(bar);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn delegate(&mut self, delegate: solana_program::pubkey::Pubkey) -> &mut Self {
        self.delegate = Some(delegate);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.delegate_record = Some(delegate_record);
        self
    }
    #[inline(always)]
    pub fn token_or_ata_program(
        &mut self,
        token_or_ata_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.token_or_ata_program = Some(token_or_ata_program);
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
        let accounts = Dummy {
            edition: self.edition.expect("edition is not set"),
            mint: self.mint,
            update_authority: self.update_authority.expect("update_authority is not set"),
            mint_authority: self.mint_authority.expect("mint_authority is not set"),
            payer: self.payer.expect("payer is not set"),
            foo: self.foo.expect("foo is not set"),
            bar: self.bar,
            delegate: self.delegate,
            delegate_record: self.delegate_record,
            token_or_ata_program: self
                .token_or_ata_program
                .expect("token_or_ata_program is not set"),
            __remaining_accounts: if self.__remaining_accounts.is_empty() {
                None
            } else {
                Some(self.__remaining_accounts.clone())
            },
        };

        accounts.instruction()
    }
}

/// `dummy` CPI instruction.
pub struct DummyCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,

    pub edition: &'a solana_program::account_info::AccountInfo<'a>,

    pub mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,

    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub mint_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub payer: &'a solana_program::account_info::AccountInfo<'a>,

    pub foo: &'a solana_program::account_info::AccountInfo<'a>,

    pub bar: Option<&'a solana_program::account_info::AccountInfo<'a>>,

    pub delegate: Option<&'a solana_program::account_info::AccountInfo<'a>>,

    pub delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,

    pub token_or_ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Additional instruction accounts.
    pub __remaining_accounts: Option<Vec<super::InstructionAccountInfo<'a>>>,
}

impl<'a> DummyCpi<'a> {
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
            *self.edition.key,
            true,
        ));
        if let Some(mint) = self.mint {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *mint.key, false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.update_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.mint_authority.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.payer.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.foo.key,
            false,
        ));
        if let Some(bar) = self.bar {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *bar.key, true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        if let Some(delegate) = self.delegate {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                *delegate.key,
                true,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        if let Some(delegate_record) = self.delegate_record {
            accounts.push(solana_program::instruction::AccountMeta::new(
                *delegate_record.key,
                false,
            ));
        } else {
            accounts.push(solana_program::instruction::AccountMeta::new_readonly(
                crate::MPL_CANDY_MACHINE_CORE_ID,
                false,
            ));
        }
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_or_ata_program.key,
            false,
        ));
        if let Some(remaining_accounts) = &self.__remaining_accounts {
            remaining_accounts
                .iter()
                .for_each(|remaining_account| accounts.push(remaining_account.to_account_meta()));
        }
        let data = DummyInstructionData::new().try_to_vec().unwrap();

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(10 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.edition.clone());
        if let Some(mint) = self.mint {
            account_infos.push(mint.clone());
        }
        account_infos.push(self.update_authority.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.foo.clone());
        if let Some(bar) = self.bar {
            account_infos.push(bar.clone());
        }
        if let Some(delegate) = self.delegate {
            account_infos.push(delegate.clone());
        }
        if let Some(delegate_record) = self.delegate_record {
            account_infos.push(delegate_record.clone());
        }
        account_infos.push(self.token_or_ata_program.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `dummy` CPI instruction builder.
pub struct DummyCpiBuilder<'a> {
    instruction: Box<DummyCpiBuilderInstruction<'a>>,
}

impl<'a> DummyCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(DummyCpiBuilderInstruction {
            __program: program,
            edition: None,
            mint: None,
            update_authority: None,
            mint_authority: None,
            payer: None,
            foo: None,
            bar: None,
            delegate: None,
            delegate_record: None,
            token_or_ata_program: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn edition(
        &mut self,
        edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    #[inline(always)]
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    #[inline(always)]
    pub fn mint_authority(
        &mut self,
        mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
        self
    }
    #[inline(always)]
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    #[inline(always)]
    pub fn foo(&mut self, foo: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.foo = Some(foo);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn bar(&mut self, bar: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.bar = Some(bar);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn delegate(
        &mut self,
        delegate: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.delegate = Some(delegate);
        self
    }
    /// `[optional account]`
    #[inline(always)]
    pub fn delegate_record(
        &mut self,
        delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.delegate_record = Some(delegate_record);
        self
    }
    #[inline(always)]
    pub fn token_or_ata_program(
        &mut self,
        token_or_ata_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_or_ata_program = Some(token_or_ata_program);
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
    pub fn build(&self) -> DummyCpi<'a> {
        DummyCpi {
            __program: self.instruction.__program,

            edition: self.instruction.edition.expect("edition is not set"),

            mint: self.instruction.mint,

            update_authority: self
                .instruction
                .update_authority
                .expect("update_authority is not set"),

            mint_authority: self
                .instruction
                .mint_authority
                .expect("mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            foo: self.instruction.foo.expect("foo is not set"),

            bar: self.instruction.bar,

            delegate: self.instruction.delegate,

            delegate_record: self.instruction.delegate_record,

            token_or_ata_program: self
                .instruction
                .token_or_ata_program
                .expect("token_or_ata_program is not set"),
            __remaining_accounts: if self.instruction.__remaining_accounts.is_empty() {
                None
            } else {
                Some(self.instruction.__remaining_accounts.clone())
            },
        }
    }
}

struct DummyCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    foo: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    bar: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    delegate: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_or_ata_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    __remaining_accounts: Vec<super::InstructionAccountInfo<'a>>,
}
