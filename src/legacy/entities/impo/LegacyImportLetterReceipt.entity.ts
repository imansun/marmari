import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ImportLetterReceipt' })
export class LegacyImportLetterReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'ImportLetterReceiptID' })
  importLetterReceiptID: number;

  @Column({ type: 'character varying', name: 'ReceiverName', nullable: true })
  receiverName: string | null;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'DocTemplateRef' })
  docTemplateRef: number;

  @Column({ type: 'uuid', name: 'PdfContentGuid', nullable: true })
  pdfContentGuid: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}