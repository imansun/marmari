import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderItemPolicyResultClosingRecord' })
export class LegacySalesOrderItemPolicyResultClosingRecord {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderItemPolicyResultClosingRecordID' })
  salesOrderItemPolicyResultClosingRecordID: number;

  @Column({ type: 'bigint', name: 'SalesOrderItemClosingRecordRef' })
  salesOrderItemClosingRecordRef: number;

  @Column({ type: 'bigint', name: 'SalesOrderItemPolicyResultRef' })
  salesOrderItemPolicyResultRef: number;

  @Column({ type: 'numeric', name: 'ClosedPrice' })
  closedPrice: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}