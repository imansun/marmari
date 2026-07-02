import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SaleableWithoutRationingTrackingFactor' })
export class LegacySaleableWithoutRationingTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'SaleableWithoutRationingTrackingFactorID' })
  saleableWithoutRationingTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'RationableStockRef' })
  rationableStockRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef', nullable: true })
  businessPolicyConditionRowRef: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor3', nullable: true })
  trackingFactor3: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor4', nullable: true })
  trackingFactor4: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor5', nullable: true })
  trackingFactor5: string | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef1', nullable: true })
  partTrackingFactorRef1: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef2', nullable: true })
  partTrackingFactorRef2: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef3', nullable: true })
  partTrackingFactorRef3: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef4', nullable: true })
  partTrackingFactorRef4: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactorRef5', nullable: true })
  partTrackingFactorRef5: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode1', nullable: true })
  trackingFactorInputMode1: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode2', nullable: true })
  trackingFactorInputMode2: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode3', nullable: true })
  trackingFactorInputMode3: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode4', nullable: true })
  trackingFactorInputMode4: number | null;

  @Column({ type: 'integer', name: 'TrackingFactorInputMode5', nullable: true })
  trackingFactorInputMode5: number | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue', nullable: true })
  trackingFactorValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

}