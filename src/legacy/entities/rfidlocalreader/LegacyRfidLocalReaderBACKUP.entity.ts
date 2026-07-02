import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalReader_BACKUP' })
export class LegacyRfidLocalReaderBACKUP {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalReaderID' })
  rfidLocalReaderID: number;

  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalControllerRef' })
  rfidLocalControllerRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'Title' })
  title: string;

  @PrimaryColumn({ type: 'integer', name: 'Index' })
  index: number;

  @PrimaryColumn({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @PrimaryColumn({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @PrimaryColumn({ type: 'integer', name: 'GroupCode' })
  groupCode: number;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}