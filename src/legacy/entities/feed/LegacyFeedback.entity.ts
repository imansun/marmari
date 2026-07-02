import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Feedback' })
export class LegacyFeedback {
  @PrimaryColumn({ type: 'bigint', name: 'FeedbackID' })
  feedbackID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'ExpectationRef', nullable: true })
  expectationRef: number | null;

  @Column({ type: 'bigint', name: 'FeedbackTypeRef' })
  feedbackTypeRef: number;

  @Column({ type: 'bigint', name: 'PerformanceAgreementRef', nullable: true })
  performanceAgreementRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'RegistrationDate' })
  registrationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}