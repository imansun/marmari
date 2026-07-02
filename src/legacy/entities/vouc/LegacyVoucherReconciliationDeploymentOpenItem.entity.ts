import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliationDeploymentOpenItem' })
export class LegacyVoucherReconciliationDeploymentOpenItem {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationDeploymentOpenItemID' })
  voucherReconciliationDeploymentOpenItemID: number;

  @Column({ type: 'bigint', name: 'VoucherReconciliationDeploymentRef' })
  voucherReconciliationDeploymentRef: number;

  @Column({ type: 'character varying', name: 'VoucherNumber' })
  voucherNumber: string;

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