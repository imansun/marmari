import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterTextPdfHistory' })
export class LegacyLetterTextPdfHistory {
  @PrimaryColumn({ type: 'bigint', name: 'LetterTextPdfHistoryID' })
  letterTextPdfHistoryID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'LetterTextRef' })
  letterTextRef: number;

  @Column({ type: 'uuid', name: 'PdfContentGuid' })
  pdfContentGuid: string;

  @Column({ type: 'character varying', name: 'IP' })
  iP: string;

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