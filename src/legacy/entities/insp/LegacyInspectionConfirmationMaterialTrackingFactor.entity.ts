import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationMaterialTrackingFactor' })
export class LegacyInspectionConfirmationMaterialTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationMaterialTrackingFactorID' })
  inspectionConfirmationMaterialTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationMaterialRef' })
  inspectionConfirmationMaterialRef: number;

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

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}