import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterContent' })
export class LegacyLetterContent {
  @PrimaryColumn({ type: 'bigint', name: 'LetterContentID' })
  letterContentID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'LetterTemplateRef', nullable: true })
  letterTemplateRef: number | null;

  @Column({ type: 'uuid', name: 'ContentGuid', nullable: true })
  contentGuid: string | null;

  @Column({ type: 'uuid', name: 'SignedPdfContentGuid', nullable: true })
  signedPdfContentGuid: string | null;

  @Column({ type: 'uuid', name: 'PdfContentGuid', nullable: true })
  pdfContentGuid: string | null;

  @Column({ type: 'character varying', name: 'Annotation', nullable: true })
  annotation: string | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Extention' })
  extention: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

  @Column({ type: 'bigint', name: 'ContentSize', default: 0 })
  contentSize: number;

}