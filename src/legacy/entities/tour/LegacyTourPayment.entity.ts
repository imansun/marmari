import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourPayment' })
export class LegacyTourPayment {
  @PrimaryColumn({ type: 'bigint', name: 'TourPaymentID' })
  tourPaymentID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'PaymentRef' })
  paymentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}