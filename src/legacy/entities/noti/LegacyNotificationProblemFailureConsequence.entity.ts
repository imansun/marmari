import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NotificationProblemFailureConsequence' })
export class LegacyNotificationProblemFailureConsequence {
  @PrimaryColumn({ type: 'bigint', name: 'NotificationProblemFailureConsequenceID' })
  notificationProblemFailureConsequenceID: number;

  @Column({ type: 'bigint', name: 'NotificationProblemRef' })
  notificationProblemRef: number;

  @Column({ type: 'bigint', name: 'FailureConsequenceRef' })
  failureConsequenceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}