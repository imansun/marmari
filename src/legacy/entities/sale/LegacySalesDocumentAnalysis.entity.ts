import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesDocumentAnalysis' })
export class LegacySalesDocumentAnalysis {
  @PrimaryColumn({ type: 'bigint', name: 'SalesDocumentAnalysisID' })
  salesDocumentAnalysisID: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'bigint', name: 'AccountDebitCreditStatementItemRef' })
  accountDebitCreditStatementItemRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'boolean', name: 'ConvertedToComprehensiveAnalysis', nullable: true })
  convertedToComprehensiveAnalysis: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}