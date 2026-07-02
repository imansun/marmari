import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessDefinitionCategory' })
export class LegacyProcessDefinitionCategory {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessDefinitionCategoryID' })
  processDefinitionCategoryID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'ParentCategoryRef', nullable: true })
  parentCategoryRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}