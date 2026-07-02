import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesEmployeeDSDExtraInfoBroker' })
export class LegacySalesEmployeeDSDExtraInfoBroker {
  @PrimaryColumn({ type: 'bigint', name: 'SalesEmployeeDSDExtraInfoBrokerID' })
  salesEmployeeDSDExtraInfoBrokerID: number;

  @Column({ type: 'bigint', name: 'SalesEmployeeDSDExtraInfoRef' })
  salesEmployeeDSDExtraInfoRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'SalesGroupRef', nullable: true })
  salesGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}