import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CargoItem' })
export class LegacyCargoItem {
  @PrimaryColumn({ type: 'bigint', name: 'CargoItemID' })
  cargoItemID: number;

  @Column({ type: 'bigint', name: 'CargoRef' })
  cargoRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'ShippingPointRef', nullable: true })
  shippingPointRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'bigint', name: 'PackagingMethodRef', nullable: true })
  packagingMethodRef: number | null;

  @Column({ type: 'numeric', name: 'MaxIncreasePercent', nullable: true })
  maxIncreasePercent: number | null;

  @Column({ type: 'numeric', name: 'MaxDecreasePercent', nullable: true })
  maxDecreasePercent: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'integer', name: 'PackageCount', nullable: true })
  packageCount: number | null;

  @Column({ type: 'numeric', name: 'PackageWeight', nullable: true })
  packageWeight: number | null;

  @Column({ type: 'bigint', name: 'PackageWeightUnitRef', nullable: true })
  packageWeightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'NetWeight' })
  netWeight: number;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'timestamp without time zone', name: 'MaxIncreasePercentRegistrationDate', nullable: true })
  maxIncreasePercentRegistrationDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}