import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionOperationStandardValue' })
export class LegacyInspectionOperationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionOperationStandardValueID' })
  inspectionOperationStandardValueID: number;

  @Column({ type: 'bigint', name: 'InspectionOperationRef' })
  inspectionOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterStandardValueRef' })
  workCenterStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'PlannedQuantity' })
  plannedQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}