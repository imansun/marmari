import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentTypeSL' })
export class LegacyPaymentTypeSL {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentTypeSLID' })
  paymentTypeSLID: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'boolean', name: 'IsPermanent' })
  isPermanent: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'PaymentTypeSLTitle' })
  paymentTypeSLTitle: string;

  @Column({ type: 'character varying', name: 'PaymentTypeSLCode' })
  paymentTypeSLCode: string;

  @Column({ type: 'boolean', name: 'IsDefaultPaymentTypeSL', default: false })
  isDefaultPaymentTypeSL: boolean;

  @Column({ type: 'bigint', name: 'DefaultCounterPartRef', nullable: true })
  defaultCounterPartRef: number | null;

}