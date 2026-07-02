import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessInstanceRepository' })
export class LegacyProcessInstanceRepository {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessInstanceRepositoryID' })
  processInstanceRepositoryID: number;

  @Column({ type: 'uuid', name: 'InstanceId' })
  instanceId: string;

  @Column({ type: 'bigint', name: 'ProcessDefinitionVersionRef' })
  processDefinitionVersionRef: number;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}