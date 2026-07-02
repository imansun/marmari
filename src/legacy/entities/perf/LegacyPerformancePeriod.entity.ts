import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformancePeriod' })
export class LegacyPerformancePeriod {
  @PrimaryColumn({ type: 'bigint', name: 'PerformancePeriodID' })
  performancePeriodID: number;

  @Column({ type: 'bigint', name: 'PerformanceManagementProcessRef' })
  performanceManagementProcessRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsTargetGroupExecutiveFinal' })
  isTargetGroupExecutiveFinal: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'CompletionDate', nullable: true })
  completionDate: Date | null;

  @Column({ type: 'bigint', name: 'CompletionEmployeeRef', nullable: true })
  completionEmployeeRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsPostSelected' })
  isPostSelected: boolean;

  @Column({ type: 'boolean', name: 'IsDepartmentSelected' })
  isDepartmentSelected: boolean;

  @Column({ type: 'boolean', name: 'IsEmploymentTypeSelected' })
  isEmploymentTypeSelected: boolean;

}