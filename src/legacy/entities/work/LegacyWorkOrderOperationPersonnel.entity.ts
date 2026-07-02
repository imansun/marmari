import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderOperationPersonnel' })
export class LegacyWorkOrderOperationPersonnel {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderOperationPersonnelID' })
  workOrderOperationPersonnelID: number;

  @Column({ type: 'bigint', name: 'WorkOrderOperationRef' })
  workOrderOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef', nullable: true })
  workCenterCapacityRef: number | null;

  @Column({ type: 'bigint', name: 'WorkCenterPersonnelRef' })
  workCenterPersonnelRef: number;

  @Column({ type: 'bigint', name: 'ShiftRef', nullable: true })
  shiftRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartTime', nullable: true })
  startTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndTime', nullable: true })
  endTime: Date | null;

  @Column({ type: 'integer', name: 'DurationMinutes' })
  durationMinutes: number;

  @Column({ type: 'integer', name: 'DurationHours' })
  durationHours: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}