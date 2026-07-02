import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerCustomerGroup' })
export class LegacyBrokerCustomerGroup {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerCustomerGroupID' })
  brokerCustomerGroupID: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'CustomerGroupRef' })
  customerGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}