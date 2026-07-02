import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanServiceEquipmentMeasurementPoint' })
export class LegacyPlanServiceEquipmentMeasurementPoint {
  @PrimaryColumn({ type: 'bigint', name: 'PlanServiceEquipmentMeasurementPointID' })
  planServiceEquipmentMeasurementPointID: number;

  @Column({ type: 'bigint', name: 'PlanServiceRef' })
  planServiceRef: number;

  @Column({ type: 'bigint', name: 'ServiceEquipmentRef' })
  serviceEquipmentRef: number;

  @Column({ type: 'bigint', name: 'EquipmentMeasurementPointRef', nullable: true })
  equipmentMeasurementPointRef: number | null;

  @Column({ type: 'integer', name: 'PerformancePlanType', default: 1 })
  performancePlanType: number;

  @Column({ type: 'bigint', name: 'PlanIndicatorRef' })
  planIndicatorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}