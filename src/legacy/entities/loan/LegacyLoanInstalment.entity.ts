import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoanInstalment' })
export class LegacyLoanInstalment {
  @PrimaryColumn({ type: 'bigint', name: 'LoanInstalmentID' })
  loanInstalmentID: number;

  @Column({ type: 'bigint', name: 'LoanPaymentRef' })
  loanPaymentRef: number;

  @Column({ type: 'integer', name: 'PaymentYearMonth' })
  paymentYearMonth: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'PaymentMethodCode' })
  paymentMethodCode: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}