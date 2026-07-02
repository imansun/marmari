import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExternalCreditProviderTransaction' })
export class LegacyExternalCreditProviderTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'ExternalCreditProviderTransactionID' })
  externalCreditProviderTransactionID: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'DiscountAmount', nullable: true })
  discountAmount: number | null;

  @Column({ type: 'character varying', name: 'DepositNumber' })
  depositNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DepositDate' })
  depositDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'InvoicePaymentDate' })
  invoicePaymentDate: Date;

  @Column({ type: 'character varying', name: 'ProviderReferenceNumber' })
  providerReferenceNumber: string;

  @Column({ type: 'character varying', name: 'ExternalCode' })
  externalCode: string;

  @Column({ type: 'character varying', name: 'UniquePaymentID' })
  uniquePaymentID: string;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'bigint', name: 'ExternalCreditProviderPreReceiptRef', nullable: true })
  externalCreditProviderPreReceiptRef: number | null;

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

}