import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PricingYear' })
export class LegacyPricingYear {
  @PrimaryColumn({ type: 'bigint', name: 'PricingYearID' })
  pricingYearID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'PeriodType' })
  periodType: number;

}