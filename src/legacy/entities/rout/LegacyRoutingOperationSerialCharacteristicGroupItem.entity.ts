import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperationSerialCharacteristicGroupItem' })
export class LegacyRoutingOperationSerialCharacteristicGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationSerialCharacteristicGroupItemID' })
  routingOperationSerialCharacteristicGroupItemID: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef' })
  routingOperationRef: number;

  @Column({ type: 'bigint', name: 'SerialCharacteristicGroupItemRef' })
  serialCharacteristicGroupItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}