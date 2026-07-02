import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceAnalysisAmount' })
export class LegacyInvoiceAnalysisAmount {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceID' })
  invoiceID: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'PrepaidAmountAnalysis' })
  prepaidAmountAnalysis: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}