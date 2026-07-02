import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceTransfer' })
export class LegacyServiceTransfer {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceTransferID' })
  serviceTransferID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}