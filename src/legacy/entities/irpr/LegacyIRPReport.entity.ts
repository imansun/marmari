import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IRPReport' })
export class LegacyIRPReport {
  @PrimaryColumn({ type: 'bigint', name: 'IRPReportID' })
  iRPReportID: number;

  @Column({ type: 'bigint', name: 'IRPRef' })
  iRPRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ReportTime' })
  reportTime: Date;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'character varying', name: 'PartTitle', nullable: true })
  partTitle: string | null;

  @Column({ type: 'character varying', name: 'PartCode', nullable: true })
  partCode: string | null;

  @Column({ type: 'character varying', name: 'MajorUnitTitle', nullable: true })
  majorUnitTitle: string | null;

  @Column({ type: 'bigint', name: 'TimeBucketID', nullable: true })
  timeBucketID: number | null;

  @Column({ type: 'character varying', name: 'TimeBucketTitle', nullable: true })
  timeBucketTitle: string | null;

  @Column({ type: 'numeric', name: 'TimeBucketRemainingQuantity', nullable: true })
  timeBucketRemainingQuantity: number | null;

  @Column({ type: 'numeric', name: 'RemainingQuantity', nullable: true })
  remainingQuantity: number | null;

  @Column({ type: 'numeric', name: 'PermenantRemaing', nullable: true })
  permenantRemaing: number | null;

  @Column({ type: 'numeric', name: 'TemporaryRemaing', nullable: true })
  temporaryRemaing: number | null;

  @Column({ type: 'numeric', name: 'ReserveRemaing', nullable: true })
  reserveRemaing: number | null;

  @Column({ type: 'numeric', name: 'ApprovedNotReservedRequestQuantity', nullable: true })
  approvedNotReservedRequestQuantity: number | null;

  @Column({ type: 'numeric', name: 'SafetyStock', nullable: true })
  safetyStock: number | null;

  @Column({ type: 'numeric', name: 'ExtraValue1', nullable: true })
  extraValue1: number | null;

  @Column({ type: 'numeric', name: 'ExtraValue2', nullable: true })
  extraValue2: number | null;

  @Column({ type: 'numeric', name: 'ExtraValue3', nullable: true })
  extraValue3: number | null;

  @Column({ type: 'numeric', name: 'ExtraValue4', nullable: true })
  extraValue4: number | null;

  @Column({ type: 'numeric', name: 'ExtraValue5', nullable: true })
  extraValue5: number | null;

  @Column({ type: 'numeric', name: 'EffectiveQuantity', nullable: true })
  effectiveQuantity: number | null;

  @Column({ type: 'numeric', name: 'DeficiencyExcessQuantityInCurrentTimeBucket', nullable: true })
  deficiencyExcessQuantityInCurrentTimeBucket: number | null;

  @Column({ type: 'numeric', name: 'DeficiencyExcessQuantity', nullable: true })
  deficiencyExcessQuantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}