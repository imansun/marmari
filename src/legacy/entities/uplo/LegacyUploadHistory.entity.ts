import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UploadHistory' })
export class LegacyUploadHistory {
  @PrimaryColumn({ type: 'bigint', name: 'UploadHistoryID' })
  uploadHistoryID: number;

  @Column({ type: 'bigint', name: 'ContentLength' })
  contentLength: number;

  @Column({ type: 'integer', name: 'DocumentsCount', nullable: true })
  documentsCount: number | null;

  @Column({ type: 'timestamp without time zone', name: 'UploadedAt' })
  uploadedAt: Date;

  @Column({ type: 'bigint', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}