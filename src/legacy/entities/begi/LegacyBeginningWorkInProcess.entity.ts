import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BeginningWorkInProcess' })
export class LegacyBeginningWorkInProcess {
  @PrimaryColumn({ type: 'bigint', name: 'BeginningWorkInProcessID' })
  beginningWorkInProcessID: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef' })
  billOfMaterialRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'LabourCompletePercentage' })
  labourCompletePercentage: number;

  @Column({ type: 'numeric', name: 'OverheadCompletePercentage' })
  overheadCompletePercentage: number;

  @Column({ type: 'numeric', name: 'LabourPrice' })
  labourPrice: number;

  @Column({ type: 'numeric', name: 'OverheadPrice' })
  overheadPrice: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

}