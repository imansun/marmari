import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentPaperType' })
export class LegacyRetailDocumentPaperType {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentPaperTypeID' })
  retailDocumentPaperTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'double precision', name: 'Width' })
  width: string;

  @Column({ type: 'double precision', name: 'Height' })
  height: string;

  @Column({ type: 'boolean', name: 'IsRollPaper' })
  isRollPaper: boolean;

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