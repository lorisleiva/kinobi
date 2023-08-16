//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct UpdatePrimarySaleHappenedViaToken {
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: solana_program::pubkey::Pubkey,
    /// Owner on the token account
    pub owner: solana_program::pubkey::Pubkey,
    /// Account containing tokens from the metadata's mint
    pub token: solana_program::pubkey::Pubkey,
}

impl UpdatePrimarySaleHappenedViaToken {
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = UpdatePrimarySaleHappenedViaTokenInstructionArgs::new();

        let mut accounts = Vec::with_capacity(3);
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.metadata,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.owner, true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token, false,
        ));

        solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct UpdatePrimarySaleHappenedViaTokenInstructionArgs {
    discriminator: u8,
}

impl UpdatePrimarySaleHappenedViaTokenInstructionArgs {
    pub fn new() -> Self {
        Self { discriminator: 4 }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct UpdatePrimarySaleHappenedViaTokenBuilder {
    metadata: Option<solana_program::pubkey::Pubkey>,
    owner: Option<solana_program::pubkey::Pubkey>,
    token: Option<solana_program::pubkey::Pubkey>,
}

impl UpdatePrimarySaleHappenedViaTokenBuilder {
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
    pub fn token(&mut self, token: solana_program::pubkey::Pubkey) -> &mut Self {
        self.token = Some(token);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = UpdatePrimarySaleHappenedViaToken {
            metadata: self.metadata.expect("metadata is not set"),
            owner: self.owner.expect("owner is not set"),
            token: self.token.expect("token is not set"),
        };

        accounts.instruction()
    }
}

/// `update_primary_sale_happened_via_token` CPI instruction.
pub struct UpdatePrimarySaleHappenedViaTokenCpi<'a> {
    /// The program to invoke.
    pub __program: &'a solana_program::account_info::AccountInfo<'a>,
    /// Metadata key (pda of ['metadata', program id, mint id])
    pub metadata: &'a solana_program::account_info::AccountInfo<'a>,
    /// Owner on the token account
    pub owner: &'a solana_program::account_info::AccountInfo<'a>,
    /// Account containing tokens from the metadata's mint
    pub token: &'a solana_program::account_info::AccountInfo<'a>,
}

impl<'a> UpdatePrimarySaleHappenedViaTokenCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = UpdatePrimarySaleHappenedViaTokenInstructionArgs::new();

        let mut accounts = Vec::with_capacity(3);
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.metadata.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.owner.key,
            true,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token.key,
            false,
        ));

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_TOKEN_METADATA_ID,
            accounts,
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(3 + 1);
        account_infos.push(self.__program.clone());
        account_infos.push(self.metadata.clone());
        account_infos.push(self.owner.clone());
        account_infos.push(self.token.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `update_primary_sale_happened_via_token` CPI instruction builder.
pub struct UpdatePrimarySaleHappenedViaTokenCpiBuilder<'a> {
    instruction: Box<UpdatePrimarySaleHappenedViaTokenCpiBuilderInstruction<'a>>,
}

impl<'a> UpdatePrimarySaleHappenedViaTokenCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(UpdatePrimarySaleHappenedViaTokenCpiBuilderInstruction {
            __program: program,
            metadata: None,
            owner: None,
            token: None,
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
    pub fn token(&mut self, token: &'a solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.token = Some(token);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> UpdatePrimarySaleHappenedViaTokenCpi<'a> {
        UpdatePrimarySaleHappenedViaTokenCpi {
            __program: self.instruction.__program,

            metadata: self.instruction.metadata.expect("metadata is not set"),

            owner: self.instruction.owner.expect("owner is not set"),

            token: self.instruction.token.expect("token is not set"),
        }
    }
}

struct UpdatePrimarySaleHappenedViaTokenCpiBuilderInstruction<'a> {
    __program: &'a solana_program::account_info::AccountInfo<'a>,
    metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    owner: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
