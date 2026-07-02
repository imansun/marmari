import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderOperationRTAExtension' })
export class LegacyWorkOrderOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderOperationRTAExtensionID' })
  workOrderOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'WorkOrderOperationResourceToolAssignmentRef' })
  workOrderOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}