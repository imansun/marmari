import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerialProductCharacteristic' })
export class LegacyProductionLineCollectedSerialProductCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialProductCharacteristicID' })
  productionLineCollectedSerialProductCharacteristicID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue' })
  characteristicValue: string;

  @Column({ type: 'bigint', name: 'ReferenceCharacteristicEntitySerialRef', nullable: true })
  referenceCharacteristicEntitySerialRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}