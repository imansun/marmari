import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FaxDocument' })
export class LegacyFaxDocument {
  @PrimaryColumn({ type: 'bigint', name: 'FaxDocumentID' })
  faxDocumentID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'uuid', name: 'FileGuid' })
  fileGuid: string;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'integer', name: 'Size', nullable: true })
  size: number | null;

  @Column({ type: 'integer', name: 'Pages', nullable: true })
  pages: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}