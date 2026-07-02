import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanServiceHierarchyHistory' })
export class LegacyPlanServiceHierarchyHistory {
  @PrimaryColumn({ type: 'bigint', name: 'PlanServiceHierarchyHistoryID' })
  planServiceHierarchyHistoryID: number;

  @Column({ type: 'bigint', name: 'PlanServiceHierarchyRef' })
  planServiceHierarchyRef: number;

  @Column({ type: 'bigint', name: 'PlanServiceHierarchyToleranceRef' })
  planServiceHierarchyToleranceRef: number;

  @Column({ type: 'bigint', name: 'HigherLevelServiceRef' })
  higherLevelServiceRef: number;

  @Column({ type: 'bigint', name: 'HigherLevelEquipmentRef', nullable: true })
  higherLevelEquipmentRef: number | null;

  @Column({ type: 'bigint', name: 'LowerLevelServiceRef' })
  lowerLevelServiceRef: number;

  @Column({ type: 'bigint', name: 'LowerLevelEquipmentRef', nullable: true })
  lowerLevelEquipmentRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'NegativeTolerance' })
  negativeTolerance: number;

  @Column({ type: 'numeric', name: 'PositiveTolerance' })
  positiveTolerance: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'PlanIndicatorRef', nullable: true })
  planIndicatorRef: number | null;

}