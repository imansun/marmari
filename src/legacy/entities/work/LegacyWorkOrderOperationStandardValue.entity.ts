import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkOrderOperationStandardValue' })
export class LegacyWorkOrderOperationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'WorkOrderOperationStandardValueID' })
  workOrderOperationStandardValueID: number;

  @Column({ type: 'bigint', name: 'WorkOrderOperationRef' })
  workOrderOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterStandardValueRef' })
  workCenterStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'PlannedQuantity' })
  plannedQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}