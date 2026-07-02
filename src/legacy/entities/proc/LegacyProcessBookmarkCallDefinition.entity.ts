import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessBookmarkCallDefinition' })
export class LegacyProcessBookmarkCallDefinition {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessBookmarkCallDefinitionID' })
  processBookmarkCallDefinitionID: number;

  @Column({ type: 'bigint', name: 'ProcessDefinitionVersionRef' })
  processDefinitionVersionRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Parameters', nullable: true })
  parameters: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}