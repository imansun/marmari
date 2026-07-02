import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationTreasuryItem' })
export class LegacyReconciliationTreasuryItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationTreasuryItemID' })
  reconciliationTreasuryItemID: number;

  @Column({ type: 'bigint', name: 'ReconciliationRef' })
  reconciliationRef: number;

  @Column({ type: 'integer', name: 'RelationNumber' })
  relationNumber: number;

  @Column({ type: 'bigint', name: 'BankAccountTransactionRef', nullable: true })
  bankAccountTransactionRef: number | null;

  @Column({ type: 'bigint', name: 'DeploymentTreasuryItemRef', nullable: true })
  deploymentTreasuryItemRef: number | null;

  @Column({ type: 'boolean', name: 'IsAutomatic' })
  isAutomatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}