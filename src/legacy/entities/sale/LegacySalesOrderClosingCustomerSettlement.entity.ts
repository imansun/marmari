import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderClosingCustomerSettlement' })
export class LegacySalesOrderClosingCustomerSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderClosingCustomerSettlementID' })
  salesOrderClosingCustomerSettlementID: number;

  @Column({ type: 'bigint', name: 'SalesOrderRef' })
  salesOrderRef: number;

  @Column({ type: 'bigint', name: 'SalesOrderItemRef', nullable: true })
  salesOrderItemRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerSettlementRef' })
  customerSettlementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}