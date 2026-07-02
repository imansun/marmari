import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductUnitTolerance' })
export class LegacyProductUnitTolerance {
  @PrimaryColumn({ type: 'bigint', name: 'ProductUnitToleranceID' })
  productUnitToleranceID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'numeric', name: 'MaxIncreasePercent', nullable: true })
  maxIncreasePercent: number | null;

  @Column({ type: 'numeric', name: 'MaxDecreasePercent', nullable: true })
  maxDecreasePercent: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}