//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct MintFromCandyMachine {
    pub candy_machine: solana_program::pubkey::Pubkey,

    pub authority_pda: solana_program::pubkey::Pubkey,

    pub mint_authority: solana_program::pubkey::Pubkey,

    pub payer: solana_program::pubkey::Pubkey,

    pub nft_mint: solana_program::pubkey::Pubkey,

    pub nft_mint_authority: solana_program::pubkey::Pubkey,

    pub nft_metadata: solana_program::pubkey::Pubkey,

    pub nft_master_edition: solana_program::pubkey::Pubkey,

    pub collection_authority_record: solana_program::pubkey::Pubkey,

    pub collection_mint: solana_program::pubkey::Pubkey,

    pub collection_metadata: solana_program::pubkey::Pubkey,

    pub collection_master_edition: solana_program::pubkey::Pubkey,

    pub collection_update_authority: solana_program::pubkey::Pubkey,

    pub token_metadata_program: solana_program::pubkey::Pubkey,

    pub token_program: solana_program::pubkey::Pubkey,

    pub system_program: solana_program::pubkey::Pubkey,

    pub recent_slothashes: solana_program::pubkey::Pubkey,
}

impl MintFromCandyMachine {
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let args = MintFromCandyMachineInstructionArgs::new();
        solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.candy_machine, false),
                solana_program::instruction::AccountMeta::new(self.authority_pda, false),
                solana_program::instruction::AccountMeta::new_readonly(self.mint_authority, true),
                solana_program::instruction::AccountMeta::new(self.payer, true),
                solana_program::instruction::AccountMeta::new(self.nft_mint, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.nft_mint_authority,
                    true,
                ),
                solana_program::instruction::AccountMeta::new(self.nft_metadata, false),
                solana_program::instruction::AccountMeta::new(self.nft_master_edition, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.collection_authority_record,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(self.collection_mint, false),
                solana_program::instruction::AccountMeta::new(self.collection_metadata, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.collection_master_edition,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.collection_update_authority,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.token_metadata_program,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(self.token_program, false),
                solana_program::instruction::AccountMeta::new_readonly(self.system_program, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    self.recent_slothashes,
                    false,
                ),
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct MintFromCandyMachineInstructionArgs {
    discriminator: [u8; 8],
}

impl MintFromCandyMachineInstructionArgs {
    pub fn new() -> Self {
        Self {
            discriminator: [51, 57, 225, 47, 182, 146, 137, 166],
        }
    }
}

/// Instruction builder.
#[derive(Default)]
pub struct MintFromCandyMachineBuilder {
    candy_machine: Option<solana_program::pubkey::Pubkey>,
    authority_pda: Option<solana_program::pubkey::Pubkey>,
    mint_authority: Option<solana_program::pubkey::Pubkey>,
    payer: Option<solana_program::pubkey::Pubkey>,
    nft_mint: Option<solana_program::pubkey::Pubkey>,
    nft_mint_authority: Option<solana_program::pubkey::Pubkey>,
    nft_metadata: Option<solana_program::pubkey::Pubkey>,
    nft_master_edition: Option<solana_program::pubkey::Pubkey>,
    collection_authority_record: Option<solana_program::pubkey::Pubkey>,
    collection_mint: Option<solana_program::pubkey::Pubkey>,
    collection_metadata: Option<solana_program::pubkey::Pubkey>,
    collection_master_edition: Option<solana_program::pubkey::Pubkey>,
    collection_update_authority: Option<solana_program::pubkey::Pubkey>,
    token_metadata_program: Option<solana_program::pubkey::Pubkey>,
    token_program: Option<solana_program::pubkey::Pubkey>,
    system_program: Option<solana_program::pubkey::Pubkey>,
    recent_slothashes: Option<solana_program::pubkey::Pubkey>,
}

impl MintFromCandyMachineBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    pub fn candy_machine(&mut self, candy_machine: solana_program::pubkey::Pubkey) -> &mut Self {
        self.candy_machine = Some(candy_machine);
        self
    }
    pub fn authority_pda(&mut self, authority_pda: solana_program::pubkey::Pubkey) -> &mut Self {
        self.authority_pda = Some(authority_pda);
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
    pub fn nft_mint(&mut self, nft_mint: solana_program::pubkey::Pubkey) -> &mut Self {
        self.nft_mint = Some(nft_mint);
        self
    }
    pub fn nft_mint_authority(
        &mut self,
        nft_mint_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.nft_mint_authority = Some(nft_mint_authority);
        self
    }
    pub fn nft_metadata(&mut self, nft_metadata: solana_program::pubkey::Pubkey) -> &mut Self {
        self.nft_metadata = Some(nft_metadata);
        self
    }
    pub fn nft_master_edition(
        &mut self,
        nft_master_edition: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.nft_master_edition = Some(nft_master_edition);
        self
    }
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_authority_record = Some(collection_authority_record);
        self
    }
    pub fn collection_mint(
        &mut self,
        collection_mint: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_mint = Some(collection_mint);
        self
    }
    pub fn collection_metadata(
        &mut self,
        collection_metadata: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_metadata = Some(collection_metadata);
        self
    }
    pub fn collection_master_edition(
        &mut self,
        collection_master_edition: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_master_edition = Some(collection_master_edition);
        self
    }
    pub fn collection_update_authority(
        &mut self,
        collection_update_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.collection_update_authority = Some(collection_update_authority);
        self
    }
    pub fn token_metadata_program(
        &mut self,
        token_metadata_program: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.token_metadata_program = Some(token_metadata_program);
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
    pub fn recent_slothashes(
        &mut self,
        recent_slothashes: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.recent_slothashes = Some(recent_slothashes);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = MintFromCandyMachine {
            candy_machine: self.candy_machine.expect("candy_machine is not set"),

            authority_pda: self.authority_pda.expect("authority_pda is not set"),

            mint_authority: self.mint_authority.expect("mint_authority is not set"),

            payer: self.payer.expect("payer is not set"),

            nft_mint: self.nft_mint.expect("nft_mint is not set"),

            nft_mint_authority: self
                .nft_mint_authority
                .expect("nft_mint_authority is not set"),

            nft_metadata: self.nft_metadata.expect("nft_metadata is not set"),

            nft_master_edition: self
                .nft_master_edition
                .expect("nft_master_edition is not set"),

            collection_authority_record: self
                .collection_authority_record
                .expect("collection_authority_record is not set"),

            collection_mint: self.collection_mint.expect("collection_mint is not set"),

            collection_metadata: self
                .collection_metadata
                .expect("collection_metadata is not set"),

            collection_master_edition: self
                .collection_master_edition
                .expect("collection_master_edition is not set"),

            collection_update_authority: self
                .collection_update_authority
                .expect("collection_update_authority is not set"),

            token_metadata_program: self
                .token_metadata_program
                .expect("token_metadata_program is not set"),

            token_program: self.token_program.expect("token_program is not set"),

            system_program: self.system_program.expect("system_program is not set"),

            recent_slothashes: self
                .recent_slothashes
                .expect("recent_slothashes is not set"),
        };
        accounts.instruction()
    }
}

/// `mint_from_candy_machine` CPI instruction.
pub struct MintFromCandyMachineCpi<'a> {
    pub program: &'a solana_program::account_info::AccountInfo<'a>,

    pub candy_machine: &'a solana_program::account_info::AccountInfo<'a>,

    pub authority_pda: &'a solana_program::account_info::AccountInfo<'a>,

    pub mint_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub payer: &'a solana_program::account_info::AccountInfo<'a>,

    pub nft_mint: &'a solana_program::account_info::AccountInfo<'a>,

    pub nft_mint_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub nft_metadata: &'a solana_program::account_info::AccountInfo<'a>,

    pub nft_master_edition: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_mint: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_master_edition: &'a solana_program::account_info::AccountInfo<'a>,

    pub collection_update_authority: &'a solana_program::account_info::AccountInfo<'a>,

    pub token_metadata_program: &'a solana_program::account_info::AccountInfo<'a>,

    pub token_program: &'a solana_program::account_info::AccountInfo<'a>,

    pub system_program: &'a solana_program::account_info::AccountInfo<'a>,

    pub recent_slothashes: &'a solana_program::account_info::AccountInfo<'a>,
}

impl<'a> MintFromCandyMachineCpi<'a> {
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = MintFromCandyMachineInstructionArgs::new();
        let instruction = solana_program::instruction::Instruction {
            program_id: crate::MPL_CANDY_MACHINE_CORE_ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(*self.candy_machine.key, false),
                solana_program::instruction::AccountMeta::new(*self.authority_pda.key, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.mint_authority.key,
                    true,
                ),
                solana_program::instruction::AccountMeta::new(*self.payer.key, true),
                solana_program::instruction::AccountMeta::new(*self.nft_mint.key, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.nft_mint_authority.key,
                    true,
                ),
                solana_program::instruction::AccountMeta::new(*self.nft_metadata.key, false),
                solana_program::instruction::AccountMeta::new(*self.nft_master_edition.key, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.collection_authority_record.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.collection_mint.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new(*self.collection_metadata.key, false),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.collection_master_edition.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.collection_update_authority.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.token_metadata_program.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.token_program.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.system_program.key,
                    false,
                ),
                solana_program::instruction::AccountMeta::new_readonly(
                    *self.recent_slothashes.key,
                    false,
                ),
            ],
            data: args.try_to_vec().unwrap(),
        };
        let mut account_infos = Vec::with_capacity(17 + 1);
        account_infos.push(self.program.clone());
        account_infos.push(self.candy_machine.clone());
        account_infos.push(self.authority_pda.clone());
        account_infos.push(self.mint_authority.clone());
        account_infos.push(self.payer.clone());
        account_infos.push(self.nft_mint.clone());
        account_infos.push(self.nft_mint_authority.clone());
        account_infos.push(self.nft_metadata.clone());
        account_infos.push(self.nft_master_edition.clone());
        account_infos.push(self.collection_authority_record.clone());
        account_infos.push(self.collection_mint.clone());
        account_infos.push(self.collection_metadata.clone());
        account_infos.push(self.collection_master_edition.clone());
        account_infos.push(self.collection_update_authority.clone());
        account_infos.push(self.token_metadata_program.clone());
        account_infos.push(self.token_program.clone());
        account_infos.push(self.system_program.clone());
        account_infos.push(self.recent_slothashes.clone());

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// `mint_from_candy_machine` CPI instruction builder.
pub struct MintFromCandyMachineCpiBuilder<'a> {
    instruction: Box<MintFromCandyMachineCpiBuilderInstruction<'a>>,
}

