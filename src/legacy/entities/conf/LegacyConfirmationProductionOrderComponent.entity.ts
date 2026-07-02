import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationProductionOrderComponent' })
export class LegacyConfirmationProductionOrderComponent {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationProductionOrderComponentID' })
  confirmationProductionOrderComponentID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'PartTrackingFactor1Ref', nullable: true })
  partTrackingFactor1Ref: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactor2Ref', nullable: true })
  partTrackingFactor2Ref: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactor3Ref', nullable: true })
  partTrackingFactor3Ref: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactor4Ref', nullable: true })
  partTrackingFactor4Ref: number | null;

  @Column({ type: 'bigint', name: 'PartTrackingFactor5Ref', nullable: true })
  partTrackingFactor5Ref: number | null;

  @Column({ type: 'bigint', name: 'ProductionOrderComponentRef' })
  productionOrderComponentRef: number;

  @Column({ type: 'numeric', name: 'ActualConsumption' })
  actualConsumption: number;

  @Column({ type: 'numeric', name: 'ActualConsumptionScrap' })
  actualConsumptionScrap: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'IssuePermitItemRef', nullable: true })
  issuePermitItemRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}