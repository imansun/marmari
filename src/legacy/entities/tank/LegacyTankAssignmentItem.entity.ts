import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TankAssignmentItem' })
export class LegacyTankAssignmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'TankAssignmentItemID' })
  tankAssignmentItemID: number;

  @Column({ type: 'bigint', name: 'TankRef' })
  tankRef: number;

  @Column({ type: 'integer', name: 'AssignmentItemType' })
  assignmentItemType: number;

  @Column({ type: 'bigint', name: 'AssignmentItemRef' })
  assignmentItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ActivationDate', nullable: true })
  activationDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}