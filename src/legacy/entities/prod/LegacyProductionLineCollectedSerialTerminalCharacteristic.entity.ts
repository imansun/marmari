import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionLineCollectedSerialTerminalCharacteristic' })
export class LegacyProductionLineCollectedSerialTerminalCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionLineCollectedSerialTerminalCharacteristicID' })
  productionLineCollectedSerialTerminalCharacteristicID: number;

  @Column({ type: 'bigint', name: 'ProductionLineCollectedSerialRef' })
  productionLineCollectedSerialRef: number;

  @Column({ type: 'bigint', name: 'TerminalCharacteristicRef' })
  terminalCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'CharacteristicValue', nullable: true })
  characteristicValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}