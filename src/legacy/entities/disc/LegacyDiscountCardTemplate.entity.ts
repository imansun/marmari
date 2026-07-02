import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DiscountCardTemplate' })
export class LegacyDiscountCardTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'DiscountCardTemplateID' })
  discountCardTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'DiscountType' })
  discountType: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'boolean', name: 'CanDiscountTypeAndAmountChange', default: false })
  canDiscountTypeAndAmountChange: boolean;

  @Column({ type: 'numeric', name: 'MaximumPercentBasedDiscountAmount', nullable: true })
  maximumPercentBasedDiscountAmount: number | null;

  @Column({ type: 'boolean', name: 'CanMaximumPercentBasedDiscountAmountChange', default: false })
  canMaximumPercentBasedDiscountAmountChange: boolean;

  @Column({ type: 'numeric', name: 'NeededMinimumInvoiceAmountWhichDiscountCanBeApplicableTo', nullable: true })
  neededMinimumInvoiceAmountWhichDiscountCanBeApplicableTo: number | null;

  @Column({ type: 'boolean', name: 'CanNeededMinimumInvoiceAmountWhichDiscountCanBeApplicableToChan', default: false })
  canNeededMinimumInvoiceAmountWhichDiscountCanBeApplicableToChan: boolean;

  @Column({ type: 'bigint', name: 'ValidityDurationDays', nullable: true, default: 30 })
  validityDurationDays: number | null;

  @Column({ type: 'boolean', name: 'CanValidityDurationDaysChange', default: false })
  canValidityDurationDaysChange: boolean;

  @Column({ type: 'bigint', name: 'MaximumUtilizabilityCount', nullable: true, default: 1 })
  maximumUtilizabilityCount: number | null;

  @Column({ type: 'boolean', name: 'CanMaximumUtilizabilityCountChange', default: false })
  canMaximumUtilizabilityCountChange: boolean;

  @Column({ type: 'boolean', name: 'IsEnterpriseWide', default: false })
  isEnterpriseWide: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'bigint', name: 'ApplicabilityPolicyRef', nullable: true })
  applicabilityPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'ValuePolicyRef' })
  valuePolicyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ValidFromDate', nullable: true })
  validFromDate: Date | null;

  @Column({ type: 'boolean', name: 'CanValidFromDateChange', default: false })
  canValidFromDateChange: boolean;

}