import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessSimulationAgentRun' })
export class LegacyProcessSimulationAgentRun {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessSimulationAgentRunID' })
  processSimulationAgentRunID: number;

  @Column({ type: 'bigint', name: 'ProcessSimulationRunRef' })
  processSimulationRunRef: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'ParentKey', nullable: true })
  parentKey: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'SubTypeName', nullable: true })
  subTypeName: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'Sum' })
  sum: number;

  @Column({ type: 'bigint', name: 'Count' })
  count: number;

  @Column({ type: 'bigint', name: 'Max' })
  max: number;

  @Column({ type: 'bigint', name: 'Min' })
  min: number;

  @Column({ type: 'bigint', name: 'Average' })
  average: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}