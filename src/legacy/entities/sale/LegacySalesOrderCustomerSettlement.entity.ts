import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderCustomerSettlement' })
export class LegacySalesOrderCustomerSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderCustomerSettlementID' })
  salesOrderCustomerSettlementID: number;

  @Column({ type: 'bigint', name: 'SalesOrderRef' })
  salesOrderRef: number;

  @Column({ type: 'bigint', name: 'CustomerSettlementRef' })
  customerSettlementRef: number;

  @Column({ type: 'boolean', name: 'IsDefault', default: false })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}