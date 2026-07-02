import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QualityInspectionResultItemTrackingFactor' })
export class LegacyQualityInspectionResultItemTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'QualityInspectionResultItemTrackingFactorID' })
  qualityInspectionResultItemTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'QualityInspectionResultItemRef' })
  qualityInspectionResultItemRef: number;

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

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'numeric', name: 'ApprovedQuantity', nullable: true })
  approvedQuantity: number | null;

  @Column({ type: 'numeric', name: 'RejectedQuantity', nullable: true })
  rejectedQuantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitApprovedQuantity', nullable: true })
  majorUnitApprovedQuantity: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitRejectedQuantity', nullable: true })
  majorUnitRejectedQuantity: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

}