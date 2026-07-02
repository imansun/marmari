import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListGroupParameter' })
export class LegacyPriceListGroupParameter {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListGroupParameterID' })
  priceListGroupParameterID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bigint', name: 'SettlementPolicyRef', nullable: true })
  settlementPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerEntityGroupRef', nullable: true })
  customerEntityGroupRef: number | null;

  @Column({ type: 'numeric', name: 'UptoAmount', nullable: true })
  uptoAmount: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

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

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual1', nullable: true })
  isTrackingFactorInputModeManual1: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual2', nullable: true })
  isTrackingFactorInputModeManual2: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual3', nullable: true })
  isTrackingFactorInputModeManual3: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual4', nullable: true })
  isTrackingFactorInputModeManual4: boolean | null;

  @Column({ type: 'boolean', name: 'IsTrackingFactorInputModeManual5', nullable: true })
  isTrackingFactorInputModeManual5: boolean | null;

  @Column({ type: 'character varying', name: 'TrackingFactorValue', nullable: true })
  trackingFactorValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

}