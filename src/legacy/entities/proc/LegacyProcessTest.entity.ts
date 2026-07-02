import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessTest' })
export class LegacyProcessTest {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessTestID' })
  processTestID: number;

  @Column({ type: 'bigint', name: 'ProcessDefinitionVersionRef' })
  processDefinitionVersionRef: number;

  @Column({ type: 'timestamp without time zone', name: 'LastUpdate' })
  lastUpdate: Date;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'character varying', name: 'LastResult', nullable: true })
  lastResult: string | null;

  @Column({ type: 'integer', name: 'LastState' })
  lastState: number;

  @Column({ type: 'integer', name: 'ActivationState' })
  activationState: number;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}