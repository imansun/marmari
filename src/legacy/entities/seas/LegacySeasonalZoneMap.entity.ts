import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalZoneMap' })
export class LegacySeasonalZoneMap {
  @PrimaryColumn({ type: 'bigint', name: 'RegionalDivisionZoneMapID' })
  regionalDivisionZoneMapID: number;

  @Column({ type: 'bigint', name: 'SeasonalZoneRef' })
  seasonalZoneRef: number;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef' })
  regionalDivisionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}