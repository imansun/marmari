import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingTankReading' })
export class LegacyMovementRecordingTankReading {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingTankReadingID' })
  movementRecordingTankReadingID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'bigint', name: 'TankAssignmentItemRef' })
  tankAssignmentItemRef: number;

  @Column({ type: 'numeric', name: 'DIPValue', nullable: true })
  dIPValue: number | null;

  @Column({ type: 'bigint', name: 'TankStrappingRef', nullable: true })
  tankStrappingRef: number | null;

  @Column({ type: 'numeric', name: 'ReadingQty', nullable: true })
  readingQty: number | null;

  @Column({ type: 'bigint', name: 'VolumePartUnitRef' })
  volumePartUnitRef: number;

  @Column({ type: 'numeric', name: 'AssignmentItemDensity', nullable: true })
  assignmentItemDensity: number | null;

  @Column({ type: 'numeric', name: 'TankInventoryQty', nullable: true })
  tankInventoryQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}