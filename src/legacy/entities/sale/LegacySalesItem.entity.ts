import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesItem' })
export class LegacySalesItem {
  @PrimaryColumn({ type: 'bigint', name: 'SalesItemID' })
  salesItemID: number;

  @Column({ type: 'bigint', name: 'SalesRef' })
  salesRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'numeric', name: 'AdditionSubtraction' })
  additionSubtraction: number;

  @Column({ type: 'numeric', name: 'NetSales' })
  netSales: number;

  @Column({ type: 'numeric', name: 'SalesAmount' })
  salesAmount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencySalesAmount' })
  operationalCurrencySalesAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'GasDepositReceiptNumber', nullable: true })
  gasDepositReceiptNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'GasDepositReceiptDate', nullable: true })
  gasDepositReceiptDate: Date | null;

  @Column({ type: 'numeric', name: 'GasDepositAmount', nullable: true })
  gasDepositAmount: number | null;

  @Column({ type: 'character varying', name: 'GasTreasuryAccountNumber', nullable: true })
  gasTreasuryAccountNumber: string | null;

}