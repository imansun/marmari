import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferenceOperationTerminal' })
export class LegacyReferenceOperationTerminal {
  @PrimaryColumn({ type: 'bigint', name: 'ReferenceOperationTerminalID' })
  referenceOperationTerminalID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationRef' })
  referenceOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}