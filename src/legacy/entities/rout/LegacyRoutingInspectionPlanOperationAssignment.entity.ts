import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingInspectionPlanOperationAssignment' })
export class LegacyRoutingInspectionPlanOperationAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingInspectionPlanOperationAssignmentID' })
  routingInspectionPlanOperationAssignmentID: number;

  @Column({ type: 'bigint', name: 'RoutingInspectionPlanProductAssignmentRef' })
  routingInspectionPlanProductAssignmentRef: number;

  @Column({ type: 'bigint', name: 'InspectionPlanOperationRef' })
  inspectionPlanOperationRef: number;

  @Column({ type: 'bigint', name: 'QCRoutingOperationMappingRef' })
  qCRoutingOperationMappingRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}