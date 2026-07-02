import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShelfSpecification' })
export class LegacyShelfSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'ShelfSpecificationID' })
  shelfSpecificationID: number;

  @Column({ type: 'bigint', name: 'ShelfRef' })
  shelfRef: number;

  @Column({ type: 'numeric', name: 'Length' })
  length: number;

  @Column({ type: 'numeric', name: 'Width' })
  width: number;

  @Column({ type: 'numeric', name: 'Height' })
  height: number;

  @Column({ type: 'bigint', name: 'LengthUnitRef' })
  lengthUnitRef: number;

  @Column({ type: 'numeric', name: 'TolerableWeight' })
  tolerableWeight: number;

  @Column({ type: 'bigint', name: 'TolerableWeightUnitRef' })
  tolerableWeightUnitRef: number;

  @Column({ type: 'numeric', name: 'VolumeTolerancePercent' })
  volumeTolerancePercent: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}