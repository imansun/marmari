import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailBrokerHandheldDeviceSetting' })
export class LegacyRetailBrokerHandheldDeviceSetting {
  @PrimaryColumn({ type: 'bigint', name: 'RetailBrokerHandheldDeviceSettingID' })
  retailBrokerHandheldDeviceSettingID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'RetailHandheldDeviceRef', nullable: true })
  retailHandheldDeviceRef: number | null;

  @Column({ type: 'character varying', name: 'Password' })
  password: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

}