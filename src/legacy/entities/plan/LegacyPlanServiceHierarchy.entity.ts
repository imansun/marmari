import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanServiceHierarchy' })
export class LegacyPlanServiceHierarchy {
  @PrimaryColumn({ type: 'bigint', name: 'PlanServiceHierachyID' })
  planServiceHierachyID: number;

  @Column({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number;

  @Column({ type: 'bigint', name: 'HigherLevelHierarchyEquipmentRef', nullable: true })
  higherLevelHierarchyEquipmentRef: number | null;

  @Column({ type: 'bigint', name: 'LowerLevelHierarchyServiceRef' })
  lowerLevelHierarchyServiceRef: number;

  @Column({ type: 'bigint', name: 'LowerLevelHierarchyEquipmentRef', nullable: true })
  lowerLevelHierarchyEquipmentRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}