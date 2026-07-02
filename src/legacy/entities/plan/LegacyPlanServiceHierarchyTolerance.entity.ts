import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanServiceHierarchyTolerance' })
export class LegacyPlanServiceHierarchyTolerance {
  @PrimaryColumn({ type: 'bigint', name: 'PlanServiceHierarchyToleranceID' })
  planServiceHierarchyToleranceID: number;

  @Column({ type: 'bigint', name: 'PlanServiceHierarchyRef' })
  planServiceHierarchyRef: number;

  @Column({ type: 'bigint', name: 'PlanIndicatorRef' })
  planIndicatorRef: number;

  @Column({ type: 'numeric', name: 'NegativeTolerance', nullable: true })
  negativeTolerance: number | null;

  @Column({ type: 'numeric', name: 'PositiveTolerance', nullable: true })
  positiveTolerance: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}