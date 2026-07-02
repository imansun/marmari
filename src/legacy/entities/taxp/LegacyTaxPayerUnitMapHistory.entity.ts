import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerUnitMapHistory' })
export class LegacyTaxPayerUnitMapHistory {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerUnitMapHistoryID' })
  taxPayerUnitMapHistoryID: number;

  @Column({ type: 'bigint', name: 'TaxPayerUnitMapRef' })
  taxPayerUnitMapRef: number;

  @Column({ type: 'bigint', name: 'PreviousTaxPayerUnitRef' })
  previousTaxPayerUnitRef: number;

  @Column({ type: 'bigint', name: 'CurrentTaxPayerUnitRef' })
  currentTaxPayerUnitRef: number;

  @Column({ type: 'bigint', name: 'PreviousUnitRef' })
  previousUnitRef: number;

  @Column({ type: 'bigint', name: 'CurrentUnitRef' })
  currentUnitRef: number;

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