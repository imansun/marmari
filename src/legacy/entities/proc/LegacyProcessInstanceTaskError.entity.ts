import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceTaskError' })
export class LegacyProcessInstanceTaskError {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceTaskErrorID' })
  processInstanceTaskErrorID: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'bigint', name: 'ProcessInstanceTaskRef', nullable: true })
  processInstanceTaskRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'character varying', name: 'Error' })
  error: string;

  @Column({ type: 'character varying', name: 'ProcessTitle', nullable: true })
  processTitle: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}