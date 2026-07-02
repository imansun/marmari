import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterFax' })
export class LegacyLetterFax {
  @PrimaryColumn({ type: 'bigint', name: 'LetterFaxID' })
  letterFaxID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'FaxRef' })
  faxRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'character varying', name: 'Annotation', nullable: true })
  annotation: string | null;

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