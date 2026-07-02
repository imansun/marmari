import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomAddress' })
export class LegacyCustomAddress {
  @PrimaryColumn({ type: 'bigint', name: 'CustomAddressID' })
  customAddressID: number;

  @Column({ type: 'bigint', name: 'CustomRef' })
  customRef: number;

  @Column({ type: 'bigint', name: 'PartyAddressRef' })
  partyAddressRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}