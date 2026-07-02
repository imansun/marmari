import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PackagingMethodItem' })
export class LegacyPackagingMethodItem {
  @PrimaryColumn({ type: 'bigint', name: 'PackagingMethodItemID' })
  packagingMethodItemID: number;

  @Column({ type: 'bigint', name: 'PackagingMethodRef' })
  packagingMethodRef: number;

  @Column({ type: 'integer', name: 'Level' })
  level: number;

  @Column({ type: 'bigint', name: 'DestinationPackageRef' })
  destinationPackageRef: number;

  @Column({ type: 'bigint', name: 'SourcePackageRef', nullable: true })
  sourcePackageRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MaxIncreasePercent' })
  maxIncreasePercent: number;

  @Column({ type: 'numeric', name: 'MaxDecreasePercent' })
  maxDecreasePercent: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}