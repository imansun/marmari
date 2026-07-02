import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxYear' })
export class LegacyTaxYear {
  @PrimaryColumn({ type: 'bigint', name: 'TaxYearID' })
  taxYearID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsCollectedInfo', default: false })
  isCollectedInfo: boolean;

  @Column({ type: 'bigint', name: 'SeasonalReportMergePatternRef', nullable: true })
  seasonalReportMergePatternRef: number | null;

  @Column({ type: 'integer', name: 'TaxYearGatheringType' })
  taxYearGatheringType: number;

}