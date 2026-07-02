import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperationTerminal' })
export class LegacyRoutingOperationTerminal {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationTerminalID' })
  routingOperationTerminalID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef' })
  routingOperationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}