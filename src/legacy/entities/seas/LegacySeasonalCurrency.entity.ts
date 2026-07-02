import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalCurrency' })
export class LegacySeasonalCurrency {
  @PrimaryColumn({ type: 'bigint', name: 'SeasonalCurrencyID' })
  seasonalCurrencyID: number;

  @Column({ type: 'bigint', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}