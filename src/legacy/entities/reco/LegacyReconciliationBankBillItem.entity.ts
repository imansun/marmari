import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationBankBillItem' })
export class LegacyReconciliationBankBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationBankBillItemID' })
  reconciliationBankBillItemID: number;

  @Column({ type: 'bigint', name: 'ReconciliationRef' })
  reconciliationRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'bigint', name: 'BankBillItemRef', nullable: true })
  bankBillItemRef: number | null;

  @Column({ type: 'bigint', name: 'DeploymentBankBillItemRef', nullable: true })
  deploymentBankBillItemRef: number | null;

  @Column({ type: 'boolean', name: 'IsAutomatic' })
  isAutomatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}