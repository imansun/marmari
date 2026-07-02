import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TrackedReceiptPayment' })
export class LegacyTrackedReceiptPayment {
  @PrimaryColumn({ type: 'bigint', name: 'TrackedReceiptPaymentID' })
  trackedReceiptPaymentID: number;

  @Column({ type: 'bigint', name: 'HeadOfficePerformanceSummaryPaymentRef' })
  headOfficePerformanceSummaryPaymentRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRef', nullable: true })
  receiptRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentRef', nullable: true })
  paymentRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}