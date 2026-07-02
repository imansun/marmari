import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidDeviceAccess' })
export class LegacyRfidDeviceAccess {
  @PrimaryColumn({ type: 'bigint', name: 'RfidDeviceAccessID' })
  rfidDeviceAccessID: number;

  @Column({ type: 'bigint', name: 'RfidCardRef' })
  rfidCardRef: number;

  @Column({ type: 'bigint', name: 'RfidDeviceRef' })
  rfidDeviceRef: number;

  @Column({ type: 'integer', name: 'SynchronizationStatus', default: 1 })
  synchronizationStatus: number;

  @Column({ type: 'integer', name: 'Status', default: 0 })
  status: number;

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