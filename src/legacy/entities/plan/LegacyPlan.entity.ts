import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Plan' })
export class LegacyPlan {
  @PrimaryColumn({ type: 'bigint', name: 'PlanID' })
  planID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'TimeIndicator', default: 1 })
  timeIndicator: number;

  @Column({ type: 'integer', name: 'CallHorizonforNotification', nullable: true })
  callHorizonforNotification: number | null;

  @Column({ type: 'integer', name: 'CallHorizonforWorkOrder', nullable: true })
  callHorizonforWorkOrder: number | null;

  @Column({ type: 'numeric', name: 'ShiftFactor', nullable: true })
  shiftFactor: number | null;

  @Column({ type: 'integer', name: 'AcceptableTolerance', nullable: true })
  acceptableTolerance: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'WorkOrderExportationState', nullable: true })
  workOrderExportationState: number | null;

  @Column({ type: 'integer', name: 'NotificationType', nullable: true })
  notificationType: number | null;

  @Column({ type: 'integer', name: 'WorkOrderType', nullable: true })
  workOrderType: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'CallHorizonPercentforNotification', nullable: true })
  callHorizonPercentforNotification: number | null;

  @Column({ type: 'numeric', name: 'CallHorizonPercentforWorkOrder', nullable: true })
  callHorizonPercentforWorkOrder: number | null;

  @Column({ type: 'numeric', name: 'PercentAcceptableTolerance', nullable: true })
  percentAcceptableTolerance: number | null;

  @Column({ type: 'numeric', name: 'NegativePercentAcceptableTolerance', nullable: true })
  negativePercentAcceptableTolerance: number | null;

  @Column({ type: 'integer', name: 'NegativeAcceptableTolerance', nullable: true })
  negativeAcceptableTolerance: number | null;

}