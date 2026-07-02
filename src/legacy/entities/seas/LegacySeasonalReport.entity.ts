import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SeasonalReport' })
export class LegacySeasonalReport {
  @PrimaryColumn({ type: 'bigint', name: 'SeasonalReportID' })
  seasonalReportID: number;

  @Column({ type: 'bigint', name: 'TaxYearRef' })
  taxYearRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'VATBaseInformationRef' })
  vATBaseInformationRef: number;

}