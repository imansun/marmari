import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailBusinessPolicySettings' })
export class LegacyRetailBusinessPolicySettings {
  @PrimaryColumn({ type: 'bigint', name: 'RetailBusinessPolicySettingsID' })
  retailBusinessPolicySettingsID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'ScheduleRef', nullable: true })
  scheduleRef: number | null;

  @Column({ type: 'boolean', name: 'IsApplicableToFreeProducts' })
  isApplicableToFreeProducts: boolean;

  @Column({ type: 'boolean', name: 'IsApplicableToBasedInvoiceItems' })
  isApplicableToBasedInvoiceItems: boolean;

  @Column({ type: 'boolean', name: 'IsRoundingApplicableToBasedReturnInvoice' })
  isRoundingApplicableToBasedReturnInvoice: boolean;

  @Column({ type: 'boolean', name: 'IsDeliveryTypeApplicableToBasedReturnInvoice' })
  isDeliveryTypeApplicableToBasedReturnInvoice: boolean;

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

  @Column({ type: 'character varying', name: 'AliasPolicyTitle', nullable: true })
  aliasPolicyTitle: string | null;

  @Column({ type: 'boolean', name: 'IgnoreMiscellaneousAdditionsAtBasedReturnInvoice' })
  ignoreMiscellaneousAdditionsAtBasedReturnInvoice: boolean;

  @Column({ type: 'boolean', name: 'IsApplicableToQuickPrice' })
  isApplicableToQuickPrice: boolean;

}