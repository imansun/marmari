import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CriticalEvent' })
export class LegacyCriticalEvent {
  @PrimaryColumn({ type: 'bigint', name: 'CriticalEventID' })
  criticalEventID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'ExpectationRef', nullable: true })
  expectationRef: number | null;

  @Column({ type: 'bigint', name: 'PerformanceAgreementRef', nullable: true })
  performanceAgreementRef: number | null;

  @Column({ type: 'boolean', name: 'VisibleToAppraisee' })
  visibleToAppraisee: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'OccurrenceDate' })
  occurrenceDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Effect', nullable: true })
  effect: string | null;

  @Column({ type: 'character varying', name: 'Position', nullable: true })
  position: string | null;

  @Column({ type: 'character varying', name: 'Behavior', nullable: true })
  behavior: string | null;

}