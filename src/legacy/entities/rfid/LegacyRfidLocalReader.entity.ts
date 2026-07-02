import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalReader' })
export class LegacyRfidLocalReader {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalReaderID' })
  rfidLocalReaderID: number;

  @Column({ type: 'bigint', name: 'RfidLocalControllerRef' })
  rfidLocalControllerRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'integer', name: 'GroupCode' })
  groupCode: number;

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