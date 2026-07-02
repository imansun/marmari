import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Currency' })
export class LegacyCurrency {
  @PrimaryColumn({ type: 'bigint', name: 'CurrencyID' })
  currencyID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'integer', name: 'Unit' })
  unit: number;

  @Column({ type: 'integer', name: 'Precision' })
  precision: number;

  @Column({ type: 'character varying', name: 'FractionTitle', nullable: true })
  fractionTitle: string | null;

  @Column({ type: 'character varying', name: 'FractionTitle_En', nullable: true })
  fractionTitleEn: string | null;

  @Column({ type: 'integer', name: 'RoundingMethod' })
  roundingMethod: number;

  @Column({ type: 'character varying', name: 'Symbol', nullable: true })
  symbol: string | null;

  @Column({ type: 'character', name: 'Abbreviation' })
  abbreviation: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}