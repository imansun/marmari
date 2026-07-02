import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CouponTransaction' })
export class LegacyCouponTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'CouponTransactionID' })
  couponTransactionID: number;

  @Column({ type: 'bigint', name: 'GeneratedCouponInstanceRef' })
  generatedCouponInstanceRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'integer', name: 'Usage' })
  usage: number;

  @Column({ type: 'integer', name: 'BaseEntityCode', nullable: true })
  baseEntityCode: number | null;

  @Column({ type: 'bigint', name: 'BaseEntityRef', nullable: true })
  baseEntityRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

}