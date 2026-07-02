import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentTypeSLItem' })
export class LegacyPaymentTypeSLItem {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentTypeSLItemID' })
  paymentTypeSLItemID: number;

  @Column({ type: 'bigint', name: 'PaymentTypeSLRef' })
  paymentTypeSLRef: number;

  @Column({ type: 'bigint', name: 'DLTypeArrangementItemRef' })
  dLTypeArrangementItemRef: number;

  @Column({ type: 'boolean', name: 'IsOptional' })
  isOptional: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}