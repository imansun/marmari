import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidCardReader' })
export class LegacyRfidCardReader {
  @PrimaryColumn({ type: 'bigint', name: 'RfidCardReaderID' })
  rfidCardReaderID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Index', nullable: true })
  index: number | null;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'integer', name: 'Type', nullable: true })
  type: number | null;

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