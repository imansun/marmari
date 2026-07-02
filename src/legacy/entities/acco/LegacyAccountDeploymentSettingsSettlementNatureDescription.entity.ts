import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDeploymentSettingsSettlementNatureDescription' })
export class LegacyAccountDeploymentSettingsSettlementNatureDescription {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDeploymentSettingsSettlementNatureDescriptionID' })
  accountDeploymentSettingsSettlementNatureDescriptionID: number;

  @Column({ type: 'character varying', name: 'SettlementNatureKey' })
  settlementNatureKey: string;

  @Column({ type: 'integer', name: 'PaymentType' })
  paymentType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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