import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UnloadingOrderItem' })
export class LegacyUnloadingOrderItem {
  @PrimaryColumn({ type: 'bigint', name: 'UnloadingOrderItemID' })
  unloadingOrderItemID: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'character varying', name: 'ReferenceCode', nullable: true })
  referenceCode: string | null;

  @Column({ type: 'bigint', name: 'UnloadingOrderRef' })
  unloadingOrderRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'numeric', name: 'PackagingWeight', nullable: true })
  packagingWeight: number | null;

  @Column({ type: 'bigint', name: 'PackagingWeightUnitRef', nullable: true })
  packagingWeightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'QuantityPerPackage', nullable: true })
  quantityPerPackage: number | null;

  @Column({ type: 'numeric', name: 'MaxQuantityPerPackage', nullable: true })
  maxQuantityPerPackage: number | null;

  @Column({ type: 'numeric', name: 'MinQuantityPerPackage', nullable: true })
  minQuantityPerPackage: number | null;

  @Column({ type: 'numeric', name: 'TolerancePercent' })
  tolerancePercent: number;

  @Column({ type: 'bigint', name: 'CounterpartEntityRef', nullable: true })
  counterpartEntityRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'DeliverableQuantity' })
  deliverableQuantity: number;

  @Column({ type: 'numeric', name: 'DeliveryQuantityMaxIncreasePercent', nullable: true })
  deliveryQuantityMaxIncreasePercent: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'PreviousState', nullable: true })
  previousState: number | null;

  @Column({ type: 'numeric', name: 'DeliverableMajorUnitQuantity' })
  deliverableMajorUnitQuantity: number;

}