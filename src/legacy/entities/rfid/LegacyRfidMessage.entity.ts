import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidMessage' })
export class LegacyRfidMessage {
  @PrimaryColumn({ type: 'bigint', name: 'RfidMessageID' })
  rfidMessageID: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DeviceId' })
  deviceId: number;

  @Column({ type: 'character varying', name: 'DeviceIP' })
  deviceIP: string;

  @Column({ type: 'character varying', name: 'DevicePort' })
  devicePort: string;

  @Column({ type: 'bigint', name: 'IssuerId' })
  issuerId: number;

  @Column({ type: 'integer', name: 'IssuerType' })
  issuerType: number;

  @Column({ type: 'character varying', name: 'CardNumber', nullable: true })
  cardNumber: string | null;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

  @Column({ type: 'integer', name: 'Status', default: 0 })
  status: number;

  @Column({ type: 'timestamp without time zone', name: 'EnqueuedDate' })
  enqueuedDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'RequeuedDate', nullable: true })
  requeuedDate: Date | null;

  @Column({ type: 'integer', name: 'ReplayTimes' })
  replayTimes: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}