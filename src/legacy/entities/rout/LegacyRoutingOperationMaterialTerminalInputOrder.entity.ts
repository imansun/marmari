import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperationMaterialTerminalInputOrder' })
export class LegacyRoutingOperationMaterialTerminalInputOrder {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationMaterialTerminalInputOrderID' })
  routingOperationMaterialTerminalInputOrderID: number;

  @Column({ type: 'bigint', name: 'RoutingComponentAssignmentRef' })
  routingComponentAssignmentRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}