impl<'a> MintFromCandyMachineCpiBuilder<'a> {
    pub fn new(program: &'a solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(MintFromCandyMachineCpiBuilderInstruction {
            program,
            candy_machine: None,
            authority_pda: None,
            mint_authority: None,
            payer: None,
            nft_mint: None,
            nft_mint_authority: None,
            nft_metadata: None,
            nft_master_edition: None,
            collection_authority_record: None,
            collection_mint: None,
            collection_metadata: None,
            collection_master_edition: None,
            collection_update_authority: None,
            token_metadata_program: None,
            token_program: None,
            system_program: None,
            recent_slothashes: None,
        });
        Self { instruction }
    }
    pub fn candy_machine(
        &mut self,
        candy_machine: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.candy_machine = Some(candy_machine);
        self
    }
    pub fn authority_pda(
        &mut self,
        authority_pda: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.authority_pda = Some(authority_pda);
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
    pub fn nft_mint(
        &mut self,
        nft_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_mint = Some(nft_mint);
        self
    }
    pub fn nft_mint_authority(
        &mut self,
        nft_mint_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_mint_authority = Some(nft_mint_authority);
        self
    }
    pub fn nft_metadata(
        &mut self,
        nft_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_metadata = Some(nft_metadata);
        self
    }
    pub fn nft_master_edition(
        &mut self,
        nft_master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nft_master_edition = Some(nft_master_edition);
        self
    }
    pub fn collection_authority_record(
        &mut self,
        collection_authority_record: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_authority_record = Some(collection_authority_record);
        self
    }
    pub fn collection_mint(
        &mut self,
        collection_mint: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_mint = Some(collection_mint);
        self
    }
    pub fn collection_metadata(
        &mut self,
        collection_metadata: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_metadata = Some(collection_metadata);
        self
    }
    pub fn collection_master_edition(
        &mut self,
        collection_master_edition: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_master_edition = Some(collection_master_edition);
        self
    }
    pub fn collection_update_authority(
        &mut self,
        collection_update_authority: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.collection_update_authority = Some(collection_update_authority);
        self
    }
    pub fn token_metadata_program(
        &mut self,
        token_metadata_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_metadata_program = Some(token_metadata_program);
        self
    }
    pub fn token_program(
        &mut self,
        token_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.token_program = Some(token_program);
        self
    }
    pub fn system_program(
        &mut self,
        system_program: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.system_program = Some(system_program);
        self
    }
    pub fn recent_slothashes(
        &mut self,
        recent_slothashes: &'a solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.recent_slothashes = Some(recent_slothashes);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn build(&self) -> MintFromCandyMachineCpi<'a> {
        MintFromCandyMachineCpi {
            program: self.instruction.program,

            candy_machine: self
                .instruction
                .candy_machine
                .expect("candy_machine is not set"),

            authority_pda: self
                .instruction
                .authority_pda
                .expect("authority_pda is not set"),

            mint_authority: self
                .instruction
                .mint_authority
                .expect("mint_authority is not set"),

            payer: self.instruction.payer.expect("payer is not set"),

            nft_mint: self.instruction.nft_mint.expect("nft_mint is not set"),

            nft_mint_authority: self
                .instruction
                .nft_mint_authority
                .expect("nft_mint_authority is not set"),

            nft_metadata: self
                .instruction
                .nft_metadata
                .expect("nft_metadata is not set"),

            nft_master_edition: self
                .instruction
                .nft_master_edition
                .expect("nft_master_edition is not set"),

            collection_authority_record: self
                .instruction
                .collection_authority_record
                .expect("collection_authority_record is not set"),

            collection_mint: self
                .instruction
                .collection_mint
                .expect("collection_mint is not set"),

            collection_metadata: self
                .instruction
                .collection_metadata
                .expect("collection_metadata is not set"),

            collection_master_edition: self
                .instruction
                .collection_master_edition
                .expect("collection_master_edition is not set"),

            collection_update_authority: self
                .instruction
                .collection_update_authority
                .expect("collection_update_authority is not set"),

            token_metadata_program: self
                .instruction
                .token_metadata_program
                .expect("token_metadata_program is not set"),

            token_program: self
                .instruction
                .token_program
                .expect("token_program is not set"),

            system_program: self
                .instruction
                .system_program
                .expect("system_program is not set"),

            recent_slothashes: self
                .instruction
                .recent_slothashes
                .expect("recent_slothashes is not set"),
        }
    }
}

struct MintFromCandyMachineCpiBuilderInstruction<'a> {
    program: &'a solana_program::account_info::AccountInfo<'a>,
    candy_machine: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    authority_pda: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    payer: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    nft_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    nft_mint_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    nft_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    nft_master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_authority_record: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_mint: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_metadata: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_master_edition: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    collection_update_authority: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_metadata_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    token_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    system_program: Option<&'a solana_program::account_info::AccountInfo<'a>>,
    recent_slothashes: Option<&'a solana_program::account_info::AccountInfo<'a>>,
}
