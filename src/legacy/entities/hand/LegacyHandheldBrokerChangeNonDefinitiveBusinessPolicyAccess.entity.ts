import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBrokerChangeNonDefinitiveBusinessPolicyAccess' })
export class LegacyHandheldBrokerChangeNonDefinitiveBusinessPolicyAccess {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBrokerChangeNonDefinitiveBusinessPolicyAccessID' })
  handheldBrokerChangeNonDefinitiveBusinessPolicyAccessID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}