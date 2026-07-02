import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartUnit' })
export class LegacyPartUnit {
  @PrimaryColumn({ type: 'bigint', name: 'PartUnitID' })
  partUnitID: number;

  @Column({ type: 'bigint', name: 'PartID' })
  partID: number;

  @Column({ type: 'bigint', name: 'UnitID' })
  unitID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Dimension' })
  dimension: number;

  @Column({ type: 'numeric', name: 'SDRatio' })
  sDRatio: number;

  @Column({ type: 'numeric', name: 'DSRatio' })
  dSRatio: number;

  @Column({ type: 'numeric', name: 'Tolerance' })
  tolerance: number;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'numeric', name: 'Volume', nullable: true })
  volume: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'bigint', name: 'VolumeUnitRef', nullable: true })
  volumeUnitRef: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

  @Column({ type: 'bigint', name: 'DimensionUnitRef', nullable: true })
  dimensionUnitRef: number | null;

  @Column({ type: 'boolean', name: 'IsMajorUnit' })
  isMajorUnit: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}