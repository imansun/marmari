import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceivedDocumentAttachment' })
export class LegacyReceivedDocumentAttachment {
  @PrimaryColumn({ type: 'bigint', name: 'ReceivedDocumentAttachmentID' })
  receivedDocumentAttachmentID: number;

  @Column({ type: 'bigint', name: 'ReceivedDocumentRef' })
  receivedDocumentRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'integer', name: 'Size' })
  size: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'TraceID' })
  traceID: string;

  @Column({ type: 'boolean', name: 'IsReceived' })
  isReceived: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}