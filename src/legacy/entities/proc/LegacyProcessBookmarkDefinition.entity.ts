import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessBookmarkDefinition' })
export class LegacyProcessBookmarkDefinition {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessBookmarkDefinitionID' })
  processBookmarkDefinitionID: number;

  @Column({ type: 'bigint', name: 'ProcessDefinitionVersionRef' })
  processDefinitionVersionRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Topic' })
  topic: string;

  @Column({ type: 'character varying', name: 'Subscriber' })
  subscriber: string;

  @Column({ type: 'character varying', name: 'Condition' })
  condition: string;

  @Column({ type: 'character varying', name: 'Parameters', nullable: true })
  parameters: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}