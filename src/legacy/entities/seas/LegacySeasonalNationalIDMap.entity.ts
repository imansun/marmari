import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalNationalIDMap' })
export class LegacySeasonalNationalIDMap {
  @PrimaryColumn({ type: 'bigint', name: 'SeasonalNationalIDMapID' })
  seasonalNationalIDMapID: number;

  @Column({ type: 'bigint', name: 'TaxPayerRef' })
  taxPayerRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}