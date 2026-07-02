import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeviceConfigurationValue' })
export class LegacyDeviceConfigurationValue {
  @PrimaryColumn({ type: 'bigint', name: 'DeviceConfigurationValueID' })
  deviceConfigurationValueID: number;

  @Column({ type: 'bigint', name: 'DeviceRef' })
  deviceRef: number;

  @Column({ type: 'character varying', name: 'ParameterUniqueKey' })
  parameterUniqueKey: string;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}