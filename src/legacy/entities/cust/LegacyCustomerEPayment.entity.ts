import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerEPayment' })
export class LegacyCustomerEPayment {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerEPaymentID' })
  customerEPaymentID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'EPaymentRef' })
  ePaymentRef: number;

  @Column({ type: 'bigint', name: 'EPaymentReceiptRef' })
  ePaymentReceiptRef: number;

}