import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FailureConsequence' })
export class LegacyFailureConsequence {
  @PrimaryColumn({ type: 'bigint', name: 'FailureConsequenceID' })
  failureConsequenceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'NatureOfFailureConsequence' })
  natureOfFailureConsequence: number;

  @Column({ type: 'integer', name: 'SeverityOfFailureConsequence' })
  severityOfFailureConsequence: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}