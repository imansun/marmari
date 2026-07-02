import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessSimulationRun' })
export class LegacyProcessSimulationRun {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessSimulationRunID' })
  processSimulationRunID: number;

  @Column({ type: 'bigint', name: 'ProcessSimulationDefinitionRef' })
  processSimulationDefinitionRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartTime' })
  startTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndTime' })
  endTime: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'character varying', name: 'StateMessage', nullable: true })
  stateMessage: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}