import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BasculePaperItemDetail' })
export class LegacyBasculePaperItemDetail {
  @PrimaryColumn({ type: 'bigint', name: 'BasculePaperItemDetailID' })
  basculePaperItemDetailID: number;

  @Column({ type: 'bigint', name: 'BasculePaperItemRef' })
  basculePaperItemRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'numeric', name: 'ShippedQuantity', nullable: true })
  shippedQuantity: number | null;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'integer', name: 'LoadPriority' })
  loadPriority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'numeric', name: 'PackageQuantity', nullable: true })
  packageQuantity: number | null;

  @Column({ type: 'numeric', name: 'DeliveryQuantityMaxIncreasePercent', nullable: true })
  deliveryQuantityMaxIncreasePercent: number | null;

}