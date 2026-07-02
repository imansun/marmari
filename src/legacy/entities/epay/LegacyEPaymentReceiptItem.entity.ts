import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EPaymentReceiptItem' })
export class LegacyEPaymentReceiptItem {
  @PrimaryColumn({ type: 'bigint', name: 'EPaymentReceiptItemID' })
  ePaymentReceiptItemID: number;

  @Column({ type: 'bigint', name: 'EPaymentReceiptRef' })
  ePaymentReceiptRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRequestOrdinaryItemRef' })
  receiptRequestOrdinaryItemRef: number;

  @Column({ type: 'numeric', name: 'AllocatedAmount' })
  allocatedAmount: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}