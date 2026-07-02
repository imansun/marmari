import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EventFile' })
export class LegacyEventFile {
  @PrimaryColumn({ type: 'bigint', name: 'EventFileID' })
  eventFileID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'uuid', name: 'FileGuid' })
  fileGuid: string;

  @Column({ type: 'bigint', name: 'EventInstanceMetaDataRef', nullable: true })
  eventInstanceMetaDataRef: number | null;

  @Column({ type: 'integer', name: 'Size' })
  size: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}