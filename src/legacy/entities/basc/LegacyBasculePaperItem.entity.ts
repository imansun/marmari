import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BasculePaperItem' })
export class LegacyBasculePaperItem {
  @PrimaryColumn({ type: 'bigint', name: 'BasculePaperItemID' })
  basculePaperItemID: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'bigint', name: 'BasculePaperRef' })
  basculePaperRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'BasculeUnitRef' })
  basculeUnitRef: number;

  @Column({ type: 'numeric', name: 'FirstMeasure', nullable: true })
  firstMeasure: number | null;

  @Column({ type: 'timestamp without time zone', name: 'FirstMeasureTime', nullable: true })
  firstMeasureTime: Date | null;

  @Column({ type: 'bigint', name: 'FirstMeasureUserRef', nullable: true })
  firstMeasureUserRef: number | null;

  @Column({ type: 'numeric', name: 'SecondMeasure', nullable: true })
  secondMeasure: number | null;

  @Column({ type: 'timestamp without time zone', name: 'SecondMeasureTime', nullable: true })
  secondMeasureTime: Date | null;

  @Column({ type: 'bigint', name: 'SecondMeasureUserRef', nullable: true })
  secondMeasureUserRef: number | null;

  @Column({ type: 'numeric', name: 'Downfall', nullable: true })
  downfall: number | null;

  @Column({ type: 'numeric', name: 'ShippedQuantity' })
  shippedQuantity: number;

  @Column({ type: 'numeric', name: 'BasculeUnitConversionRate', default: 1 })
  basculeUnitConversionRate: number;

  @Column({ type: 'numeric', name: 'BasculeUnitConversionRateForPackage', nullable: true })
  basculeUnitConversionRateForPackage: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'BasculePaperSavingConfig' })
  basculePaperSavingConfig: boolean;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'numeric', name: 'PackageQuantity', nullable: true })
  packageQuantity: number | null;

  @Column({ type: 'numeric', name: 'PackagingWeight', nullable: true })
  packagingWeight: number | null;

  @Column({ type: 'numeric', name: 'DeliveryQuantityMaxIncreasePercent', nullable: true })
  deliveryQuantityMaxIncreasePercent: number | null;

  @Column({ type: 'numeric', name: 'SharingPercent', nullable: true })
  sharingPercent: number | null;

  @Column({ type: 'numeric', name: 'SharingAmount', nullable: true })
  sharingAmount: number | null;

  @Column({ type: 'integer', name: 'LoadingAndUnloadingState' })
  loadingAndUnloadingState: number;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'numeric', name: 'Increase', nullable: true })
  increase: number | null;

}