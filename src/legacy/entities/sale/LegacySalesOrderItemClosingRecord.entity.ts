import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderItemClosingRecord' })
export class LegacySalesOrderItemClosingRecord {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderItemClosingRecordID' })
  salesOrderItemClosingRecordID: number;

  @Column({ type: 'bigint', name: 'SalesOrderItemRef' })
  salesOrderItemRef: number;

  @Column({ type: 'bigint', name: 'RetailSessionRef' })
  retailSessionRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ClosingDate' })
  closingDate: Date;

  @Column({ type: 'numeric', name: 'ClosedQuantity' })
  closedQuantity: number;

  @Column({ type: 'numeric', name: 'ClosedPrice' })
  closedPrice: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}