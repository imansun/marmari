import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidDeviceSdk' })
export class LegacyRfidDeviceSdk {
  @PrimaryColumn({ type: 'bigint', name: 'RfidDeviceSdkID' })
  rfidDeviceSdkID: number;

  @Column({ type: 'character varying', name: 'Key', nullable: true })
  key: string | null;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'DefaultPort', nullable: true })
  defaultPort: string | null;

  @Column({ type: 'boolean', name: 'IsIndexMandatory', default: false })
  isIndexMandatory: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}