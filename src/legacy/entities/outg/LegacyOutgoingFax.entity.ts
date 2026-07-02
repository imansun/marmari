import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutgoingFax' })
export class LegacyOutgoingFax {
  @PrimaryColumn({ type: 'bigint', name: 'OutgoingFaxID' })
  outgoingFaxID: number;

  @Column({ type: 'character varying', name: 'Recipient', nullable: true })
  recipient: string | null;

  @Column({ type: 'bigint', name: 'CorrespondentRef', nullable: true })
  correspondentRef: number | null;

  @Column({ type: 'integer', name: 'Priority', default: 2 })
  priority: number;

  @Column({ type: 'boolean', name: 'UseCoverPage', default: false })
  useCoverPage: boolean;

  @Column({ type: 'character varying', name: 'Note', nullable: true })
  note: string | null;

  @Column({ type: 'character varying', name: 'Subject' })
  subject: string;

  @Column({ type: 'integer', name: 'ScheduleType', default: 1 })
  scheduleType: number;

  @Column({ type: 'timestamp without time zone', name: 'ScheduleSpecificTime', nullable: true })
  scheduleSpecificTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'SendDate', nullable: true })
  sendDate: Date | null;

  @Column({ type: 'character varying', name: 'SubmissionID' })
  submissionID: string;

  @Column({ type: 'character varying', name: 'JobID' })
  jobID: string;

  @Column({ type: 'integer', name: 'JobStatus', default: 1 })
  jobStatus: number;

  @Column({ type: 'bigint', name: 'FaxDocumentRef' })
  faxDocumentRef: number;

  @Column({ type: 'bigint', name: 'FaxFolderRef' })
  faxFolderRef: number;

  @Column({ type: 'integer', name: 'RelatedEntityCode', nullable: true })
  relatedEntityCode: number | null;

  @Column({ type: 'bigint', name: 'RelatedRecordRef', nullable: true })
  relatedRecordRef: number | null;

  @Column({ type: 'character varying', name: 'RelatedEntityTitle' })
  relatedEntityTitle: string;

  @Column({ type: 'character varying', name: 'RelatedRecordNumber' })
  relatedRecordNumber: string;

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