import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceOperationStandardValue' })
export class LegacyServiceOperationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceOperationStandardValueID' })
  serviceOperationStandardValueID: number;

  @Column({ type: 'bigint', name: 'ServiceOperationRef' })
  serviceOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterStandardValueRef' })
  workCenterStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}