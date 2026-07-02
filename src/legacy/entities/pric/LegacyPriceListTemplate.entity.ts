import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListTemplate' })
export class LegacyPriceListTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListTemplateID' })
  priceListTemplateID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bigint', name: 'ProductEntityGroupingRef', nullable: true })
  productEntityGroupingRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerEntityGroupingRef', nullable: true })
  customerEntityGroupingRef: number | null;

  @Column({ type: 'boolean', name: 'IsEnterpriseWide' })
  isEnterpriseWide: boolean;

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

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsQuickPricingTemplate' })
  isQuickPricingTemplate: boolean;

  @Column({ type: 'boolean', name: 'AutoCalculateFeeFromConsumerFee' })
  autoCalculateFeeFromConsumerFee: boolean;

  @Column({ type: 'boolean', name: 'PricingWithSpecificAccess' })
  pricingWithSpecificAccess: boolean;

}