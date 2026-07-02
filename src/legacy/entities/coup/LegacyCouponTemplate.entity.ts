import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CouponTemplate' })
export class LegacyCouponTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'CouponTemplateID' })
  couponTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'ValidityDurationDays', nullable: true, default: 30 })
  validityDurationDays: number | null;

  @Column({ type: 'boolean', name: 'CanValidityDurationDaysChange', default: false })
  canValidityDurationDaysChange: boolean;

  @Column({ type: 'numeric', name: 'CreditAmount' })
  creditAmount: number;

  @Column({ type: 'boolean', name: 'CanCreditAmountChange', default: false })
  canCreditAmountChange: boolean;

  @Column({ type: 'bigint', name: 'MaximumUtilizabilityCount', nullable: true, default: 1 })
  maximumUtilizabilityCount: number | null;

  @Column({ type: 'boolean', name: 'CanMaximumUtilizabilityCountChange', default: false })
  canMaximumUtilizabilityCountChange: boolean;

  @Column({ type: 'boolean', name: 'IsSaleable', default: false })
  isSaleable: boolean;

  @Column({ type: 'boolean', name: 'IsChargeable', default: false })
  isChargeable: boolean;

  @Column({ type: 'boolean', name: 'IsDifferenceRepayable', default: false })
  isDifferenceRepayable: boolean;

  @Column({ type: 'boolean', name: 'IsEnterpriseWide', default: false })
  isEnterpriseWide: boolean;

  @Column({ type: 'integer', name: 'State' })
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

  @Column({ type: 'boolean', name: 'ChangeValidFromOnAssignment' })
  changeValidFromOnAssignment: boolean;

}