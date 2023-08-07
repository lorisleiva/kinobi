//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

/// Accounts.
pub struct DeprecatedSetReservationList {
    /// Master Edition V1 key (pda of ['metadata', program id, mint id, 'edition'])
    pub master_edition: solana_program::pubkey::Pubkey,
    /// PDA for ReservationList of ['metadata', program id, master edition key, 'reservation', resource-key]
    pub reservation_list: solana_program::pubkey::Pubkey,
    /// The resource you tied the reservation list too
    pub resource: solana_program::pubkey::Pubkey,
}

impl DeprecatedSetReservationList {
    pub fn instruction(
        &self,
        args: DeprecatedSetReservationListInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        solana_program::instruction::Instruction {
            program_id: crate::programs::mpl_token_metadata::ID,
            accounts: vec![
                solana_program::instruction::AccountMeta::new(self.master_edition, false),
                solana_program::instruction::AccountMeta::new(self.reservation_list, false),
                solana_program::instruction::AccountMeta::new_readonly(self.resource, true),
            ],
            data: args.try_to_vec().unwrap(),
        }
    }
}

/// Instruction builder.
pub struct DeprecatedSetReservationListBuilder {
    master_edition: Option<solana_program::pubkey::Pubkey>,
    reservation_list: Option<solana_program::pubkey::Pubkey>,
    resource: Option<solana_program::pubkey::Pubkey>,
    reservations: Option<Vec<Reservation>>,
    total_reservation_spots: Option<u64>,
    offset: Option<u64>,
    total_spot_offset: Option<u64>,
}

impl DeprecatedSetReservationListBuilder {
    pub fn master_edition(&mut self, master_edition: solana_program::pubkey::Pubkey) -> &mut Self {
        self.master_edition = Some(master_edition);
        self
    }
    pub fn reservation_list(
        &mut self,
        reservation_list: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.reservation_list = Some(reservation_list);
        self
    }
    pub fn resource(&mut self, resource: solana_program::pubkey::Pubkey) -> &mut Self {
        self.resource = Some(resource);
        self
    }
    pub fn reservations(&mut self, reservations: Vec<Reservation>) -> &mut Self {
        self.reservations = Some(reservations);
        self
    }
    pub fn total_reservation_spots(&mut self, total_reservation_spots: Option<u64>) -> &mut Self {
        self.total_reservation_spots = Some(total_reservation_spots);
        self
    }
    pub fn offset(&mut self, offset: u64) -> &mut Self {
        self.offset = Some(offset);
        self
    }
    pub fn total_spot_offset(&mut self, total_spot_offset: u64) -> &mut Self {
        self.total_spot_offset = Some(total_spot_offset);
        self
    }
    pub fn build(&self) -> solana_program::instruction::Instruction {
        let accounts = DeprecatedSetReservationList {
            master_edition: self.master_edition.expect("master_edition is not set"),

            reservation_list: self.reservation_list.expect("reservation_list is not set"),

            resource: self.resource.expect("resource is not set"),
        };
        let args = DeprecatedSetReservationListInstructionArgs::new(
            self.reservations.expect("reservations is not set"),
            self.total_reservation_spots,
            self.offset.expect("offset is not set"),
            self.total_spot_offset
                .expect("total_spot_offset is not set"),
        );
        accounts.instruction(args)
    }
}

pub struct DeprecatedSetReservationListInstructionArgs {
    discriminator: u8,
    pub reservations: Vec<Reservation>,
    pub total_reservation_spots: Option<u64>,
    pub offset: u64,
    pub total_spot_offset: u64,
}

impl DeprecatedSetReservationListInstructionArgs {
    pub fn new(
        reservations: Vec<Reservation>,
        total_reservation_spots: Option<u64>,
        offset: u64,
        total_spot_offset: u64,
    ) -> Self {
        Self {
            discriminator: 5,
            reservations,
            total_reservation_spots,
            offset,
            total_spot_offset,
        }
    }
}
