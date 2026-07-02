import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PricingPeriod' })
export class LegacyPricingPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'PricingPeriodID' })
  pricingPeriodID: number;

  @Column({ type: 'bigint', name: 'PricingYearRef' })
  pricingYearRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

}