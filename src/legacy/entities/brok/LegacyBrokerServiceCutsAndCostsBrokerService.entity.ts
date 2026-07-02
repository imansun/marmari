import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerServiceCutsAndCostsBrokerService' })
export class LegacyBrokerServiceCutsAndCostsBrokerService {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerServiceCutsAndCostsBrokerServiceID' })
  brokerServiceCutsAndCostsBrokerServiceID: number;

  @Column({ type: 'bigint', name: 'BrokerServiceRef' })
  brokerServiceRef: number;

  @Column({ type: 'bigint', name: 'BrokerServiceCutsAndCostsRef' })
  brokerServiceCutsAndCostsRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}