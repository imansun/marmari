import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourReceipt' })
export class LegacyTourReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'TourReceiptID' })
  tourReceiptID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRef' })
  receiptRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}