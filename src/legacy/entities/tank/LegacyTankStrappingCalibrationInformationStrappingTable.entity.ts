import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TankStrappingCalibrationInformationStrappingTable' })
export class LegacyTankStrappingCalibrationInformationStrappingTable {
  @PrimaryColumn({ type: 'bigint', name: 'TankStrappingCalibrationInformationStrappingTableID' })
  tankStrappingCalibrationInformationStrappingTableID: number;

  @Column({ type: 'bigint', name: 'TankStrappingCalibrationInformationRef' })
  tankStrappingCalibrationInformationRef: number;

  @Column({ type: 'integer', name: 'Height' })
  height: number;

  @Column({ type: 'numeric', name: 'Volume', nullable: true })
  volume: number | null;

  @Column({ type: 'numeric', name: 'IncrementalVolume', nullable: true })
  incrementalVolume: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}