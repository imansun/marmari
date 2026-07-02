import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WeighInToLoadingTolerance' })
export class LegacyWeighInToLoadingTolerance {
  @PrimaryColumn({ type: 'bigint', name: 'WeighInToLoadingToleranceID' })
  weighInToLoadingToleranceID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'LowerBoundPercent', nullable: true })
  lowerBoundPercent: number | null;

  @Column({ type: 'numeric', name: 'LowerBoundValue', nullable: true })
  lowerBoundValue: number | null;

  @Column({ type: 'numeric', name: 'UpperBoundPercent', nullable: true })
  upperBoundPercent: number | null;

  @Column({ type: 'numeric', name: 'UpperBoundValue', nullable: true })
  upperBoundValue: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'LowerBoundCriterionType', nullable: true })
  lowerBoundCriterionType: number | null;

  @Column({ type: 'integer', name: 'UpperBoundCriterionType', nullable: true })
  upperBoundCriterionType: number | null;

  @Column({ type: 'integer', name: 'LoadingLowerToleranceControlModeType', nullable: true })
  loadingLowerToleranceControlModeType: number | null;

}