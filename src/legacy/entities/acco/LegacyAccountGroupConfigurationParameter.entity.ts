import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupConfigurationParameter' })
export class LegacyAccountGroupConfigurationParameter {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupConfigurationParameterID' })
  accountGroupConfigurationParameterID: number;

  @Column({ type: 'bigint', name: 'AccountGroupConfigurationRef' })
  accountGroupConfigurationRef: number;

  @Column({ type: 'character varying', name: 'Parameter' })
  parameter: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}