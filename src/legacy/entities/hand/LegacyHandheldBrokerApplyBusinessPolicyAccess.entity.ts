import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBrokerApplyBusinessPolicyAccess' })
export class LegacyHandheldBrokerApplyBusinessPolicyAccess {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBrokerApplyBusinessPolicyAccessID' })
  handheldBrokerApplyBusinessPolicyAccessID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}