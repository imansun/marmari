import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationProblem' })
export class LegacyNotificationProblem {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationProblemID' })
  notificationProblemID: number;

  @Column({ type: 'bigint', name: 'NotificationRef' })
  notificationRef: number;

  @Column({ type: 'bigint', name: 'ProblemGroupRef' })
  problemGroupRef: number;

  @Column({ type: 'bigint', name: 'ProblemRef' })
  problemRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'FailureDetectionMethodTypeMethodRef', nullable: true })
  failureDetectionMethodTypeMethodRef: number | null;

  @Column({ type: 'bigint', name: 'FailureLikelihoodRef', nullable: true })
  failureLikelihoodRef: number | null;

}