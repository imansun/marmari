import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessSimulationAgentRunItem' })
export class LegacyProcessSimulationAgentRunItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessSimulationAgentRunItemID' })
  processSimulationAgentRunItemID: number;

  @Column({ type: 'bigint', name: 'ProcessSimulationAgentRunRef' })
  processSimulationAgentRunRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bigint', name: 'Start' })
  start: number;

  @Column({ type: 'bigint', name: 'End' })
  end: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'ParentKey', nullable: true })
  parentKey: string | null;

  @Column({ type: 'bigint', name: 'Duration' })
  duration: number;

  @Column({ type: 'character varying', name: 'Output', nullable: true })
  output: string | null;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}