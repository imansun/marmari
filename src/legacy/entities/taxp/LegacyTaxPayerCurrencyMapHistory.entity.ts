import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerCurrencyMapHistory' })
export class LegacyTaxPayerCurrencyMapHistory {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerCurrencyMapHistoryID' })
  taxPayerCurrencyMapHistoryID: number;

  @Column({ type: 'bigint', name: 'TaxPayerCurrencyMapRef' })
  taxPayerCurrencyMapRef: number;

  @Column({ type: 'bigint', name: 'PreviousCurrencyRef' })
  previousCurrencyRef: number;

  @Column({ type: 'bigint', name: 'CurrentCurrencyRef' })
  currentCurrencyRef: number;

  @Column({ type: 'bigint', name: 'PreviousTaxPayerCurrencyRef' })
  previousTaxPayerCurrencyRef: number;

  @Column({ type: 'bigint', name: 'CurrentTaxPayerCurrencyRef' })
  currentTaxPayerCurrencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}