import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionPlanning' })
export class LegacyProductionPlanning {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionPlanningID' })
  productionPlanningID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'ComplexRef' })
  complexRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'smallint', name: 'DurationType' })
  durationType: number;

  @Column({ type: 'bigint', name: 'CalendarRef', nullable: true })
  calendarRef: number | null;

  @Column({ type: 'integer', name: 'TotalPlanningDays' })
  totalPlanningDays: number;

  @Column({ type: 'integer', name: 'TotalBreakDays' })
  totalBreakDays: number;

  @Column({ type: 'integer', name: 'TotalEffectiveDays' })
  totalEffectiveDays: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}