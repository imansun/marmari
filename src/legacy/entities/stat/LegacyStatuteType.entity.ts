import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StatuteType' })
export class LegacyStatuteType {
  @PrimaryColumn({ type: 'bigint', name: 'StatuteTypeID' })
  statuteTypeID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'IssueTimeCode' })
  issueTimeCode: number;

  @Column({ type: 'integer', name: 'AfterIssueStatusCode' })
  afterIssueStatusCode: number;

  @Column({ type: 'integer', name: 'PostSelectionTypeCode' })
  postSelectionTypeCode: number;

  @Column({ type: 'character varying', name: 'DefaultDescription', nullable: true })
  defaultDescription: string | null;

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

  @Column({ type: 'integer', name: 'TempPostSelectionTypeCode', default: 2 })
  tempPostSelectionTypeCode: number;

  @Column({ type: 'integer', name: 'RelatedStatuteTypeCode', default: 1 })
  relatedStatuteTypeCode: number;

  @Column({ type: 'bigint', name: 'StartStatuteTypeRef', nullable: true })
  startStatuteTypeRef: number | null;

  @Column({ type: 'character varying', name: 'CorrectiveStatuteDisplayTitle', nullable: true })
  correctiveStatuteDisplayTitle: string | null;

}