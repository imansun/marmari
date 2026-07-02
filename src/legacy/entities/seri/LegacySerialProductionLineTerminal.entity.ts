import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialProductionLineTerminal' })
export class LegacySerialProductionLineTerminal {
  @PrimaryColumn({ type: 'bigint', name: 'SerialProductionLineTerminalID' })
  serialProductionLineTerminalID: number;

  @Column({ type: 'bigint', name: 'SerialProductionLineRef' })
  serialProductionLineRef: number;

  @Column({ type: 'integer', name: 'Rank' })
  rank: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}