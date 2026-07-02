import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperationStandardValue' })
export class LegacyRoutingOperationStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationStandardValueID' })
  routingOperationStandardValueID: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef' })
  routingOperationRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterStandardValueRef' })
  workCenterStandardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}