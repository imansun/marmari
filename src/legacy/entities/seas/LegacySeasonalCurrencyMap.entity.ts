import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalCurrencyMap' })
export class LegacySeasonalCurrencyMap {
  @PrimaryColumn({ type: 'bigint', name: 'CurrencyArzMapID' })
  currencyArzMapID: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'SeasonalCurrencyRef' })
  seasonalCurrencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}