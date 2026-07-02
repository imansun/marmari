import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentAgreementItem' })
export class LegacyPaymentAgreementItem {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentAgreementItemID' })
  paymentAgreementItemID: number;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef' })
  paymentAgreementRef: number;

  @Column({ type: 'integer', name: 'InstalmentNo' })
  instalmentNo: number;

  @Column({ type: 'integer', name: 'ReceiptType' })
  receiptType: number;

  @Column({ type: 'numeric', name: 'Share' })
  share: number;

  @Column({ type: 'integer', name: 'ReceiptDatePlusMonth' })
  receiptDatePlusMonth: number;

  @Column({ type: 'integer', name: 'ReceiptDatePlusDay' })
  receiptDatePlusDay: number;

  @Column({ type: 'timestamp without time zone', name: 'FixedReceiptDate', nullable: true })
  fixedReceiptDate: Date | null;

  @Column({ type: 'boolean', name: 'IsDateEqualsReceiptDate' })
  isDateEqualsReceiptDate: boolean;

  @Column({ type: 'timestamp without time zone', name: 'FixedChequeDate', nullable: true })
  fixedChequeDate: Date | null;

  @Column({ type: 'integer', name: 'ChequeDatePlusMonth' })
  chequeDatePlusMonth: number;

  @Column({ type: 'integer', name: 'ChequeDatePlusDay' })
  chequeDatePlusDay: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}