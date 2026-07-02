import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldMessageBroker' })
export class LegacyHandheldMessageBroker {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldMessageBrokerID' })
  handheldMessageBrokerID: number;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'HandheldMessageRef', nullable: true })
  handheldMessageRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'ReceiveDate', nullable: true })
  receiveDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ReadDate', nullable: true })
  readDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}