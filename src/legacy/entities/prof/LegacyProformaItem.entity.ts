import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaItem' })
export class LegacyProformaItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaItemID' })
  proformaItemID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'ParentItemRef', nullable: true })
  parentItemRef: number | null;

  @Column({ type: 'integer', name: 'ParentItemRowNumber', nullable: true })
  parentItemRowNumber: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bigint', name: 'PriceBaseUnitRef' })
  priceBaseUnitRef: number;

  @Column({ type: 'numeric', name: 'PriceBaseFee' })
  priceBaseFee: number;

  @Column({ type: 'numeric', name: 'DeploymentQuantity', nullable: true })
  deploymentQuantity: number | null;

  @Column({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'ParentBlockedQuantity', nullable: true })
  parentBlockedQuantity: number | null;

  @Column({ type: 'numeric', name: 'MaxIncreasePercent', nullable: true })
  maxIncreasePercent: number | null;

  @Column({ type: 'numeric', name: 'MaxDecreasePercent', nullable: true })
  maxDecreasePercent: number | null;

  @Column({ type: 'integer', name: 'DeliveryPlaceType' })
  deliveryPlaceType: number;

  @Column({ type: 'bigint', name: 'DeliveryPlaceRef' })
  deliveryPlaceRef: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'EffectiveNetPrice' })
  effectiveNetPrice: number;

  @Column({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @Column({ type: 'bigint', name: 'PackagingMethodRef', nullable: true })
  packagingMethodRef: number | null;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'integer', name: 'PackageCount' })
  packageCount: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'character varying', name: 'EstimatedShippingDate' })
  estimatedShippingDate: string;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'bigint', name: 'ShippingPointRef', nullable: true })
  shippingPointRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'numeric', name: 'NetWeight' })
  netWeight: number;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'HasReservation' })
  hasReservation: boolean;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'ConsiderToleranceStatus', default: 0 })
  considerToleranceStatus: number;

}