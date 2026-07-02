import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TerminalInputOrder' })
export class LegacyTerminalInputOrder {
  @PrimaryColumn({ type: 'bigint', name: 'TerminalInputOrderID' })
  terminalInputOrderID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'InputType' })
  inputType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}