import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentOrderItemToPaymentItem' })
export class LegacyPaymentOrderItemToPaymentItem {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentOrderItemToPaymentItemID' })
  paymentOrderItemToPaymentItemID: number;

  @Column({ type: 'bigint', name: 'PaymentRef' })
  paymentRef: number;

  @Column({ type: 'bigint', name: 'PaymentOrderItemRef' })
  paymentOrderItemRef: number;

  @Column({ type: 'bigint', name: 'PaymentItemRef' })
  paymentItemRef: number;

  @Column({ type: 'integer', name: 'PaymentDocumentItemType' })
  paymentDocumentItemType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'DraftVoucherItemRef', nullable: true })
  draftVoucherItemRef: number | null;

}