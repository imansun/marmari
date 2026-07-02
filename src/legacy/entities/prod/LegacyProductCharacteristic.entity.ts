import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCharacteristic' })
export class LegacyProductCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCharacteristicID' })
  productCharacteristicID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}