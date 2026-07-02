import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashRegisterDeviceConfigurationValue' })
export class LegacyCashRegisterDeviceConfigurationValue {
  @PrimaryColumn({ type: 'bigint', name: 'CashRegisterDeviceConfigurationValueID' })
  cashRegisterDeviceConfigurationValueID: number;

  @Column({ type: 'bigint', name: 'CashRegisterDeviceRef' })
  cashRegisterDeviceRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'ParameterUniqueKey' })
  parameterUniqueKey: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}