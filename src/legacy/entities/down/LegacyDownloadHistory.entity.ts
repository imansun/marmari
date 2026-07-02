import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DownloadHistory' })
export class LegacyDownloadHistory {
  @PrimaryColumn({ type: 'bigint', name: 'DownloadHistoryID' })
  downloadHistoryID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'ContentLength' })
  contentLength: number;

  @Column({ type: 'integer', name: 'DocumentsCount', nullable: true })
  documentsCount: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DownloadedAt' })
  downloadedAt: Date;

  @Column({ type: 'bigint', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}