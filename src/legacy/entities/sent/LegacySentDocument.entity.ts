import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SentDocument' })
export class LegacySentDocument {
  @PrimaryColumn({ type: 'bigint', name: 'SentDocumentID' })
  sentDocumentID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'character varying', name: 'TraceID' })
  traceID: string;

  @Column({ type: 'timestamp without time zone', name: 'Timestamp' })
  timestamp: Date;

  @Column({ type: 'timestamp without time zone', name: 'UploadedAt', nullable: true })
  uploadedAt: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'boolean', name: 'Locked' })
  locked: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}