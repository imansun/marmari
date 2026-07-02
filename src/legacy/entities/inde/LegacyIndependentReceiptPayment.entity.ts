import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndependentReceiptPayment' })
export class LegacyIndependentReceiptPayment {
  @PrimaryColumn({ type: 'bigint', name: 'IndependentReceiptPaymentID' })
  independentReceiptPaymentID: number;

  @Column({ type: 'bigint', name: 'HeadOfficePaymentRef' })
  headOfficePaymentRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRef' })
  receiptRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}