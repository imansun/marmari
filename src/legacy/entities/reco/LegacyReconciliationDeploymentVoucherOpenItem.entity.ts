import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationDeploymentVoucherOpenItem' })
export class LegacyReconciliationDeploymentVoucherOpenItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationDeploymentVoucherOpenItemID' })
  reconciliationDeploymentVoucherOpenItemID: number;

  @Column({ type: 'bigint', name: 'ReconciliationDeploymentRef' })
  reconciliationDeploymentRef: number;

  @Column({ type: 'character varying', name: 'VoucherNumber' })
  voucherNumber: string;

  @Column({ type: 'character varying', name: 'TempNumber' })
  tempNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'VoucherDate' })
  voucherDate: Date;

  @Column({ type: 'character varying', name: 'FollowUpNumber', nullable: true })
  followUpNumber: string | null;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}