import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessDelayInstance' })
export class LegacyProcessDelayInstance {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessDelayInstanceID' })
  processDelayInstanceID: number;

  @Column({ type: 'bigint', name: 'ProcessInstanceRef' })
  processInstanceRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'timestamp without time zone', name: 'Delay' })
  delay: Date;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}