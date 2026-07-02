import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerBillPaymentInformation' })
export class LegacyTaxPayerBillPaymentInformation {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerBillPaymentInformationID' })
  taxPayerBillPaymentInformationID: number;

  @Column({ type: 'bigint', name: 'TaxPayerBillRef' })
  taxPayerBillRef: number;

  @Column({ type: 'integer', name: 'PaymentType' })
  paymentType: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'timestamp without time zone', name: 'PaymentDate' })
  paymentDate: Date;

  @Column({ type: 'boolean', name: 'IsManual' })
  isManual: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}