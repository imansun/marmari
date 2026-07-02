import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignmentItemChange' })
export class LegacyAssignmentItemChange {
  @PrimaryColumn({ type: 'bigint', name: 'AssignmentItemChangeID' })
  assignmentItemChangeID: number;

  @Column({ type: 'bigint', name: 'AssignmentRef' })
  assignmentRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bigint', name: 'VehicleRemainingDocumentItemRef', nullable: true })
  vehicleRemainingDocumentItemRef: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'BaseWeight', nullable: true })
  baseWeight: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'BaseVolume', nullable: true })
  baseVolume: number | null;

  @Column({ type: 'bigint', name: 'VolumeUnitRef', nullable: true })
  volumeUnitRef: number | null;

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

  @Column({ type: 'numeric', name: 'InitialQuantity' })
  initialQuantity: number;

  @Column({ type: 'numeric', name: 'DeliverableQuantity' })
  deliverableQuantity: number;

  @Column({ type: 'numeric', name: 'FinalQuantity' })
  finalQuantity: number;

  @Column({ type: 'boolean', name: 'IsNewItem' })
  isNewItem: boolean;

  @Column({ type: 'boolean', name: 'AddVehicleReminingToDeliverableQuantity' })
  addVehicleReminingToDeliverableQuantity: boolean;

  @Column({ type: 'boolean', name: 'CreatedByVehicleRemainingDocument' })
  createdByVehicleRemainingDocument: boolean;

  @Column({ type: 'numeric', name: 'MaxDecreasePercent' })
  maxDecreasePercent: number;

  @Column({ type: 'numeric', name: 'MaxIncreasePercent' })
  maxIncreasePercent: number;

  @Column({ type: 'numeric', name: 'DeliveryItemQuantity', nullable: true })
  deliveryItemQuantity: number | null;

  @Column({ type: 'bigint', name: 'PriceBaseUnitRef', nullable: true })
  priceBaseUnitRef: number | null;

  @Column({ type: 'numeric', name: 'PriceBaseFee', nullable: true })
  priceBaseFee: number | null;

  @Column({ type: 'numeric', name: 'Fee', nullable: true })
  fee: number | null;

  @Column({ type: 'bigint', name: 'FeeBusinessPolicyRef', nullable: true })
  feeBusinessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'FeeBusinessPolicyConditionRef', nullable: true })
  feeBusinessPolicyConditionRef: number | null;

  @Column({ type: 'bigint', name: 'FeeBusinessPolicyConditionRowRef', nullable: true })
  feeBusinessPolicyConditionRowRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

}