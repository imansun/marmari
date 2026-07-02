import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LogicalResourceConfiguration' })
export class LegacyLogicalResourceConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'LogicalResourceConfigurationID' })
  logicalResourceConfigurationID: number;

  @Column({ type: 'character varying', name: 'LogicalResourceKey' })
  logicalResourceKey: string;

  @Column({ type: 'boolean', name: 'NeedsLogin' })
  needsLogin: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}