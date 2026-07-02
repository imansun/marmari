import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityLog' })
export class LegacyEntityLog {
  @PrimaryColumn({ type: 'bigint', name: 'EntityLogID' })
  entityLogID: number;

  @Column({ type: 'character varying', name: 'EntityKey' })
  entityKey: string;

  @Column({ type: 'uuid', name: 'WorkflowGuid' })
  workflowGuid: string;

}