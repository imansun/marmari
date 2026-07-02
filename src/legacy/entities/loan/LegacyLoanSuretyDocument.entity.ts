import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoanSuretyDocument' })
export class LegacyLoanSuretyDocument {
  @PrimaryColumn({ type: 'bigint', name: 'LoanSuretyDocumentID' })
  loanSuretyDocumentID: number;

  @Column({ type: 'bigint', name: 'LoanPaymentRef' })
  loanPaymentRef: number;

  @Column({ type: 'integer', name: 'TypeCode', nullable: true })
  typeCode: number | null;

  @Column({ type: 'integer', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}