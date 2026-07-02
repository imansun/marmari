import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDeploymentSettingsAccountingOperation' })
export class LegacyAccountDeploymentSettingsAccountingOperation {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDeploymentSettingsAccountingOperationID' })
  accountDeploymentSettingsAccountingOperationID: number;

  @Column({ type: 'character varying', name: 'SettlementNatureKey' })
  settlementNatureKey: string;

  @Column({ type: 'integer', name: 'PaymentType' })
  paymentType: number;

  @Column({ type: 'integer', name: 'Param1', nullable: true })
  param1: number | null;

  @Column({ type: 'integer', name: 'Param2', nullable: true })
  param2: number | null;

  @Column({ type: 'bigint', name: 'AccountingOperationRef', nullable: true })
  accountingOperationRef: number | null;

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