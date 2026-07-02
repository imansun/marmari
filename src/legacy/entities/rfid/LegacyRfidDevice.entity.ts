import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidDevice' })
export class LegacyRfidDevice {
  @PrimaryColumn({ type: 'bigint', name: 'RfidDeviceID' })
  rfidDeviceID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'IP' })
  iP: string;

  @Column({ type: 'character varying', name: 'Port' })
  port: string;

  @Column({ type: 'integer', name: 'Number', default: 0 })
  number: number;

  @Column({ type: 'bigint', name: 'RfidGateRef' })
  rfidGateRef: number;

  @Column({ type: 'bigint', name: 'RfidDeviceSdkRef' })
  rfidDeviceSdkRef: number;

  @Column({ type: 'boolean', name: 'HasFingerPrint' })
  hasFingerPrint: boolean;

  @Column({ type: 'boolean', name: 'HasFaceRecognition' })
  hasFaceRecognition: boolean;

  @Column({ type: 'boolean', name: 'Classified' })
  classified: boolean;

  @Column({ type: 'integer', name: 'Status', default: 1 })
  status: number;

  @Column({ type: 'boolean', name: 'IsAvailable', default: false })
  isAvailable: boolean;

  @Column({ type: 'integer', name: 'SynchronizationStatus', default: 1 })
  synchronizationStatus: number;

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