import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentItemAnalyze' })
export class LegacyDocumentItemAnalyze {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentItemAnalyzeID' })
  documentItemAnalyzeID: number;

  @Column({ type: 'bigint', name: 'DocumentAnalyzeRef', nullable: true })
  documentAnalyzeRef: number | null;

  @Column({ type: 'bigint', name: 'RequestItemRef' })
  requestItemRef: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'integer', name: 'DocumentItemType' })
  documentItemType: number;

  @Column({ type: 'character varying', name: 'DocumentItemNumber', nullable: true })
  documentItemNumber: string | null;

  @Column({ type: 'character varying', name: 'DocumentNumber' })
  documentNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'numeric', name: 'AllocatedAmount' })
  allocatedAmount: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'boolean', name: 'ConvertedToComprehensiveAnalysis', nullable: true })
  convertedToComprehensiveAnalysis: boolean | null;

  @Column({ type: 'bigint', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'character varying', name: 'Tag', nullable: true })
  tag: string | null;

}