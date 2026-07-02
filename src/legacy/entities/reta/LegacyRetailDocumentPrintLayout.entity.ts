import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentPrintLayout' })
export class LegacyRetailDocumentPrintLayout {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentPrintLayoutID' })
  retailDocumentPrintLayoutID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'double precision', name: 'TopMargin', default: 0 })
  topMargin: string;

  @Column({ type: 'double precision', name: 'RightMargin', default: 0 })
  rightMargin: string;

  @Column({ type: 'double precision', name: 'BottomMargin', default: 0 })
  bottomMargin: string;

  @Column({ type: 'double precision', name: 'LeftMargin', default: 0 })
  leftMargin: string;

  @Column({ type: 'bigint', name: 'PaperTypeRef', nullable: true })
  paperTypeRef: number | null;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'text', name: 'LayoutSettingsInfo' })
  layoutSettingsInfo: string;

  @Column({ type: 'character varying', name: 'SSRSReportPath', nullable: true })
  sSRSReportPath: string | null;

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