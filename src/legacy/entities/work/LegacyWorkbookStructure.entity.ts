import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkbookStructure' })
export class LegacyWorkbookStructure {
  @PrimaryColumn({ type: 'bigint', name: 'WorkbookStructureID' })
  workbookStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'AppraisalFormTemplateRef' })
  appraisalFormTemplateRef: number;

  @Column({ type: 'integer', name: 'WorkbookTypeCode' })
  workbookTypeCode: number;

  @Column({ type: 'boolean', name: 'CompareWithPrevious' })
  compareWithPrevious: boolean;

  @Column({ type: 'real', name: 'ComparePreviousCount', nullable: true })
  comparePreviousCount: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}