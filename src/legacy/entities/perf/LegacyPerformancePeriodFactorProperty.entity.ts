import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformancePeriodFactorProperty' })
export class LegacyPerformancePeriodFactorProperty {
  @PrimaryColumn({ type: 'bigint', name: 'PerformancePeriodFactorPropertyID' })
  performancePeriodFactorPropertyID: number;

  @Column({ type: 'bigint', name: 'PerformancePeriodFactorRef' })
  performancePeriodFactorRef: number;

  @Column({ type: 'bigint', name: 'PerformanceManagementProcessRef', nullable: true })
  performanceManagementProcessRef: number | null;

  @Column({ type: 'integer', name: 'YearMonth' })
  yearMonth: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

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

}