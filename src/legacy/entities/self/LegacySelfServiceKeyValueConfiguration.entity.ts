import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceKeyValueConfiguration' })
export class LegacySelfServiceKeyValueConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceKeyValueConfigurationID' })
  selfServiceKeyValueConfigurationID: number;

  @Column({ type: 'character varying', name: 'ConfigKey' })
  configKey: string;

  @Column({ type: 'character varying', name: 'ConfigValue', nullable: true })
  configValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}