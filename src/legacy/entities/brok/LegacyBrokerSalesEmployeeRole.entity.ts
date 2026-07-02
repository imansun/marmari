import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerSalesEmployeeRole' })
export class LegacyBrokerSalesEmployeeRole {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerSalesEmployeeRoleID' })
  brokerSalesEmployeeRoleID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'SalesEmployeeRoleRef' })
  salesEmployeeRoleRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}