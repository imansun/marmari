import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DiscountCard' })
export class LegacyDiscountCard {
  @PrimaryColumn({ type: 'bigint', name: 'DiscountCardID' })
  discountCardID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'DiscountCardTemplateRef' })
  discountCardTemplateRef: number;

  @Column({ type: 'character varying', name: 'SerialNumber' })
  serialNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'ValidFromDate' })
  validFromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidToDate', nullable: true })
  validToDate: Date | null;

  @Column({ type: 'bigint', name: 'ValidityDurationDays', nullable: true })
  validityDurationDays: number | null;

  @Column({ type: 'integer', name: 'DiscountType' })
  discountType: number;

  @Column({ type: 'numeric', name: 'Amount', default: 0 })
  amount: number;

  @Column({ type: 'numeric', name: 'MaximumPercentBasedDiscountAmount', nullable: true })
  maximumPercentBasedDiscountAmount: number | null;

  @Column({ type: 'numeric', name: 'NeededMinimumInvoiceAmountWhichDiscountCanBeApplicableTo', nullable: true })
  neededMinimumInvoiceAmountWhichDiscountCanBeApplicableTo: number | null;

  @Column({ type: 'bigint', name: 'MaximumUtilizabilityCount', nullable: true })
  maximumUtilizabilityCount: number | null;

  @Column({ type: 'boolean', name: 'IsWholeRelatedRetailShopsWide', default: false })
  isWholeRelatedRetailShopsWide: boolean;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'integer', name: 'State', default: 1 })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

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

  @Column({ type: 'character varying', name: 'ReceiptSerialNumber' })
  receiptSerialNumber: string;

}