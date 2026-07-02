import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessServiceConsumer' })
export class LegacyProcessServiceConsumer {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessServiceConsumerID' })
  processServiceConsumerID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Password' })
  password: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}