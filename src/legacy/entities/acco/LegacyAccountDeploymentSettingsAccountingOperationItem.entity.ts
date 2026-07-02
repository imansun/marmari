import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDeploymentSettingsAccountingOperationItem' })
export class LegacyAccountDeploymentSettingsAccountingOperationItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDeploymentSettingsAccountingOperationItemID' })
  accountDeploymentSettingsAccountingOperationItemID: number;

  @Column({ type: 'bigint', name: 'AccountDeploymentSettingsAccountingOperationRef' })
  accountDeploymentSettingsAccountingOperationRef: number;

  @Column({ type: 'bigint', name: 'RefParam1', nullable: true })
  refParam1: number | null;

  @Column({ type: 'bigint', name: 'RefParam2', nullable: true })
  refParam2: number | null;

  @Column({ type: 'integer', name: 'IntParam1', nullable: true })
  intParam1: number | null;

  @Column({ type: 'integer', name: 'IntParam2', nullable: true })
  intParam2: number | null;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}