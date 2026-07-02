import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PromotionStructure' })
export class LegacyPromotionStructure {
  @PrimaryColumn({ type: 'bigint', name: 'PromotionStructureID' })
  promotionStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'bigint', name: 'StatuteTypeRef', nullable: true })
  statuteTypeRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'SupplementaryOperationCode' })
  supplementaryOperationCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'boolean', name: 'HasScheduler', default: false })
  hasScheduler: boolean;

  @Column({ type: 'boolean', name: 'IsLastDayOfMonth', default: false })
  isLastDayOfMonth: boolean;

  @Column({ type: 'integer', name: 'SchedulerType', nullable: true })
  schedulerType: number | null;

  @Column({ type: 'integer', name: 'WeeklyInterval', nullable: true })
  weeklyInterval: number | null;

  @Column({ type: 'integer', name: 'WeekDay', nullable: true })
  weekDay: number | null;

  @Column({ type: 'integer', name: 'DayNumber', default: 1 })
  dayNumber: number;

  @Column({ type: 'integer', name: 'SchedulerTimeMinutes', nullable: true })
  schedulerTimeMinutes: number | null;

  @Column({ type: 'integer', name: 'ExecutionTime', default: 2 })
  executionTime: number;

}