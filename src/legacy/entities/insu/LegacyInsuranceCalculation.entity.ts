import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InsuranceCalculation' })
export class LegacyInsuranceCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'InsuranceCalculationID' })
  insuranceCalculationID: number;

  @Column({ type: 'bigint', name: 'ItemRef' })
  itemRef: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'timestamp without time zone', name: 'CalculationDate' })
  calculationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'integer', name: 'Duration' })
  duration: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

}