import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanScheduleLog' })
export class LegacyPlanScheduleLog {
  @PrimaryColumn({ type: 'bigint', name: 'PlanScheduleLogID' })
  planScheduleLogID: number;

  @Column({ type: 'bigint', name: 'PlanScheduleRef', nullable: true })
  planScheduleRef: number | null;

  @Column({ type: 'boolean', name: 'Succeeded' })
  succeeded: boolean;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'integer', name: 'OperationType' })
  operationType: number;

  @Column({ type: 'bigint', name: 'PlanIndicatorRef', nullable: true })
  planIndicatorRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PlanServiceHierarchyRef', nullable: true })
  planServiceHierarchyRef: number | null;

  @Column({ type: 'numeric', name: 'CyclePerformance', nullable: true })
  cyclePerformance: number | null;

}