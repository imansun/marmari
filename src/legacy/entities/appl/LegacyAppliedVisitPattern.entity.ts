import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppliedVisitPattern' })
export class LegacyAppliedVisitPattern {
  @PrimaryColumn({ type: 'bigint', name: 'AppliedVisitPatternID' })
  appliedVisitPatternID: number;

  @Column({ type: 'bigint', name: 'VisitScheduleRef' })
  visitScheduleRef: number;

  @Column({ type: 'bigint', name: 'VisitPatternRef' })
  visitPatternRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}