import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReserveItemTrackingFactor' })
export class LegacyReserveItemTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'ReserveItemTrackingFactorID' })
  reserveItemTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'ReserveItemRef' })
  reserveItemRef: number;

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

  @Column({ type: 'bigint', name: '1stPartInvTrackingFactor', nullable: true })
  _1stPartInvTrackingFactor: number | null;

  @Column({ type: 'bigint', name: '2ndPartInvTrackingFactor', nullable: true })
  _2ndPartInvTrackingFactor: number | null;

  @Column({ type: 'bigint', name: '3rdPartInvTrackingFactor', nullable: true })
  _3rdPartInvTrackingFactor: number | null;

  @Column({ type: 'bigint', name: '4thPartInvTrackingFactor', nullable: true })
  _4thPartInvTrackingFactor: number | null;

  @Column({ type: 'bigint', name: '5thPartInvTrackingFactor', nullable: true })
  _5thPartInvTrackingFactor: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'numeric', name: 'EffectedMajorQuantity' })
  effectedMajorQuantity: number;

  @Column({ type: 'numeric', name: 'EffectedQuantity' })
  effectedQuantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

}