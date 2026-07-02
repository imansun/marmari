import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HeadOfficePerformanceSummaryPayment' })
export class LegacyHeadOfficePerformanceSummaryPayment {
  @PrimaryColumn({ type: 'bigint', name: 'HeadOfficePerformanceSummaryPaymentID' })
  headOfficePerformanceSummaryPaymentID: number;

  @Column({ type: 'bigint', name: 'BaseHeadOfficePerformanceSummaryPaymentRef', nullable: true })
  baseHeadOfficePerformanceSummaryPaymentRef: number | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

  @Column({ type: 'integer', name: 'ElectronicReceiptTransmission' })
  electronicReceiptTransmission: number;

  @Column({ type: 'integer', name: 'BankReceiptTransmission' })
  bankReceiptTransmission: number;

  @Column({ type: 'integer', name: 'ProductCouponTransmission' })
  productCouponTransmission: number;

}