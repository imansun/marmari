import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ScanContent' })
export class LegacyScanContent {
  @PrimaryColumn({ type: 'bigint', name: 'ScanContentID' })
  scanContentID: number;

  @Column({ type: 'bigint', name: 'ScanRef' })
  scanRef: number;

  @Column({ type: 'integer', name: 'PageNumber' })
  pageNumber: number;

  @Column({ type: 'character varying', name: 'Extension' })
  extension: string;

  @Column({ type: 'uuid', name: 'ContentGuid', nullable: true })
  contentGuid: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}