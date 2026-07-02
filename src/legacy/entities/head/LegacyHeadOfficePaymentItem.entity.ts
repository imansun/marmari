import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HeadOfficePaymentItem' })
export class LegacyHeadOfficePaymentItem {
  @PrimaryColumn({ type: 'bigint', name: 'HeadOfficePaymentItemID' })
  headOfficePaymentItemID: number;

  @Column({ type: 'bigint', name: 'HeadOfficePaymentRef' })
  headOfficePaymentRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'PaymentType', nullable: true })
  paymentType: number | null;

  @Column({ type: 'bigint', name: 'BankAccountRef', nullable: true })
  bankAccountRef: number | null;

  @Column({ type: 'character varying', name: 'ReceiptNumber', nullable: true })
  receiptNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'PaymentDate', nullable: true })
  paymentDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}