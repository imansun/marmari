import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanService' })
export class LegacyPlanService {
  @PrimaryColumn({ type: 'bigint', name: 'PlanServiceID' })
  planServiceID: number;

  @Column({ type: 'bigint', name: 'PlanRef' })
  planRef: number;

  @Column({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number;

  @Column({ type: 'integer', name: 'WorkOrderExportationState' })
  workOrderExportationState: number;

  @Column({ type: 'integer', name: 'NotificationType' })
  notificationType: number;

  @Column({ type: 'integer', name: 'WorkOrderType' })
  workOrderType: number;

  @Column({ type: 'integer', name: 'State', default: 1 })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}