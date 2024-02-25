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
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';

export type ReservationV1 = {
  address: Address;
  spotsRemaining: number;
  totalSpots: number;
};

export type ReservationV1Args = ReservationV1;

export function getReservationV1Encoder() {
  return getStructEncoder([
    ['address', getAddressEncoder()],
    ['spotsRemaining', getU8Encoder()],
    ['totalSpots', getU8Encoder()],
  ]) satisfies Encoder<ReservationV1Args>;
}

export function getReservationV1Decoder() {
  return getStructDecoder([
    ['address', getAddressDecoder()],
    ['spotsRemaining', getU8Decoder()],
    ['totalSpots', getU8Decoder()],
  ]) satisfies Decoder<ReservationV1>;
}

export function getReservationV1Codec(): Codec<
  ReservationV1Args,
  ReservationV1
> {
  return combineCodec(getReservationV1Encoder(), getReservationV1Decoder());
}
