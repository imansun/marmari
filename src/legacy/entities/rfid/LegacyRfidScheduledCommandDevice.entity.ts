import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidScheduledCommandDevice' })
export class LegacyRfidScheduledCommandDevice {
  @PrimaryColumn({ type: 'bigint', name: 'RfidScheduledCommandDeviceID' })
  rfidScheduledCommandDeviceID: number;

  @Column({ type: 'bigint', name: 'RfidScheduledCommandRef' })
  rfidScheduledCommandRef: number;

  @Column({ type: 'bigint', name: 'RfidDeviceRef' })
  rfidDeviceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}