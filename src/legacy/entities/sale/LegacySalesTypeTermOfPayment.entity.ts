import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesTypeTermOfPayment' })
export class LegacySalesTypeTermOfPayment {
  @PrimaryColumn({ type: 'bigint', name: 'SalesTypeTermOfPaymentID' })
  salesTypeTermOfPaymentID: number;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'bigint', name: 'TermOfPaymentRef' })
  termOfPaymentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}