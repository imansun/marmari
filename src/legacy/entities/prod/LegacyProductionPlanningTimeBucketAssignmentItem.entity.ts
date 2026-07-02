import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionPlanningTimeBucketAssignmentItem' })
export class LegacyProductionPlanningTimeBucketAssignmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionPlanningTimeBucketAssignmentItemID' })
  productionPlanningTimeBucketAssignmentItemID: number;

  @Column({ type: 'bigint', name: 'ProductionPlanningTimeBucketRef' })
  productionPlanningTimeBucketRef: number;

  @Column({ type: 'bigint', name: 'AssignmentItemRef' })
  assignmentItemRef: number;

  @Column({ type: 'smallint', name: 'AssignmentItemType' })
  assignmentItemType: number;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}