import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManufacturingOrderOperationSerialCharacteristic' })
export class LegacyManufacturingOrderOperationSerialCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'ManufacturingOrderOperationSerialCharacteristicID' })
  manufacturingOrderOperationSerialCharacteristicID: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue' })
  characteristicValue: string;

  @Column({ type: 'bigint', name: 'ManufacturingOrderOperationRef' })
  manufacturingOrderOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}