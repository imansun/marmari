import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTagCriterion' })
export class LegacyProductTagCriterion {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTagCriterionID' })
  productTagCriterionID: number;

  @Column({ type: 'bigint', name: 'ProductTagRef' })
  productTagRef: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'ProductEntityGroupRef', nullable: true })
  productEntityGroupRef: number | null;

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

  @Column({ type: 'character varying', name: 'SpecificationStringValue', nullable: true })
  specificationStringValue: string | null;

  @Column({ type: 'timestamp without time zone', name: 'SpecificationDateValue', nullable: true })
  specificationDateValue: Date | null;

  @Column({ type: 'numeric', name: 'SpecificationDecimalValue', nullable: true })
  specificationDecimalValue: number | null;

  @Column({ type: 'boolean', name: 'SpecificationBooleanValue', nullable: true })
  specificationBooleanValue: boolean | null;

  @Column({ type: 'bigint', name: 'SpecificationRef', nullable: true })
  specificationRef: number | null;

  @Column({ type: 'bigint', name: 'SpecificationItemRef', nullable: true })
  specificationItemRef: number | null;

  @Column({ type: 'character varying', name: 'SpecificationValue', nullable: true })
  specificationValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'SerialDescription', nullable: true })
  serialDescription: string | null;

  @Column({ type: 'numeric', name: 'ManualFee', nullable: true })
  manualFee: number | null;

  @Column({ type: 'numeric', name: 'ManualConsumerFee', nullable: true })
  manualConsumerFee: number | null;

}