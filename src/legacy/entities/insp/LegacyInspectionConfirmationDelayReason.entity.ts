import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationDelayReason' })
export class LegacyInspectionConfirmationDelayReason {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationDelayReasonID' })
  inspectionConfirmationDelayReasonID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef' })
  inspectionConfirmationRef: number;

  @Column({ type: 'bigint', name: 'DelayReasonRef' })
  delayReasonRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartTime', nullable: true })
  startTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndTime', nullable: true })
  endTime: Date | null;

  @Column({ type: 'integer', name: 'DurationMinutes', nullable: true })
  durationMinutes: number | null;

  @Column({ type: 'integer', name: 'DurationHours', nullable: true })
  durationHours: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}