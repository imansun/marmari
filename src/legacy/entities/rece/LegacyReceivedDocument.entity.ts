import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceivedDocument' })
export class LegacyReceivedDocument {
  @PrimaryColumn({ type: 'bigint', name: 'ReceivedDocumentID' })
  receivedDocumentID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'integer', name: 'TargetType', nullable: true })
  targetType: number | null;

  @Column({ type: 'bigint', name: 'TargetRef', nullable: true })
  targetRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'text', name: 'Payload', nullable: true })
  payload: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Timestamp' })
  timestamp: Date;

  @Column({ type: 'character varying', name: 'TraceID' })
  traceID: string;

  @Column({ type: 'character varying', name: 'SupplierNationalID' })
  supplierNationalID: string;

  @Column({ type: 'timestamp without time zone', name: 'DownloadedAt' })
  downloadedAt: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'AttachmentsReceived' })
  attachmentsReceived: boolean;

  @Column({ type: 'character varying', name: 'Message', nullable: true })
  message: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}