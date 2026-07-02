import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PackagingMethod' })
export class LegacyPackagingMethod {
  @PrimaryColumn({ type: 'bigint', name: 'PackagingMethodID' })
  packagingMethodID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bigint', name: 'PackagingWeightUnitRef' })
  packagingWeightUnitRef: number;

  @Column({ type: 'numeric', name: 'PackagingWeight' })
  packagingWeight: number;

  @Column({ type: 'bigint', name: 'LastPackageRef' })
  lastPackageRef: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitMaximumQuantity' })
  majorUnitMaximumQuantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitMinimumQuantity' })
  majorUnitMinimumQuantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}