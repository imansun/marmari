import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerCurrencyMap' })
export class LegacyTaxPayerCurrencyMap {
  @PrimaryColumn({ type: 'bigint', name: 'CurrencyArzMapID' })
  currencyArzMapID: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'TaxPayerCurrencyRef' })
  taxPayerCurrencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}