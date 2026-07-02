import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesComparisonReportDateRange' })
export class LegacySalesComparisonReportDateRange {
  @PrimaryColumn({ type: 'bigint', name: 'SalesComparisonReportDateRangeID' })
  salesComparisonReportDateRangeID: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

}