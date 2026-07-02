import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ControllingPolicy' })
export class LegacyControllingPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'ControllingPolicyID' })
  controllingPolicyID: number;

  @Column({ type: 'character varying', name: 'ConceptName' })
  conceptName: string;

  @Column({ type: 'character varying', name: 'ConceptTitle' })
  conceptTitle: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'PolicyType' })
  policyType: string;

  @Column({ type: 'character varying', name: 'PolicyTypeTitle' })
  policyTypeTitle: string;

  @Column({ type: 'text', name: 'PolicyTypeData' })
  policyTypeData: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'text', name: 'OutputData' })
  outputData: string;

  @Column({ type: 'character varying', name: 'CombinationFilterExpression' })
  combinationFilterExpression: string;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}