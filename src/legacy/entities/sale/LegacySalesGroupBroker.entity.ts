import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesGroupBroker' })
export class LegacySalesGroupBroker {
  @PrimaryColumn({ type: 'bigint', name: 'SalesGroupBrokerID' })
  salesGroupBrokerID: number;

  @Column({ type: 'bigint', name: 'SalesGroupRef' })
  salesGroupRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'boolean', name: 'IsSupervisor' })
  isSupervisor: boolean;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}