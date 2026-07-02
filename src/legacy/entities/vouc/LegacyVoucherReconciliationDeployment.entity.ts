import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherReconciliationDeployment' })
export class LegacyVoucherReconciliationDeployment {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherReconciliationDeploymentID' })
  voucherReconciliationDeploymentID: number;

  @Column({ type: 'bigint', name: 'ReconciliationDeploymentRef' })
  reconciliationDeploymentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}