import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityAppraisal' })
export class LegacyEntityAppraisal {
  @PrimaryColumn({ type: 'bigint', name: 'EntityAppraisalID' })
  entityAppraisalID: number;

  @Column({ type: 'integer', name: 'TrainingAppraisalType' })
  trainingAppraisalType: number;

  @Column({ type: 'character varying', name: 'AdvancedFilterExpression', nullable: true })
  advancedFilterExpression: string | null;

  @Column({ type: 'character varying', name: 'EntityResultName', nullable: true })
  entityResultName: string | null;

  @Column({ type: 'character varying', name: 'EntityName', nullable: true })
  entityName: string | null;

  @Column({ type: 'character varying', name: 'ComponentName', nullable: true })
  componentName: string | null;

  @Column({ type: 'character varying', name: 'ViewName', nullable: true })
  viewName: string | null;

  @Column({ type: 'character varying', name: 'Parameters', nullable: true })
  parameters: string | null;

  @Column({ type: 'character varying', name: 'InlineFilterExpression', nullable: true })
  inlineFilterExpression: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}