import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingGroupChangeRequestItem' })
export class LegacyWorkingGroupChangeRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingGroupChangeRequestItemID' })
  workingGroupChangeRequestItemID: number;

  @Column({ type: 'bigint', name: 'WorkingGroupChangeRequestRef' })
  workingGroupChangeRequestRef: number;

  @Column({ type: 'bigint', name: 'WorkingGroupRef' })
  workingGroupRef: number;

  @Column({ type: 'bigint', name: 'WorkingGroupEmployeeRef' })
  workingGroupEmployeeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}