import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingUtilityServiceReading' })
export class LegacyMovementRecordingUtilityServiceReading {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingUtilityServiceReadingID' })
  movementRecordingUtilityServiceReadingID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'bigint', name: 'FlowMeterAssignmentItemRef' })
  flowMeterAssignmentItemRef: number;

  @Column({ type: 'numeric', name: 'ReadingQty', nullable: true })
  readingQty: number | null;

  @Column({ type: 'bigint', name: 'VolumeUnitRef' })
  volumeUnitRef: number;

  @Column({ type: 'numeric', name: 'AssignmentItemDensity', nullable: true })
  assignmentItemDensity: number | null;

  @Column({ type: 'numeric', name: 'MassQty', nullable: true })
  massQty: number | null;

  @Column({ type: 'bigint', name: 'MassUnitRef' })
  massUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}