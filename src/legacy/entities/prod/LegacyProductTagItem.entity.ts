import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTagItem' })
export class LegacyProductTagItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagItemID' })
  productTagItemID: number;

  @Column({ type: 'bigint', name: 'ProductTagRef' })
  productTagRef: number;

  @Column({ type: 'character varying', name: 'ProductName', nullable: true })
  productName: string | null;

  @Column({ type: 'character varying', name: 'ProductNumber', nullable: true })
  productNumber: string | null;

  @Column({ type: 'character varying', name: 'UnitName', nullable: true })
  unitName: string | null;

  @Column({ type: 'character varying', name: 'RetailShopTitle', nullable: true })
  retailShopTitle: string | null;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor3', nullable: true })
  trackingFactor3: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor4', nullable: true })
  trackingFactor4: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor5', nullable: true })
  trackingFactor5: string | null;

  @Column({ type: 'numeric', name: 'Price', nullable: true })
  price: number | null;

  @Column({ type: 'numeric', name: 'NetPrice', nullable: true })
  netPrice: number | null;

  @Column({ type: 'numeric', name: 'DiscountPercent', nullable: true })
  discountPercent: number | null;

  @Column({ type: 'numeric', name: 'DiscountAmount', nullable: true })
  discountAmount: number | null;

  @Column({ type: 'numeric', name: 'DiscountedPrice', nullable: true })
  discountedPrice: number | null;

  @Column({ type: 'numeric', name: 'Price2nd', nullable: true })
  price2nd: number | null;

  @Column({ type: 'numeric', name: 'NetPrice2nd', nullable: true })
  netPrice2nd: number | null;

  @Column({ type: 'numeric', name: 'DiscountPercent2nd', nullable: true })
  discountPercent2nd: number | null;

  @Column({ type: 'numeric', name: 'DiscountAmount2nd', nullable: true })
  discountAmount2nd: number | null;

  @Column({ type: 'numeric', name: 'DiscountedPrice2nd', nullable: true })
  discountedPrice2nd: number | null;

  @Column({ type: 'bigint', name: 'MaximumPrintableTags', nullable: true })
  maximumPrintableTags: number | null;

  @Column({ type: 'character varying', name: 'SpecificationValue1', nullable: true })
  specificationValue1: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue2', nullable: true })
  specificationValue2: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue3', nullable: true })
  specificationValue3: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue4', nullable: true })
  specificationValue4: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue5', nullable: true })
  specificationValue5: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue6', nullable: true })
  specificationValue6: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue7', nullable: true })
  specificationValue7: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue8', nullable: true })
  specificationValue8: string | null;

  @Column({ type: 'character varying', name: 'SpecificationValue9', nullable: true })
  specificationValue9: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'PartSerial', nullable: true })
  partSerial: string | null;

  @Column({ type: 'bigint', name: 'PriceListItemRef', nullable: true })
  priceListItemRef: number | null;

  @Column({ type: 'character varying', name: 'TechnicalSpecification', nullable: true })
  technicalSpecification: string | null;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'character varying', name: 'PropertiesComment', nullable: true })
  propertiesComment: string | null;

  @Column({ type: 'character varying', name: 'ProducerName', nullable: true })
  producerName: string | null;

  @Column({ type: 'character varying', name: 'BarcodeTemplate', nullable: true })
  barcodeTemplate: string | null;

  @Column({ type: 'numeric', name: 'ConsumerFee', nullable: true })
  consumerFee: number | null;

  @Column({ type: 'numeric', name: 'ConsumerFee2nd', nullable: true })
  consumerFee2nd: number | null;

  @Column({ type: 'numeric', name: 'Stock', nullable: true })
  stock: number | null;

  @Column({ type: 'character varying', name: 'AdditionalField1', nullable: true })
  additionalField1: string | null;

  @Column({ type: 'character varying', name: 'AdditionalField2', nullable: true })
  additionalField2: string | null;

  @Column({ type: 'numeric', name: 'ManualFee', nullable: true })
  manualFee: number | null;

  @Column({ type: 'numeric', name: 'ManualConsumerFee', nullable: true })
  manualConsumerFee: number | null;

}