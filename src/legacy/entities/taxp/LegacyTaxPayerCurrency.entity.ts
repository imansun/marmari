import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerCurrency' })
export class LegacyTaxPayerCurrency {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerCurrencyID' })
  taxPayerCurrencyID: number;

  @Column({ type: 'bigint', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Sign' })
  sign: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}