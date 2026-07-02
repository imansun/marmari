import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailProduct' })
export class LegacyRetailProduct {
  @PrimaryColumn({ type: 'bigint', name: 'RetailProductID' })
  retailProductID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'DefaultUnitRef' })
  defaultUnitRef: number;

  @Column({ type: 'bigint', name: 'ReferenceUnitRef', nullable: true })
  referenceUnitRef: number | null;

  @Column({ type: 'boolean', name: 'OverrideGlobalReserveSettings' })
  overrideGlobalReserveSettings: boolean;

  @Column({ type: 'boolean', name: 'OverrideGlobalSalesSettings' })
  overrideGlobalSalesSettings: boolean;

  @Column({ type: 'boolean', name: 'AllowNegativeReserve', nullable: true })
  allowNegativeReserve: boolean | null;

  @Column({ type: 'numeric', name: 'MaxNegativeReserveQuantity', nullable: true })
  maxNegativeReserveQuantity: number | null;

  @Column({ type: 'boolean', name: 'HasNegativeInventory' })
  hasNegativeInventory: boolean;

  @Column({ type: 'numeric', name: 'MaxNegativeInventory', nullable: true })
  maxNegativeInventory: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsSendableToScale' })
  isSendableToScale: boolean;

  @Column({ type: 'boolean', name: 'PricingWithSpecificAccess' })
  pricingWithSpecificAccess: boolean;

  @Column({ type: 'boolean', name: 'IsExpandableFeature', nullable: true })
  isExpandableFeature: boolean | null;

  @Column({ type: 'boolean', name: 'IsIncludesToppingfeature', nullable: true })
  isIncludesToppingfeature: boolean | null;

}