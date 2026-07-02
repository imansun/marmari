import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitSchedule' })
export class LegacyVisitSchedule {
  @PrimaryColumn({ type: 'bigint', name: 'VisitScheduleID' })
  visitScheduleID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'FinishDate' })
  finishDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IncludeOrderTaking' })
  includeOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'IncludeHotSales' })
  includeHotSales: boolean;

  @Column({ type: 'boolean', name: 'IncludeDistribution' })
  includeDistribution: boolean;

  @Column({ type: 'boolean', name: 'IncludeCollection' })
  includeCollection: boolean;

  @Column({ type: 'boolean', name: 'IncludeNoneWorkingDays' })
  includeNoneWorkingDays: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}