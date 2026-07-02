import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CourseRequest' })
export class LegacyCourseRequest {
  @PrimaryColumn({ type: 'bigint', name: 'CourseRequestID' })
  courseRequestID: number;

  @Column({ type: 'character varying', name: 'RequestNumber' })
  requestNumber: string;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate' })
  requestDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpiryDate', nullable: true })
  expiryDate: Date | null;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'bigint', name: 'CourseRef', nullable: true })
  courseRef: number | null;

  @Column({ type: 'integer', name: 'PriorityCode', nullable: true })
  priorityCode: number | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'timestamp without time zone', name: 'SuggestedStartDate', nullable: true })
  suggestedStartDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'ConfirmationNote', nullable: true })
  confirmationNote: string | null;

  @Column({ type: 'bigint', name: 'ConfirmerRef', nullable: true })
  confirmerRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

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

  @Column({ type: 'character varying', name: 'SuggestedTrainer', nullable: true })
  suggestedTrainer: string | null;

  @Column({ type: 'character varying', name: 'SuggestedInstitute', nullable: true })
  suggestedInstitute: string | null;

}