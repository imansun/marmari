import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartyAddress' })
export class LegacyPartyAddress {
  @PrimaryColumn({ type: 'bigint', name: 'PartyAddressID' })
  partyAddressID: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bigint', name: 'AddressRef' })
  addressRef: number;

  @Column({ type: 'boolean', name: 'IsMainAddress' })
  isMainAddress: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'GLNCode', nullable: true })
  gLNCode: string | null;

}