import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'JobStep' })
export class LegacyJobStep {
  @PrimaryColumn({ type: 'bigint', name: 'JobStepID' })
  jobStepID: number;

  @Column({ type: 'bigint', name: 'JobRef' })
  jobRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'timestamp without time zone', name: 'StartTime' })
  startTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'FinishTime', nullable: true })
  finishTime: Date | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}