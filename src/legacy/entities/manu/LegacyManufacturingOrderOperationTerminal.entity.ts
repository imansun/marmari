import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManufacturingOrderOperationTerminal' })
export class LegacyManufacturingOrderOperationTerminal {
  @PrimaryColumn({ type: 'bigint', name: 'ManufacturingOrderOperationTerminalID' })
  manufacturingOrderOperationTerminalID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bigint', name: 'ManufacturingOrderOperationRef' })
  manufacturingOrderOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}