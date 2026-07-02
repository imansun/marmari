import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TerminalReworkReason' })
export class LegacyTerminalReworkReason {
  @PrimaryColumn({ type: 'bigint', name: 'TerminalReworkReasonID' })
  terminalReworkReasonID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bigint', name: 'ReworkReasonRef' })
  reworkReasonRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}