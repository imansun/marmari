import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalZone' })
export class LegacySeasonalZone {
  @PrimaryColumn({ type: 'bigint', name: 'SeasonalZoneID' })
  seasonalZoneID: number;

  @Column({ type: 'bigint', name: 'CityCode' })
  cityCode: number;

  @Column({ type: 'character varying', name: 'CityName' })
  cityName: string;

  @Column({ type: 'bigint', name: 'ProvinceCode' })
  provinceCode: number;

  @Column({ type: 'character varying', name: 'ProviceName' })
  proviceName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}