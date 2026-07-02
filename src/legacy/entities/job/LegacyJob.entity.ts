import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Job' })
export class LegacyJob {
  @PrimaryColumn({ type: 'bigint', name: 'JobID' })
  jobID: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'NextJobRef', nullable: true })
  nextJobRef: number | null;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'ClassCode' })
  classCode: number;

  @Column({ type: 'integer', name: 'JobRankNumber', nullable: true })
  jobRankNumber: number | null;

  @Column({ type: 'integer', name: 'GroupCode', nullable: true })
  groupCode: number | null;

  @Column({ type: 'boolean', name: 'Senior', nullable: true })
  senior: boolean | null;

  @Column({ type: 'character varying', name: 'InsuranceCode', nullable: true })
  insuranceCode: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'ExtraDescription', nullable: true })
  extraDescription: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}