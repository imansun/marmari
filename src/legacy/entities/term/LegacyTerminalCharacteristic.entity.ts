import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TerminalCharacteristic' })
export class LegacyTerminalCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'TerminalCharacteristicID' })
  terminalCharacteristicID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'character varying', name: 'DefaultCharacteristicValue', nullable: true })
  defaultCharacteristicValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}