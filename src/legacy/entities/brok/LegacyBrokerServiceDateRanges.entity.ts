import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BrokerServiceDateRanges' })
export class LegacyBrokerServiceDateRanges {
  @PrimaryColumn({ type: 'bigint', name: 'BrokerServiceDateRangeID' })
  brokerServiceDateRangeID: number;

  @Column({ type: 'bigint', name: 'BrokerServiceRef' })
  brokerServiceRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'numeric', name: 'MaxValue' })
  maxValue: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}