import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SmartDevice' })
export class LegacySmartDevice {
  @PrimaryColumn({ type: 'bigint', name: 'SmartDeviceID' })
  smartDeviceID: number;

  @Column({ type: 'character varying', name: 'DeviceID' })
  deviceID: string;

  @Column({ type: 'integer', name: 'DeviceType' })
  deviceType: number;

  @Column({ type: 'character varying', name: 'DeviceCode' })
  deviceCode: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}