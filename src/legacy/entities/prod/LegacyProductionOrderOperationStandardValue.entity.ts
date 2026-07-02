import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderOperationStandardValue' })
export class LegacyProductionOrderOperationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderOperationStandardValueID' })
  productionOrderOperationStandardValueID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterStandardValueRef' })
  workCenterStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}