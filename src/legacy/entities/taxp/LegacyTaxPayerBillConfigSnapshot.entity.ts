import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerBillConfigSnapshot' })
export class LegacyTaxPayerBillConfigSnapshot {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerBillConfigSnapshotID' })
  taxPayerBillConfigSnapshotID: number;

  @Column({ type: 'bigint', name: 'TaxPayerBillRef' })
  taxPayerBillRef: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}