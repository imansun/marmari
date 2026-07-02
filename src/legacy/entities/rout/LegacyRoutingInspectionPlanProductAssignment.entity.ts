import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingInspectionPlanProductAssignment' })
export class LegacyRoutingInspectionPlanProductAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingInspectionPlanProductAssignmentID' })
  routingInspectionPlanProductAssignmentID: number;

  @Column({ type: 'bigint', name: 'RoutingProductRef' })
  routingProductRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanPartRef' })
  inspectionPlanPartRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}