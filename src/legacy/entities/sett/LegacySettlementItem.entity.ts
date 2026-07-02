import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementItem' })
export class LegacySettlementItem {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementItemID' })
  settlementItemID: number;

  @Column({ type: 'bigint', name: 'SettlementRef' })
  settlementRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'boolean', name: 'IsTransfered' })
  isTransfered: boolean;

  @Column({ type: 'character varying', name: 'NatureKey' })
  natureKey: string;

  @Column({ type: 'bigint', name: 'DataRef' })
  dataRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}