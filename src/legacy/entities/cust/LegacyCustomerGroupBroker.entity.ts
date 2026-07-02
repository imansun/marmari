import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerGroupBroker' })
export class LegacyCustomerGroupBroker {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerGroupBrokerID' })
  customerGroupBrokerID: number;

  @Column({ type: 'bigint', name: 'CustomerGroupRef' })
  customerGroupRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}