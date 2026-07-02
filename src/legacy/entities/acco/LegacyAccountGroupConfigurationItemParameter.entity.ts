import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupConfigurationItemParameter' })
export class LegacyAccountGroupConfigurationItemParameter {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupConfigurationItemParameterID' })
  accountGroupConfigurationItemParameterID: number;

  @Column({ type: 'character varying', name: 'AccountGroupParameterKey' })
  accountGroupParameterKey: string;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bigint', name: 'AccountGroupConfigurationItemRef' })
  accountGroupConfigurationItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}