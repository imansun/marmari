import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliationItem' })
export class LegacyVoucherReconciliationItem {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationItemID' })
  voucherReconciliationItemID: number;

  @Column({ type: 'bigint', name: 'VoucherReconciliationRef' })
  voucherReconciliationRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'bigint', name: 'VoucherItemRef', nullable: true })
  voucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'DeploymentItemRef', nullable: true })
  deploymentItemRef: number | null;

  @Column({ type: 'boolean', name: 'IsAutomatic' })
  isAutomatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}