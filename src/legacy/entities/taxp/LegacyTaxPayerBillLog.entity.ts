import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerBillLog' })
export class LegacyTaxPayerBillLog {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerBillLogID' })
  taxPayerBillLogID: number;

  @Column({ type: 'bigint', name: 'TaxPayerBillItemRef' })
  taxPayerBillItemRef: number;

  @Column({ type: 'bigint', name: 'TaxPayerDataLogRef' })
  taxPayerDataLogRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}