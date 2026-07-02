import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerBroker' })
export class LegacyCustomerBroker {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerBrokerID' })
  customerBrokerID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}