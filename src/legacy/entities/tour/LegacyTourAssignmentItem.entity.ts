import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourAssignmentItem' })
export class LegacyTourAssignmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'TourAssignmentItemID' })
  tourAssignmentItemID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'AssignmentRef' })
  assignmentRef: number;

  @Column({ type: 'boolean', name: 'SentToHandheld', default: false })
  sentToHandheld: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}