import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Settlement' })
export class LegacySettlement {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementID' })
  settlementID: number;

  @Column({ type: 'integer', name: 'SettlementType' })
  settlementType: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'MinDocDate' })
  minDocDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'MaxDocDate' })
  maxDocDate: Date;

  @Column({ type: 'bigint', name: 'CashierRef' })
  cashierRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'integer', name: 'SettlementPeriod' })
  settlementPeriod: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

}