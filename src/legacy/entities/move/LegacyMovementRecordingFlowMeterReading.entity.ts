import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingFlowMeterReading' })
export class LegacyMovementRecordingFlowMeterReading {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingFlowMeterReadingID' })
  movementRecordingFlowMeterReadingID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'bigint', name: 'FlowMeterAssignmentItemRef' })
  flowMeterAssignmentItemRef: number;

  @Column({ type: 'numeric', name: 'ReadingQty', nullable: true })
  readingQty: number | null;

  @Column({ type: 'bigint', name: 'VolumePartUnitRef' })
  volumePartUnitRef: number;

  @Column({ type: 'numeric', name: 'AssignmentItemDensity', nullable: true })
  assignmentItemDensity: number | null;

  @Column({ type: 'numeric', name: 'MassQty', nullable: true })
  massQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}