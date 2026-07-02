import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDeploymentSettingsCashFlowFactorItem' })
export class LegacyAccountDeploymentSettingsCashFlowFactorItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDeploymentSettingsCashFlowFactorItemID' })
  accountDeploymentSettingsCashFlowFactorItemID: number;

  @Column({ type: 'bigint', name: 'AccountDeploymentSettingsCashFlowFactorRef' })
  accountDeploymentSettingsCashFlowFactorRef: number;

  @Column({ type: 'bigint', name: 'RefParam1', nullable: true })
  refParam1: number | null;

  @Column({ type: 'bigint', name: 'RefParam2', nullable: true })
  refParam2: number | null;

  @Column({ type: 'bigint', name: 'RefParam3', nullable: true })
  refParam3: number | null;

  @Column({ type: 'integer', name: 'IntParam1', nullable: true })
  intParam1: number | null;

  @Column({ type: 'integer', name: 'IntParam2', nullable: true })
  intParam2: number | null;

  @Column({ type: 'integer', name: 'IntParam3', nullable: true })
  intParam3: number | null;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef', nullable: true })
  cashFlowFactorRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}