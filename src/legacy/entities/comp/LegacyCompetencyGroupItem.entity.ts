import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompetencyGroupItem' })
export class LegacyCompetencyGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'CompetencyGroupItemID' })
  competencyGroupItemID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'CompetencyGroupRef' })
  competencyGroupRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'CompetencyRef', nullable: true })
  competencyRef: number | null;

  @Column({ type: 'integer', name: 'NodeType' })
  nodeType: number;

  @Column({ type: 'character varying', name: 'Path' })
  path: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}