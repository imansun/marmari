import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TankStrappingCalibrationInformation' })
export class LegacyTankStrappingCalibrationInformation {
  @PrimaryColumn({ type: 'bigint', name: 'TankStrappingCalibrationInformationID' })
  tankStrappingCalibrationInformationID: number;

  @Column({ type: 'bigint', name: 'TankStrappingRef' })
  tankStrappingRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CalibrationStartValidityDate' })
  calibrationStartValidityDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CalibrationEndValidityDate', nullable: true })
  calibrationEndValidityDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}