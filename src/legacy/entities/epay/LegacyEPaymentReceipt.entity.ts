import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EPaymentReceipt' })
export class LegacyEPaymentReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'EPaymentReceiptID' })
  ePaymentReceiptID: number;

  @Column({ type: 'bigint', name: 'EPaymentRef' })
  ePaymentRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}