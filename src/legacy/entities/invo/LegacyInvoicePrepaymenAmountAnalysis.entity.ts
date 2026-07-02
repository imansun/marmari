import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoicePrepaymenAmountAnalysis' })
export class LegacyInvoicePrepaymenAmountAnalysis {
  @PrimaryColumn({ type: 'bigint', name: 'InvoicePrepaymenAmountAnalysisID' })
  invoicePrepaymenAmountAnalysisID: number;

  @Column({ type: 'bigint', name: 'AccountTransactionAnalysisRef' })
  accountTransactionAnalysisRef: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'integer', name: 'ReferenceDocumentType' })
  referenceDocumentType: number;

  @Column({ type: 'bigint', name: 'ReferenceDocumentRef' })
  referenceDocumentRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}