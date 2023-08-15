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

    pub delegate_record: solana_program::pubkey::Pubkey,
}

impl Dummy {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = DummyInstructionArgs::new();

        let mut accounts = Vec::with_capacity(8);
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
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.delegate_record,
            false,
        ));

        solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct DummyInstructionArgs {
    discriminator: [u8; 8],
}

impl DummyInstructionArgs {
    pub fn new() -> Self {
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
    delegate_record: Option<solana_program::pubkey::Pubkey>,
}

impl DummyBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn edition(&mut self, edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.edition = Some(edition);
        self
    }
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint = Some(mint);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.update_authority = Some(update_authority);
        self
    }
    pub fn mint_authority(&mut self, mint_authority: solana_program::pubkey::Pubkey) -> &mut Self {
        self.mint_authority = Some(mint_authority);
        self
    }
    pub fn payer(&mut self, payer: solana_program::pubkey::Pubkey) -> &mut Self {
        self.payer = Some(payer);
        self
    }
    pub fn foo(&mut self, foo: solana_program::pubkey::Pubkey) -> &mut Self {
        self.foo = Some(foo);
        self
    }
    pub fn bar(&mut self, bar: solana_program::pubkey::Pubkey) -> &mut Self {
        self.bar = Some(bar);
        self
    }
    pub fn delegate_record(
        &mut self,
        delegate_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.delegate_record = Some(delegate_record);
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
            delegate_record: self.delegate_record.expect("delegate_record is not set"),
        };

        accounts.instruction()
    }
}

/// `dummy` CPI instruction.
pub struct DummyCpi<'a> {
    /// The program to invoke.
    pub program: &'a solana_program::account_info::AccountInfo<'a>,

    pub edition: &'a solana_program::account_info::AccountInfo<'a>,

    pub mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,

    pub update_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub mint_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub payer: &'a solana_program::account_info::AccountInfo<'a>,

    pub foo: &'a solana_program::account_info::AccountInfo<'a>,

    pub bar: Option<&'a solana_program::account_info::AccountInfo<'a>>,

    pub delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
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
        let args = DummyInstructionArgs::new();

        let mut accounts = Vec::with_capacity(8);
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
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.delegate_record.key,
            false,
        ));

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(8 + 1);
        account_infos.push(self.program.clone());
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
        account_infos.push(self.delegate_record.clone());

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
            program,
            edition: None,
            mint: None,
            update_authority: None,
            mint_authority: None,
            payer: None,
            foo: None,
            bar: None,
            delegate_record: None,
        });
        Self { instruction }
    }
    pub fn edition(
        &mut self,
        edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.edition = Some(edition);
        self
    }
    pub fn mint(&mut self, mint: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.mint = Some(mint);
        self
    }
    pub fn update_authority(
        &mut self,
        update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.update_authority = Some(update_authority);
        self
    }
    pub fn mint_authority(
        &mut self,
        mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.mint_authority = Some(mint_authority);
        self
    }
    pub fn payer(&mut self, payer: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.payer = Some(payer);
        self
    }
    pub fn foo(&mut self, foo: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.foo = Some(foo);
        self
    }
    pub fn bar(&mut self, bar: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.bar = Some(bar);
        self
    }
    pub fn delegate_record(
        &mut self,
        delegate_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.delegate_record = Some(delegate_record);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> DummyCpi<'a> {
        DummyCpi {
            program: self.instruction.program,

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

            delegate_record: self
                .instruction
                .delegate_record
                .expect("delegate_record is not set"),
        }
    }
}

struct DummyCpiBuilderInstruction<'a> {
    program: &'a solana_program::account_info::AccountInfo<'a>,
    edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    foo: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    bar: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    delegate_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
