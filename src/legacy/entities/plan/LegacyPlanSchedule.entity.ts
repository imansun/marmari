import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PlanSchedule' })
export class LegacyPlanSchedule {
  @PrimaryColumn({ type: 'bigint', name: 'PlanScheduleID' })
  planScheduleID: number;

  @Column({ type: 'bigint', name: 'PlanServiceRef' })
  planServiceRef: number;

  @Column({ type: 'bigint', name: 'ServiceEquipmentRef', nullable: true })
  serviceEquipmentRef: number | null;

  @Column({ type: 'bigint', name: 'WorkOrderRef', nullable: true })
  workOrderRef: number | null;

  @Column({ type: 'bigint', name: 'InspectionRef', nullable: true })
  inspectionRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'PlannedDate' })
  plannedDate: Date;

  @Column({ type: 'bigint', name: 'NextNotificationRef', nullable: true })
  nextNotificationRef: number | null;

  @Column({ type: 'boolean', name: 'IsMaintenanceDocumentCreated' })
  isMaintenanceDocumentCreated: boolean;

  @Column({ type: 'boolean', name: 'NextPlanCreated' })
  nextPlanCreated: boolean;

  @Column({ type: 'boolean', name: 'NextNotificationCreated' })
  nextNotificationCreated: boolean;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}