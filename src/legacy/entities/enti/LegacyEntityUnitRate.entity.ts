import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityUnitRate' })
export class LegacyEntityUnitRate {
  @PrimaryColumn({ type: 'bigint', name: 'EntityUnitRateID' })
  entityUnitRateID: number;

  @Column({ type: 'bigint', name: 'SourceEntityUnitRef' })
  sourceEntityUnitRef: number;

  @Column({ type: 'bigint', name: 'DestinationEntityUnitRef' })
  destinationEntityUnitRef: number;

  @Column({ type: 'numeric', name: 'SDRatio' })
  sDRatio: number;

  @Column({ type: 'numeric', name: 'DSRatio' })
  dSRatio: number;

  @Column({ type: 'numeric', name: 'Tolerance', nullable: true })
  tolerance: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsAutomaticCalculated' })
  isAutomaticCalculated: boolean;

  @Column({ type: 'smallint', name: 'Priority' })
  priority: number;

}