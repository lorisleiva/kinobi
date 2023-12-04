/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  getAddressDecoder,
  getAddressEncoder,
} from '@solana/addresses';
import { Codec, Decoder, Encoder, combineCodec } from '@solana/codecs-core';
import {
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU64Decoder, getU64Encoder } from '@solana/codecs-numbers';

export type Reservation = {
  address: Address;
  spotsRemaining: bigint;
  totalSpots: bigint;
};

export type ReservationArgs = {
  address: Address;
  spotsRemaining: number | bigint;
  totalSpots: number | bigint;
};

export function getReservationEncoder(): Encoder<ReservationArgs> {
  return getStructEncoder<ReservationArgs>([
    ['address', getAddressEncoder()],
    ['spotsRemaining', getU64Encoder()],
    ['totalSpots', getU64Encoder()],
  ]) as Encoder<ReservationArgs>;
}

export function getReservationDecoder(): Decoder<Reservation> {
  return getStructDecoder<Reservation>([
    ['address', getAddressDecoder()],
    ['spotsRemaining', getU64Decoder()],
    ['totalSpots', getU64Decoder()],
  ]) as Decoder<Reservation>;
}

export function getReservationCodec(): Codec<ReservationArgs, Reservation> {
  return combineCodec(getReservationEncoder(), getReservationDecoder());
}
