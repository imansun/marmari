import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessDefinition' })
export class LegacyProcessDefinition {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessDefinitionID' })
  processDefinitionID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'bigint', name: 'ParentCategoryRef', nullable: true })
  parentCategoryRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}