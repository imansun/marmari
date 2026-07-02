import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportFeed' })
export class LegacyOperationalReportFeed {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportFeedID' })
  operationalReportFeedID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'FeedRef' })
  feedRef: number;

  @Column({ type: 'numeric', name: 'ConsumptionQty', nullable: true })
  consumptionQty: number | null;

  @Column({ type: 'numeric', name: 'FinalConsumptionQty', nullable: true })
  finalConsumptionQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}