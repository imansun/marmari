import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoanPayment' })
export class LegacyLoanPayment {
  @PrimaryColumn({ type: 'bigint', name: 'LoanPaymentID' })
  loanPaymentID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'LoanTypeRef' })
  loanTypeRef: number;

  @Column({ type: 'numeric', name: 'LoanAmount' })
  loanAmount: number;

  @Column({ type: 'integer', name: 'InstalmentQuantity' })
  instalmentQuantity: number;

  @Column({ type: 'numeric', name: 'InstalmentAmount' })
  instalmentAmount: number;

  @Column({ type: 'numeric', name: 'ExtraAmount' })
  extraAmount: number;

  @Column({ type: 'integer', name: 'ExtraPaymentMethodCode', nullable: true })
  extraPaymentMethodCode: number | null;

  @Column({ type: 'numeric', name: 'DeploymentRemainder' })
  deploymentRemainder: number;

  @Column({ type: 'numeric', name: 'Remainder' })
  remainder: number;

  @Column({ type: 'character varying', name: 'LoanNumber', nullable: true })
  loanNumber: string | null;

  @Column({ type: 'bigint', name: 'ConfirmerEmployeeRef', nullable: true })
  confirmerEmployeeRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmationDate', nullable: true })
  confirmationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'VerificationDate', nullable: true })
  verificationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmedPaymentDate', nullable: true })
  confirmedPaymentDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'PaymentDate' })
  paymentDate: Date;

  @Column({ type: 'integer', name: 'InstalmentDueYearMonth' })
  instalmentDueYearMonth: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}