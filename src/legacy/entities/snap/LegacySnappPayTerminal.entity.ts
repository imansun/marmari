import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SnappPayTerminal' })
export class LegacySnappPayTerminal {
  @PrimaryColumn({ type: 'bigint', name: 'SnappPayTerminalID' })
  snappPayTerminalID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'CashRegisterRef' })
  cashRegisterRef: number;

  @Column({ type: 'character varying', name: 'TerminalID' })
  terminalID: string;

  @Column({ type: 'integer', name: 'PaymentMethod' })
  paymentMethod: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}