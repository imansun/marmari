import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityUnit' })
export class LegacyEntityUnit {
  @PrimaryColumn({ type: 'bigint', name: 'EntityUnitID' })
  entityUnitID: number;

  @Column({ type: 'bigint', name: 'MeasurableEntityRef' })
  measurableEntityRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsMasterUnit' })
  isMasterUnit: boolean;

  @Column({ type: 'boolean', name: 'IsSecondUnit' })
  isSecondUnit: boolean;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

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

}